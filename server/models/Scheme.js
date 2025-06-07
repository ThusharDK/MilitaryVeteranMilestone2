const mongoose = require('mongoose');

const schemeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['education', 'medical', 'housing', 'financial', 'other']
    },
    eligibilityCriteria: [{
        type: String,
        required: true
    }],
    benefits: [{
        type: String,
        required: true
    }],
    requiredDocuments: [{
        type: String,
        required: true
    }],
    applicationProcess: {
        type: String,
        required: true
    },
    validityPeriod: {
        startDate: Date,
        endDate: Date
    },
    status: {
        type: String,
        enum: ['active', 'inactive', 'upcoming'],
        default: 'active'
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Update the updatedAt timestamp before saving
schemeSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const Scheme = mongoose.model('Scheme', schemeSchema);

module.exports = Scheme; 