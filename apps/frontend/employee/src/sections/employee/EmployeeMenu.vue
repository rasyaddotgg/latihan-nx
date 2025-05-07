<script setup>
import { ref } from 'vue';
const snackbar = ref(false);
const text = ref('Hello World! This is a snackbar message.');

function sn(message) {
  text.value = message;
  snackbar.value = true;
}
</script>

<template>
  <div class="text-center ma-2">
    <v-snackbar v-model="snackbar">
      {{ text }}
      <template v-slot:actions>
        <v-btn color="pink" variant="text" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
  <v-card class="bg-green-lighten-1">
    <template #title>
      <div class="font-weight-bold text-center">HC</div>
    </template>

    <template v-slot:subtitle>
      <p class="text-center mb-3">
        Aksi yang dilakukan untuk mengelola data HC
      </p>
    </template>

    <template v-slot:text>
      <v-row no-gutters class="text-center justify-center mb-3">
        <v-col cols="12" sm="6" md="3" lg="2" class="mb-sm-4">
          <v-btn
            class="rounded-button"
            rounded
            width="110"
            height="110"
            prepend-icon="mdi-file-account-outline"
            stacked
            variant="elevated"
            @click="sn('Kelola Kontrak')"
            >Kelola Kontrak</v-btn
          >
        </v-col>
        <v-col cols="12" sm="6" md="3" lg="2" class="mb-sm-4">
          <v-btn
            class="rounded-button"
            rounded
            width="110"
            height="110"
            prepend-icon="mdi-account-group"
            stacked
            @click="sn('Kelola Pegawai')"
            >Kelola Pegawai</v-btn
          >
        </v-col>
        <v-col cols="12" sm="6" md="3" lg="2" class="mb-sm-4">
          <v-btn
            class="rounded-button"
            rounded
            width="110"
            height="110"
            prepend-icon="mdi-magnify"
            @click="sn('Advance Data')"
            stacked
            >Advance Data</v-btn
          >
        </v-col>
        <v-col cols="12" sm="6" md="3" lg="2" class="mb-sm-4">
          <v-btn
            class="rounded-button"
            rounded
            width="110"
            height="110"
            prepend-icon="mdi-currency-usd"
            @click="sn('Kelola UMK')"
            stacked
            >Kelola UMK</v-btn
          >
        </v-col>
        <v-col cols="12" sm="6" md="3" lg="2" class="mb-sm-4">
          <v-btn
            class="rounded-button"
            rounded
            width="110"
            height="110"
            prepend-icon="mdi-account-cash-outline"
            @click="sn('Kelola Top Up')"
            stacked
            >Kelola Top Up</v-btn
          >
        </v-col>
        <v-col cols="12" sm="6" md="3" lg="2" class="mb-sm-4">
          <v-btn
            class="rounded-button"
            rounded
            width="110"
            height="110"
            prepend-icon="mdi-cash"
            @click="sn('Kelola UKPHK')"
            stacked
            >Kelola UKPHK</v-btn
          >
        </v-col>
      </v-row>
    </template>
  </v-card>
</template>

<style scoped>
.rounded-button {
  border-radius: 50%;
}
</style>
