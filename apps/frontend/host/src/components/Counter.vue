<script setup>
import useCounter from '../stores/useCounter';
const store = useCounter();
</script>

<template>
  <v-card class="text-center bg-blue-grey-lighten-1">
    <v-card-title>Sharing State Between Host and Remote App</v-card-title>
    <v-card-text class="text-h3">{{ store.count }}</v-card-text>
    <v-card-text>
      <v-btn-group>
        <v-btn @click="store.decrement">Decrement</v-btn>
        <v-btn @click="store.reset">Reset</v-btn>
        <v-btn @click="store.increment">Increment</v-btn>
      </v-btn-group>
    </v-card-text>
  </v-card>
</template>
