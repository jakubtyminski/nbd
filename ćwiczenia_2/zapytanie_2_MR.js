var mapFunction2 = function()  {this.credit.forEach((i) => emit(i.currency, parseFloat(i.balance)));}

var reduceFunction2 = function(key, value) {return Array.sum(value)};

printjson(db.people.mapReduce(mapFunction2, reduceFunction2, {out: "sum_currency"}));
printjson(db.sum_currency.find().toArray());
    
