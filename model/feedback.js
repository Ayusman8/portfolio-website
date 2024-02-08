const mongoose = require('mongoose');
const feedbackSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    rate: {
        type: String,
        require: true
    },
    feedback: {
        type: String,
        require: true
    }
},{
    timestamps: true
});

const Feedback = mongoose.model('Feedback', feedbackSchema);
module.exports = Feedback;