const mongoose = require('mongoose');

const SilogismSchema = new mongoose.Schema({
  idSilogismo : {
    type: Array,
    required: true,
  },
  proposicaoMaior : {
    type: Array,
    required: true,
  },
  proposicaoMenor : {
    type: Array,
    required: true,
  },
  conclusao : {
    type: Array,
    required: true,
  },
  dadosAux : {
    type: Array,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Silogism', SilogismSchema);