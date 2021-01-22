import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bool, func } from "prop-types";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Divider,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import {
  Error as ErrorIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  LibraryBooksOutlined as LibraryBooksOutlinedIcon,
  LibraryBooks as LibraryBooksIcon,
} from "@material-ui/icons/";
import { leftMenuStyles as useStyles } from "./styles";
import {
  fetchGenresRequest,
  selectGenres,
  selectGenresStatus,
  selectGenresError,
} from "../../features/genres/redux";
import { fetchBooksByGenreRequest } from "../../features/books/redux/action";

const useSelectDataToStore = () => {
  const genresStatus = useSelector(selectGenresStatus);
  const genresError = useSelector(selectGenresError);
  const genres = useSelector(selectGenres);

  return [genres, genresStatus, genresError];
};

const LeftMenu = ({ isOpen, onClose }) => {
  const classes = useStyles();
  const [selectedItem, setSelectedItem] = useState();

  const [genres, genresStatus, genresError] = useSelectDataToStore();

  const dispatch = useDispatch();

  useEffect(() => {
    if (genresStatus === "initial") {
      dispatch(fetchGenresRequest());
    }
  }, [dispatch, genresStatus]);

  const handleClickGenre = (genreId, e) => {
    e.preventDefault();
    if (genresStatus === "succeeded") {
      setSelectedItem(genreId);
      dispatch(fetchBooksByGenreRequest(genreId));
    }
  };

  const renderChevron = () => (
    <div className={classes.toolbar}>
      <IconButton onClick={onClose}>
        {isOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButton>
    </div>
  );

  const renderCircularProgress = () => {
    if (["initial", "loading"].includes(genresStatus)) {
      return (
        <div className={classes.progress}>
          <CircularProgress />
        </div>
      );
    }
  };

  const renderError = () => {
    if (genresStatus === "error") {
      return (
        <Typography align="center" color="error" className={classes.error}>
          <ErrorIcon />
          {genresError}
        </Typography>
      );
    }
  };

  const renderGenres = () => (
    <List>
      {genres.map(({ id, name }) => (
        <ListItem button key={name} selected={selectedItem === id}>
          <ListItemIcon>
            {id % 2 === 0 ? <LibraryBooksOutlinedIcon /> : <LibraryBooksIcon />}
          </ListItemIcon>
          <ListItemText
            primary={name}
            onClick={(e) => handleClickGenre(id, e)}
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <Drawer open={isOpen} onClose={onClose}>
      {renderChevron()}
      <Divider />
      <div className={classes.list} role="menu" onKeyDown={onClose}>
        {renderCircularProgress()}
        {renderError()}
        {renderGenres()}
      </div>
    </Drawer>
  );
};

LeftMenu.propTypes = {
  isOpen: bool.isRequired,
  onClose: func.isRequired,
};

export default LeftMenu;
