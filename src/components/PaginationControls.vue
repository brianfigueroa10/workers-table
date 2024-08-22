<template>
  <div class="pagination-controls mt-4 flex justify-center">
    <button
      @click="$emit('prevPage')"
      :disabled="currentPage === 1"
      class="px-4 py-2 mx-2 border rounded-md"
    >
      Anterior
    </button>
    <span class="px-4 py-2">Página {{ currentPage }} de {{ totalPages }}</span>
    <button
      @click="$emit('nextPage')"
      :disabled="currentPage === totalPages"
      class="px-4 py-2 mx-2 border rounded-md"
    >
      Siguiente
    </button>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: Number,
    totalPages: Number
  },
  emits: ['prevPage', 'nextPage']
}
</script>

<style scoped>
.pagination-controls button {
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  cursor: pointer;
}
.pagination-controls button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
