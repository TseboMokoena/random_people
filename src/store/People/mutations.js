export default {
  setListOfPeople,
  removePerson
}

function setListOfPeople(state, people) {
  state.listOfPeople = people
}

function removePerson(state, id) {
  var peopleArray =   state.listOfPeople
  for( var i = 0; i < peopleArray.length; i++){
    if ( peopleArray[i].id === id) {
      peopleArray.splice(i, 1);
    }
 }
  state.listOfPeople = peopleArray
}