"use strict";

$(document).ready(function() {
  // add click listener here
  // it should call on fetchJSON()
 return $('#load-cars').on('click', fetchJSON);

  // another way to quickly get info on the page
  // using Handlebars would be better
 // $('.cars').append(
 //   [
 //     "<div>",
 //        "<p>",
 //          "hello",
 //        "</p>",
 //      "</div>"
 //   ].join("")
 // )
});
