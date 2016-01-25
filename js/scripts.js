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
