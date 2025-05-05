<script setup lang="ts">
import PayrollList from '../sections/payroll/PayrollList.vue';
import Card from 'primevue/card';
</script>

<template>
  <main class="grid grid-cols-1">
    <Card>
      <template #content>
        <PayrollList />
      </template>
    </Card>
  </main>
</template>
