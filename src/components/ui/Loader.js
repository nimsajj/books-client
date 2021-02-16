import { CircularProgress } from "@material-ui/core";
import { string } from "prop-types";
import styles from "./styles.module.css";

const Loader = ({ status, props }) =>
  ["initial", "loading"].includes(status) ? (
    <div className={styles.progress}>
      <CircularProgress {...props} />
    </div>
  ) : null;

Loader.propTypes = {
  status: string,
};

Loader.defaultProps = {
  size: 100, // Override default props value
};

export default Loader;
