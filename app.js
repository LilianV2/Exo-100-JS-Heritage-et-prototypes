
//      ----- 1 ------

let vehicule = function (couleur, roues, marque ){
    this.couleur = couleur
    this.roues = roues
    this.marque = marque
}

vehicule.prototype.demarrer = function (){
    console.log('Le véhicule à démarré')
}
vehicule.prototype.arreter = function (){
    console.log('Le véhicule s\'est arrêté')
}

//       ------- 2 -------

let velo = function (couleur, roues, marque, rayonRoues, typePeinture){
    vehicule.call(this,  couleur, roues, marque)
    this.rayon = rayonRoues
    this.peinture = typePeinture
}

velo.prototype.monter = function (){
    console.log('Je monte sur mon vélo !')
}

velo.prototype = Object.create(vehicule.prototype)

//     ------- 3 ---------

let voiture = function (couleur, roues, marque, assurance, proprietaire){
    vehicule.call(this, couleur, roues, marque)
    this.assurance = assurance
    this.prop = proprietaire
    this.passerAuCarWash = function (){
        console.log('La voiture est propre')
    }
}

voiture.prototype = Object.create(vehicule.prototype)
console.log(vehicule.prototype)
