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
  <Button :label="label" />
  <p>This content is coming from PayrollButton</p>
</template>
