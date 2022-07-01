var napFunction5 = function() { 
    this.credit.forEach(e => { emit(e.currency, { cnt: 1, sum: parseFloat(e.balance) }); }); };

var reduceFunction5 = function(key, value) { 
    return { cnt: value.reduce((acc, value) => acc + value.cnt, 0), sum: value.reduce((acc, v) => acc + value.sum, 0)}; };

var finalizeFunction5 = function(key, value) { 
    return { sum: value.sum, avg: value.sum / value.cnt };
 };

printjson(db.people.mapReduce(napFunction5, reduceFunction5, { query: { nationality: "Poland", sex: "Female" }, finalize: finalizeFunction5, out: "mrbalance" }));
printjson(db.mrbalance.find().toArray());

    
