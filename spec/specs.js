 describe ('Vacation',function () {
   it ("will create a new vaction with five properties", function() {
    var testVacation = new Vacation ("Vancouver","Canada","Winter", 4, "Hockey Games");
    expect(testVacation.city).to.equal("Vancouver");
    expect(testVacation.country).to.equal("Canada");
    expect(testVacation.season).to.equal("Winter");
    expect(testVacation.duration).to.equal(4);
    expect(testVacation.highlights).to.equal("Hockey Games");
   });
 });
