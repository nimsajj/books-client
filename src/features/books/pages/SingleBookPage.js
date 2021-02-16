import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import {
  fetchBooksRequest,
  fetchSingleBookRequest,
  selectSingleBook,
} from "../redux";
import { Loader, Warning } from "../../../components/ui";
import { BookCard } from "../components/";
import styles from "./styles.module.css";

const SingleBookPage = ({ match }) => {
  const { bookId } = match.params;

  const dispatch = useDispatch();
  const book = useSelector(selectSingleBook(bookId));

  const { status, error } = book || {};

  useEffect(() => {
    if (!status) {
      dispatch(fetchBooksRequest());
    }

    if (status === "initial") {
      dispatch(fetchSingleBookRequest(bookId));
    }
  }, [dispatch, bookId, status]);

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      className={styles.grid}
    >
      <Warning message={error} color="error" />
      <Loader status={status} />
      <Grid item md={6}>
        {status && <BookCard {...book} />}
      </Grid>
    </Grid>
  );
};

export default SingleBookPage;
