export default {
  getListOfPeople,
  removePerson
}

import peopleApi from '../../api/people'

async function getListOfPeople({commit}) {
  try {
    const result = await peopleApi.getListOfPeople()
    commit('setListOfPeople', result.data)
    return result
  } catch(error) {
    throw error
  }
}

function removePerson({commit}, id) {
  commit('removePerson', id)
}