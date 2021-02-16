import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GridList } from "@material-ui/core";
import {
  fetchBooksRequest,
  selectBooks,
  selectBooksError,
  selectBooksStatus,
} from "../redux";
import { Loader, Warning } from "../../../components/ui";
import { BookListItem } from "../components";
import styles from "./styles.module.css";

const BooksPage = () => {
  const dispatch = useDispatch();

  const books = useSelector(selectBooks);
  const booksStatus = useSelector(selectBooksStatus);
  const booksError = useSelector(selectBooksError);

  useEffect(() => {
    if (booksStatus === "initial") {
      dispatch(fetchBooksRequest());
    }
  }, [dispatch, booksStatus]);

  const renderBooks = () => (
    <div className={styles.root}>
      <GridList cellHeight={180} cols={4} className={styles.gridList}>
        {books.map((book) => (
          <BookListItem key={book.isbn} {...book} />
        ))}
      </GridList>
    </div>
  );

  return (
    <>
      <Loader status={booksStatus} />
      <Warning message={booksError} color="error" />
      {renderBooks()}
    </>
  );
};

export default BooksPage;
