<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  projects: Array,
  loading: Boolean,
  lastUpdated: String,
  searchTerm: String,
  statusFilter: String,
  currentPage: Number,
  itemsPerPage: Number,
  totalPages: Number
})

const emit = defineEmits(['nextPage', 'prevPage'])
</script>

<template>
  <table class="min-w-full capitalize">
    <thead class="bg-cyan-950 py-2 border border-cyan-950 text-white h-10 sticky top-0">
      <tr>
        <th class="px-4 text-start">Ingreso</th>
        <th class="px-4 text-start">Nombre</th>
        <th class="px-4 text-start">Posición</th>
        <th class="px-4 text-start">Área</th>
        <th class="px-4 text-start">Salario</th>
        <th class="px-4 text-start">Email</th>
        <th class="px-4 text-start">Teléfono</th>
        <th class="px-4 text-start">Ubicación</th>
        <th class="px-4 text-start">Estado</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="projects?.length === 0">
        <td colSpan="6" class="py-8 min-h-80 h-80 px-4 text-center">No hay resultados.</td>
      </tr>
      <tr
        v-else
        v-for="project in projects"
        :key="project.title"
        class="border border-violet-950/60"
      >
        <td class="p-3 text-nowrap">{{ project.date }}</td>
        <td class="p-3 uppercase text-nowrap">{{ project.name }}</td>
        <td class="p-3 text-nowrap">{{ project.position }}</td>
        <td class="p-3 text-nowrap">{{ project.area }}</td>
        <td class="p-3 text-nowrap">{{ project.salary }}</td>
        <td class="p-3 text-nowrap lowercase">{{ project.email }}</td>
        <td class="p-3 text-nowrap">{{ project.phone }}</td>
        <td class="p-3 text-nowrap">{{ project.location }}</td>
        <td class="p-3 text-nowrap">
          <span
            :class="{
              'bg-yellow-500 text-black': project.status === 'Licencia',
              'bg-green-600 text-white': project.status === 'Activo',
              'bg-red-600 text-white': project.status === 'Retirado'
            }"
            class="font-normal p-2 px-4 rounded-full"
          >
            {{ project.status }}
          </span>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="flex justify-between mt-4">
    <button @click="emit('prevPage')" :disabled="currentPage === 1">Anterior</button>
    <button @click="emit('nextPage')" :disabled="currentPage === totalPages">Siguiente</button>
  </div>
</template>
