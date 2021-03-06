import { MessageType, Mimetype } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'support',
            aliases: ['support'],
            description: 'Gets the support group links',
            category: 'general',
            usage: `${client.config.prefix}Support`,
            baseXp: 10
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        (await this.client.sendMessage(
        M.sender.jid,
        `    â¥ï¸ð ð ðºð®ððð²ð¿'ð ð´ð¿ð¼ðð½ ð¹ð¶ð»ð¸ðâ¥ï¸
        
       *â¥ï¸ð¼ððððð âðð¤ððð :â¥ï¸* *https://chat.whatsapp.com/BQ0vrEPOfb20UZ6s9Guhfj:*
        *â¥ï¸ð¹ð ð¥ ðð¡ðð£ðð¥ðð ðâ¥ï¸* INVITE LINKð:*https://chat.whatsapp.com/HtoSplfUFc87lJ1Xqh14WP*`,
           MessageType.text
        ))
        const n = [
            'https://telegra.ph/file/90c8d596818e948cc6a82.mp4'
        ]
        let beckylynch = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url:beckylynch }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `Sent you the support Link in personal message \n` }
        )

        }
}
