import $ from 'jquery';

$(document).ready(function() {
  $("#changeTextButton").click(function() {
    const textElement = $("#text");
    if (textElement.text() === "Halo") {
      textElement.text("Nama saya Wina");
    } else if (textElement.text() === "Nama saya Wina") {
      textElement.text("Semangat ya!");
    }
  });
});
