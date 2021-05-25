import mongoose from 'mongoose';

const backgroundSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    description: {
        info: {
            type: String,
            required: true,
        },
        skillProff: [String],
        backFeature: {
            type: String,
            required: true,
        },
        featureInfo: {
            type: String,
            required: true,
        },
        toolProf: {
            type: String,
        },
        vehicleProff: {
            type: String,
        },
    },
});

const Background = mongoose.model('Background', backgroundSchema);

export default Background;
