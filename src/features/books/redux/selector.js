export const selectBooksStatus = (state) => state.books.status;
export const selectBooksError = (state) => state.books.error;
export const selectBooks = (state) => state.books.data;

export const selectSingleBook = (bookId) => (state) => {
  const books = selectBooks(state);

  return books.find((book) => book.id === Number(bookId));
};
