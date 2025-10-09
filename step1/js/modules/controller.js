import Formulaire from "./formulaire.js";
import Filtre from "./filtre.js";
import View from "./view.js";

export default class Controller {

constructor(form,filtreid,vue) {
    
    this.formulaire = new Formulaire(form)
    this.filtre = new Filtre(filtreid)
    this.Vue = new View(vue);
}

}