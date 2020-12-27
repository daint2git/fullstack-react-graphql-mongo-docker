import { config } from 'dotenv';
import connectDB from '../src/configs/connectDB';
import bookSeeder from './seeders/book';

config();

connectDB().then(async db => {
  console.info('Starting drop database.');

  db.dropDatabase();

  console.info('Ended drop database.');
  console.info('Data successfully imported.');

  console.info('Starting seed data to database.');

  await bookSeeder();

  console.info('Data successfully imported.');
  console.info('Ended seed data.');

  process.exit();
});
