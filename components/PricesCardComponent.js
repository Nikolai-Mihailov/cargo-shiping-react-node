import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  cardHeader: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText,
  },
  whiteText: {
    color: theme.palette.primary.contrastText,
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  starColor: {
    color: "yellow",
  },
}));

export default function PricesCardComponent({ tier }) {
  const classes = useStyles();

  return (
    <Box>
      <CssBaseline />
      <Card>
        <CardHeader
          title={tier.title}
          subheader={tier.subheader}
          titleTypographyProps={{ align: "center" }}
          subheaderTypographyProps={{ align: "center" }}
          action={
            tier.title === "Един месец" ? (
              <StarOutlinedIcon className={classes.starColor} />
            ) : null
          }
          className={classes.cardHeader}
        />
        <CardContent>
          <Box pb={3}>
            <Typography>{tier.freeText}</Typography>
          </Box>

          <Box className={classes.cardPricing}>
            <Typography component="h2" variant="h3">
              {tier.price} лева
            </Typography>
          </Box>

          <ul>
            {tier.description.map((line) => (
              <Typography
                component="li"
                variant="subtitle1"
                align="center"
                key={line}>
                {line}
              </Typography>
            ))}
          </ul>
        </CardContent>
        <CardActions>
          <Button fullWidth variant={tier.buttonVariant} color="secondary">
            {tier.buttonText}
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
