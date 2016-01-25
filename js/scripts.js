function Vacation(city, country, season, duration, highlights, counter) {
  this.city = city,
  this.country = country,
  this.season = season,
  this.duration = duration,
  this.highlights = highlights,
  this.counter = counter
}

Vacation.prototype.placeName =function() {
  return this.city + ', ' + this.country;
}

Vacation.prototype.timeDuration = function() {
  return this.duration + ' days in the ' + this.season.toLowerCase();
}

Vacation.prototype.dynamicClass = function() {
  return this.city + this.counter;
}
// END BUSINESS LOGIC

$(document).ready(function() {
  var counter = 0;
  $("form#new-vacation").submit(function(event) {
    event.preventDefault();
    var inputtedCity = $("input#new-vacation-city").val();
    var inputtedCountry = $("input#new-vacation-country").val();
    var inputtedSeason = $("input#new-vacation-season").val();
    var inputtedDuration = parseInt($("input#new-vacation-duration").val());
    var inputtedHighlights = $("input#new-vacation-highlights").val();
    var newCounter = counter;
    var newVacation = new Vacation(inputtedCity, inputtedCountry, inputtedSeason, inputtedDuration, inputtedHighlights, newCounter);
    console.log(newVacation);
    $("ul#places").append('<li><span class="place">' + newVacation.placeName() + '</span><p><span class="hideme vac-duration" id="' + newVacation.dynamicClass() + '"></span></p> <p><span class="hideme vac-highlights" id="' + newVacation.dynamicClass() + '"> </span></p></li>');
    counter += 1;
    $("input#new-vacation-city").val("");
    $("input#new-vacation-country").val("");
    $("input#new-vacation-season").val("");
    $("input#new-vacation-duration").val("");
    $("input#new-vacation-highlights").val("");

    $(".place").last().click(function() {
      $(".hideme").hide();
      $(".vac-duration#" + newVacation.dynamicClass()).empty().append("Visited for " + newVacation.timeDuration());
      $(".vac-duration#" + newVacation.dynamicClass()).show();
      $(".vac-highlights#" + newVacation.dynamicClass()).empty().append("Recommend: " + newVacation.highlights);
      $(".vac-highlights#" + newVacation.dynamicClass()).show();
    });

  });

}); // End document ready function
