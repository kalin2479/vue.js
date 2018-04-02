<template lang="pug">
  li
    h2
      a(v-bind:href="artist.url" target="_blanck")
        | {{ artist.name }}
    img(v-bind:src="artist.image[2]['#text']")
</template>

<script>
export default {
  // Este nombre debe coincidir con el nombre del componente que hemos definido
  name : 'artist',
  props : ['artist']
}
</script>

<style lang="sass">
  li
    display: block
    margin: 10px 0
</style>
