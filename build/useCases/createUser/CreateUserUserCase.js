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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
const User_1 = require("../../entities/User");
class CreateUserUseCase {
    constructor(usersRepository, mailProvider) {
        this.usersRepository = usersRepository;
        this.mailProvider = mailProvider;
    }
    execute(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const userAlreadyExists = yield this.usersRepository.findByEmail(data.email);
            if (userAlreadyExists) {
                throw new Error("User Altready existis");
            }
            const user = new User_1.User(data);
            yield this.usersRepository.save(user);
            this.mailProvider.sendEmail({
                to: {
                    name: data.name,
                    email: data.email
                },
                from: {
                    name: "Machize",
                    email: "marciozebedeu@gmail.com"
                },
                subject: "seja bem vindo a MACHIZE",
                body: "<P> Você ja pode fazer logi à lantaforma<P>"
            });
        });
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
