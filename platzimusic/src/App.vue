<template lang="pug">
  #app
    img(src='./assets/logo.png')
    h1 PlatziMusic
    select(v-model="selectedCountry")
      option(v-for="country in countries" v-bind:value="country.value")
        | {{ country.name }}
    spinner(v-show="loading")
    ul
      artist(v-for="artist in artists" v-bind:artist="artist" v-bind:key="artist.mbid")

</template>

<script>
import Artist from './components/Artist.vue'
import Spinner from './components/Spinner.vue'
import getArtists from './api'
export default {
  name: 'app',
  data () {
    return {
      artists : [],
      countries : [
        {
          name : 'Argentina',
          value : 'argentina'
        },
        {
          name : 'Colombia',
          value : 'colombia'
        },
        {
          name : 'España',
          value : 'spain'
        }

      ],
      selectedCountry : 'spain',
      loading : true
    }
  },
  components : {
    Artist : Artist,
    Spinner : Spinner
  },
  methods : {
    refreshArtists : function() {
      // Este self va hacer referencia al this del componente, sino lo hacemos
      // va hacer referencia al global (window)
      const self = this
      this.loading = true
      this.artists = []
      // Vamos a llamar el metodo them que va a traer a todos los artistas
      getArtists(this.selectedCountry)
        .then(function (artists) {
          self.loading = false
          self.artists = artists
        })
    }
  },
  mounted : function (){
    this.refreshArtists()
  },
  watch : {
    // Es tambien otro objeto
    // Con este nuevo atributo lo que hace es: cuando haya un cambio en selectedCountry
    // tienes que hacer algo.
    selectedCountry : function() {
      this.refreshArtists()
    }
  }
}
</script>
<!-- scoped lo que va hacer es poner ciertos id a los elementos o atributo de datos a los elementos
en cuestion y lo que va hacer en los estilos es aplicarlo a los estilos que tengan el data atribuit
de manera interna -->
<style lang="sass" scoped>
  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #3e3e3e
    margin-top: 60px

  h1, h2
    font-weight: normal

  ul
    list-style-type: none
    padding: 0

  li
    display: inline-block
    margin: 0 10px

  a
    color: #42b983
</style>
