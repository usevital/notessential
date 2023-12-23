import mongoose from 'mongoose';

mongoose.connect(process.env.DATABASE_CONN)
        .then(r => console.log('Connected to MongoDB!'))
        .catch(e => console.error(e))

