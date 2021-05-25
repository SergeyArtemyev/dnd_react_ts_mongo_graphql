import mongoose from 'mongoose';

const raceSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    'racial traits': {
        abscore: {
            type: String,
            required: true,
        },
        skills: [String],
    },
    description: {
        info: {
            type: String,
            required: true,
        },
        abScInc: {
            type: String,
            required: true,
        },
        age: {
            type: String,
            required: true,
        },
        alignment: {
            type: String,
            required: true,
        },
        size: {
            type: String,
            required: true,
        },
        speed: {
            type: String,
            required: true,
        },
        languages: {
            type: String,
            required: true,
        },
    },
});

const Race = mongoose.model('Race', raceSchema);

export default Race;
