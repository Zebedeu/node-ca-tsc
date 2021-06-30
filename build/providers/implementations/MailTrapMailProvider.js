"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailTrapMailProvider = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
class MailTrapMailProvider {
    constructor() {
        this.transporter = nodemailer_1.default.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "1b814b57a6eeb8",
                pass: "817517b2d226ef"
            }
        });
    }
    sendEmail(message) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.transporter.sendMail({
                to: {
                    name: message.to.name,
                    address: message.to.email
                },
                from: {
                    name: message.from.name,
                    address: message.from.email
                },
                subject: message.subject,
                html: message.body,
            });
        });
    }
}
exports.MailTrapMailProvider = MailTrapMailProvider;
