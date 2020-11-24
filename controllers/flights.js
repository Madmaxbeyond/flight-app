// This is where we render: function newFlight, function deleteFlight, etc.

const Flight = require('../models/flight');

module.exports = {
    index,
    // show,
    new: newFlight,
    create
}

function newFlight(req, res) {
    res.render('flights/new');
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { flights });
    });
}

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if(err) return res.render('flights/new');
        res.redirect('/flights');
    }); 
}

// function show(req, res) {
//     Flight.findById(req.params.id, function(err, movie) {
//       res.render('flights/show')  
//     });
// }

