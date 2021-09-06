const mongoose =require('mongoose');

const HomeSchema = new mongoose.Schema({
  titulo: { type: String, required: true }, // esse titulo tem que ser enviado
  descricao: String
});

const HomeModel = mongoose.model('Home', HomeSchema);

module.exports = HomeModel;
