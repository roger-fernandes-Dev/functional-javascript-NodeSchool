/*
	função que repete determinado numero de vezes uma função

	recebe como parametro a função que sera executada
	e também recebe o numero de vezes que será executado

*/
function repeat(operation, num){
	for(i = 0; i > num; i++){
		operation
	}
}

module.exports = repeat

/*
	função oficial feita pela nodeSchool

	function repeat(operation, num) {
      if (num <= 0) return
      operation()
      return repeat(operation, --num)
    }

    module.exports = repeat
*/

