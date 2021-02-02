import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import { Info as InfoIcon, Error as ErrorIcon } from "@material-ui/icons";
import { booksStyles as useStyles } from "./styles";
import {
  fetchBooksRequest,
  selectBooks,
  selectBooksError,
  selectBooksStatus,
} from "./redux";

const BooksList = ({ books }) => {
  const classes = useStyles();

  const renderBooks = () =>
    books.map((book) => (
      <GridListTile key={`${book.isbn}`}>
        <img src={book.img} alt={book.title} />
        <GridListTileBar
          title={book.title}
          subtitle={<span>by: unknow author</span>}
          actionIcon={
            <Link to={`/books/${book.id}`}>
              <IconButton
                aria-label={`info about ${book.isbn}`}
                className={classes.icon}
              >
                <InfoIcon />
              </IconButton>
            </Link>
          }
        />
      </GridListTile>
    ));

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} cols={4} className={classes.gridList}>
        {renderBooks()}
      </GridList>
    </div>
  );
};

const useSelectDataToStore = () => {
  const books = useSelector(selectBooks);
  const booksStatus = useSelector(selectBooksStatus);
  const booksError = useSelector(selectBooksError);

  return [books, booksStatus, booksError];
};

const BooksPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [books, booksStatus, booksError] = useSelectDataToStore();

  useEffect(() => {
    if (booksStatus === "initial") {
      dispatch(fetchBooksRequest());
    }
  }, [dispatch, booksStatus]);

  const renderCircularProgress = () => {
    if (["initial", "loading"].includes(booksStatus)) {
      return (
        <div className={classes.progress}>
          <CircularProgress size={100} />
        </div>
      );
    }
  };

  const renderError = () => {
    if (booksStatus === "error") {
      return (
        <Typography align="center" color="error" className={classes.error}>
          <ErrorIcon />
          {booksError}
        </Typography>
      );
    }
  };

  return (
    <>
      {renderCircularProgress()}
      {renderError()}
      <BooksList books={books} />
    </>
  );
};

export default BooksPage;
