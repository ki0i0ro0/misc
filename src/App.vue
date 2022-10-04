<template>
  <v-app :theme="theme">
    <v-main>
      <v-btn @click="toggleTheme">toggle theme</v-btn>
      <HelloWorld />
      <HelloGraphQL />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import HelloGraphQL from './components/HelloGraphQL.vue'

const theme = ref('light')
const toggleTheme = () =>
  (theme.value = theme.value === 'light' ? 'dark' : 'light')
</script>
