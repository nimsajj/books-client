import { makeStyles } from "@material-ui/core";

export const booksStyles = makeStyles((theme) => ({
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
  progress: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2, 1),
  },
  error: {
    display: "inline-flex",
    verticalAlign: "middle",
    padding: theme.spacing(1, 1),
  },
}));
