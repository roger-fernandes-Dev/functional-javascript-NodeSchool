//primeiro exercicio da lista de programação funcional da nodeschool

let input = "lorem ipsum"

//função apenas transforma toda a palavra em letras maiusculas
function uppercaser(input){
	return input.toUpperCase();	
}

module.exports = uppercaser


/*

	função oficial feita pela nodeschool

	module.exports = function(input) {
      return input.toUpperCase()
    }
*/