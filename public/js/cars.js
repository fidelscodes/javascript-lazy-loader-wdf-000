"use strict";

// this is the base API url
let baseURL = "http://mimeocarlisting.azurewebsites.net/api/cars/";

function formatCars(carsJSON) {
  let html = "<div class='row'>";
  // setting this variable to empty string gets rid of 'undefined' showing
  // at the beginning of each new div
  let carHTML = "";

  carsJSON.forEach( carData => {
    let make = carData['Make'];
    let model = carData['Model'];
    let year = carData['Year'];
    carHTML += "<div class='col-md-4 car'><h2>" + make + '</h2><p><strong>Model: ' + model + "</strong></p><p><strong>Year: " + year + "</strong></p></div>";
  });

  html += carHTML;
  html += '</div>';
  return html;
}

function addCarsToDOM(carsJSON) {
  let html = formatCars(carsJSON);
  return $('#cars').append(html);
}

function fetchJSON() {
  let numberOfCars = $('#cars').children().length;
  let url = baseURL + (numberOfCars + 1) + '/3';

  $.ajax({
    url: url,
    contentType: 'application/json',
    dataType: 'jsonp',
    success: (data) => addCarsToDOM(data)
  }).fail(console.error('Error while making ajax request'));
}

