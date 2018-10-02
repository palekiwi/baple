import * as React from "react";
import { WithStyles, withStyles } from "@material-ui/core/styles";
import styles from "../../styles/components/category-list-styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ItemSpec, { ItemSpecProps } from "./ItemSpec";

type Props = WithStyles<typeof styles> & {
  heading: string;
  categoryItems: ItemSpecProps[];
};

const CategoryList: React.SFC<Props> = ({ categoryItems, classes }) => (
  <section className={classes.section}>
    <Grid container spacing={32}>
      {
        categoryItems.map((x) =>
        <Grid key={x.heading} item xs={12} md={6}>
          <ItemSpec {...x}/>
        </Grid>,
        )
      }
    </Grid>
  </section>
);

export default withStyles(styles)(CategoryList);
