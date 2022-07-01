printjson(
db.peopl.insertOne({
	"sex" : "Male",
	"first_name" : "Jakub",
	"last_name" : "Tyminski",
	"job" : "Data Scientist",
	"email" : "s24215@pjwstk.edu.pl",
	"location" : {
		"city" : "Warsaw",
		"address" : {
			"streetname" : "Przyokopowa",
			"streetnumber" : "123456"
		}
	},
	"description" : "description for the provided record",
	"height" : "186.00",
	"weight" : "90.00",
	"birth_date" : "1998-03-14T16:10:58Z",
	"nationality" : "Poland",
	"credit" : [
		{
			"type" : "jcb",
			"number" : "4017957170999",
			"currency" : "PLN",
			"balance" : "12345.67"
		}
	]
}
)
)