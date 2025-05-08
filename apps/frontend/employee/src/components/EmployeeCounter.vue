<script setup>
import useCounter from 'host/stores/useCounter';
const store = useCounter();
</script>

<template>
  <v-card class="text-center bg-light-blue-accent-1">
    <v-card-title>This is from employee remote</v-card-title>
    <v-card-text class="text-h3">{{ store.count }}</v-card-text>
    <v-card-text>
      <v-btn-group>
        <v-btn variant="outlined" @click="store.decrement">Decrement</v-btn>
        <v-btn variant="outlined" @click="store.reset">Reset</v-btn>
        <v-btn variant="outlined" @click="store.increment">Increment</v-btn>
      </v-btn-group>
    </v-card-text>
  </v-card>
</template>
