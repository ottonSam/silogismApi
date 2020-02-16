const Silogismo = require('../models/Silogism');
const Auxiliar = require('./utils/Auxiliar');
const val = require('./utils/Validar');
const Modo = require('./utils/Modo');



module.exports = {
  async store(req, res) {
    let {idSilogismo, proposicaoMaior, proposicaoMenor, conclusao} = req.body;
    if(idSilogismo[2] == 'SIL'){

      //Auxiliares
      var dadosAux = ['valid'],
      listPre = [proposicaoMaior[1], proposicaoMaior[2], proposicaoMenor[1],
      proposicaoMenor[2], conclusao[1], conclusao[2]];
      
      listPreRed = Auxiliar.preRed(proposicaoMaior, proposicaoMenor, conclusao);
      exteTerm = Auxiliar.exteTerm(proposicaoMaior, proposicaoMenor, conclusao);
      termMed = Auxiliar.termMed(proposicaoMaior, proposicaoMenor, exteTerm);
      forcePre = Auxiliar.forcePre(proposicaoMaior[0], proposicaoMenor[0], conclusao[0]);
      
      //Passa as verificações
      errIguais = val.errIguais(proposicaoMaior, proposicaoMenor, conclusao, dadosAux);
      errQuantTerm = val.errQuantTerm(listPreRed.length, dadosAux);
      
      if(termMed.length != 0){  
        errTermMedCon = val.errTermMedCon(termMed[1], conclusao, dadosAux);
        errExtCon = val.errExtCon(listPre,termMed[1], termMed[3], dadosAux);
        errMedUni = val.errMedUni(termMed[2], dadosAux);
      } else {
        dadosAux[0] = 'invalid'
        dadosAux.push('Falta de termo medio') 
      }

      errQuantNeg = val.errQuantNeg(proposicaoMaior[0], proposicaoMenor[0], dadosAux);
      errQuantPart = val.errQuantPart(proposicaoMaior[0], proposicaoMenor[0], dadosAux);
      concForcePre = val.concForcePre(forcePre, dadosAux);
      errAfAfNeg = val.errAfAfNeg(proposicaoMaior[0], proposicaoMenor[0], conclusao[0], dadosAux);

      //Acha modo
      if(dadosAux[0] == 'valid'){
        if(termMed[0] == 'SP'){
          modo = Modo.SP(proposicaoMaior[0], proposicaoMenor[0], conclusao[0], dadosAux);
        }
        if(termMed[0] == 'PP'){
          modo = Modo.PP(proposicaoMaior[0], proposicaoMenor[0], conclusao[0], dadosAux);
        }
        if(termMed[0] == 'SS'){
          modo = Modo.SS(proposicaoMaior[0], proposicaoMenor[0], conclusao[0], dadosAux);
        }
        if(termMed[0] == 'PS'){
          modo = Modo.PS(proposicaoMaior[0], proposicaoMenor[0], conclusao[0], dadosAux);
        }
      }

      //Grava
      silogismo = ({
        idSilogismo,
        proposicaoMaior,
        proposicaoMenor,
        conclusao,
        dadosAux,
      });

      return res.json(silogismo);
    }
    if(idSilogismo[2] == 'RED'){
      let {idSilogismo, proposicaoMaior, proposicaoMenor, conclusao, dadosAux} = req.body;

      listPreRed = Auxiliar.preRedRed(proposicaoMaior, proposicaoMenor, conclusao);

      //Passa as verificações
      errQuantTermRed = val.errQuantTermRed(listPreRed, dadosAux);
      errFigPerRed = val.errFigPerRed(proposicaoMaior[4], proposicaoMenor[5], dadosAux);
      errFigRed = val.errFigRed(proposicaoMaior[3], proposicaoMenor[3], conclusao[3], dadosAux);
      errTerPosRed = val.errTerPosRed(proposicaoMaior, proposicaoMenor, conclusao, dadosAux);

      //Grava
      reducao = ({
        idSilogismo,
        proposicaoMaior,
        proposicaoMenor,
        conclusao,
        dadosAux,
      });
      return res.json(reducao);
      //return res.send(listPreRed);
      }
    }
}