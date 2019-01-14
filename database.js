import mongoose from 'mongoose';

export const initDb = () => {
  mongoose.Promise = global.Promise;
  mongoose.connect(
    'mongodb://localhost/newdb',
    { useNewUrlParser: true }
  );
};
