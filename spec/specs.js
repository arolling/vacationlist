 describe ('Vacation',function () {
   it ("will create a new vaction with five properties", function() {
    var testVacation = new Vacation ("Vancouver","Canada","Winter", 4, "Hockey Games");
    expect(testVacation.city).to.equal("Vancouver");
    expect(testVacation.country).to.equal("Canada");
    expect(testVacation.season).to.equal("Winter");
    expect(testVacation.duration).to.equal(4);
    expect(testVacation.highlights).to.equal("Hockey Games");
   });

   it ("will create a full place name using a method", function() {
    var testVacation = new Vacation ("Vancouver","Canada","Winter", 4, "Hockey Games");
    expect(testVacation.placeName()).to.equal("Vancouver, Canada");
   });

   it ("will create a user friendly vacation description", function() {
    var testVacation = new Vacation ("Vancouver","Canada","Winter", 4, "Hockey Games");
    expect(testVacation.timeDuration()).to.equal("4 days in the winter");
   });
 });
