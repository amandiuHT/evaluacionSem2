<script setup>
import { ref } from 'vue'
import ApiPokemonView from './ApiPokemonView.vue';

const posts = ref ([])

fetch('https://pokeapi.co/api/v2/pokemon')
    .then((res) => res.json())
    .then((data) => posts.value = data)
    .catch((e) => console.log(e))

</script>
<template>
        
</template>