db.peopl.aggregate(
[
    {
        '$project': {
            '_id': 0, 
            'nationality': 1, 
            'weight': 1, 
            'height': 1
        }
    }, {
        '$group': {
            '_id': '$nationality', 
            'min_bmi': {
                '$min': {
                    '$exp': {
                        '$divide': [
                            {
                                '$toDouble': '$weight'
                            }, {
                                '$toDouble': '$height'
                            }
                        ]
                    }
                }
            }, 
            'avg_bmi': {
                '$avg': {
                    '$exp': {
                        '$divide': [
                            {
                                '$toDouble': '$weight'
                            }, {
                                '$toDouble': '$height'
                            }
                        ]
                    }
                }
            }, 
            'max_bmi': {
                '$max': {
                    '$exp': {
                        '$divide': [
                            {
                                '$toDouble': '$weight'
                            }, {
                                '$toDouble': '$height'
                            }
                        ]
                    }
                }
            }
        }
    }
]
)