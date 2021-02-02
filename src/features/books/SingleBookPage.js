import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBooksRequest,
  fetchSingleBookRequest,
  selectSingleBook,
} from "./redux";
import {
  CircularProgress,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Badge,
  Divider,
} from "@material-ui/core";
import { Stars as StarsIcon, Error as ErrorIcon } from "@material-ui/icons";
import { booksStyles as useStyles } from "./styles";

const DateToPublished = ({ dateTime }) => {
  const indexOfSpace = dateTime.indexOf(" ");
  const date = dateTime.slice(0, indexOfSpace);
  const time = dateTime.slice(indexOfSpace);

  return (
    <>
      <b>Publié le </b>
      {date}
      <b> à</b>
      {time}
    </>
  );
};

const SingleBookPage = ({ match }) => {
  const { bookId } = match.params;

  const classes = useStyles();
  const dispatch = useDispatch();

  const book = useSelector(selectSingleBook(bookId));
  const { status, error } = book || {};

  useEffect(() => {
    if (!status) {
      dispatch(fetchBooksRequest());
    }

    console.log("useEffect: ", status);

    if (status === "initial") {
      dispatch(fetchSingleBookRequest(bookId));
    }
  }, [dispatch, bookId, status]);

  const renderCircularProgress = () => {
    if (["initial", "loading"].includes(status)) {
      return (
        <div className={classes.progress}>
          <CircularProgress size={100} />
        </div>
      );
    }
  };

  const renderError = () => {
    if (status === "error") {
      return (
        <Typography align="center" color="error" className={classes.error}>
          <ErrorIcon />
          {error}
        </Typography>
      );
    }
  };

  const renderBook = () =>
    book && (
      <Card className={classes.card_root}>
        {renderCircularProgress()}
        <CardMedia
          className={classes.card_media}
          image={book.img}
          title={book.title}
        />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {book.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
            tincidunt mauris, vitae auctor tortor. Phasellus malesuada tincidunt
            vulputate.
          </Typography>
          <div className={classes.card_badge}>
            <Badge color="secondary" badgeContent={book.rating} showZero>
              <StarsIcon />
            </Badge>
          </div>
          <Divider variant="middle" className={classes.card_divider} />
          <Typography variant="body2" color="textSecondary" gutterBottom>
            <DateToPublished dateTime={book.publishedAt} />
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <b>Nombre de page:</b> {book.totalPages}
          </Typography>
        </CardContent>
      </Card>
    );

  return (
    <div>
      {renderError()}
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        className={classes.grid}
      >
        <Grid item md={6}>
          {renderBook()}
        </Grid>
      </Grid>
    </div>
  );
};

export default SingleBookPage;
