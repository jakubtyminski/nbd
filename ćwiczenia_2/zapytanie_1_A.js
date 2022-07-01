[{
 $project: {
  _id: 0,
  sex: 1,
  height: 1,
  weight: 1
 }
}, {
 $group: {
  _id: '$sex',
  avg_weight: {
   $avg: {
    $toDouble: '$weight'
   }
  },
  avg_height: {
   $avg: {
    $toDouble: '$height'
   }
  }
 }
}]