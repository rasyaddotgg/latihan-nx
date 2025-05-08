<script setup>
import UserCard from './UserCard.vue';
import { ref, onMounted } from 'vue';

const users = ref([]);

async function fetchUser() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  users.value = await response.json();
}

onMounted(() => {
  fetchUser();
});
</script>

<template>
  <ul>
    <UserCard v-for="user in users" :user="user" :key="user.id" />
  </ul>
</template>
