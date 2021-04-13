import axios from "axios";
import { LOAD_PERSON } from "./types";


function getPersonFromAPI(id) {
  return async function (dispatch) {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    let {
      name,
      gender,
      birth_year: birthYear,
      homeworld,
      films
    } = res.data;

    /* extract the id of each film from its url, and replace the urls with ids in the characters list   */
    films = films.map(url => url.match(/\d+/)[0]);

    /* extract the id of homeworld from its url, and replace the url with id   */
    homeworld = homeworld.match(/\d+/)[0];

    /* shape the fetched person/people data and save it to the state store */
    const person = { id, name, gender, birthYear, homeworld, films };
    dispatch(gotPerson(person));
  };
}


function gotPerson(person) {
  return { type: LOAD_PERSON, payload: person };
}


export { getPersonFromAPI }