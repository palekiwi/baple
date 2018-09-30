import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from "../../styles/contact-details-styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import HomeIcon from "@material-ui/icons/Home";

interface ContactGroup {
  contactName?: string;
  email?: string;
  phone?: string;
  address?: string[];
  facebook?: string;
  instagram?: string;
  twitter?: string;
  youtube?: string;
}

type Props = WithStyles<typeof styles> & {
  contact?: ContactGroup[],
};

const ContactDetails: React.SFC<Props> = ({ contact, classes }) => (
  <section className={classes.section}>
    <div className={classes.details}>
      { contact.map((x, i) =>
        <Grid container spacing={32} key={i}>
          <Grid item md={4} xs={12}>
            <Paper className={classes.detailPane}>
              <PhoneIcon className={classes.icon}/>
              <div className={classes.textContent}>
                <Typography className={classes.detailText} variant="title">
                  {x.phone}
                </Typography>
              </div>
            </Paper>
          </Grid>

          <Grid item md={4} xs={12}>
            <Paper className={classes.detailPane}>
              <EmailIcon className={classes.icon}/>
              <div className={classes.textContent}>
                <Typography className={classes.detailText} variant="title">
                  {x.email}
                </Typography>
              </div>
            </Paper>
          </Grid>

          <Grid item md={4} xs={12}>
            <Paper className={classes.detailPane}>
              <HomeIcon className={classes.icon}/>
              <div className={classes.textContent}>
                <div className={classes.address}>
                  {x.address.map((y, i) =>
                    <Typography className={classes.detailText} variant="title">
                      {y}
                    </Typography>,
                  )}
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>,
      )

      }
    </div>
  </section>
);

export default withStyles(styles)(ContactDetails);
