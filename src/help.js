const help = (prefix) => {
	return `

╔══════════════
║    🐊🌹C3NNA BOT🌹🐊
╠══════════════

> *Comandos de Figurinhas* <
➥ comando : *${prefix}sticker* ou *${prefix}stiker*
➥ desc : converte imagem / gif / vídeo em adesivo
➥ uso : responder imagem / gif / vídeo ou enviar imagem / gif / vídeo com legenda\n
➥ comando : *${prefix}sticker nobg* ou *${prefix}stiker nobg*
➥ desc : converte imagem em adesivo removendo o fundo
➥ uso : responder imagem ou enviar imagem com legenda\n
➥ comando : *${prefix}toimg*
➥ desc : converte adesivo em imagem
➥ uso : marcar figurinha\n
➥ comando : *${prefix}tsticker* ou *${prefix}tstiker*
➥ desc : converte texto em adesivo
➥ uso : *${prefix}tsticker texto aqui*\n
> *Comandos Meme* <
➥ comando : *${prefix}meme*
➥ desc : imagens aleatórias de meme [english]
➥ uso : apenas envie o comando\n
➥ comando : *${prefix}memeindo*
➥ desc : imagens aleatórias de meme [indo]
➥ uso : apenas envie o comando\n
> *Outros Comandos* <
➥ comando : *${prefix}gtts*
➥ desc : converter texto em fala / áudio
➥ uso : *${prefix}gtts [pt] [texto]*\nexemplo : *${prefix}gtts pt On2-chan*\n
➥ comando : *${prefix}loli*
➥ desc : imagens aleatórias de loli
➥ uso : apenas envie o comando\n
➥ comando : *${prefix}nsfwloli*
➥ desc : imagens aleatórias de nsfw loli
➥ uso : apenas envie o comando\n
➥ comando : *${prefix}url2img*
➥ desc : tira screenshots da web
➥ uso : *${prefix}url2img [tipe] [url]*\n
➥ comando : *${prefix}simi*
➥ desc : sua mensagens serão respondidas por simi
➥ uso : *${prefix}simi suamensagem*\n
➥ comando : *${prefix}ocr*
➥ desc : pegue o texto da foto
➥ uso : responder imagem ou enviar imagem com legenda\n
➥ comando : *${prefix}wait*
➥ desc : procure anime com imagem [ What Anime Is This/That ]
➥ uso : responder imagem ou enviar imagem com legenda\n
➥ comando : *${prefix}setprefix*
➥ desc : substituir prefixo
➥ uso : *${prefix}setprefix [texto|opcional]*\nExemplo : *${prefix}setprefix ?*
➥ NOTA : Este comando só pode ser usado pelo proprietário do bot\n
> *Comandos de Grupo* <
➥ comando : *${prefix}add*
➥ desc : adiciona um membro no grupo
➥ uso : *${prefix}add 62813xxxxx*\n
➥ NOTA : só pode ser usado quando o bot se tornar adm, e quem envia o comando é o adm!\n
➥ comando : *${prefix}kick*
➥ desc : expulsa um membro do grupo
➥ uso : *${prefix}kick @tagmember*\n
➥ NOTA : só pode ser usado quando o bot se tornar adm, e quem envia o comando é adm!\n
➥ comando : *${prefix}promote*
➥ desc : faz um membro se tornar adm do grupo
➥ uso : *${prefix}promote @tagmember*\n
➥ NOTA : só pode ser usado quando o bot se tornar adm, e quem envia o comando é adm!\n
➥ comando : *${prefix}demote*
➥ desc : vai demitir o adm do cargo
➥ uso : *${prefix}demote @tagmember*\n
➥ NOTA : só pode ser usado quando o bot se tornar adm, e quem envia o comando é o adm!\n
➥ comando : *${prefix}linkgroup*
➥ desc : o bot vai mandar o link do grupo no chat
➥ uso : apenas mande o comando.
➥ NOTA : só pode ser usado quando o bot se tornar adm, e quem envia o comando é o adm!\n
➥ comando : *${prefix}leave*
➥ desc : faz o bot sair do grupo
➥ uso : apenas mande o comando.
➥ NOTA : Só pode ser usado por administradores do grupo e proprietário do bot\n
➥ comando : *${prefix}tagall*
➥ desc : marca todos os membros do grupo, incluindo administradores também!
➥ uso : apenas mande o comando.
➥ NOTA : Este comando pode ser usado se você for adm do grupo\n
➥ comando : *${prefix}simih*
➥ desc : ativa o modo simi no grupo
➥ uso : *${prefix}simih 1* pra ativar o modo simi *${prefix}simih 0* pra desativar o modo simi
➥ NOTA : Este comando pode ser usado se você for adm do grupo\n

➽ Para obter o segundo menu, digite #menu

╔════════════════
║🌹 *BOT FEITO PELO C3NNA* 🌹
║
║➜ QUALQUER DÚVIDA CHAME PV! 👇
║
║wa.me//558881418150
╚════════════════`

}

exports.help = help
