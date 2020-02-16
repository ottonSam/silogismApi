module.exports = {
  errIguais(proposicaoMaior, proposicaoMenor, conclusao, dadosAux) {
    if(proposicaoMaior[1] == proposicaoMaior[2]){
      dadosAux[0] = 'invalid'
      dadosAux.push('Dois termos iguais na premissa maior') 
    }
    if(proposicaoMenor[1] == proposicaoMenor[2]){
      dadosAux[0] = 'invalid'
      dadosAux.push('Dois termos iguais na premissa menor')
    }
    if(conclusao[1] == conclusao[2]){
      dadosAux[0] = 'invalid'
      dadosAux.push('Dois termos iguais na conclusão')
    }
  },

  errQuantTerm(listPreRed, dadosAux){
    if(listPreRed != 3){
      dadosAux[0] = 'invalid'
      dadosAux.push('Existem '+listPreRed+' termos no silogismo');
    }
  },

  errTermMedCon(termMed, conclusao, dadosAux){
    if(termMed == conclusao[1] | termMed == conclusao[2]){
      dadosAux[0] = 'invalid'
      dadosAux.push('O termo medio é presente na conclusão');
    }
  },

  errExtCon(listPre,i, termMed, dadosAux){
    let indice = listPre.indexOf(i);
    while(indice >= 0){
      listPre.splice(indice, 1);
      indice = listPre.indexOf(i);
    }
    
    if(listPre[0] == listPre[2] & listPre[1] == listPre[3]){
      if(termMed[0] < termMed[2] | termMed[1] < termMed[3]){
        dadosAux[0] = 'invalid'
        dadosAux.push('A extensão do termo é maior na conclusão que na premissa');
      }
    }
    if(listPre[0] == listPre[3] & listPre[1] == listPre[2]){
      if(termMed[0] < termMed[3] | termMed[1] < termMed[2]){
        dadosAux[0] = 'invalid'
        dadosAux.push('A extensão do termo é maior na conclusão que na premissa');
      }
    }
  },

  errMedUni(ex, dadosAux){
    if(ex[0] == 0 & ex[1] == 0){
      dadosAux[0] = 'invalid'
      dadosAux.push('O termo medio não é tomado como universal');
    }
  },

  errQuantNeg(proposicaoMaior, proposicaoMenor, dadosAux){
    if(proposicaoMaior == 'E' | proposicaoMaior == 'O'){
      if(proposicaoMenor == 'E' | proposicaoMenor == 'O'){
        dadosAux[0] = 'invalid'
        dadosAux.push('De duas premissas Negativas, não existe conclusão logica');
      }
    }
  },

  errQuantPart(proposicaoMaior, proposicaoMenor, dadosAux){
    if(proposicaoMaior == 'I' | proposicaoMaior == 'O'){
      if(proposicaoMenor == 'I' | proposicaoMenor == 'O'){
        dadosAux[0] = 'invalid'
        dadosAux.push('De duas premissas Particulares, não existe conclusão logica');
      }
    }
  },

  concForcePre(forcePre, dadosAux){
    if(forcePre[0] >= forcePre[1]){
      if(forcePre[2] > forcePre[1]){
        dadosAux[0] = 'invalid'
        dadosAux.push('A conclusão não acompanha o premissa mais fraca');
      }
    } else{
      if(forcePre[2] > forcePre[1]){
        dadosAux[0] = 'invalid'
        dadosAux.push('A conclusão não acompanha o premissa mais fraca');
      }
    }
  },

  errAfAfNeg(proposicaoMaior, proposicaoMenor, conclusao, dadosAux){
    if(proposicaoMaior == 'A' | proposicaoMaior == 'I'){
      if(proposicaoMenor == 'A' | proposicaoMenor == 'I'){
        if(conclusao == 'E' | conclusao == 'O'){
          dadosAux[0] = 'invalid'
          dadosAux.push('De duas premissas Afirmativas, não existe conclusão Negativa')
        }
      }
    }
  },

  errQuantTermRed(l, dadosAux){
    if(l.length != 3){
      dadosAux[0] = 'invalid';
      dadosAux.push('Erro na conclusão, numero de termos diferente de 3');
    }
  },

  errFigPerRed(p1, p2, dadosAux){
    if(p1 != p2){
      dadosAux[0] = 'invalid'
      dadosAux.push('A redução não é uma figura perfeita')
    }
  },

  errFigRed(p1, p2, p3, dadosAux){
    if(dadosAux[3] == 'Barabara'){
      if(p1 != 'A' || p2 != 'A' || p3 != 'A'){
        dadosAux[0] = 'invalid'
        dadosAux.push('A redução não tem o modo esperado')
      }
    }
    if(dadosAux[3] == 'Celarent'){
      if(p1 != 'E' || p2 != 'A' || p3 != 'E'){
        dadosAux[0] = 'invalid'
        dadosAux.push('A redução não tem o modo esperado')
      }
    }
    if(dadosAux[3] == 'Darii'){
      if(p1 != 'A' || p2 != 'I' || p3 != 'I'){
        dadosAux[0] = 'invalid'
        dadosAux.push('A redução não tem o modo esperado')
      }
    }
    if(dadosAux[3] == 'Ferio'){
      if(p1 != 'E' || p2 != 'I' || p3 != 'O'){
        dadosAux[0] = 'invalid'
        dadosAux.push('A redução não tem o modo esperado')
      }
    }
  },

  errTerPosRed(p1, p2, p3, dadosAux){
    if(dadosAux[1] == 'Cesare'){
      if(
        p1[4] != p1[2] || p1[5] != p1[1] ||
        p2[4] != p2[1] || p2[5] != p2[2] ||
        p3[4] != p3[1] || p3[5] != p3[2]
        ){
          dadosAux[0] = 'invalid'
          dadosAux.push('A redução não foi montada de maneira adequada')
        }
    }
    if(dadosAux[1] == 'Camestres'){
      if(
        p1[4] != p2[1] || p1[5] != p2[2] ||
        p2[4] != p1[1] || p2[5] != p1[2] ||
        p3[4] != p3[2] || p3[5] != p3[1]
        ){
          dadosAux[0] = 'invalid'
          dadosAux.push('A redução não foi montada de maneira adequada')
        }
    }
    if(dadosAux[1] == 'Festino'){
      if(
        p1[4] != p1[2] || p1[5] != p1[1] ||
        p2[4] != p2[1] || p2[5] != p2[2] ||
        p3[4] != p3[1] || p3[5] != p3[2]
        ){
          dadosAux[0] = 'invalid'
          dadosAux.push('A redução não foi montada de maneira adequada')
        }
    }
    if(dadosAux[1] == 'Darapti'){
      if(
        p1[4] != p1[1] || p1[5] != p1[2] ||
        p2[4] != p2[2] || p2[5] != p2[1] ||
        p3[4] != p3[1] || p3[5] != p3[2]
        ){
          dadosAux[0] = 'invalid'
          dadosAux.push('A redução não foi montada de maneira adequada')
        }
    }
    if(dadosAux[1] == 'Felapton'){
      if(
        p1[4] != p1[1] || p1[5] != p1[2] ||
        p2[4] != p2[2] || p2[5] != p2[3] ||
        p3[4] != p3[1] || p3[5] != p3[2]
        ){
          dadosAux[0] = 'invalid'
          dadosAux.push('A redução não foi montada de maneira adequada')
        }
    }
    if(dadosAux[1] == 'Disamis'){
      if(
        p1[4] != p2[1] || p1[5] != p2[2] ||
        p2[4] != p1[2] || p2[5] != p1[1] ||
        p3[4] != p3[2] || p3[5] != p3[1]
        ){
          dadosAux[0] = 'invalid'
          dadosAux.push('A redução não foi montada de maneira adequada')
        }
    }
    if(dadosAux[1] == 'Datisi'){
      if(
        p1[4] != p1[1] || p1[5] != p1[2] ||
        p2[4] != p2[2] || p2[5] != p2[1] ||
        p3[4] != p3[1] || p3[5] != p3[2]
        ){
          dadosAux[0] = 'invalid'
          dadosAux.push('A redução não foi montada de maneira adequada')
        }
    }
    if(dadosAux[1] == 'Ferison'){
      if(
        p1[4] != p1[1] || p1[5] != p1[2] ||
        p2[4] != p2[2] || p2[5] != p2[1] ||
        p3[4] != p3[1] || p3[5] != p3[2]
        ){
          dadosAux[0] = 'invalid'
          dadosAux.push('A redução não foi montada de maneira adequada')
        }
    }
    if(dadosAux[1] == 'Bamalip'){
      if(
        p1[4] != p2[1] || p1[5] != p2[2] ||
        p2[4] != p1[1] || p2[5] != p1[2] ||
        p3[4] != p3[2] || p3[5] != p3[1]
        ){
          dadosAux[0] = 'invalid'
          dadosAux.push('A redução não foi montada de maneira adequada')
        }
    }
    if(dadosAux[1] == 'Fesapo'){
      if(
        p1[4] != p1[2] || p1[5] != p1[1] ||
        p2[4] != p2[2] || p2[5] != p2[1] ||
        p3[4] != p3[1] || p3[5] != p3[2]
        ){
          dadosAux[0] = 'invalid'
          dadosAux.push('A redução não foi montada de maneira adequada')
        }
    }
    if(dadosAux[1] == 'Fresison'){
      if(
        p1[4] != p1[2] || p1[5] != p1[1] ||
        p2[4] != p2[2] || p2[5] != p2[1] ||
        p3[4] != p3[1] || p3[5] != p3[2]
        ){
          dadosAux[0] = 'invalid'
          dadosAux.push('A redução não foi montada de maneira adequada')
        }
    }
    if(dadosAux[1] == 'Calemes'){
      if(
        p1[4] != p2[1] || p1[5] != p2[2] ||
        p2[4] != p1[1] || p2[5] != p1[2] ||
        p3[4] != p3[2] || p3[5] != p3[1]
        ){
          dadosAux[0] = 'invalid'
          dadosAux.push('A redução não foi montada de maneira adequada')
        }
    }
    if(dadosAux[1] == 'Dimatis'){
      if(
        p1[4] != p2[1] || p1[5] != p2[2] ||
        p2[4] != p1[1] || p2[5] != p1[2] ||
        p3[4] != p3[2] || p3[5] != p3[1]
        ){
          dadosAux[0] = 'invalid'
          dadosAux.push('A redução não foi montada de maneira adequada')
        }
    }
  }
  
}