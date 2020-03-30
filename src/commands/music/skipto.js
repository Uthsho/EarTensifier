module.exports = {
	name: 'skipto',
	description: 'Skips to a certain song in the queue',
	args: true,
	usage: '<song position>',
	cooldown: '10',
	inVoiceChannel: true,
	sameVoiceChannel: true,
	playing: true,
	async execute(client, message, args) {
		if(isNaN(args[0])) return message.channel.send('Invalid number.');
		if(args[0] == 0) return message.channel.send(`Cannot skip to a song that is already playing. To skip the current playing song type: \`${client.settings.prefix}skip\``);

		const player = client.music.players.get(message.guild.id);

		if((args[0] > player.queue.size) || (args[0] && !player.queue[args[0]])) return message.channel.send('Song not found.');
		const { title } = player.queue[args[0]];
		if(args[0] == 1) player.stop();
		player.queue.splice(1, args[0] - 1);
		player.stop();

		return message.channel.send(`Skipped to **${title}**.`);
	},
};