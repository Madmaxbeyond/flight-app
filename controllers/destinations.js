const Flight = require('../models/flight');

module.exports = {
    create,
    new: newDestination
};

function newDestination(req, res) {
    res.render('destinations/new', {title: 'New Destination', id: req.params.id });
}

function create(req, res) {
    Flight.findById(req.params.id, (err, flight) => {
        if (err) return res.redirect(`/flights/${flight._id}`);
        console.log(req.body);
        flight.destinations.push(req.body);
        flight.save(err => {
            res.redirect(`/flights/${flight._id}`);
        });
        
    });
    // console.log(flight.destinations[0].airport, '--------');
}