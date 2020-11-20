const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United', 'Norweigan', 'Qantas']
    },
    airport: {
        type: String,
        enum: ['DEN','SMF', 'LAX', 'LHR', 'PDX', 'JFK', 'BNE'],
        default: ['DEN']
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
});