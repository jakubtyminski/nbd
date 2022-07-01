var mapWH  = function() {emit (this.sex, {count: 1, weight: this.weight, height: this.height});};

var reduceWH = function(key, values) {
    reducedValues = {count: 0, weight: 0, height: 0};
    for (var i = 0; i < values.length; i++) {
        reducedValues.count += values[i].count;
        reducedValues.weight += values[i].weight;
        reducedValues.height += values[i].height;
    }
    return reducedValues;
 };

 var finalizeWH = function(key, reducedValues) {
    reducedValues.avgWeight = reducedValues.weight/reducedValues.count;
    reducedValues.avgHeight = reducedValues.height/reducedValues.count;
    return reducedValues;
  };

printjson(db.people_conv.mapReduce(mapWH, reduceWH, {out: "MR_avg_height_weight", finalize: finalizeWH}));
printjson(db.mpWeightHeight.find({}, {"value.averageWeight": 1, "value.averageHeight": 1}).toArray());
    
    