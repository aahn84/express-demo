let express = require('express')
//similar to <script src="express"></script>
let app = express()

let dogs = ['bowser', 'woof', 'dog3']
let cats = ['meow', 'lexington', 'cat3']

// add two new arrays of your choice
let burgers = ['beef', 'chicken', 'fish', 'mushroom']
let pizzas = ['combo', 'pepperoni', 'cheese']

app.get('/dogs', function(req, res) {
  res.json(dogs)
})

app.get('/cats', function(req, res) {
  res.json(cats)
})

// add two new routes of your choice
app.get('/burgers', function(req, res) {
  res.json(burgers)
})

app.get('/pizzas', function(req, res) {
  res.json(pizzas)
})

app.listen(3000, function() {
  console.log('listening on port 3000')
})
