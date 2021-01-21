import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
} from "@material-ui/core";
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "@material-ui/icons/";
import { leftMenuStyles as useStyles } from "./styles";
import { bool, func } from "prop-types";

const LeftMenu = ({ isOpen, onClose }) => {
  const classes = useStyles();

  return (
    <>
      <Drawer open={isOpen} onClose={onClose}>
        <div className={classes.toolbar}>
          <IconButton onClick={onClose}>
            {isOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <div className={classes.list} role="presentation" onKeyDown={onClose}>
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
};

LeftMenu.propTypes = {
  isOpen: bool.isRequired,
  onClose: func.isRequired,
};

export default LeftMenu;
