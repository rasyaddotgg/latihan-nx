<script setup lang="ts">
import PayrollButton from '../components/PayrollButton.vue';
import PayrollList from '../sections/payroll/PayrollList.vue';
import Card from 'primevue/card';
</script>

<template>
  <main class="grid grid-cols-1">
    <PayrollButton label="Hello world" />
    <Card>
      <template #content>
        <PayrollList />
      </template>
    </Card>
  </main>
</template>
