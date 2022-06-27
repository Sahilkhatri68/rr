import mongoose from 'mongoose';

const Connection = async (username, password) => {
        const URL = `mongodb+srv://dauqu:7388139606@cluster0.wmq7i.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;