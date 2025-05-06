<script setup>
import Button from 'primevue/button';

defineProps({
  label: {
    type: String,
    default: 'Default Value',
  },
});
</script>

<template>
  <Button :label="label" severity="danger" />
</template>
