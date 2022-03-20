/*

getShortMessages pega um array de objetos com propriedades '.message' e retorna um array de mensagens com menos de 50 caracteres.

A função deve retornar um array contendo as próprias mensagens, sem o objeto que as contém.

*/
function getShortMessages(messages){
	return messages.filter((item)=>{
		return item.message.length < 50
	}).map((item)=>{
		return item.message
	})
}

module.exports = getShortMessages

/*
	função oficial feita pela nodeSchool

	module.exports = function getShortMessages(messages) {
      return messages.filter(function(item) {
        return item.message.length < 50
      }).map(function(item) {
        return item.message
      })
    }
*/