function descExte(quant) {
  switch(quant){
    case 'A':
      return([1, 0]);
    case 'E':
      return([1, 1]);
    case 'I':
      return([0, 0]);
    case 'O':
      return([0, 1]);
    default:
      return([-1])
  }
}
function achMed(list, e){
  if (list[0] == list[2]){
    var ext = [e[1], e[3], e[4], e[5]],
    ex = [e[0], e[2]]
    return(["SS", list[0], ex, ext])
  }
  else if (list[1] == list[2]){
    var ext = [e[0], e[3], e[4], e[5]],
    ex = [e[1], e[2]]
    
    return(["PS", list[1], ex, ext])
  }
  else if (list[0] == list[3]){
    var ext = [e[1], e[2], e[4], e[5]],
    ex = [e[0], e[3]]
    return(["SP", list[0], ex, ext])
  } 
  else if (list[1] == list[3]){
    var ext = [e[0], e[2], e[4], e[5]],
    ex = [e[1], e[3]]
    return(["PP", list[1], ex, ext])
  }
  else{
    return([])
  }
}
function defForce(ext, p){
  if(ext == 'A'){
    return (p.push(4));
  }
  if(ext == 'E'){
    return (p.push(3));
  }
  if(ext == 'I'){
    return (p.push(2));
  }
  if(ext == 'O'){
    return (p.push(1));
  }
}

module.exports = {
  preRed(proposicaoMaior, proposicaoMenor, conclusao) {
    var listPre = [proposicaoMaior[1], proposicaoMaior[2], proposicaoMenor[1],
      proposicaoMenor[2], conclusao[1], conclusao[2]];
      var listPreRed = listPre.filter( function( elem, index, listPre ) {
        return listPre.indexOf( elem ) === index;
      });
    return(listPreRed);
  },
  preRedRed(proposicaoMaior, proposicaoMenor, conclusao) {
    var listPre = [proposicaoMaior[1], proposicaoMaior[2], proposicaoMenor[1],
    proposicaoMenor[2], conclusao[1], conclusao[2], proposicaoMaior[4], proposicaoMaior[5], 
    proposicaoMenor[4], proposicaoMenor[5], conclusao[4], conclusao[5]];
      
    var listPreRed = listPre.filter( function( elem, index, listPre ) {
        return listPre.indexOf( elem ) === index;
      });
    return(listPreRed);
  },
  exteTerm(proposicaoMaior, proposicaoMenor, conclusao) {
    var quantPre = [proposicaoMaior[0], proposicaoMenor[0], conclusao[0]];
    var e1 = descExte(quantPre[0]), e2 = descExte(quantPre[1]), e3 = descExte(quantPre[2]);
    var exteTerm = [e1[0], e1[1], e2[0], e2[1], e3[0], e3[1]];
    return(exteTerm);
  },
  termMed(proposicaoMaior, proposicaoMenor, e) {
    var listPre = [proposicaoMaior[1], proposicaoMaior[2], proposicaoMenor[1], proposicaoMenor[2]]
    return(achMed(listPre, e));
  },
  forcePre(proposicaoMaior, proposicaoMenor, conclusao){
    var p = [];
    defForce(proposicaoMaior, p);
    defForce(proposicaoMenor, p);
    defForce(conclusao, p);
    return(p);
  }
}