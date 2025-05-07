<script setup lang="ts">
// import Button from 'primevue/button';
// import RemoteButton from 'remote-sample/RemoteButton';
// import EmployeeButton from 'employee/EmployeeButton';
import EmployeeMenu from 'employee/EmployeeMenu';
</script>

<template>
  <main class="flex items-center justify-center flex-col min-h-screen p-4">
    <v-alert
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!"
      title="Alert title"
      type="info"
      variant="tonal"
      class="mb-4"
    ></v-alert>
    <!-- <Button label="Click Me" /> -->
    <!-- <RemoteButton />
    <EmployeeButton /> -->
    <EmployeeMenu />
    <!-- <v-btn variant="outlined">Button from host</v-btn> -->
  </main>
</template>
