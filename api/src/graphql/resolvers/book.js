import bookModel from '../../models/book';

export default {
  Query: {
    async books() {
      try {
        const booksFetched = await bookModel.find();

        return booksFetched.map(book => ({
          id: book._id,
          title: book.title,
          author: book.author,
          createdAt: new Date(book.createdAt).toISOString(),
        }));
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
