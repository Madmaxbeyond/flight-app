// This is where we render: function newFlight, function deleteFlight, etc.
const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    show,
    new: newFlight,
    create
}



// Not sure about the render function here
function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { title: 'Flight Schedule', flights });
    });
}

function newFlight(req, res) {
    res.render('flights/new', { title: 'Add Flight '});
}

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if(err) return res.render('/flights/new');
        res.redirect(`/flights`);
    }); 
}



function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets) {
            res.render('flights/show', {title: `Details`, flight, tickets});
        });
    });
}

