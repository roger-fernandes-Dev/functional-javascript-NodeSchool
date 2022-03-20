//array com palavras sugeridas no exercicio

var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']

/*
	aA função abaixo vai pegar o array inputWords
	e retornará um objeto com a contagem
	das palavras
*/

function countWords(inputWords){
	return inputWords.reduce((countMap, word)=>{
		countMap[word] = ++countMap[word] || 1

		return countMap
	}, {})
}

module.exports = countWords

/*
	resolução oficial feito pelo nodeSchool

	function countWords(arr) {
      return arr.reduce(function(countMap, word) {
        countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
        return countMap
      }, {}) // second argument to reduce initialises countMap to {}
    }

    module.exports = countWords

*/