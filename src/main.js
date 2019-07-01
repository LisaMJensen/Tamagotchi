// import { Tamagotchi } from './Tamagotchi.js';
// import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';

//front-end
$(document).ready(function() {
  
    $("#feed").click(function() {
      // event.preventDefault();
      feed();
    });
    $("#attention").click(function() {
      // event.preventDefault();
      play();
    });
    $("#sleep").click(function() {
      // event.preventDefault();
      sleep();
  });
});
