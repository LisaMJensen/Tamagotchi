// Front end logic.
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Tamagotchi } from './Tamagotchi.js';



let pet = new Tamagotchi("Earl");

pet.setHunger();

//front-end
$(document).ready(function() {



console.log(pet.didYouStarve());

console.log(pet);
console.log(pet.name)
console.log(pet.foodLevel)


    $("#feed").click(function() {
      // event.preventDefault();
      pet.feed();
    });
    // $("#attention").click(function() {
    //   // event.preventDefault();
    //   play();
    // });
    // $("#sleep").click(function() {
    //   // event.preventDefault();
    //   sleep();
    //
    //


  });
// });
