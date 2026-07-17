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
exports.__resetCacheForTesting = exports.getCurrencyLocale = exports.getCurrencyCode = exports.getCurrencySymbol = exports.getSupportedCurrencies = exports.formatCurrency = exports.updateCurrency = exports.getCurrency = exports.SUPPORTED_CURRENCIES = void 0;
const Setting_1 = __importDefault(require("../models/Setting"));
const AppError_1 = __importDefault(require("../errors/AppError"));
// Moedas suportadas pela Stripe (135+ moedas)
exports.SUPPORTED_CURRENCIES = {
    USD: { code: 'USD', symbol: '$', locale: 'en-US' },
    EUR: { code: 'EUR', symbol: '€', locale: 'de-DE' },
    GBP: { code: 'GBP', symbol: '£', locale: 'en-GB' },
    BRL: { code: 'BRL', symbol: 'R$', locale: 'pt-BR' },
    JPY: { code: 'JPY', symbol: '¥', locale: 'ja-JP' },
    CNY: { code: 'CNY', symbol: '¥', locale: 'zh-CN' },
    ARS: { code: 'ARS', symbol: '$', locale: 'es-AR' },
    AUD: { code: 'AUD', symbol: 'A$', locale: 'en-AU' },
    CAD: { code: 'CAD', symbol: 'C$', locale: 'en-CA' },
    CHF: { code: 'CHF', symbol: 'CHF', locale: 'de-CH' },
    CLP: { code: 'CLP', symbol: '$', locale: 'es-CL' },
    COP: { code: 'COP', symbol: '$', locale: 'es-CO' },
    CZK: { code: 'CZK', symbol: 'Kč', locale: 'cs-CZ' },
    DKK: { code: 'DKK', symbol: 'kr', locale: 'da-DK' },
    EGP: { code: 'EGP', symbol: 'E£', locale: 'ar-EG' },
    HKD: { code: 'HKD', symbol: 'HK$', locale: 'zh-HK' },
    HUF: { code: 'HUF', symbol: 'Ft', locale: 'hu-HU' },
    IDR: { code: 'IDR', symbol: 'Rp', locale: 'id-ID' },
    ILS: { code: 'ILS', symbol: '₪', locale: 'he-IL' },
    INR: { code: 'INR', symbol: '₹', locale: 'hi-IN' },
    ISK: { code: 'ISK', symbol: 'kr', locale: 'is-IS' },
    KRW: { code: 'KRW', symbol: '₩', locale: 'ko-KR' },
    KWD: { code: 'KWD', symbol: 'د.ك', locale: 'ar-KW' },
    MXN: { code: 'MXN', symbol: '$', locale: 'es-MX' },
    MYR: { code: 'MYR', symbol: 'RM', locale: 'ms-MY' },
    NGN: { code: 'NGN', symbol: '₦', locale: 'en-NG' },
    NOK: { code: 'NOK', symbol: 'kr', locale: 'nb-NO' },
    NZD: { code: 'NZD', symbol: 'NZ$', locale: 'en-NZ' },
    PEN: { code: 'PEN', symbol: 'S/', locale: 'es-PE' },
    PHP: { code: 'PHP', symbol: '₱', locale: 'fil-PH' },
    PKR: { code: 'PKR', symbol: '₨', locale: 'ur-PK' },
    PLN: { code: 'PLN', symbol: 'zł', locale: 'pl-PL' },
    PYG: { code: 'PYG', symbol: '₲', locale: 'es-PY' },
    QAR: { code: 'QAR', symbol: 'ر.ق', locale: 'ar-QA' },
    RON: { code: 'RON', symbol: 'lei', locale: 'ro-RO' },
    RUB: { code: 'RUB', symbol: '₽', locale: 'ru-RU' },
    SAR: { code: 'SAR', symbol: 'ر.س', locale: 'ar-SA' },
    SEK: { code: 'SEK', symbol: 'kr', locale: 'sv-SE' },
    SGD: { code: 'SGD', symbol: 'S$', locale: 'en-SG' },
    THB: { code: 'THB', symbol: '฿', locale: 'th-TH' },
    TRY: { code: 'TRY', symbol: '₺', locale: 'tr-TR' },
    TWD: { code: 'TWD', symbol: 'NT$', locale: 'zh-TW' },
    UAH: { code: 'UAH', symbol: '₴', locale: 'uk-UA' },
    UYU: { code: 'UYU', symbol: '$U', locale: 'es-UY' },
    VND: { code: 'VND', symbol: '₫', locale: 'vi-VN' },
    ZAR: { code: 'ZAR', symbol: 'R', locale: 'en-ZA' },
    AED: { code: 'AED', symbol: 'د.إ', locale: 'ar-AE' },
    AFN: { code: 'AFN', symbol: '؋', locale: 'fa-AF' },
    ALL: { code: 'ALL', symbol: 'L', locale: 'sq-AL' },
    AMD: { code: 'AMD', symbol: '֏', locale: 'hy-AM' },
    ANG: { code: 'ANG', symbol: 'ƒ', locale: 'nl-AN' },
    AOA: { code: 'AOA', symbol: 'Kz', locale: 'pt-AO' },
    AWG: { code: 'AWG', symbol: 'ƒ', locale: 'nl-AW' },
    AZN: { code: 'AZN', symbol: '₼', locale: 'az-AZ' },
    BAM: { code: 'BAM', symbol: 'KM', locale: 'bs-BA' },
    BBD: { code: 'BBD', symbol: '$', locale: 'en-BB' },
    BDT: { code: 'BDT', symbol: '৳', locale: 'bn-BD' },
    BGN: { code: 'BGN', symbol: 'лв', locale: 'bg-BG' },
    BHD: { code: 'BHD', symbol: '.د.ب', locale: 'ar-BH' },
    BIF: { code: 'BIF', symbol: 'FBu', locale: 'fr-BI' },
    BMD: { code: 'BMD', symbol: '$', locale: 'en-BM' },
    BND: { code: 'BND', symbol: '$', locale: 'ms-BN' },
    BOB: { code: 'BOB', symbol: 'Bs.', locale: 'es-BO' },
    BSD: { code: 'BSD', symbol: '$', locale: 'en-BS' },
    BWP: { code: 'BWP', symbol: 'P', locale: 'en-BW' },
    BYN: { code: 'BYN', symbol: 'Br', locale: 'be-BY' },
    BZD: { code: 'BZD', symbol: '$', locale: 'en-BZ' },
    CDF: { code: 'CDF', symbol: 'FC', locale: 'fr-CD' },
    CRC: { code: 'CRC', symbol: '₡', locale: 'es-CR' },
    CVE: { code: 'CVE', symbol: '$', locale: 'pt-CV' },
    DJF: { code: 'DJF', symbol: 'Fdj', locale: 'fr-DJ' },
    DOP: { code: 'DOP', symbol: 'RD$', locale: 'es-DO' },
    DZD: { code: 'DZD', symbol: 'د.ج', locale: 'ar-DZ' },
    ETB: { code: 'ETB', symbol: 'Br', locale: 'am-ET' },
    FJD: { code: 'FJD', symbol: '$', locale: 'en-FJ' },
    FKP: { code: 'FKP', symbol: '£', locale: 'en-FK' },
    GEL: { code: 'GEL', symbol: '₾', locale: 'ka-GE' },
    GHS: { code: 'GHS', symbol: '₵', locale: 'en-GH' },
    GIP: { code: 'GIP', symbol: '£', locale: 'en-GI' },
    GMD: { code: 'GMD', symbol: 'D', locale: 'en-GM' },
    GNF: { code: 'GNF', symbol: 'FG', locale: 'fr-GN' },
    GTQ: { code: 'GTQ', symbol: 'Q', locale: 'es-GT' },
    GYD: { code: 'GYD', symbol: '$', locale: 'en-GY' },
    HNL: { code: 'HNL', symbol: 'L', locale: 'es-HN' },
    HTG: { code: 'HTG', symbol: 'G', locale: 'fr-HT' },
    JMD: { code: 'JMD', symbol: '$', locale: 'en-JM' },
    JOD: { code: 'JOD', symbol: 'د.ا', locale: 'ar-JO' },
    KES: { code: 'KES', symbol: 'KSh', locale: 'sw-KE' },
    KGS: { code: 'KGS', symbol: 'сом', locale: 'ky-KG' },
    KHR: { code: 'KHR', symbol: '៛', locale: 'km-KH' },
    KMF: { code: 'KMF', symbol: 'CF', locale: 'fr-KM' },
    KYD: { code: 'KYD', symbol: '$', locale: 'en-KY' },
    KZT: { code: 'KZT', symbol: '₸', locale: 'kk-KZ' },
    LAK: { code: 'LAK', symbol: '₭', locale: 'lo-LA' },
    LBP: { code: 'LBP', symbol: 'ل.ل', locale: 'ar-LB' },
    LKR: { code: 'LKR', symbol: 'Rs', locale: 'si-LK' },
    LRD: { code: 'LRD', symbol: '$', locale: 'en-LR' },
    LSL: { code: 'LSL', symbol: 'L', locale: 'en-LS' },
    MAD: { code: 'MAD', symbol: 'د.م.', locale: 'ar-MA' },
    MDL: { code: 'MDL', symbol: 'L', locale: 'ro-MD' },
    MGA: { code: 'MGA', symbol: 'Ar', locale: 'mg-MG' },
    MKD: { code: 'MKD', symbol: 'ден', locale: 'mk-MK' },
    MMK: { code: 'MMK', symbol: 'K', locale: 'my-MM' },
    MNT: { code: 'MNT', symbol: '₮', locale: 'mn-MN' },
    MOP: { code: 'MOP', symbol: 'MOP$', locale: 'zh-MO' },
    MRU: { code: 'MRU', symbol: 'UM', locale: 'ar-MR' },
    MUR: { code: 'MUR', symbol: '₨', locale: 'en-MU' },
    MVR: { code: 'MVR', symbol: 'Rf', locale: 'dv-MV' },
    MWK: { code: 'MWK', symbol: 'MK', locale: 'en-MW' },
    MZN: { code: 'MZN', symbol: 'MT', locale: 'pt-MZ' },
    NAD: { code: 'NAD', symbol: '$', locale: 'en-NA' },
    NIO: { code: 'NIO', symbol: 'C$', locale: 'es-NI' },
    NPR: { code: 'NPR', symbol: '₨', locale: 'ne-NP' },
    OMR: { code: 'OMR', symbol: 'ر.ع.', locale: 'ar-OM' },
    PAB: { code: 'PAB', symbol: 'B/.', locale: 'es-PA' },
    PGK: { code: 'PGK', symbol: 'K', locale: 'en-PG' },
    RSD: { code: 'RSD', symbol: 'дин.', locale: 'sr-RS' },
    RWF: { code: 'RWF', symbol: 'RF', locale: 'rw-RW' },
    SBD: { code: 'SBD', symbol: '$', locale: 'en-SB' },
    SCR: { code: 'SCR', symbol: '₨', locale: 'en-SC' },
    SHP: { code: 'SHP', symbol: '£', locale: 'en-SH' },
    SOS: { code: 'SOS', symbol: 'Sh', locale: 'so-SO' },
    SRD: { code: 'SRD', symbol: '$', locale: 'nl-SR' },
    STN: { code: 'STN', symbol: 'Db', locale: 'pt-ST' },
    SZL: { code: 'SZL', symbol: 'E', locale: 'en-SZ' },
    TJS: { code: 'TJS', symbol: 'SM', locale: 'tg-TJ' },
    TND: { code: 'TND', symbol: 'د.ت', locale: 'ar-TN' },
    TOP: { code: 'TOP', symbol: 'T$', locale: 'to-TO' },
    TTD: { code: 'TTD', symbol: '$', locale: 'en-TT' },
    TZS: { code: 'TZS', symbol: 'TSh', locale: 'sw-TZ' },
    UGX: { code: 'UGX', symbol: 'USh', locale: 'sw-UG' },
    UZS: { code: 'UZS', symbol: "so'm", locale: 'uz-UZ' },
    VES: { code: 'VES', symbol: 'Bs.S', locale: 'es-VE' },
    VUV: { code: 'VUV', symbol: 'VT', locale: 'en-VU' },
    WST: { code: 'WST', symbol: 'T', locale: 'en-WS' },
    XAF: { code: 'XAF', symbol: 'FCFA', locale: 'fr-CM' },
    XCD: { code: 'XCD', symbol: '$', locale: 'en-AG' },
    XOF: { code: 'XOF', symbol: 'CFA', locale: 'fr-SN' },
    XPF: { code: 'XPF', symbol: '₣', locale: 'fr-PF' },
    YER: { code: 'YER', symbol: '﷼', locale: 'ar-YE' },
    ZMW: { code: 'ZMW', symbol: 'ZK', locale: 'en-ZM' }
};
// Cache para evitar múltiplas consultas ao banco
let currencyCache = null;
let cacheExpiry = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutos
/**
 * Obtém a configuração de moeda do sistema
 * @returns CurrencyData - Dados da moeda configurada
 */
const getCurrency = async () => {
    // Verificar cache válido
    if (currencyCache && Date.now() < cacheExpiry) {
        return currencyCache;
    }
    try {
        const setting = await Setting_1.default.findOne({
            where: {
                key: 'systemCurrency'
            }
        });
        if (setting && setting.value) {
            try {
                const currencyData = JSON.parse(setting.value);
                // Validar se a moeda ainda é suportada
                if (!exports.SUPPORTED_CURRENCIES[currencyData.code]) {
                    return null;
                }
                // Atualizar cache
                currencyCache = currencyData;
                cacheExpiry = Date.now() + CACHE_DURATION;
                return currencyData;
            }
            catch (parseError) {
                return null;
            }
        }
        // Sem configuração no banco - frontend decide pelo idioma
        return null;
    }
    catch (error) {
        console.error('Erro ao buscar configuração de moeda:', error);
        return null;
    }
};
exports.getCurrency = getCurrency;
/**
 * Atualiza a configuração de moeda do sistema (apenas super-admin)
 * @param currencyData - Dados da nova moeda
 * @param userId - ID do usuário (deve ser super-admin)
 * @returns Setting - Configuração atualizada
 */
const updateCurrency = async ({ currencyData, userId }) => {
    // Importar User aqui para evitar dependência circular
    const User = (await Promise.resolve().then(() => __importStar(require("../models/User")))).default;
    // Verificar se usuário é super-admin
    const user = await User.findByPk(userId);
    if (!user || !user.super) {
        throw new AppError_1.default("ERR_NO_PERMISSION_CURRENCY", 403);
    }
    // Validar se a moeda é suportada
    if (!exports.SUPPORTED_CURRENCIES[currencyData.code]) {
        throw new AppError_1.default("ERR_UNSUPPORTED_CURRENCY", 400);
    }
    // Obter dados completos da moeda suportada
    const validCurrencyData = exports.SUPPORTED_CURRENCIES[currencyData.code];
    const [setting] = await Setting_1.default.findOrCreate({
        where: {
            key: 'systemCurrency'
        },
        defaults: {
            key: 'systemCurrency',
            value: JSON.stringify(validCurrencyData),
            companyId: null // Configuração global
        }
    });
    // Atualizar valor se já existia
    await setting.update({
        value: JSON.stringify(validCurrencyData)
    });
    // Limpar cache
    currencyCache = null;
    cacheExpiry = 0;
    return setting;
};
exports.updateCurrency = updateCurrency;
/**
 * Formata um valor monetário com a moeda configurada
 * @param value - Valor numérico a ser formatado
 * @param currency - Dados da moeda (opcional, usa configuração atual se não fornecida)
 * @returns string - Valor formatado
 */
const formatCurrency = async (value, currency) => {
    const currencyData = currency || await (0, exports.getCurrency)() || exports.SUPPORTED_CURRENCIES.USD;
    try {
        return new Intl.NumberFormat(currencyData.locale, {
            style: 'currency',
            currency: currencyData.code,
            minimumFractionDigits: 2
        }).format(value);
    }
    catch (error) {
        console.warn('Erro na formatação da moeda, usando fallback:', error);
        // Fallback manual se Intl.NumberFormat falhar
        return `${currencyData.symbol} ${value.toFixed(2)}`;
    }
};
exports.formatCurrency = formatCurrency;
/**
 * Retorna lista de moedas suportadas pelo sistema
 * @returns Array<CurrencyData> - Lista de moedas disponíveis
 */
const getSupportedCurrencies = () => {
    return Object.values(exports.SUPPORTED_CURRENCIES);
};
exports.getSupportedCurrencies = getSupportedCurrencies;
/**
 * Obtém apenas o símbolo da moeda configurada
 * @returns string - Símbolo da moeda (ex: "R$", "$", "€")
 */
const getCurrencySymbol = async () => {
    const currency = await (0, exports.getCurrency)() || exports.SUPPORTED_CURRENCIES.USD;
    return currency.symbol;
};
exports.getCurrencySymbol = getCurrencySymbol;
/**
 * Obtém apenas o código da moeda configurada
 * @returns string - Código da moeda (ex: "BRL", "USD", "EUR")
 */
const getCurrencyCode = async () => {
    const currency = await (0, exports.getCurrency)() || exports.SUPPORTED_CURRENCIES.USD;
    return currency.code;
};
exports.getCurrencyCode = getCurrencyCode;
/**
 * Obtém apenas o locale da moeda configurada
 * @returns string - Locale da moeda (ex: "pt-BR", "en-US", "de-DE")
 */
const getCurrencyLocale = async () => {
    const currency = await (0, exports.getCurrency)() || exports.SUPPORTED_CURRENCIES.USD;
    return currency.locale;
};
exports.getCurrencyLocale = getCurrencyLocale;
/**
 * APENAS PARA TESTES - Reset do cache interno
 * Esta função deve ser usada apenas em ambiente de teste
 */
const __resetCacheForTesting = () => {
    if (process.env.NODE_ENV !== 'test') {
        console.warn('__resetCacheForTesting só deve ser usado em testes');
        return;
    }
    currencyCache = null;
    cacheExpiry = 0;
};
exports.__resetCacheForTesting = __resetCacheForTesting;
exports.default = {
    getCurrency: exports.getCurrency,
    updateCurrency: exports.updateCurrency,
    formatCurrency: exports.formatCurrency,
    getSupportedCurrencies: exports.getSupportedCurrencies,
    getCurrencySymbol: exports.getCurrencySymbol,
    getCurrencyCode: exports.getCurrencyCode,
    getCurrencyLocale: exports.getCurrencyLocale,
    SUPPORTED_CURRENCIES: exports.SUPPORTED_CURRENCIES,
    __resetCacheForTesting: exports.__resetCacheForTesting
};
