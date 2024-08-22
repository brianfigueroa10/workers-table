<template>
  <section class="hero mt-24 p-8">
    <div class="container mx-auto text-center">
      <h1 class="text-4xl font-bold mb-4">Crear Empleado</h1>
      <form
        @submit.prevent="handleSubmit"
        action="https://docs.google.com/forms/d/e/1FAIpQLSfPljHMN_WD56QLlm5DdISC5fd5RBnL3O4e4X6iMFDKG5qcfA/formResponse?submit=Submit&usp=pp_url"
        class="flex flex-col gap-5"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <input
            required
            label="Nombre"
            type="text"
            name="entry.1225204072"
            placeholder="Nombre"
            class="border border-cyan-900 rounded-lg px-4 py-2 placeholder:text-gray-600"
          />
          <input
            required
            label="Posición"
            type="text"
            name="entry.1023413421"
            placeholder="Posición"
            class="border border-cyan-900 rounded-lg px-4 py-2 placeholder:text-gray-600"
          />
          <input
            required
            label="Área"
            type="text"
            name="entry.1058537352"
            placeholder="Área"
            class="border border-cyan-900 rounded-lg px-4 py-2 placeholder:text-gray-600"
          />
          <input
            required
            label="Fecha"
            type="date"
            name="entry.951877664"
            class="border border-cyan-900 rounded-lg px-4 py-2"
          />
          <input
            required
            label="Salario"
            type="tel"
            name="entry.1882301822"
            placeholder="Salario"
            class="border border-cyan-900 rounded-lg px-4 py-2 placeholder:text-gray-600"
          />
          <select
            required
            label="Estado"
            name="entry.1759556386"
            class="border border-cyan-900 rounded-lg px-4 py-2"
          >
            <option value="" disabled selected>Seleccione el estado</option>
            <option value="Activo">Activo</option>
            <option value="Licencia">Licencia</option>
            <option value="Retirado">Inactivo</option>
          </select>
          <input
            required
            label="Email"
            type="email"
            name="entry.61018702"
            placeholder="Email"
            class="border border-cyan-900 rounded-lg px-4 py-2 placeholder:text-gray-600"
          />
          <input
            required
            label="Teléfono"
            type="number"
            name="entry.2067299249"
            placeholder="Teléfono"
            class="border border-cyan-900 rounded-lg px-4 py-2 placeholder:text-gray-600"
          />
          <select
            required
            label="Ubicación"
            name="entry.1225947943"
            class="border border-cyan-900 rounded-lg px-4 py-2"
          >
            <option value="" disabled selected>Seleccione la ubicación</option>
            <option value="Oficina Princial">Oficina Principal</option>
            <option value="Sucursal Norte">Sucursal Norte</option>

            <option value="Remoto">Remoto</option>
          </select>
        </div>
        <button type="submit" class="bg-blue-500 text-white rounded-lg px-6 py-2">Enviar</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    async handleSubmit(event) {
      const form = event.target
      const formData = new FormData(form)

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          mode: 'no-cors'
        })

        if (response.ok || response.type === 'opaque') {
          alert('Formulario enviado exitosamente')
          window.location.href = '/workers'
        } else {
          alert('Error al enviar el formulario')
        }
      } catch (error) {
        alert('Error al enviar el formulario')
      }
    }
  }
}
</script>
