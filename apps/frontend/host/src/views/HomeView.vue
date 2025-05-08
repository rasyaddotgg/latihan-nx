<script setup lang="ts">
import EmployeeMenu from 'employee/EmployeeMenu';
import Counter from '../components/Counter.vue';
import PayrollCounter from 'payroll/PayrollCounter';
import EmployeeCounter from 'employee/EmployeeCounter';
</script>

<template>
  <main class="flex items-center justify-center flex-col min-h-screen p-4">
    <v-alert
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!"
      title="Alert title"
      type="info"
      variant="tonal"
      class="mb-4"
    >
    </v-alert>
    <div class="mb-4">
      <EmployeeMenu />
    </div>
    <div class="mb-4">
      <v-row>
        <v-col cols="12" sm="12">
          <Counter />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <PayrollCounter />
        </v-col>
        <v-col cols="12" sm="6">
          <EmployeeCounter />
        </v-col>
      </v-row>
    </div>
  </main>
</template>
