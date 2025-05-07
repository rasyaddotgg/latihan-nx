<script setup>
import Card from 'primevue/card';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
const toast = useToast();

function showToast(actionFrom) {
  toast.add({
    severity: 'info',
    summary: 'Action Info',
    detail: `Action from ${actionFrom}`,
    life: 3000,
  });
}
</script>

<template>
  <main class="flex justify-center items-center min-h-screen">
    <Toast />
    <Card>
      <template #title>
        <h5 class="text-center mb-3">
          <i class="pi pi-users" style="font-size: 1.5rem"></i>
          Employee Menu
        </h5>
      </template>
      <template #content>
        <div class="grid grid-cols-3 gap-3">
          <Button
            @click="showToast('Advance Search')"
            label="Advance Search"
            icon="pi pi-search"
            iconPos="top"
            severity="secondary"
          />
          <Button
            @click="showToast('Manage Employee')"
            label="Manage"
            icon="pi pi-list"
            iconPos="top"
            severity="secondary"
          />
          <Button
            @click="showToast('Contract')"
            label="Contract"
            icon="pi pi-file"
            iconPos="top"
            severity="secondary"
          />
          <Button
            @click="showToast('Manage PTKP')"
            label="Manage PTKP"
            icon="pi pi-money-bill"
            iconPos="top"
            severity="secondary"
          />
          <Button
            @click="showToast('Manage Shift')"
            label="Manage Shift"
            icon="pi pi-calendar"
            iconPos="top"
            severity="secondary"
          />
          <Button
            @click="showToast('Manage Top Up')"
            label="Manage Top Up"
            icon="pi pi-wallet"
            iconPos="top"
            severity="secondary"
          />
        </div>
      </template>
    </Card>
  </main>
</template>
