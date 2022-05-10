import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class shifumiService {

  constructor() { }

  NbAlea(){

    return Math.floor(Math.random() * 3);
  }

  cacher(){

    var pseudoInput1 = document.getElementById('pseudoInput1');
    var pseudoInput2 = document.getElementById('pseudoInput2');
    var joueur1bouton = document.getElementById('bouton');
    var contre = document.getElementById('contre');
    var VS = document.getElementById('VS');

    pseudoInput1?.classList.add('cacher');
    pseudoInput2?.classList.add('cacher');
    joueur1bouton?.classList.add('cacher');
    contre?.classList.remove('contre');
    VS?.classList.remove('contre');


  }
  Joueur1Filtre(){

    var joueur1 = document.getElementById('joueur1');
    joueur1?.classList.add('flitre');
  }
  Joueur2Filtre(){

    var joueur2 = document.getElementById('joueur2');
    joueur2?.classList.add('flitre');
  }
  JoueurChoix(choix : string){

   var ChoixDuJoueur = document.getElementById(choix);
   ChoixDuJoueur?.classList.add('choix');
  }

  
}
