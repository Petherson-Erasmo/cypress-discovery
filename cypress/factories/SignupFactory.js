const faker = require('faker')
const cpf = require('gerador-validador-cpf')

export default {
  deliver: function () {
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()

    const data = {
      nome: `${firstName} ${lastName}`,
      cpf: cpf.generate(),
      email: faker.internet.email(firstName),
      whatsapp: '22999999999',
      address: {
        postalcode: '28610210',
        street: 'Rua Major Augusto Marques Braga',
        number: '80',
        details: 'casa',
        district: 'Centro',
        city_uf: 'Nova Friburgo/RJ'
      },
      delivery_method: 'Moto',
      cnh: 'cnh-digital.jpeg'
    }
    return data
  }
}
