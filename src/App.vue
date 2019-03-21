<template>
  <div id="app">
    <div class="container">
      <div class="py-5 text-center">
        <h2>CEP Form</h2>
        <p class="lead">
          Um exemplo de interação com API
        </p>
      </div>
    </div>
    <CepInput
      @input="onNew"
      :index="current.index"
      :value="current.value" />

      <div class="container mt-3" v-if="error">
        <b-alert show variant="danger">
          {{ error }}
        </b-alert>
      </div>

    <CepTable
      @delete="onDelete"
      @edit="onEdit"
      v-bind="{ ceps, isLoading }" />
  </div>
</template>

<script>
import CepInput from './components/CepInput.vue'
import CepTable from './components/CepTable.vue'
import { loadCep } from './support/cep'

const original = ['04104-010', '04104-020', '04104-030', '04104-040', '04104-050', '04104-060', '04104-070', '04104-070', '04104-090', '04104-100']

export default {
  name: 'app',
  data: () => ({
    error: false,
    isLoading: true,
    current: {
      value: '',
      index: -1
    },
    ceps: []
  }),
  components: {
    CepInput,
    CepTable
  },
  methods: {
    onDelete (index) {
      const copy = [...this.ceps]
      copy.splice(index, 1)
      this.ceps = copy
    },
    onEdit (index) {
      const val = this.ceps[index]

      this.current = {
        value: val.cep,
        index
      }
    },
    onNew (cep) {
      loadCep(cep)
        .then(data => {
          if (data.erro) {
            this.setError('falha no carregamento...')
            return
          }

          const copy = [...this.ceps]

          if (this.current.index < 0) {
            copy.push(data)
          } else {
            copy[this.current.index] = data
          }

          this.ceps = copy

          this.$nextTick(() => {
            this.current = {
              value: '',
              index: -1
            }
          })
        })
        .catch(e => {
          this.setError(e.message)
        })
    },
    setError (message) {
      this.error = message
      setTimeout(() => {
        this.error = false
      }, 1500)
    }
  },
  mounted () {
    this.isLoading = true

    Promise.all(original.map(loadCep))
      .then(ceps => {
        this.ceps = ceps.filter(row => !row.erro)
      })
      .catch(e => {
        this.setError(e.message)
      })
      .then(() => {
        this.isLoading = false
      })
  }
}
</script>
