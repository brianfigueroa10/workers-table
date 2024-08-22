<template>
  <section class="hero bg-cyan-950/50 mt-24 text-white p-8">
    <div class="container mx-auto text-center">
      <h1 class="text-4xl font-bold mb-4">Bienvenido a Nuestra Página</h1>
      <p class="text-xl mb-8">Explora nuestras características y servicios.</p>
      <router-link to="/workers">
        <button class="bg-white text-cyan-800 px-4 py-2 rounded">Empezar</button>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>
