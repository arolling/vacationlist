function Vacation(city, country, season, duration, highlights) {
  this.city = city,
  this.country = country,
  this.season = season,
  this.duration = duration,
  this.highlights = highlights
}

Vacation.prototype.placeName =function() {
  return this.city + ', ' + this.country;
}

Vacation.prototype.timeDuration = function() {
  return this.duration + ' days in the ' + this.season.toLowerCase();
}
// END BUSINESS LOGIC

$(document).ready(function() {
  $("form#new-vacation").submit(function(event) {
    event.preventDefault();
    var inputtedCity = $("input#new-vacation-city").val();
    var inputtedCountry = $("input#new-vacation-country").val();
    var inputtedSeason = $("input#new-vacation-season").val();
    var inputtedDuration = parseInt($("input#new-vacation-duration").val());
    var inputtedHighlights = $("input#new-vacation-highlights").val();

    var newVacation = new Vacation(inputtedCity, inputtedCountry, inputtedSeason, inputtedDuration, inputtedHighlights);
    console.log(newVacation);
    $("ul#places").append('<li><span class="place">' + newVacation.placeName() + '</span></li>');

    $("input#new-vacation-city").val("");
    $("input#new-vacation-country").val("");
    $("input#new-vacation-season").val("");
    $("input#new-vacation-duration").val("");
    $("input#new-vacation-highlights").val("");


  });

}); // End document ready function
