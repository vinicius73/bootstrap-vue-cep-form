<template>
  <b-form>
    <b-container>
      <b-row>
        <b-col>
          <b-input-group>
            <b-form-input v-model="model" placeholder="CEP" />
            <b-input-group-append>
              <b-button :disabled="!isValid" @click="save" :variant="isValid ? 'info' : 'danger'">
                <i class="fas fa-save"></i>
                {{ isCreate ? 'Adicionar' : 'Atualizar' }}
              </b-button>
            </b-input-group-append>
          </b-input-group>
        </b-col>
      </b-row>
    </b-container>
  </b-form>
</template>

<script>
import { isValid } from '../support/cep'

export default {
  name: 'CepInput',
  data: () => ({
    model: ''
  }),
  props: {
    value: {
      type: String,
      default: ''
    },
    index: {
      type: Number,
      default: -1
    }
  },
  computed: {
    isCreate () {
      return this.index < 0
    },
    isValid () {
      return isValid(this.model)
    }
  },
  watch: {
    value: 'sync'
  },
  methods: {
    sync () {
      this.model = this.value
    },
    save () {
      this.$emit('input', this.model)
    }
  },
  mounted () {
    this.sync()
  }
}
</script>
