<script setup lang="ts">
import { ref } from 'vue';
import { useCounter } from '@frontend-lib/composable';
import { useAuth } from '@frontend-lib/stores';
import { onMounted } from 'vue';
import { Employee } from '../types/employee';

const { counter, increment, decrement } = useCounter();

const store = useAuth();

const employees = ref<Employee[]>([]);

async function fetchEmployee() {
  const response = await fetch('http://localhost:3000/api/employee');
  const data = await response.json();
  employees.value = data;
}

onMounted(() => {
  fetchEmployee();
});
</script>

<template>
  <main>
    <!-- <PayrollList /> -->
    <!-- <PayrollButton label="Di override ah" /> -->
    <div>
      <h1>Employee List</h1>
      <ul>
        <li v-for="employee in employees" :key="employee.id">
          {{ employee.name }} - {{ employee.position }}
        </li>
      </ul>
    </div>
    <div>
      <p>{{ JSON.stringify(store.user) }}</p>
      <button @click="store.login">Login</button>
      <button @click="store.logout">Logout</button>
    </div>
    <div>
      <p>{{ counter }}</p>
      <button @click="increment">Increment</button>
      <button @click="decrement">Decrement</button>
    </div>
  </main>
</template>

<style scoped>
button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin: 0 5px;
}

p {
  font-size: 2em;
  color: #42b983;
}
</style>
