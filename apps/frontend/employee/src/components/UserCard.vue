<script setup lang="ts">
defineProps<{
  user: object;
}>();
</script>
<template>
  <v-card class="mb-4" variant="outlined">
    <v-card-text>
      <li class="bg-light-green">{{ JSON.stringify(user) }}</li>
    </v-card-text>
  </v-card>
</template>
