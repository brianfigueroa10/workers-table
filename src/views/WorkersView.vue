<template>
  <section>
    <aside class="flex w-full justify-between p-8 items-center">
      <h1 class="text-4xl font-bold">Empleados</h1>
      <RouterLink to="/workers/new" class="bg-sky-600 text-white text-center p-2 px-6 rounded-full"
        >+ Nuevo empleado</RouterLink
      >
    </aside>
    <div class="p-4 min-h-[608px]">
      <div v-if="loading">
        <TableSkeleton />
      </div>
      <div v-else class="flex flex-col w-full">
        <header class="flex h-full justify-between w-full">
          <SearchFilter
            :searchTerm="searchTerm"
            :statusFilter="statusFilter"
            :selectedDate="selectedDate"
            @update:searchTerm="(value) => (searchTerm = value)"
            @update:statusFilter="(value) => (statusFilter = value)"
            @update:selectedDate="(value) => (selectedDate = value)"
          />
        </header>
        <div class="text-sm mb-2 w-full">
          Última actualización: {{ lastUpdated ? lastUpdated.toLocaleString() : 'N/A' }}
        </div>

        <div class="flex flex-col items-center min-h-[608px] min-w-full">
          <!-- Otros elementos del template -->
          <ProjectTable :paginatedProjects="paginatedProjects" />
          <PaginationControls
            :currentPage="currentPage"
            :totalPages="totalPages"
            @prevPage="prevPage"
            @nextPage="nextPage"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
import TableSkeleton from '../components/SkeletonTable.vue'
import SearchFilter from '../components/SearchFilter.vue'
import ProjectTable from '../components/ProjectTable.vue'
import PaginationControls from '../components/PaginationControls.vue'

import '@vuepic/vue-datepicker/dist/main.css'
import { api } from '@/api'

export default {
  components: {
    TableSkeleton,
    SearchFilter,
    ProjectTable,
    PaginationControls
  },
  setup() {
    const projects = ref([])
    const searchTerm = ref('')
    const statusFilter = ref('')

    const currentPage = ref(1)
    const itemsPerPage = ref(10)
    const loading = ref(true)
    const lastUpdated = ref(null)

    const fetchProjects = async () => {
      try {
        const data = await api.list()
        projects.value = data
        lastUpdated.value = new Date()
      } catch (error) {
        console.error('Error fetching projects:', error)
      } finally {
        loading.value = false
      }
    }

    onMounted(() => {
      fetchProjects()
    })

    const normalizeString = (str) => {
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    }

    const filteredProjects = computed(() => {
      let filtered = projects.value.filter((project) =>
        normalizeString(project.name.toLowerCase()).includes(
          normalizeString(searchTerm.value.toLowerCase())
        )
      )
      if (statusFilter.value) {
        filtered = filtered.filter((project) => project.status === statusFilter.value)
      }

      return filtered
    })

    const paginatedProjects = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value
      const end = start + itemsPerPage.value
      return filteredProjects.value.slice(start, end)
    })

    const totalPages = computed(() => {
      return Math.ceil(filteredProjects.value.length / itemsPerPage.value)
    })

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++
      }
    }

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--
      }
    }

    return {
      projects,
      searchTerm,
      statusFilter,
      loading,
      lastUpdated,
      currentPage,
      itemsPerPage,

      filteredProjects,
      paginatedProjects,
      totalPages,
      nextPage,
      prevPage
    }
  }
}
</script>
