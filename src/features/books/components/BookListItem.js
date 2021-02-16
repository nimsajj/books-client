import React from "react";
import { objectOf, object, number, string } from "prop-types";
import { useHistory } from "react-router-dom";
import { GridListTile, GridListTileBar, IconButton } from "@material-ui/core";
import { Info as InfoIcon } from "@material-ui/icons";
import styles from "./styles.module.css";

const BookListItem = ({ id, isbn, title, img, style }) => {
  const history = useHistory();

  const handleRedirectBook = (e, id) => {
    e.preventDefault();
    history.push(`/books/${id}`);
  };

  return (
    <GridListTile style={style}>
      <img src={img} alt={title} />
      <GridListTileBar
        title={title}
        subtitle={<span>by: unknow author</span>}
        actionIcon={
          <IconButton
            aria-label={`info about ${isbn}`}
            onClick={(e) => handleRedirectBook(e, id)}
            className={styles.icon}
          >
            <InfoIcon />
          </IconButton>
        }
      />
    </GridListTile>
  );
};

BookListItem.propTypes = {
  id: number.isRequired,
  isbn: string.isRequired,
  title: string.isRequired,
  img: string,
  totalPages: number,
  rating: string,
  styles: objectOf(object),
};

export default BookListItem;
