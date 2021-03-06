import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'savage',
            description: 'Displays info about savage.',
            category: 'general',
            usage: `${client.config.prefix}savage`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            'https://telegra.ph/file/8eed1568a71b3b55dac05.jpg','https://telegra.ph/file/6777fe4846a3b0af4decd.jpg'
        ]
        let rin = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: rin }, MessageType.image, {quoted:M.WAMessage,
            mimetype: Mimetype.jpeg,
            caption: `đ­đ”đČđčđčđŒ!đI'm Lord Savage đïž a learner/student & an upcoming developer in the future.
            
đđđđđ©đšđŒđ„đ„;
Wa.me/+263716928420
Wa.me/+263716564623

đźđđŁđšđ©đđđ§đđą;
https://instagram.com/_smokey_vines_
https://instagram.com/amapiano_state

đđżđđšđđ€đ§đ;
ïœđąđđđđđ đČđđđïœ 

âȘŒđČđŸđŸ đđșđ đ` }
        )
    }
}
