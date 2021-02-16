import { string, number } from "prop-types";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Badge,
  Divider,
} from "@material-ui/core";
import { Stars as StarsIcon } from "@material-ui/icons";
import DateToPublished from "./DateToPublished";
import styles from "./styles.module.css";

const BookCard = ({ title, img, rating, publishedAt, totalPages }) => (
  <Card className={styles.card_root}>
    <CardMedia className={styles.card_media} image={img} title={title} />
    <CardContent>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
        tincidunt mauris, vitae auctor tortor. Phasellus malesuada tincidunt
        vulputate.
      </Typography>
      <div className={styles.card_badge}>
        <Badge color="secondary" badgeContent={rating} showZero>
          <StarsIcon />
        </Badge>
      </div>
      <Divider variant="middle" className={styles.card_divider} />
      <Typography variant="body2" color="textSecondary" gutterBottom>
        <DateToPublished dateTime={publishedAt} />
      </Typography>
      <Typography variant="body2" color="textSecondary">
        <b>Nombre de page:</b> {totalPages}
      </Typography>
    </CardContent>
  </Card>
);

BookCard.propTypes = {
  title: string.isRequired,
  img: string,
  totalPages: number,
  rating: string,
  publishedAt: string,
};

export default BookCard;
