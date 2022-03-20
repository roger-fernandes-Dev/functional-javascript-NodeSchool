/*
Return a function that takes a list of valid users, and returns a function that returns true if all of the supplied users exist in the original list of users.

You only need to check that the ids match.

em portugues

Retorna uma função que recebe uma lista de usuários válidos e retorna uma função que retorna true se todos os usuários fornecidos existirem na lista original de usuários.

Você só precisa verificar se os ids correspondem.


*/

function checkUsersValid(goodUsers){
	return function allUsersValid(submittedUsers){
		return submittedUsers.every((submittedUsers)=>{
			return goodUsers.some((goodUsers)=>{
				return goodUsers.id === submittedUsers.id
			})
		})
	}
}

module.exports = checkUsersValid

/*
	função oficial feita pela nodeSchool

	module.exports = function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function(submittedUser) {
          return goodUsers.some(function(goodUser) {
            return goodUser.id === submittedUser.id
          })
        })
      }
    }

*/