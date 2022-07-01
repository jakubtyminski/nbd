var mapFunction4 = function() {emit (this.nationality, {weight: this.weight, height: this.height});},

var reduceFunction4 = function(key, values) {
    let sumBmi = 0;
    let heighestBmi = 0;
    let lowestBmi = Infinity;

    values.forEach(person => {const heightInMeters = person.height / 100; const bmi = person.weight/(heightInMeters * heightInMeters); sumBmi += bmi;
        
        if (bmi > heighestBmi) heighestBmi = bmi;
        if (bmi < lowestBmi) lowestBmi = bmi;

    });

var finalizeFunction4 = function(key, value) {
    value.avgBmi = value.sumBmi / value.length;
    return value
    }
    
printjson(db.people.mapReduce(mapFunction4, reduceFunction4, {out: "mrBMI"}));
printjson(db.mrBMI.find({}, {"value.avgBmi": 1, "value.lowestBmi": 1, "value.highestBmi": 1}).toArray());
