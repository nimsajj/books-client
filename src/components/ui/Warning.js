import { Typography } from "@material-ui/core";
import { string } from "prop-types";
import { Error as ErrorIcon, Done as DoneIcon } from "@material-ui/icons";
import styles from "./styles.module.css";

export const Warning = ({ message, color, ...props }) =>
  message ? (
    <Typography
      {...props}
      align="center"
      color={color}
      className={styles.warning}
    >
      {color === "error" ? <ErrorIcon /> : <DoneIcon />}
      {message}
    </Typography>
  ) : null;

Warning.propTypes = {
  message: string,
};

export default Warning;
