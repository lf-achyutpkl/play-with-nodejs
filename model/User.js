import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const User = new Schema(
  {
    username: {
      type: String
    },
    password: {
      type: String
    }
  },
  {
    collection: 'users'
  }
);

export default mongoose.model('User', User);
