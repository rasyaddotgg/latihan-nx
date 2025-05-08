<template>
  <v-app>
    <v-app-bar flat>
      <v-container>
        <v-app-bar-title>
          <div class="d-flex justify-space-between">
            <router-link to="/"> Learn Micro UI + Micro Service </router-link>
            <router-link to="/cms" class="text-decoration-underline">
              CMS
            </router-link>
          </div>
        </v-app-bar-title>
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>
