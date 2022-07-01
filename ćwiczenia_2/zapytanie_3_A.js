use nbd;

db.peopl.aggregate(
[
    {
        '$project': {
            '_id': 0, 
            'job': 1
        }
    }, {
        '$group': {
            '_id': '$sex', 
            'list_of_jobs': {
                '$addToSet': '$job'
            }
        }
    }
]
)