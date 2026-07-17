"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizePhoneNumber = void 0;
const libphonenumber_js_1 = require("libphonenumber-js");
const logger_1 = __importDefault(require("./logger"));
/**
 * Normaliza um número de telefone para o formato E.164 padrão
 *
 * @param rawNumber - Número de telefone em qualquer formato
 * @param defaultCountry - Código do país padrão (default: 'BR')
 * @returns Número normalizado em E.164 (ex: +5511999999999) ou null se inválido
 *
 * @example
 * normalizePhoneNumber('(11) 99999-9999') // '+5511999999999'
 * normalizePhoneNumber('11 999999999') // '+5511999999999'
 * normalizePhoneNumber('+55 11 99999-9999') // '+5511999999999'
 */
const normalizePhoneNumber = (rawNumber, defaultCountry = 'BR') => {
    if (!rawNumber)
        return null;
    try {
        // Remover espaços e caracteres especiais, mantendo apenas dígitos e +
        let cleaned = rawNumber.replace(/\s+/g, '').replace(/[^\d+]/g, '');
        // Se não começa com +, adicionar
        if (!cleaned.startsWith('+')) {
            // Caso especial: números BR sem código de país
            // Se tiver 10-11 dígitos, assumir Brasil (+55)
            if (/^\d{10,11}$/.test(cleaned)) {
                cleaned = '+55' + cleaned;
            }
            else {
                cleaned = '+' + cleaned;
            }
        }
        // Validar com libphonenumber-js
        if ((0, libphonenumber_js_1.isValidPhoneNumber)(cleaned, defaultCountry)) {
            const parsed = (0, libphonenumber_js_1.parsePhoneNumber)(cleaned, defaultCountry);
            return parsed.number; // Retorna E.164 puro (ex: +5511999999999)
        }
        // Fallback: Tentar sem código de país
        const withoutPlus = cleaned.replace(/^\+/, '');
        if ((0, libphonenumber_js_1.isValidPhoneNumber)('+55' + withoutPlus, 'BR')) {
            const parsed = (0, libphonenumber_js_1.parsePhoneNumber)('+55' + withoutPlus, 'BR');
            return parsed.number;
        }
        logger_1.default.warn({ rawNumber, cleaned }, 'Failed to normalize phone number');
        return null;
    }
    catch (error) {
        logger_1.default.error({ error, rawNumber }, 'Error normalizing phone number');
        return null;
    }
};
exports.normalizePhoneNumber = normalizePhoneNumber;
