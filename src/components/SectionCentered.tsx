import * as React from 'react';
import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import HorizontalSplit from './layouts/HorizontalSplit';
import Typography from "@material-ui/core/Typography";

const styles = (theme: Theme) => createStyles({
  section: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: theme.spacing.unit * 3,
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  text: {},
  heading: {},
  subheading: {},
  paragraph: {},
  image: {
    width: '100%'
  }
});

interface Props {
  classes: any
  image: ChildImageSharp
  gradient?: string 
  heading?: string
  subheading?: string
  text?: Array<string>
  before?: any
  after?: any
}

const SectionCentered: React.SFC<Props> = ({classes, before, after, gradient, heading, subheading, text, image}) => (
  <section className={classes.section}>
    <div className={classes.content}>
      {before && before}
      { heading &&
        <Typography variant="headline" className={classes.heading}>
          {heading}
        </Typography>
      }
      { subheading &&
        <Typography variant="subheading" className={classes.subheading}>
          {heading}
        </Typography>
      }
      { text &&
        <div className={classes.text}>
          {text.map((t,i) =>
            <Typography key={i} variant="body2" className={classes.paragraph}>
              {t}
            </Typography>
          )}
        </div>
      }
      {after && after}
    </div>
    { image &&
      <img src={image.childImageSharp.sizes.src} className={classes.image}/>
    }
  </section>
);

export default withStyles(styles)(SectionCentered);
