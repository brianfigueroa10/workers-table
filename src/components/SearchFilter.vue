<template>
  <div class="flex justify-between mb-4 w-full">
    <input
      type="search"
      v-model="localSearchTerm"
      placeholder="Buscar Empleado"
      class="w-1/2 px-4 py-2 border rounded-md"
    />
    <div class="flex gap-3">
      <select v-model="localStatusFilter" class="px-4 border rounded-md">
        <option value="">Por Defecto</option>
        <option value="Activo">Activo</option>
        <option value="Licencia">Licencia</option>
        <option value="Retirado">Retirado</option>
      </select>
      <div class="w-min h-full">
        <DatePicker v-model="localSelectedDate" class="h-full rounded-md" />
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

export default {
  props: {
    searchTerm: String,
    statusFilter: String,
    selectedDate: Date
  },
  emits: ['update:searchTerm', 'update:statusFilter', 'update:selectedDate'],
  components: {
    DatePicker
  },
  computed: {
    localSearchTerm: {
      get() {
        return this.searchTerm
      },
      set(value) {
        this.$emit('update:searchTerm', value)
      }
    },
    localStatusFilter: {
      get() {
        return this.statusFilter
      },
      set(value) {
        this.$emit('update:statusFilter', value)
      }
    },
    localSelectedDate: {
      get() {
        return this.selectedDate
      },
      set(value) {
        this.$emit('update:selectedDate', value)
      }
    }
  }
}
</script>
