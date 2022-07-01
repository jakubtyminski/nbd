var mapFunction3 = function() {emit(this.job, 1);};

var reduceFunction3 = function(key, value) {return 1;};

printjson(db.people.mapReduce(mapFunction3, reduceFunction3, {out: 'job'}));
printjson(db.job.find().toArray().map((value) => value._id));
    
