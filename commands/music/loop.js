module.exports = {
	name: 'loop',
	description: 'Repeats the current queue/song',
	aliases: ['repeat', 'unloop'],
	usage: '<queue/song>',
	cooldown: '10',
	inVoiceChannel: true,
	sameVoiceChannel: true,
	playing: true,
	async execute(client, message, args) {
		const player = client.music.players.get(message.guild.id);

		if(!args[0] || args[0].toLowerCase() == 'song') {
			if(player.trackRepeat === false) {
				player.setTrackRepeat(true);
				return message.channel.send('Song is now being looped');
			}
			else{
				player.setTrackRepeat(false);
				return message.channel.send('Song has been unlooped');
			}
		}
		else if(args[0] == 'queue') {
			if(player.setQueueRepeat) {
				player.setQueueRepeat(false);
				return message.channel.send('Queue has been unlooped.');
			}
			else {
				player.setQueueRepeat(true);
				return message.channel.send('Queue is now being looped.');
			}
		}
	},
};