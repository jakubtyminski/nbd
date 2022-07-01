db.peopl.aggregate(
[
    {
        '$match': {
            'sex': 'Female'
        }
    }, {
        '$project': {
            '_id': 0, 
            'sex': 1, 
            'credit': 1
        }
    }, {
        '$unwind': {
            'path': '$credit'
        }
    }, {
        '$group': {
            '_id': '$credit.currency', 
            'avg_balance': {
                '$avg': {
                    '$toDouble': '$credit.balance'
                }
            }, 
            'sum_balance': {
                '$sum': {
                    '$toDouble': '$credit.balance'
                }
            }
        }
    }
]
)