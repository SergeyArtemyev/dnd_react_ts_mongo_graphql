import connectDB from './config/db.js';
import classes from './sampleData/classes.js';
import races from './sampleData/races.js';
import background from './sampleData/background.js';
import Race from './models/Race.js';
import CharClass from './models/Class.js';
import Background from './models/Background.js';
import dotenv from 'dotenv';

dotenv.config();

connectDB();

const importData = async () => {
    try {
        await Race.insertMany(races);
        await CharClass.insertMany(classes);
        await Background.insertMany(background);

        console.log('Data imported');
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

importData();
