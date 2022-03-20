/*
	função varre uma array criando uma nova
	array com map e para cada valor da 
	array que for varrido será multiplicado por 2
	 e adicionado a nova array feita pelo map
*/
function doubleAll(numbers){
	return numbers.map((num)=>{
		return num * 2
	})
}

module.exports = doubleAll

/*
	função oficial feita pela nodeschool

	module.exports = function doubleAll(numbers) {
      return numbers.map(function double(num) {
        return num * 2
      })
    }
*/