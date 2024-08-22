<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="flex justify-between items-center w-full bg-cyan-950 p-2 px-8">
    <img alt="Vue logo" class="" src="@/assets/logo.svg" width="50" height="50" />

    <nav class="flex gap-4 text-white">
      <RouterLink to="/" class="hover:underline hover:underline-offset-2">Inicio</RouterLink>
      <RouterLink to="/workers" class="hover:underline hover:underline-offset-2"
        >Empleados</RouterLink
      >
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>
