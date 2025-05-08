<script setup lang="ts">
import { defineAsyncComponent, ref, onMounted, shallowRef } from 'vue';
import { RemotePosition } from '../types/remote';
import type { Component } from 'vue';

const isLoading = ref(true);
const dynamicComponent = shallowRef<Component | null>(null);

const remoteMap: any = {
  'employee/EmployeeMenu': () => import('employee/EmployeeMenu'),
  'employee/UserList': () => import('employee/UserList'),
};

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchBannerComponent() {
  await wait(2000);
  const response = await fetch(
    'http://localhost:3000/api/remote-position/BANNER'
  );
  const data: RemotePosition = await response.json();
  const key = `${data.remoteComponent.remote.name}/${data.remoteComponent.path}`;
  console.log('key', key);
  const loader = remoteMap[key];
  dynamicComponent.value = defineAsyncComponent(loader);
  isLoading.value = false;
}

onMounted(() => {
  fetchBannerComponent();
});
</script>

<template>
  <template v-if="isLoading">Loading...</template>
  <template v-else>
    <component :is="dynamicComponent"></component>
  </template>
</template>
