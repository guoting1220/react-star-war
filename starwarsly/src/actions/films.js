import axios from 'axios';
import { LOAD_FILM } from "./types";


function getFilmFromAPI(id) {
  return async function (dispatch) {
    /* fetch the data of the film with given id from API */
    const res = await axios.get(`https://swapi.dev/api/films/${id}/`);
    let {
      title: name,
      director,
      opening_crawl: openingCrawl,
      characters,
      planets
    } = res.data;

    /* extract the id of each character / planet from its url, and replace the urls with ids in the characters /planets list   */
    characters = characters.map(url => url.match(/\d+/)[0]);
    planets = planets.map(url => url.match(/\d+/)[0]);

    /* shape the fetched film data and save it to the state store */
    const film = { id, name, director, openingCrawl, characters, planets };
    dispatch(gotFilm(film));
  };
}


function gotFilm(film) {
  return { type: LOAD_FILM, payload: film };
}


export { getFilmFromAPI }