const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE;
mongoose
  // local database version
  // .connect(process.env.DATABASE_LOCAL, {
  // hosted database version
  .connect(DB)
  .then(() => console.log('DB connection successful!'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App Running on port ${port}...`);
});
