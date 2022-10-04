<template>
  <div v-if="result">
    <table :border="1" style="border-collapse: collapse">
      <thead>
        <tr>
          <th>No</th>
          <th>name</th>
          <th>description</th>
          <th>createdAt</th>
          <th>star</th>
          <th>url</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(v, index) in result.organization.repositories.nodes"
          :key="v.url"
        >
          <td>{{ index + 1 }}</td>
          <td>{{ v.name }}</td>
          <td>{{ v.description }}</td>
          <td>{{ new Date(v.createdAt).toLocaleDateString() }}</td>
          <td>{{ v.stargazers.totalCount }}</td>
          <td>{{ v.url }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useQuery } from '@vue/apollo-composable'
import get from '@/apis/get'

const { result } = useQuery(get)
</script>
