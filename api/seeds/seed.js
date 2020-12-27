import { config } from 'dotenv';
import connectDB from '../src/configs/connectDB';
import bookSeeder from './seeders/book';

config();

connectDB().then(async () => {
  console.info('Starting seed data to database.');
  console.info('Seeding...');

  await bookSeeder();

  console.info('Data successfully imported');
});
