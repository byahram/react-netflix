const API_KEY = "11ddf22d9f842737f799d74032cf4628";
const BASE_PATH = "https://api.themoviedb.org/3";

export function getMovieLists(category: string) {
  return fetch(`${BASE_PATH}/movie/${category}?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}
