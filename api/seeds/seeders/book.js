import path from 'path';
import csvtojson from 'csvtojson';
import Book from '../../src/models/book';

const csvDir = path.resolve(process.cwd(), 'seeds/csv');

export default async function bookSeeder() {
  const json = await csvtojson().fromFile(`${csvDir}/book.csv`);
  await Book.create(json);
}
