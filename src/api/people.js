import axios from '../helpers/axios'
var jsonURL = 'http://www.json-generator.com/api/json/get/cqenGCeQqG?indent=2'

export default {
  getListOfPeople
}

function getListOfPeople() {
  return axios.get(jsonURL)
}