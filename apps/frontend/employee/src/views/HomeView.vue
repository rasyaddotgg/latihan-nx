<script setup lang="ts">
import { useCounter } from '@frontend-lib/composable';
import { useAuth } from '@frontend-lib/stores';

const { counter, increment, decrement } = useCounter();

const store = useAuth();
</script>

<template>
  <main>
    <!-- <PayrollList /> -->
    <!-- <PayrollButton label="Di override ah" /> -->
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
