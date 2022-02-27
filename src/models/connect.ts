import mongoose from 'mongoose'
import config from './../config';

(async () => {
    mongoose.connect(`mongodb://${config.MONGODB_HOST}/${config.MONGODB_NAME}`);
    console.log('se conecto a la base de datos');
})();