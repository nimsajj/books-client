import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import { Info as InfoIcon, Error as ErrorIcon } from "@material-ui/icons";
import { fetchBooksRequest } from "./redux/action";
import { booksStyles as useStyles } from "./styles";

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
            <IconButton
              aria-label={`info about ${book.isbn}`}
              className={classes.icon}
            >
              <InfoIcon />
            </IconButton>
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
  const books = useSelector((state) => state.books.data);
  const booksStatus = useSelector((state) => state.books.status);
  const booksError = useSelector((state) => state.books.error);

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
