const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const { ObjectId } = mongoose.Schema.Types;

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  image: { type: String, required: true },
  places: [{ type: ObjectId, required: true, ref: 'Place' }],
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
