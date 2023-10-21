<template>
  <div v-if="result">
    <table :border="1" style="border-collapse: collapse">
      <thead>
        <tr>
          <th>No</th>
          <th>name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(v, index) in result.allFilms.films" :key="v.title">
          <td>{{ index + 1 }}</td>
          <td>{{ v.title }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useQuery } from '@vue/apollo-composable'
import { GET_START_WARS } from '@/apis/get'

const { result } = useQuery(GET_START_WARS)
</script>
