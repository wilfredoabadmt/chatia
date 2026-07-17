"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWebhook = exports.webhook = exports.createSubscription = void 0;
const Yup = __importStar(require("yup"));
const dotenv = __importStar(require("dotenv"));
const AppError_1 = __importDefault(require("../errors/AppError"));
const Company_1 = __importDefault(require("../models/Company"));
const Invoices_1 = __importDefault(require("../models/Invoices"));
const socket_1 = require("../libs/socket");
const CurrencyService_1 = require("../services/CurrencyService");
const axios_1 = __importDefault(require("axios"));
dotenv.config();
// Configure Mercado Pago
const accessToken = process.env.MP_ACCESS_TOKEN;
// Endpoint para criar uma nova assinatura
const createSubscription = async (req, res) => {
    const { companyId } = req.user;
    // Schema de validação
    const schema = Yup.object().shape({
        price: Yup.string().required(),
        users: Yup.string().required(),
        connections: Yup.string().required()
    });
    // Validação do payload
    if (!(await schema.isValid(req.body))) {
        throw new AppError_1.default("Validation fails", 400);
    }
    const { price, invoiceId } = req.body;
    const unitPrice = parseFloat(price);
    // Obter moeda configurada dinamicamente
    const currencyCode = await (0, CurrencyService_1.getCurrencyCode)();
    // Validação: Mercado Pago suporta apenas moedas latino-americanas
    const mercadoPagoSupportedCurrencies = ['ARS', 'BRL', 'CLP', 'MXN', 'PEN', 'COP', 'EUR'];
    if (!mercadoPagoSupportedCurrencies.includes(currencyCode)) {
        throw new AppError_1.default(`Moeda ${currencyCode} não é suportada pelo gateway Mercado Pago. Moedas suportadas: ${mercadoPagoSupportedCurrencies.join(', ')}`, 400);
    }
    // Dados para criar a preferência de pagamento
    const data = {
        back_urls: {
            success: `${process.env.FRONTEND_URL}/financeiro`,
            failure: `${process.env.FRONTEND_URL}/financeiro`
        },
        auto_return: "approved",
        items: [
            {
                title: `#Fatura:${invoiceId}`,
                quantity: 1,
                currency_id: currencyCode,
                unit_price: unitPrice
            }
        ]
    };
    try {
        // Chamada para criar a preferência no Mercado Pago
        const response = await axios_1.default.post('https://api.mercadopago.com/checkout/preferences', data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}` // Usando accessToken aqui
            }
        });
        const urlMcPg = response.data.init_point;
        return res.json({ urlMcPg });
    }
    catch (error) {
        console.error(error);
        throw new AppError_1.default("Problema encontrado, entre em contato com o suporte!", 400);
    }
};
exports.createSubscription = createSubscription;
// Webhook do Mercado Pago
const webhook = async (req, res) => {
    const { evento, data } = req.body;
    // Resposta para testes de webhook
    if (evento === "teste_webhook") {
        return res.json({ ok: true });
    }
    if (data && data.id) {
        try {
            const paymentResponse = await axios_1.default.get(`https://api.mercadopago.com/v1/payments/${data.id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}` // Usando accessToken aqui
                }
            });
            const paymentDetails = paymentResponse.data;
            // Processar pagamento aprovado
            if (paymentDetails.status === "approved") {
                const invoiceID = paymentDetails.additional_info.items[0].title.replace("#Fatura:", "");
                const invoice = await Invoices_1.default.findByPk(invoiceID);
                if (invoice) {
                    const companyId = invoice.companyId;
                    const company = await Company_1.default.findByPk(companyId);
                    if (company) {
                        const expiresAt = new Date(company.dueDate);
                        expiresAt.setDate(expiresAt.getDate() + 30);
                        const newDueDate = expiresAt.toISOString().split("T")[0];
                        await company.update({ dueDate: newDueDate });
                        await invoice.update({ status: "paid" });
                        const io = (0, socket_1.getIO)();
                        const companyUpdate = await Company_1.default.findOne({ where: { id: companyId } });
                        io.emit(`company-${companyId}-payment`, {
                            action: paymentDetails.status,
                            company: companyUpdate
                        });
                    }
                }
            }
        }
        catch (error) {
            console.error(error);
            throw new AppError_1.default("Erro ao processar pagamento.", 400);
        }
    }
    return res.json({ ok: true });
};
exports.webhook = webhook;
function createWebhook(arg0, createWebhook) {
    throw new Error("Function not implemented.");
}
exports.createWebhook = createWebhook;
