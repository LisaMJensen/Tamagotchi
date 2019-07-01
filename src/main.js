// Front end logic.
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Tamagotchi } from './Tamagotchi.js';



let pet = new Tamagotchi("Earl");

pet.setHunger();
pet.setAttention();
pet.setSleep();
//front-end
$(document).ready(function() {
// event.preventDefault();


console.log(pet.didYouStarve());

console.log(pet);
console.log(pet.name)
console.log(pet.foodLevel)

document.getElementById("visibleFeed").innerHTML = this.foodLevel;

    $("#feed").click(function() {
      // event.preventDefault();
      pet.feed();
    });
    $("#attention").click(function() {
      // event.preventDefault();
      pet.play();
    });
    $("#sleep").click(function() {
      // event.preventDefault();
      pet.sleep();
    //
    //


  });
});
