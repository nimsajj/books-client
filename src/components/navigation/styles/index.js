import { makeStyles } from "@material-ui/core/styles";

export const topMenuStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: theme.palette.common.white,
    textDecoration: "none",
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
}));
