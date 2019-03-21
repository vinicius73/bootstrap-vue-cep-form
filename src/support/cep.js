import axios from 'axios'

const validateRE = [/^[0-9]{5}-[0-9]{3}$/, /^[0-9]{8}$/]

const isValid = value => {
  if ((value || '').length > 0) {
    return validateRE.some(re => re.test(value))
  }

  return false
}

const loadCep = value => {
  const cep = value.replace('-', '')

  return axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    .then(({ data }) => data)
}

export { loadCep, isValid }
