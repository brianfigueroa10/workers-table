<template>
  <div class="flex flex-col w-full animate-pulse min-h-[608px]">
    <table class="min-w-full rounded-xl">
      <thead
        class="bg-cyan-950 py-2 border-b border-cyan-950 text-white h-10 rounded-xl min-h-[608px]"
      >
        <tr class="">
          <th class="px-4 text-start">Fecha</th>
          <th class="px-4 text-start">Posición</th>
          <th class="px-4 text-start">Área</th>
          <th class="px-4 text-start">Salario</th>
          <th class="px-4 text-start">Estado</th>
          <th class="px-4 text-start">Email</th>
          <th class="px-4 text-start">Teléfono</th>
          <th class="px-4 text-start">Ubicación</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="index in 5" :key="index" class="border border-violet-950/60">
          <td class="px-4 py-2">
            <div class="bg-gray-300 rounded w-full h-4"></div>
          </td>
          <td class="px-4 py-2">
            <div class="bg-gray-300 rounded w-full h-4"></div>
          </td>
          <td class="px-4 py-2">
            <div class="bg-gray-300 rounded w-full h-4"></div>
          </td>
          <td class="px-4 py-2">
            <div class="bg-gray-300 rounded w-full h-4"></div>
          </td>
          <td class="px-4 py-2">
            <div class="bg-gray-300 rounded w-full h-4"></div>
          </td>
          <td class="px-4 py-2">
            <div class="bg-gray-300 rounded w-full h-4"></div>
          </td>
          <td class="px-4 py-2">
            <div class="bg-gray-300 rounded w-full h-4"></div>
          </td>
          <td class="px-4 py-2">
            <div class="bg-gray-300 rounded w-full h-4"></div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TableSkeleton'
}
</script>

<style scoped>
/* Estilos opcionales */
</style>
