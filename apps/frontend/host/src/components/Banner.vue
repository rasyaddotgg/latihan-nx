<script setup lang="ts">
import { getAsyncComponent } from '../lib/helpers/federation/module_federation.ext';
import { RemotePosition } from '../types/remote';
import { onMounted, shallowRef, ref } from 'vue';
const DynamicBanner = shallowRef(null);
const isLoading = ref(false);

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchBannerComponent() {
  isLoading.value = true;
  await wait(2000);
  const response = await fetch(
    'http://localhost:3000/api/remote-position/BANNER'
  );
  const data: RemotePosition = await response.json();
  DynamicBanner.value = getAsyncComponent(
    data.remoteComponent.path,
    data.remoteComponent.remote.url
  );
  isLoading.value = false;
}

onMounted(() => {
  fetchBannerComponent();
});
</script>

<template>
  <template v-if="isLoading">
    <p>Loading...</p>
  </template>
  <template v-else>
    <component :is="DynamicBanner"></component>
  </template>
</template>
