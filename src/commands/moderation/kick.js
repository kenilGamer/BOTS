const { ApplicationCommandOptionType, PermissionFlagsBits } = require('discord.js');

module.exports = {
  deleted: false,
  name: 'kick',
  description: 'Kick a member!!!',
  options: [
    {
      name: 'target-user',
      description: 'The user to kick.',
      required: true,
      type: ApplicationCommandOptionType.Mentionable,
    },
    {
      name: 'reason',
      description: 'The reason for kicking.',
      type: ApplicationCommandOptionType.String,
    },
  ],
  permissionsRequired: [PermissionFlagsBits.KickMembers],
  botPermissions: [PermissionFlagsBits.KickMembers],

  callback: async (client, interaction) => {
    // Check if the user has the necessary permissions
    if (!interaction.member.permissions.has(PermissionFlagsBits.KickMembers)) {
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
      // Kick the user
      await interaction.guild.members.kick(targetUser, { reason });

      // Reply to the interaction
      interaction.reply(`Successfully kicked ${targetUser.tag}! Reason: ${reason}`);
    } catch (error) {
      console.error(`Error kicking user: ${error.message}`);
      interaction.reply('There was an error kicking the user.');
    }
  },
};
