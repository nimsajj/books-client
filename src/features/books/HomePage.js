import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Info as InfoIcon } from "@material-ui/icons";
import {
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
} from "@material-ui/core";
import { fetchBooksRequest } from "./redux/action";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    marginTop: "5em",
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

const BooksList = ({ books }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} cols={4} className={classes.gridList}>
        {books.map((book) => (
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
        ))}
      </GridList>
    </div>
  );
};

const HomePage = () => {
  const booksStatus = useSelector((state) => state.books.status);
  const booksError = useSelector((state) => state.books.error);
  const books = useSelector((state) => state.books.data);

  const dispatch = useDispatch();

  useEffect(() => {
    if (booksStatus === "initial") {
      dispatch(fetchBooksRequest());
    }
  }, [dispatch, booksStatus]);

  switch (booksStatus) {
    case "initial":
    case "loading":
      return "Chargement ...";
    case "succeeded":
      return <BooksList books={books} />;
    case "error":
      return <div>{booksError}</div>;
    default:
      break;
  }
};

export default HomePage;
