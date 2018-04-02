import config from './config'
const apiKey = config.apiKey
const URL = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:country&api_key=${apiKey}&format=json`

// De esta manera vamos a poder importar este elemento
export default function getArtists(country){
  // fetch nos devuelve una promesa, esta promesa va a recibir una respuesta del servidor
  // y lo que queremos hacer es retornar otra promesa, en principio nos devuelve un
  // objeto que va a tener varios metodos y uno de ellos es json y este nos devuelve
  // otra promesa en el cual va ir cargando los datos. El resultado de la respuesta
  // a medida que vayan llegando
  // json.topartists.artist -> eso va ha devolver un array con todos los datos con
  // todos los artitas
  // finalmente todo esto debe devolver una promesa
  // Antes de hacer el request vamos hacer un replace
  const url = URL.replace(':country', country)
  // console.log(url)
  return fetch(url)
    .then(res => res.json())
    .then(json => json.topartists.artist)
}
