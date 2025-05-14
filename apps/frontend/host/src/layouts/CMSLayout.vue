<template>
  <v-app>
    <v-app-bar flat>
      <v-container>
        <v-app-bar-title>
          <div class="d-flex justify-space-between">
            <router-link to="/cms">CMS</router-link>
            <router-link to="/home" class="text-decoration-underline">
              Home
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
