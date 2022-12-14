import { Client, EmbedBuilder, GuildMember } from "discord.js";
import { Events } from "../../util/events";

export const restricted = false;
export const name = "Welcomer"
export const eventType = Events.GuildMemberAdd;

export function callback(member: GuildMember, client: Client) {
    const embed = new EmbedBuilder().setColor(0x4ed9f0).setTitle(`Welcome ${member.displayName}`)
                                    .setThumbnail(member.displayAvatarURL())
                                    .setDescription("Welcome to the Phantom-IM Community")
                                    .setTimestamp()
                                    .setFooter({ text: "Made by Lu (lnkexploit)", iconURL: "https://cdn.discordapp.com/avatars/277524510360731649/0fc56a48527ba90dfb030506a00c2b9b.png?size=4096" });
          
    let channel = member.guild.channels.cache.get("1050488647385894984");

    if (channel?.isTextBased()) {
        channel?.send({embeds: [embed]});
    }
}