const { ApplicationCommandOptionType, PermissionFlagsBits } = require('discord.js');

module.exports = {
  deleted: false,
  name: 'ban',
  description: 'Bans a member!!!',
  options: [
    {
      name: 'target-user',
      description: 'The user to ban.',
      required: true,
      type: ApplicationCommandOptionType.Mentionable,
    },
    {
      name: 'reason',
      description: 'The reason for banning.',
      type: ApplicationCommandOptionType.String,
    },
  ],
  permissionsRequired: [PermissionFlagsBits.BanMembers],
  botPermissions: [PermissionFlagsBits.BanMembers],

  callback: async (client, interaction) => {
    // Check if the user has the necessary permissions
    if (!interaction.member.permissions.has(PermissionFlagsBits.BanMembers)) {
      return interaction.reply({
        content: 'You do not have permission to use this command.',
        ephemeral: true,
      });
    }

    // Extract the target user from the interaction options
    const targetUser = interaction.options.getMentionable('target-user');

    // Check if a reason was provided
    const reason = interaction.options.getString('reason') || 'No reason specified';

    try {
      // Ban the user
      await interaction.guild.members.ban(targetUser, { reason });

      // Reply to the interaction
      interaction.reply(`Successfully banned ${targetUser.tag}! Reason: ${reason}`);
    } catch (error) {
      console.error(`Error banning user: ${error.message}`);
      interaction.reply('There was an error banning the user.');
    }
  },
};
