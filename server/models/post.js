const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    data: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Post', PostSchema)