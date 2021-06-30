import { IEmailProvider, IMessage } from "../IEmailProvider";
import nodemailer from 'nodemailer'
import Mail from "nodemailer/lib/mailer";
export class MailTrapMailProvider implements IEmailProvider{
  
  private transporter: Mail
  constructor(){
    this.transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "1b814b57a6eeb8",
        pass: "817517b2d226ef"
      }
    })

  }
  async sendEmail(message: IMessage): Promise<void> {
    await this.transporter.sendMail({
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
    })
  }

}