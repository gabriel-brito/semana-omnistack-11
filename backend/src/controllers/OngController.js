const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
  async create(request, response) {
    const id = crypto.randomBytes(4).toString('HEX');
    const { 
      city,
      email,
      name,
      uf,
      whatsapp
    } = request.body;

    await connection('ongs').insert({
      city,
      email,
      id,
      name,
      uf,
      whatsapp
    });

    response.json({ id });
  },

  async index(request, response) {
    const ongs = await connection('ongs').select('*');

    response.json(ongs);
  }
}