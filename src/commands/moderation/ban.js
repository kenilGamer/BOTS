const { Client, GatewayIntentBits } = require('discord.js');
const {
  ApplicationCommandOptionType,
  PermissionFlagsBits,
} = require('discord.js');

// Rest of your code...
 require('discord.js');

module.exports = {
  deleted: false,
  name: 'ban',
  description: 'Bans a member!!!',
  // devOnly: Boolean,
  // testOnly: Boolean,
  options: [
    {
      name: 'target-user',
      description: 'The user to ban.',
      // required: true, 
      type: ApplicationCommandOptionType.Mentionable,
    },
    {
      name: 'reason',
      description: 'The reason for banning.',
      type: ApplicationCommandOptionType.String,
    },
  ],
  permissionsRequired: [PermissionFlagsBits.Administrator],
  botPermissions: [PermissionFlagsBits.Administrator],

  callback: (client, interaction) => {
    interaction.reply('ban..');
  },
};
