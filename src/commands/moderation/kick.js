const { Client, GatewayIntentBits } = require('discord.js');
const {
  ApplicationCommandOptionType,
  PermissionFlagsBits,
} = require('discord.js');

// Rest of your code...

  module.exports = {
    deleted: true,
    name: 'kick',
    description: 'kick a member!!!',
    // devOnly: Boolean,
    // testOnly: Boolean,
    options: [
      {
        name: 'target-user',
        description: 'The user to kick.',
        required: true,
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
  