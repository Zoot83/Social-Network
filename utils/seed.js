const connection = require('../config/connection');
const User = require('../models/User');
const Thought = require('../models/Thought');

const userData = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  console.log(User);
  await User.deleteMany({});
  await Thought.deleteMany({});

  await User.collection.insertMany(userData);
  process.exit(0);
});
