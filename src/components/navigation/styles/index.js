import { makeStyles } from "@material-ui/core/styles";

export const topMenuStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
    color: theme.palette.common.white,
  },
  offset: theme.mixins.toolbar,
}));

export const leftMenuStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
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
