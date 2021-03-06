import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
  constructor(client: WAClient, handler: MessageHandler) {
    super(client, handler, {
      command: "mods",
      description: "Displays the Moderators' contact info",
      category: "general",
      usage: `${client.config.prefix}mods`,
      aliases: ["moderators", "mod", "owner"],
    });
  }

  run = async (M: ISimplifiedMessage): Promise<void> => {
    if (!this.client.config.mods || !this.client.config.mods[0])
      return void M.reply("*[UNMODERATED]*");
    const filteredMap = this.client.config.mods
      .map((mod) => this.client.getContact(mod))
      .filter((user) => user);
    let text = "π β ββββ ββ’ *MY BOSS* β’β ββββ β* π\n\n";
    filteredMap.forEach(
      (user, index) =>
        (text += `#${index + 1}\nπ *Username: ${
          user.notify || user.vname || user.name || "null"
        }*\nπ¦ *Contact: https://wa.me/+${user?.jid?.split("@")[0]}*\n\n`)
    );
    text += `\n  ββββΒ°ββ’Β°:π€ *Lord Savage Edition* π€:Β°β’βΒ°ββββ

Β©Elaina 2022`;
    return void M.reply(text);
  };
}
