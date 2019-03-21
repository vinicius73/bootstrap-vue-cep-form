<template>
  <div class="container pt-2">
    <b-card>
      <b-table
        :busy="isLoading"
        :items="list"
        :fields="$options.fields"
        class="cep-table" borderless hover>
        <div slot="table-busy" class="text-center text-info">
          <b-spinner class="align-middle" />
        </div>
        <template slot="actions" slot-scope="row">
          <b-button size="sm" class="rounded-circle" variant="info" @click="callEdit(row)">
            <i class="fas fa-edit"></i>
          </b-button>
          <b-button size="sm" class="rounded-circle ml-2" variant="danger" @click="callDelete(row)">
            <i class="fas fa-trash-alt"></i>
          </b-button>
        </template>
      </b-table>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'CepTable',
  fields: ['cep', 'logradouro', 'complemento', { key: 'actions', label: 'Editar informações' }],
  props: {
    isLoading: {
      type: Boolean,
      default: false
    },
    ceps: {
      type: Array,
      default: () => ([])
    }
  },
  computed: {
    list () {
      return this.ceps.map(row => {
        return {
          _rowVariant: 'info',
          ...row
        }
      })
    }
  },
  methods: {
    callDelete (row) {
      this.$emit('delete', row.index)
    },
    callEdit (row) {
      this.$emit('edit', row.index)
    }
  }
}
</script>

<style scoped>
  .cep-table {
    font-size: 0.9em;
  }
  .cep-table >>> th {
    color: #aaa;
    text-transform: uppercase;
  }
  .cep-table >>> tbody tr {
    border-bottom: 5px solid #fff;
  }
  .cep-table >>> tbody tr td:last-child {
    border-radius: 0 10% 10% 0;
  }
  .cep-table >>> tbody tr td:first-child {
    border-radius: 10% 0 0 10%;
  }
</style>
