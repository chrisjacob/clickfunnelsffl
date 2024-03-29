import React from "react";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Chip from "@material-ui/core/Chip";
import Confetti from "./confetti.js"; // https://daniel-lundin.github.io/react-dom-confetti/
import Countdown from "./Countdown.js"; // https://medium.com/@kristin_baumann/react-countdown-6455838b6faf
import ScriptTag from 'react-script-tag';
// import ElevateAppBar from "./ElevateAppBar.js";

let theme2 = createMuiTheme();
theme2 = responsiveFontSizes(theme2);

//const currentDate = new Date();
//const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
const tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

// cf_affiliate_id=831693&affiliate_id=831693&aff_sub=freeforlifefunnel&aff_sub2=
const cf_affiliate_id = window.getAllUrlParams().cf_affiliate_id || "831693";
const affiliate_id = window.getAllUrlParams().affiliate_id || "831693";
const aff_sub = window.getAllUrlParams().aff_sub || "freeforlifefunnel";
const aff_sub2 = window.getAllUrlParams().aff_sub2 || "";
const affiliatestring = "?cf_affiliate_id="+cf_affiliate_id+"&affiliate_id="+affiliate_id+"&aff_sub="+aff_sub+"&aff_sub2="+aff_sub2;

// gleam=kvVlp
const gleam = window.getAllUrlParams().gleam || "kvVlp";

// https://daniel-lundin.github.io/react-dom-confetti/
const confettiConfig = {
  angle: 90,
  spread: 45,
  startVelocity: "45",
  elementCount: 50,
  dragFriction: 0.1,
  duration: 3000,
  stagger: 0,
  width: "10px",
  height: "10px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  boomleft: {
    position: "fixed !important",
    bottom: "0",
    left: "75%",
    zIndex: "10"
  },
  boomright: {
    position: "fixed !important",
    bottom: "0",
    left: "25%",
    zIndex: "10"
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  logo: {
    width: "auto",
    minWidth: "0",
    maxWidth: "100%",
    maxHeight: "64px",
    borderRadius: "100%"
  },
  imageFormLogo: {
    width: "170px",
    height: "170px",
    margin: "0 auto",
    display: "block"
  },
  rootFacebook: {
    flexGrow: 1,
    maxWidth: "450px",
    margin: "0 auto 32px auto"
  },
  rootFacebook2: {
    flexGrow: 1,
    margin: "32px auto",
    borderRadius: "15px",
    background: "linear-gradient(-230deg, #a24bcf, #4b79cf, #4bc5cf)",
    backgroundSize: "600% 600%",
    webkitAnimation: "Gradient 20s ease infinite",
    mozAnimation: "Gradient 20s ease infinite",
    animation: "Gradient 20s ease infinite",
    boxShadow: "inset 2px 2px 0 0 rgba(0, 0, 0, 0.2)"
  },
  facebookBox: {
    position: "relative",
    backgroundColor: "#fff",
    borderRadius: "15px",
    padding: "8px 12px",
    minHeight: "48px",
    boxShadow: "2px 2px 0 0 rgba(0, 0, 0, 0.2)"
  },
  logoBox: {
    minWidth: "0",
    paddingTop: "0",
    paddingBottom: "0",
    paddingRight: "18px",
    textAlign: "right"
  },
  logoGrid: {
    maxWidth: "82px"
  },
  fbgrouplink: {
    textDecoration: "underline"
  },
  pLike: {
    paddingBottom: theme.spacing(1)
  },
  arrowLeft: {
    width: "0px",
    height: "0px",
    borderTop: "10px solid transparent",
    borderBottom: "10px solid transparent",
    borderRight: "10px solid #fff",
    position: "absolute",
    left: "-10px",
    top: "calc(50% - 10px)"
  },
  headline: {
    color: "#fff",
    padding: "24px 8px 0 8px",
    maxWidth: "900px",
    lineHeight: "1.5",
    textAlign: "center",
    margin: "0 auto",
    textShadow: "2px 2px 0 rgba(0,0,0,0.2)"
  },
  subheadline: {
    color: "#fff",
    padding: "16px 8px 40px 8px",
    maxWidth: "900px",
    lineHeight: "1.5",
    textAlign: "center",
    margin: "0 auto",
    textShadow: "2px 2px 0 rgba(0,0,0,0.2)",
    fontWeight: "normal"
  },
  nowrap: {
    whiteSpace: "nowrap"
  },
  p1: {
    marginBottom: theme.spacing(1)
  },
  p2: {
    marginBottom: theme.spacing(2)
  },
  p2b: {
    maxWidth: "768px",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2)
  },
  p2bc: {
    maxWidth: "768px",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    textAlign: "center"
  },
  p2b2: {
    maxWidth: "768px",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  p2b3: {
    maxWidth: "768px",
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2)
  },
  stepperContainer: {
    paddingLeft: "0",
    paddingRight: "0"
  },
  cardContent: {
    padding: theme.spacing(1)
  },
  actionsContainer: {
    marginBottom: theme.spacing(2)
  },
  resetContainer: {
    maxWidth: "810px",
    margin: "0 auto 16px auto",
    borderRadius: "15px",
    padding: "16px !important",
    boxShadow: "2px 2px 0 0 rgba(0, 0, 0, 0.2) !important"
  },
  card: {
    maxWidth: "768px",
    marginBottom: theme.spacing(2)
  },
  card2: {
    maxWidth: "444px",
    marginBottom: theme.spacing(2)
  },
  imageCard: {
    maxWidth: "100%"
  },
  imageCard75: {
    maxWidth: "75%",
    margin: "0 auto",
    display: "block",
    borderRadius: "10px"
  },
  hidden: {
    display: "none"
  },
  chip: {
    marginBottom: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}));


function Step7() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography className={classes.p2b} variant="h5" component="p">
        When You <em>Buy ClickFunnels</em> OR You <em>Upgrade To Funnel Builder Secrets</em> Under My Affiliate Link <strong>(By Clicking The Links Below)</strong>...
      </Typography>

      <Typography className={classes.p2b} variant="h5" component="p">
        Then I'm Going To GIVE To You The <em>BIGGEST</em>, <strong>MOST EPIC</strong>, <u>MOST VALUABLE</u> ClickFunnels <strong><u>BONUES STACK</u></strong> On This Planet!!!
      </Typography>

      <Typography className={classes.p2b} variant="h5" component="p">
        ( It's My Way Of Saying <em>THANK YOU!</em>{" "}<span role="img" aria-label="face with heart eyes">
          😍
        </span>{" "})
      </Typography>

      <Typography className={classes.p2b} variant="h5" component="p">
        <span role="img" aria-label="tick">
          ✅
        </span>{" "}<strong>Buy ClickFunnels ($97/mth or $297/mth) And You Get...</strong>
      </Typography>

      <Card className={classes.card}>
        <CardActionArea>
          <CardContent className={classes.cardContent}>
            <Link
              href={"https://signup.clickfunnels.com/free-trial"+affiliatestring}
              target="_blank"
            >
              <img
                className={classes.imageCard}
                src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/LhU3-clickfunnels-marketing-funnels-made-easy-offer-1.jpg"
                alt="Clickfunnels - Quickly Build Smart Sales Funnels That Convert! Actionetics - Create Smart Autoresponders Action Funnels! Backpack - Run Smart Affiliate Programs Inside Your Funnels!"
              />
            </Link>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            href={"https://signup.clickfunnels.com/free-trial"+affiliatestring}
            target="_blank"
          >
            Get ClickFunnels
          </Button>
        </CardActions>
      </Card>

      <Card className={classes.card}>
        <CardActionArea>
          <CardContent className={classes.cardContent}>
            <Link
              href={"https://signup.clickfunnels.com/free-trial"+affiliatestring}
              target="_blank"
            >
              <img
                className={classes.imageCard}
                src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/ayg_-clickfunnels-offer-value-2.jpg"
                alt="EVERYTHING you get with your free trial today!"
              />
            </Link>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            href={"https://signup.clickfunnels.com/free-trial"+affiliatestring}
            target="_blank"
          >
            Get ClickFunnels
          </Button>
        </CardActions>
      </Card>

      <Card className={classes.card}>
        <CardActionArea>
          <CardContent className={classes.cardContent}>
            <Link
              href={"https://signup.clickfunnels.com/free-trial"+affiliatestring}
              target="_blank"
            >
              <img
                className={classes.imageCard}
                src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/ZzhN-clickfunnels-signup-video-3.jpg"
                alt="ClickFunnels - Signup Video"
              />
            </Link>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            href={"https://signup.clickfunnels.com/free-trial"+affiliatestring}
            target="_blank"
          >
            Get ClickFunnels
          </Button>
        </CardActions>
      </Card>

        <Typography className={classes.p2b} variant="h5" component="p">
          . <br />
          <br />
          . <br />
          <br />
          . <br />
        <strong>... OR ...</strong>
        </Typography>


      <Typography className={classes.p2b} variant="h5" component="p">
        <span role="img" aria-label="tick">
          ✅
        </span>{" "}<strong>Go-All-In And Upgrade To Funnel Builder Secrets (6-12 Months ClickFunnels For FREE) And You Get...</strong>
      </Typography>

      <Card className={classes.card}>
        <CardActionArea>
          <CardContent className={classes.cardContent}>
            <Link
              href={"https://app.clickfunnels.com/funnel_builder_secrets"+affiliatestring}
              target="_blank"
            >
              <img
                className={classes.imageCard}
                src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/9e8f-funnel-builder-secrets-everything-you-get-1.jpg"
                alt="Funnel Builder Secrets - Everything You Get!"
              />
            </Link>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            href={"https://app.clickfunnels.com/funnel_builder_secrets"+affiliatestring}
            target="_blank"
          >
            Get Funnel Builder Secrets
          </Button>
        </CardActions>
      </Card>

      <Card className={classes.card}>
        <CardActionArea>
          <CardContent className={classes.cardContent}>
            <Link
              href={"https://app.clickfunnels.com/funnel_builder_secrets"+affiliatestring}
              target="_blank"
            >
              <img
                className={classes.imageCard}
                src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/S1Ql-funnel-builder-secrets-pricing-2.jpg"
                alt="Funnel Builder Secrets - When you Invest Today You Get..."
              />
            </Link>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            href={"https://app.clickfunnels.com/funnel_builder_secrets"+affiliatestring}
            target="_blank"
          >
            Get Funnel Builder Secrets
          </Button>
        </CardActions>
      </Card>

      <Card className={classes.card}>
        <CardActionArea>
          <CardContent className={classes.cardContent}>
            <Link
              href={"https://app.clickfunnels.com/funnel_builder_secrets"+affiliatestring}
              target="_blank"
            >
              <img
                className={classes.imageCard}
                src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/qhXp-funnel-builder-secrets-video-3.jpg"
                alt="Funnel Builder Secrets - Signup Video"
              />
            </Link>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            href={"https://app.clickfunnels.com/funnel_builder_secrets"+affiliatestring}
            target="_blank"
          >
            Get Funnel Builder Secrets
          </Button>
        </CardActions>
      </Card>

      <Typography className={classes.p2b} variant="h5" component="p">
        . <br />
        <br />
        . <br />
        <br />
        . <br />
      <strong>... BUY NOW, AND I'LL GIVE YOU ALL THIS ...</strong>
      </Typography>

      <ThemeProvider theme={theme2}>
        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="tick">
            ✅
          </span>{" "}<strong>Affiliate Teams Inner Circle <span class="red">(Value $49/mth | $588/yr)</span></strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
        <img
          className={classes.imageCard75}
          src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/eM2j-affiliateteams-inner-circle.jpg"
          alt="Affiliate Teams Inner Circle"
        />
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          Within the Affiliate Teams community there is a <u>Private Inner Circle.</u>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          Behind closed doors the Inner Circe members go deep into discussing <strong>strategy, tactics &amp; business.</strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          It's a <em>small and personal group</em>, of highly motivated people driven to GROW their businesses with ClickFunnels.
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <u>To gain access you have 3 options:</u>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <strong>1. Buy your way in...</strong> at $49/mth.
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <strong>2. Earn your way in...</strong> all Super Affiliates (100+ Sales) get a free invite.
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <strong>3. Sneak your way in...</strong> via this ClickFunnels Stack BONUS!
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          You'll get FREE Access to the Affiliate Teams Inner Circle, so long as you <strong>remain an active ClickFunnels customer</strong> under a “ClickFunnels FREE-FOR-LIFE Funnel” affiliate.
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          With regular accountability calls and masterminds this exclusive group will give you <em>the edge</em> you've been searching for!
        </Typography>

      <Typography className={classes.p2b} variant="h5" component="p">
        . <br />
        <br />
        . <br />
        <br />
        . <br />
      </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="tick">
            ✅
          </span>{" "}<strong>Tier5 Mega Software Bundle <span class="red">(Value $9,384/yr)</span></strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
        <img
          className={classes.imageCard75}
          src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/aw8E-tier5-mega-software-bundle.jpg"
          alt="Tier5 Mega Software Bundle"
        />
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          This bonus is a GAME CHANGER, and will <strong>single-handedly pay for your ClickFunnels payment.</strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          As part of the Tier5 Mega Software Bundle you’ll be getting access to the following software products:
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="thumbs up">
            👍
          </span>{" "}<a href="https://www.robocontact.io/" target="_blank"><strong>RoboContact</strong></a> - Lets you target any location and keyword and the software will build you a list of leads and even do the cold outreach for you  <strong><span class="red">(Value $297/mo)</span></strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="thumbs up">
            👍
          </span>{" "}<a href="https://www.domainleads.io/" target="_blank"><strong>DomainLeads</strong></a> - This software gets you fresh leads daily from anyone that's registered a domain name <strong><span class="red">(Value $197/mo)</span></strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="thumbs up">
            👍
          </span>{" "}<a href="https://about.invoicingyou.com/" target="_blank"><strong>InvoicingYou</strong></a> - Simple yet powerful invoicing software that gives your clients an easy way to pay you online for your products or services <strong><span class="red">(Value $97/mo)</span></strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="thumbs up">
            👍
          </span>{" "}<a href="https://about.amagiczap.com/" target="_blank"><strong>Magic Zap</strong></a> - Create custom personalized sales pages and fire off automations when people visit your site  <strong><span class="red">(Value $97/mo)</span></strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="thumbs up">
            👍
          </span>{" "}<a href="https://www.usestickyreviews.com/" target="_blank"><strong>Sticky Reviews</strong></a> - A social proof software that displays real reviews from your customers. Increases conversions by over 15% <strong><span class="red">(Value $47/mo)</span></strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="thumbs up">
            👍
          </span>{" "}<a href="https://www.uselinkwizard.com/" target="_blank"><strong>Link Wizard</strong></a> - A link tracking software that lets you see where your traffic is coming from so you can understand what is working for you  <strong><span class="red">(Value $47/mo)</span></strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          You’re getting the <u>full versions</u> of each of these software products, which if you purchased separately would cost you <strong><span class="red">$9,384 per year.</span></strong>
        </Typography>

      <Typography className={classes.p2b} variant="h5" component="p">
        . <br />
        <br />
        . <br />
        <br />
        . <br />
      </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="tick">
            ✅
          </span>{" "}<strong>CF Share Funnel Library White Label Rights <span class="red">(Value $497)</span></strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
        <img
          className={classes.imageCard75}
          src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/XYzD-cf-share-funnel-library2.jpg"
          alt="CF Share Funnel Library White Label Rights"
        />
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          The best way to succeed with ClickFunnels <strong><em>FAST</em></strong> is to copy proven share funnels into your account.
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          I’ve put together a list of <strong>46 different share funnels</strong>, including several <u>million dollar share funnels</u>, as part of my CF Funnel Library.
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          Study how these mega successful funnels work, and copy the best-of-the-best.
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          Speaking of the best... one of the best ways to <u>make a lot of money</u> as a ClickFunnels affiliate is to use share funnels as a <em>lead magnet or bonus</em>.
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          With the <strong>white-label rights</strong>, you’ll be able to add your own affiliate share funnel links into this document, and use it as your own lead magnet or ClickFunnels bonus.
        </Typography>

      <Typography className={classes.p2b} variant="h5" component="p">
        . <br />
        <br />
        . <br />
        <br />
        . <br />
      </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="tick">
            ✅
          </span>{" "}<strong>Lifetime “ClickFunnels Stack” Updates <span class="red">(Value PRICELESS)</span></strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
        <img
          className={classes.imageCard75}
          src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/z6EL-updates-for-life-clickfunnels-stack.jpg"
          alt="Lifetime ClickFunnels Stack Updates"
        />
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          This stack is just getting started!
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          There are <strong>BIG PLANS</strong> to continue to <em>GROW THIS STACK</em> with products <u>PURCHASED &amp; MADE</u> just for YOU.
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          ...and you will get it ALL FOR FREE — <strong>FOREVERRRRR!!!</strong>
        </Typography>

      </ThemeProvider>

{/*
https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/FUF_-updates-for-life-affiliate-stack.jpg
https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/NPeB-updates-for-life-traffic-stack.jpg
*/}

      <Typography className={classes.p2b} variant="h5" component="p">
        . <br />
        <br />
        . <br />
        <br />
        . <br />
      </Typography>

      <ThemeProvider theme={theme2}>
        <Typography className={classes.p2b} variant="h5" component="p">
          <strong>The Ultimate ClickFunnels BONUS STACK</strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="tick">
            ✅
          </span>{" "}Affiliate Teams Inner Circle <span class="red"><strong>(Value $588/yr)</strong></span>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="tick">
            ✅
          </span>{" "}Tier5 Mega Software Bundle <span class="red"><strong>(Value $9,384/yr)</strong></span>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="tick">
            ✅
          </span>{" "}CF Share Funnel Library White Label Rights <span class="red"><strong>(Value $497)</strong></span>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="tick">
            ✅
          </span>{" "}Lifetime “ClickFunnels Stack” Updates <span class="red"><strong>(Value PRICELESS)</strong></span>
        </Typography>
        <Typography className={classes.p2b} variant="h3" component="p">
          <strong><u>TOTAL VALUE:</u></strong> <span class="red"><strong>$9,972/yr + $497</strong></span>
        </Typography>
      </ThemeProvider>

      <ThemeProvider theme={theme2}>
        <Typography className={classes.p2b} variant="h5" component="p">
          When you <em>buy ClickFunnels</em> OR you <em>upgrade to Funnel Builder Secrets</em> under my affiliate link <strong>(by clicking the links below)</strong>...
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          Your email address will show up in my affiliate dashboard and I will email to you The Ultimate ClickFunnels BONUS STACK!
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          . <br />
          <br />
          . <br />
          <br />
          . <br />
        ... It's Your Choice:
        </Typography>
      </ThemeProvider>

        <Typography className={classes.p2b} variant="h5" component="p">
        <strong>GET CLICKFUNNELS</strong>
        </Typography>
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent className={classes.cardContent}>
            <Link
              href={"https://signup.clickfunnels.com/free-trial"+affiliatestring}
              target="_blank"
            >
              <img
                className={classes.imageCard}
                src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/B_oy-clickfunnels-ecover.jpg"
                alt="Get ClickFunnels"
              />
            </Link>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            href={"https://signup.clickfunnels.com/free-trial"+affiliatestring}
            target="_blank"
          >
            Get ClickFunnels
          </Button>
        </CardActions>
      </Card>

        <Typography className={classes.p2b} variant="h5" component="p">
          <br /><br />
        <strong>... OR ...</strong>
          <br /><br />
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
        <strong>GET FUNNEL BUILDER SECRETS</strong>
        </Typography>
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent className={classes.cardContent}>
            <Link
              href={"https://app.clickfunnels.com/funnel_builder_secrets"+affiliatestring}
              target="_blank"
            >
              <img
                className={classes.imageCard}
                src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/Qd3_-funnel-builder-secrets-ecover.jpg"
                alt="Get Funnel Builder Secrets"
              />
            </Link>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            href={"https://app.clickfunnels.com/funnel_builder_secrets"+affiliatestring}
            target="_blank"
          >
            Get Funnel Builder Secrets
          </Button>
        </CardActions>
      </Card>

      <ThemeProvider theme={theme2}>
        <Typography className={classes.p2b} variant="h5" component="p">
          . <br />
          <br />
          . <br />
          <br />
          . <br />
        </Typography>
      </ThemeProvider>

      <Typography className={classes.p2b} variant="h5" component="p">
        Ready for the next stack? (...it's the ROCKET FUEL to LAUNCHING YOUR NEXT FUNNEL)
      </Typography>

    </React.Fragment>
  );
}

function Step8() {
  const classes = useStyles();

  return (
    <React.Fragment>

      <Typography className={classes.p2b} variant="h5" component="p">
        When You <em>Buy ONE FUNNEL AWAY CHALLENGE (via Affiliate Bootcamp)</em> Under My Affiliate Link <strong>(By Clicking The Links Below)</strong>...
      </Typography>

      <Typography className={classes.p2b} variant="h5" component="p">
        Then I'm Going To GIVE To You The <em>BIGGEST</em>, <strong>MOST EPIC</strong>, <u>MOST VALUABLE</u> Affiliate <strong><u>BONUES STACK</u></strong> On This Planet!!!
      </Typography>

      <Typography className={classes.p2b} variant="h5" component="p">
        ( It's My Way Of Saying <em>THANK YOU! ... Again!</em>{" "}<span role="img" aria-label="face with heart eyes">
          😍
        </span>{" "})
      </Typography>

      <Typography className={classes.p2b} variant="h5" component="p">
        P.S Buying the One Funnel Away Challenge <em>via Affiliate Bootcamp</em> gives you the <strong>BEST OFFER</strong> because you get <u>3 Awesome Affiliate Bootcamp Bonuses <strong>(for FREE!)</strong></u>
      </Typography>

      <Typography className={classes.p2b} variant="h5" component="p">
        <span role="img" aria-label="tick">
          ✅
        </span>{" "}<strong>Buy ONE FUNNEL AWAY CHALLENGE (via Affiliate Bootcamp) And You Get...</strong>
      </Typography>

      <Card className={classes.card}>
        <CardActionArea>
          <CardContent className={classes.cardContent}>
            <Link
              href={"https://affiliatebootcamp.com/onefunnelaway"+affiliatestring}
              target="_blank"
            >
              <img
                className={classes.imageCard}
                src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/_sWE-ofa-header-1.jpg"
                alt="One Funnel Away Challenge - Imagine Russell Brunson TRAINING You For 30 Days, and helping you launch your first (or next) funnel, (with DAILY TRAINING and LIVE COACHING from two of his Two Comma Club coaches) ...For Just $100"
              />
            </Link>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            href={"https://affiliatebootcamp.com/onefunnelaway"+affiliatestring}
            target="_blank"
          >
            Get One Funnel Away Challenge (via Affilate Bootcamp!)
          </Button>
        </CardActions>
      </Card>

      <Card className={classes.card}>
        <CardActionArea>
          <CardContent className={classes.cardContent}>
            <Link
              href={"https://affiliatebootcamp.com/onefunnelaway"+affiliatestring}
              target="_blank"
            >
              <img
                className={classes.imageCard}
                src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/PMSA-ofa-ecovers-2.jpg"
                alt="One Funnel Away Challenge - Bonus Products"
              />
            </Link>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            href={"https://affiliatebootcamp.com/onefunnelaway"+affiliatestring}
            target="_blank"
          >
            Get One Funnel Away Challenge (via Affilate Bootcamp!)
          </Button>
        </CardActions>
      </Card>

      <Card className={classes.card}>
        <CardActionArea>
          <CardContent className={classes.cardContent}>
            <Link
              href={"https://affiliatebootcamp.com/onefunnelaway"+affiliatestring}
              target="_blank"
            >
              <img
                className={classes.imageCard}
                src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/swqH-ofa-affiliates-stack-4.jpg"
                alt="One Funnel Away Challenge - Stack $100"
              />
            </Link>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            href={"https://affiliatebootcamp.com/onefunnelaway"+affiliatestring}
            target="_blank"
          >
            Get One Funnel Away Challenge (via Affilate Bootcamp!)
          </Button>
        </CardActions>
      </Card>

      <Card className={classes.card}>
        <CardActionArea>
          <CardContent className={classes.cardContent}>
            <Link
              href={"https://affiliatebootcamp.com/onefunnelaway"+affiliatestring}
              target="_blank"
            >
              <img
                className={classes.imageCard}
                src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/QR5p-ofa-video-3.jpg"
                alt="One Funnel Away Challenge - Video"
              />
            </Link>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            href={"https://affiliatebootcamp.com/onefunnelaway"+affiliatestring}
            target="_blank"
          >
            Get One Funnel Away Challenge (via Affilate Bootcamp!)
          </Button>
        </CardActions>
      </Card>

      <Typography className={classes.p2b} variant="h5" component="p">
        . <br />
        <br />
        . <br />
        <br />
        . <br />
      <strong>... BUY NOW, AND I'LL GIVE YOU ALL THIS ...</strong>
      </Typography>

      <ThemeProvider theme={theme2}>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="tick">
            ✅
          </span>{" "}<strong>Lifetime Recurring Affiliate Programs List White Label Rights <span class="red">(Value $297)</span></strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
        <img
          className={classes.imageCard75}
          src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/7K1D-affiliate-stack-ultimate-list-of-lifetime-recurring-commissions-2.jpg"
          alt="Lifetime Recurring Affiliate Programs List White Label Rights"
        />
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
            I’ve been maintaining a Google Sheet that currently contains a list of <strong>130 Lifetime Recurring Affiliate Programs.</strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
            It’s the <u>LARGEST list of its kind</u> and I'm <em>constantly updating it</em> as I find new affiliate programs.
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
            With the <u>white-label rights</u> to this document, you can pass it off as <strong>your own</strong> and add links back to your own site if you wish.
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
            It also works <em>really well</em> as a lead magnet or as a resource <u>you can give away</u> on your blog or Facebook group.
        </Typography>


      <Typography className={classes.p2b} variant="h5" component="p">
        . <br />
        <br />
        . <br />
        <br />
        . <br />
      </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="tick">
            ✅
          </span>{" "}<strong>3 High Converting OFA Share Funnels <span class="red">(Value $197)</span></strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
        <img
          className={classes.imageCard75}
          src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/lN7_-affiliate-stack-3-high-converting-ofa-share%20funnels-3.jpg"
          alt="3 High Converting OFA Share Funnels"
        />
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <strong>3 Share Funnels</strong> for promoting the One Funnel Away Challenge by 3 of the <em>most successful OFA affiliates</em>:
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="thumbs up">
            👍
          </span>{" "}Doug Boughton (Dream Car Winner)
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="thumbs up">
            👍
          </span>{" "}Damien Menu
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="thumbs up">
            👍
          </span>{" "}Kevin Steven
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="thumbs up">
            👍
          </span>{" "}... and I'll be adding more soon!
        </Typography>

      <Typography className={classes.p2b} variant="h5" component="p">
        . <br />
        <br />
        . <br />
        <br />
        . <br />
      </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="tick">
            ✅
          </span>{" "}<strong>Lifetime “Affiliate Stack” Updates <span class="red">(Value PRICELESS)</span></strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
        <img
          className={classes.imageCard75}
          src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/36Mp-affiliate-stack-updates-for-life-affiliate-stack-4.jpg"
          alt="Lifetime Affiliate Stack Updates"
        />
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          This stack is just getting started!
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          There are <strong>BIG PLANS</strong> to continue to <em>GROW THIS STACK</em> with products <u>PURCHASED &amp; MADE</u> just for YOU.
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          ...and you will get it ALL FOR FREE — <strong>FOREVERRRRR!!!</strong>
        </Typography>

      </ThemeProvider>

      <Typography className={classes.p2b} variant="h5" component="p">
        . <br />
        <br />
        . <br />
        <br />
        . <br />
      </Typography>

      <ThemeProvider theme={theme2}>
        <Typography className={classes.p2b} variant="h5" component="p">
          <strong>The Ultimate Affiliate BONUS STACK</strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="tick">
            ✅
          </span>{" "}Lifetime Recurring Affiliate Programs List White Label Rights <span class="red"><strong>(Value $297)</strong></span>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="tick">
            ✅
          </span>{" "}3 High Converting OFA Share Funnels <span class="red"><strong>(Value $197)</strong></span>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="tick">
            ✅
          </span>{" "}Lifetime “Affiliate Stack” Updates <span class="red"><strong>(Value PRICELESS)</strong></span>
        </Typography>
        <Typography className={classes.p2b} variant="h3" component="p">
          <strong><u>TOTAL VALUE:</u></strong> <span class="red"><strong>$494</strong></span>
        </Typography>
      </ThemeProvider>

      <ThemeProvider theme={theme2}>
        <Typography className={classes.p2b} variant="h5" component="p">
          When you <em>buy The One Funnel Away Challenge (via Affiliate Bootcamp)</em> under my affiliate link <strong>(by clicking the links below)</strong>...
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          Your email address will show up in my affiliate dashboard and I will email to you The Ultimate Affiliate BONUS STACK!
        </Typography>


        <Typography className={classes.p2b} variant="h5" component="p">
          . <br />
          <br />
          . <br />
          <br />
          . <br />
        </Typography>
      </ThemeProvider>

        <Typography className={classes.p2b} variant="h5" component="p">
        <strong>GET ONE FUNNEL AWAY CHALLENGE (VIA AFFILIATE BOOTCAMP!)</strong>
        </Typography>

      <Card className={classes.card}>
        <CardActionArea>
          <CardContent className={classes.cardContent}>
            <Link
              href={"https://affiliatebootcamp.com/onefunnelaway"+affiliatestring}
              target="_blank"
            >
              <img
                className={classes.imageCard}
                src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/AnLl-ofa-cta-5.jpg"
                alt="One Funnel Away Challenge - Call to action"
              />
            </Link>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            href={"https://affiliatebootcamp.com/onefunnelaway"+affiliatestring}
            target="_blank"
          >
            Get One Funnel Away Challenge (via Affilate Bootcamp!)
          </Button>
        </CardActions>
      </Card>

      <ThemeProvider theme={theme2}>
        <Typography className={classes.p2b} variant="h5" component="p">
          . <br />
          <br />
          . <br />
          <br />
          . <br />
        </Typography>
      </ThemeProvider>

      <Typography className={classes.p2b} variant="h5" component="p">
        Ready for the next stack? (...it's the LIFE BLOOD of your ONLINE BUSINESS)
      </Typography>

    </React.Fragment>
  );
}

function Step9() {
  const classes = useStyles();

  return (
    <React.Fragment>

      <Typography className={classes.p2b} variant="h5" component="p">
        <strong>BRAVO!</strong> You've gone <u>ALL IN!</u>
      </Typography>

      <Typography className={classes.p2b} variant="h5" component="p">
        <span role="img" aria-label="tick">
          ✅
        </span>{" "}You've got your <strong>ClickFunnels account!</strong>
      </Typography>

      <Typography className={classes.p2b} variant="h5" component="p">
        <span role="img" aria-label="tick">
          ✅
        </span>{" "}You've got your <strong>ClickFunnels Affiliate account!</strong>
      </Typography>

      <Typography className={classes.p2b} variant="h5" component="p">
        <span role="img" aria-label="tick">
          ✅
        </span>{" "}You've funnel hacked <strong>Russell's Best Funnels!</strong>
      </Typography>

      <Typography className={classes.p2b} variant="h5" component="p">
        <span role="img" aria-label="tick">
          ✅
        </span>{" "}You've launched your <strong>ClickFunnels FREE-FOR-LIFE Funnel!</strong>
      </Typography>

      <Typography className={classes.p2b} variant="h5" component="p">
        <span role="img" aria-label="tick">
          ✅
        </span>{" "}You've got a team, support &amp; resources on <strong>Affiliate Teams!</strong>
      </Typography>

      <Typography className={classes.p2b} variant="h5" component="p">
        <span role="img" aria-label="tick">
          ✅
        </span>{" "}You've accepted the <strong>24-Hour Challenge &amp; joined the FB Group!</strong>
      </Typography>

      <Typography className={classes.p2b} variant="h5" component="p">
        <span role="img" aria-label="tick">
          ✅
        </span>{" "}You've grabbed the <strong>ClickFunnels Stack</strong>, joined <strong>The Affiliate Teams Inner Circle</strong>, and your <strong>Ultimate ClickFunnels BONUSES <em>are in your Inbox!</em></strong>
      </Typography>

      <Typography className={classes.p2b} variant="h5" component="p">
        <span role="img" aria-label="tick">
          ✅
        </span>{" "}You've got the <strong>Affiliate Stack</strong>, joined <strong>The One Funnel Away Challenge (via Affiliate Bootcamp)</strong>, and your <strong>Ultimate Affiliate BONUSES <em>are in your Inbox!</em></strong>
      </Typography>

      <ThemeProvider theme={theme2}>
        <Typography className={classes.p2b} variant="h5" component="p">
          . <br />
          <br />
          . <br />
          <br />
          . <br />
        </Typography>
      </ThemeProvider>

      <Typography className={classes.p2b} variant="h5" component="p">
        There is only <strong><u>ONE MORE THING</u></strong> you <strong><em>NEED</em></strong> to Get ClickFunnels <em>FREE-FOR-LIFE</em> in <strong>Under 24-Hours!</strong>
      </Typography>

      <Typography className={classes.p2b} variant="h3" component="p">
        <strong>TRAFFIC!!!</strong>{" "}<span role="img" aria-label="rocket">
          🚀
        </span>
      </Typography>

      <Typography className={classes.p2b} variant="h5" component="p">
        And because you've gone <strong><u>ALL IN TODAY</u></strong>...
      </Typography>


      <Typography className={classes.p2b} variant="h5" component="p">
        . <br />
        <br />
        . <br />
        <br />
        . <br />
      <strong>... I'M GIVING YOU ALL THIS <span class="red">FOR FREE</span>{" "}<span role="img" aria-label="face with heart eyes">
        😍
      </span></strong>
      </Typography>

      <ThemeProvider theme={theme2}>
        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="tick">
            ✅
          </span>{" "}<strong>Get <em>YOUR OWN</em> Gleam “Viral Loop” put into your FREE-FOR-LIFE Funnel <span class="red">(Value $468/year + Traffic!!!)</span></strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
        <img
          className={classes.imageCard75}
          src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/DWJW-traffic-stack-your-gleam-actions-1-v2.jpg"
          alt="Get YOUR OWN Gleam Viral Loop put into your FREE-FOR-LIFE Funnel"
        />
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <strong>Viral Loop</strong> = person uses this funnel -> <strong>shares</strong> with a friend -> the friend uses this funnel -> tells <em>another friend</em> who uses this funnel -> <strong>cycle is repeated.</strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          Gleam is an AWESOME tool to grow your <u>TRAFFIC</u> &amp; <strong>EMAIL LIST.</strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          As you scroll down, you'll see how we use Gleam to offer <u>YOU</u> the Traffic Stack for <strong>FREE</strong> in exchange for completing <strong><em>ACTIONS.</em></strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          With Gleam “Instant Rewards” you can create <u>UNLOCKABLE REWARDS</u> using <strong>MILLIONS</strong> of action combinations!
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          Drive <strong>TRAFFIC &amp; GROWTH</strong> with actions like...
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="thumbs up">
            👍
          </span>{" "}<strong>ACTION:</strong> Visit this webpage
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="thumbs up">
            👍
          </span>{" "}<strong>ACTION:</strong> Sign up for our Newsletter
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="thumbs up">
            👍
          </span>{" "}<strong>ACTION:</strong> Visit @Username on Facebook
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="thumbs up">
            👍
          </span>{" "}<strong>ACTION:</strong> View this Post on Facebook
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="thumbs up">
            👍
          </span>{" "}<strong>ACTION:</strong> Visit @Username on Instagram
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="thumbs up">
            👍
          </span>{" "}<strong>ACTION:</strong> View this Photo on Instagram
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="thumbs up">
            👍
          </span>{" "}<strong>ACTION:</strong> Visit @Channel on YouTube
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="thumbs up">
            👍
          </span>{" "}<strong>ACTION:</strong> Follow @Username on Twitter
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="thumbs up">
            👍
          </span>{" "}<strong>ACTION:</strong> Retweet @Username on Twitter
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="thumbs up">
            👍
          </span>{" "}<strong>ACTION:</strong> Answer this Question?
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="thumbs up">
            👍
          </span>{" "}<strong>... PLUS so much MORE!</strong> (see example of <a href="https://gleam.io/examples/competitions/every-entry-type?via=1412202" target="_blank">Every Gleam Action Type</a>)
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
        <br />
          <strong><em>How do you get it?</em></strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          Unlock the <u>Traffic Stack</u>, and I'll show you how to put <em><u>YOUR OWN</u></em> <strong>Gleam “Viral Loop”</strong> into <u>YOUR</u> ClickFunnels FREE-FOR-LIFE Funnel...
        </Typography>


      <Typography className={classes.p2b} variant="h5" component="p">
        . <br />
        <br />
        . <br />
        <br />
        . <br />
      </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="tick">
            ✅
          </span>{" "}<strong>Million Dollar Ad Swipe Library White Label Rights <span class="red">(Value $197)</span></strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
        <img
          className={classes.imageCard75}
          src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/9cGT-traffic-stack-million-dollar-ad-swipe-library-2.jpg"
          alt="Million Dollar Ad Swipe Library White Label Rights"
        />
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
            I took a look at the Facebook ads of <strong>40 of the TOP Internet Entrepreneurs</strong> and created this <u>AMAZING SWIPE FILE</u> for you to study and use.
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
            Inside, you’ll see the <em>entire ad copy and images</em> of <strong>MILLIONAIRE MARKETERS</strong> like...
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="thumbs up">
            👍
          </span>{" "}<strong>Russell Brunson</strong> - Founder of ClickFunnels and author of DotCom Secrets and Expert Secrets.
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="thumbs up">
            👍
          </span>{" "}<strong>Dan Henry</strong> - Creator of a $5 Million Online Business, which teaches you how to grow an online advertising business.
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="thumbs up">
            👍
          </span>{" "}<strong>Ryan Levesque</strong> - Author of the #1 National Best-Selling Book "Ask". He just released a follow up book called “Choose”.
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="thumbs up">
            👍
          </span>{" "}<strong>Peng Joon</strong> - Creator of the Content Multiplier Formula, which got him over 100 million video views and generated 8-figures in sales.
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="thumbs up">
            👍
          </span>{" "}<strong>Grant Cardone</strong> - #1 sales and marketing trainer in the world, and the author of The 10x Rule.
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="thumbs up">
            👍
          </span>{" "}<strong>...and 35 MORE!</strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
            You can use this resource as an <em>inspiration</em> for <u>your own Facebook ads</u> or use it as a great LEAD MAGNET to give away as well and <strong>build your email list.</strong>
        </Typography>


      <Typography className={classes.p2b} variant="h5" component="p">
        . <br />
        <br />
        . <br />
        <br />
        . <br />
      </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="tick">
            ✅
          </span>{" "}<strong>7 Deadly Facebook Post Sins That Will Destroy Your Reach, Engagement, Growth &amp; Profits <span class="red">(Value $37)</span></strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
        <img
          className={classes.imageCard75}
          src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/n0SQ-traffic-stack-7-facebook-sins-3.jpg"
          alt="7 Deadly Facebook Post Sins That Will Destroy Your Reach, Engagement, Growth and Profits"
        />
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <strong>NEVER</strong> do any of the things in this list if you want to get <em>MAXIMUM</em> <u>reach and engagement</u> on your Facebook Posts.
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          Committing these deadly sins will <u>CRUSH</u> your <strong>business growth and profits</strong> on Facebook.
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          This <em>POWERFUL</em> list was created by <u>Jacob Caris</u> (recent <strong>Dream Car Winner</strong> and a real RISING STAR in the ClickFunnels community).
        </Typography>

      <Typography className={classes.p2b} variant="h5" component="p">
        . <br />
        <br />
        . <br />
        <br />
        . <br />
      </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="tick">
            ✅
          </span>{" "}<strong>Lifetime “Traffic Stack” Updates <span class="red">(Value PRICELESS)</span></strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
        <img
          className={classes.imageCard75}
          src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/4aKY-traffic-stack-updates-for-life-traffic-stack-4.jpg"
          alt="Lifetime Traffic Stack Updates"
        />
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          This stack is just getting started!
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          There are <strong>BIG PLANS</strong> to continue to <em>GROW THIS STACK</em> with products <u>PURCHASED &amp; MADE</u> just for YOU.
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          ...and you will get it ALL FOR FREE — <strong>FOREVERRRRR!!!</strong>
        </Typography>

      </ThemeProvider>

      <Typography className={classes.p2b} variant="h5" component="p">
        . <br />
        <br />
        . <br />
        <br />
        . <br />
      </Typography>

      <ThemeProvider theme={theme2}>
        <Typography className={classes.p2b} variant="h5" component="p">
          <strong>The Ultimate Traffic BONUS STACK</strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="tick">
            ✅
          </span>{" "}Get <em>YOUR OWN</em> Gleam “Viral Loop” put into your FREE-FOR-LIFE Funnel <span class="red"><strong>(Value $468/year + Traffic!!!)</strong></span>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="tick">
            ✅
          </span>{" "}Million Dollar Ad Swipe Library White Label Rights <span class="red"><strong>(Value $197)</strong></span>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="tick">
            ✅
          </span>{" "}7 Deadly Facebook Post Sins That Will Destroy Your Reach, Engagement, Growth & Profits <span class="red"><strong>(Value $37)</strong></span>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="tick">
            ✅
          </span>{" "}Lifetime “Traffic Stack” Updates <span class="red"><strong>(Value PRICELESS)</strong></span>
        </Typography>
        <Typography className={classes.p2b} variant="h3" component="p">
          <strong><u>TOTAL VALUE:</u></strong> <span class="red"><strong>$468/year + $234 + Traffic!!!</strong></span>
        </Typography>
      </ThemeProvider>

        <Typography className={classes.p2b} variant="h5" component="p">
          . <br />
          <br />
          . <br />
          <br />
          . <br />
        </Typography>

      <ThemeProvider theme={theme2}>
        <Typography className={classes.p2b} variant="h5" component="p">
          When you get to <strong><span class="red">10 ACTIONS</span></strong>...
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          You will <u><strong>AUTOMATICALLY</strong></u> unlock The Ultimate Traffic BONUS STACK!
          <br /><br />
        </Typography>

      </ThemeProvider>

        {/* Test with gleam=uNckE and gleam=kvVlp (default) */}

        <a class="e-widget no-button" target="_blank" href={"https://gleam.io/"+gleam+"/the-ultimate-traffic-bonus-stack"} rel="nofollow">Unlock Traffic Stack Reward</a>
        <ScriptTag isHydrating={false} async="true" type="text/javascript" src="https://js.gleam.io/e.js" />

        <Typography className={classes.p2b} variant="h5" component="p">
          . <br />
          <br />
          . <br />
          <br />
          . <br />
        </Typography>

    </React.Fragment>
  );
}

function Step0() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography className={classes.p2b2} variant="h5" component="div">
        <Countdown date={`${tomorrow}`} />
      </Typography>
      <Typography className={classes.p2b} variant="h5" component="p">
        <u>ClickFunnels</u> Gives You <strong>EVERYTHING</strong> You Need To
        Market, Sell and Deliver Your Products Online!
      </Typography>

      <Card className={classes.card}>
        <CardActionArea>
          <CardContent className={classes.cardContent}>
            <Link
              href={"https://clickfunnels.com"+affiliatestring}
              target="_blank"
            >
              <img
                className={classes.imageCard}
                src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/LRQx-clickfunnels-pricing-sales-funnels.jpg"
                alt="Quickly Create Beautiful Sales Funnels That Convert Your Visitors Into Leads And Then Customers... (Without Having To Hire or Rely On A Tech Team!)"
              />
            </Link>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            href={"https://clickfunnels.com"+affiliatestring}
            target="_blank"
          >
            Learn More
          </Button>
        </CardActions>
      </Card>

      <ThemeProvider theme={theme2}>
        <Typography className={classes.p2b} variant="h5" component="p">
          Sounds awesome right?
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          If you’re like me then...
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="tick">
            ✅
          </span>{" "}YES, you already <span role="img" aria-label="red heart">
            ❤️
          </span>{" "}<u>ClickFunnels!</u>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="tick">
            ✅
          </span>{" "}YES, <strong>you <em>KNOW 100%</em> that it will <u>GROW</u> Your Business!</strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="tick">
            ✅
          </span>{" "}YES, you <u>WANT</u> it… you <em>NEED</em> it… you <strong>CRAVE</strong> it!…
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          …But the <strong><u>ClickFunnels Price Tag</u></strong> has been <em>Holding You Back</em>&nbsp;<span role="img" aria-label="loudly crying">
            😭
          </span>
        </Typography>
      </ThemeProvider>

      <Card className={classes.card}>
        <CardActionArea>
          <CardContent className={classes.cardContent}>
            <Link
              href={"https://clickfunnels.com"+affiliatestring}
              target="_blank"
            >
              <img
                className={classes.imageCard}
                src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/7j9I-clickfunnels-pricing-plans-2019.jpg"
                alt="ClickFunnels Pricing: $97/month, Etison Suite $297/month. No contracts, downgrade or cancel your account anytime with a single click from your dashboard."
              />
            </Link>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            href={"https://clickfunnels.com"+affiliatestring}
            target="_blank"
          >
            Learn More
          </Button>
        </CardActions>
      </Card>

      <ThemeProvider theme={theme2}>
        <Typography className={classes.p2b} variant="h5" component="p">
          Today this changes <em>FOREVER...</em>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="face with heart eyes">
            😍
          </span>{" "}Today is <strong>YOUR day!</strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="face with heart eyes">
            😍
          </span>{" "}Today you get <strong>3 ClickFunnels PRICING SECRETS!</strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="face with heart eyes">
            😍
          </span>{" "}Today you <strong>JOIN ClickFunnels</strong> &amp; <strong>GROW Your Business!</strong><br /><br />
        </Typography>
      </ThemeProvider>


      <Card className={classes.card}>
        <CardActionArea>
          <CardContent className={classes.cardContent}>
            <Link
              href={"https://clickfunnels.com"+affiliatestring}
              target="_blank"
            >
              <img
                className={classes.imageCard}
                src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/fnSL-clickfunnels-pricing-join.jpg"
                alt="Changing The Lives Of Entrepreneurs. Join the 92,519 entrepreneurs who are actively using ClickFunnels to easily get their products and their message out to the world! 92.5K Users. 883M Contacts. 5.23M Funnels. $3.6B Processed."
              />
            </Link>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            href={"https://clickfunnels.com"+affiliatestring}
            target="_blank"
          >
            Learn More
          </Button>
        </CardActions>
      </Card>

      <ThemeProvider theme={theme2}>
        <Typography className={classes.p2b} variant="h5" component="p">
          . <br />
          <br />
          . <br />
          <br />
          . <br />
        </Typography>
      </ThemeProvider>

      <Typography className={classes.p2b} variant="h5" component="p">
        Ready for the secrets?
      </Typography>

      <Typography className={classes.p2b} variant="h5" component="p">
        <strong><u>Remember:</u></strong> You're just <strong>ONE</strong> funnel away...
      </Typography>
    </React.Fragment>
  );
}

function Step1() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ThemeProvider theme={theme2}>
        <Typography className={classes.p2b2} variant="h5" component="p">
          <strong>SECRET:</strong> ClickFunnels should <u>NEVER</u> cost you
          money...
        </Typography>
      </ThemeProvider>
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent className={classes.cardContent}>
            <Link
              href={"https://clickfunnels.com"+affiliatestring}
              target="_blank"
            >
              <img
                className={classes.imageCard}
                src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/F0zq-clickfunnels-14daysfree-1c.jpg"
                // src="./images/clickfunnels-14daysfree-1c.jpg"
                alt=""
              />
            </Link>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            href={"https://clickfunnels.com"+affiliatestring}
            target="_blank"
          >
            Start Your 14 Day Free Trial
          </Button>
        </CardActions>
      </Card>

      <ThemeProvider theme={theme2}>
        <Typography className={classes.p2b} variant="h5" component="p">
          ... ClickFunnels always over delivers. <em>ALWAYS...</em>
        </Typography>
      </ThemeProvider>

      <Card className={classes.card}>
        <CardActionArea>
          <CardContent className={classes.cardContent}>
            <Link
              href={"https://clickfunnels.com"+affiliatestring}
              target="_blank"
            >
              <img
                className={classes.imageCard}
                src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/W4-d-clickfunnels-14daysfree-2.jpg"
                alt=""
              />
            </Link>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            href={"https://clickfunnels.com"+affiliatestring}
            target="_blank"
          >
            Start Your 14 Day Free Trial
          </Button>
        </CardActions>
      </Card>

      <ThemeProvider theme={theme2}>
        <Typography className={classes.p2b} variant="h5" component="p">
          ... and the FREE Trial sign-up takes <strong>less than 60 Seconds!</strong>
        </Typography>
      </ThemeProvider>

      <Card className={classes.card}>
        <CardActionArea>
          <CardContent className={classes.cardContent}>
            <Link
              href={"https://clickfunnels.com"+affiliatestring}
              target="_blank"
            >
              <img
                className={classes.imageCard}
                src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/u0jj-clickfunnels-14daysfree-3b.jpg"
                alt=""
              />
            </Link>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            href={"https://clickfunnels.com"+affiliatestring}
            target="_blank"
          >
            Start Your 14 Day Free Trial
          </Button>
        </CardActions>
      </Card>

      <ThemeProvider theme={theme2}>
        <Typography className={classes.p2b} variant="h5" component="p">
          No more excuses...
        </Typography>
        <Typography className={classes.p2b} variant="h5" component="p">
          Don't move on until you've got your{" "}
          <strong>FREE ClickFunnels account.</strong>
        </Typography>
        <Typography className={classes.p2b} variant="h5" component="p">
          You have <u>everything to gain</u>, and <em>nothing to lose.</em>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          So <u>stop procrastinating</u>, and <em>#JustDoIt!</em>
        </Typography>

        <Button
          variant="contained"
          color="primary"
          href={"https://clickfunnels.com"+affiliatestring}
          target="_blank"
        >
          Start Your 14 Day Free Trial (Seriously)
        </Button>
      </ThemeProvider>

      <ThemeProvider theme={theme2}>
        <Typography className={classes.p2b} variant="h5" component="p">
          . <br />
          <br />
          . <br />
          <br />
          . <br />
          <br />
          <span role="img" aria-label="celebrate">
            🎉
          </span>{" "}
          You're now ready for Secret 2!
        </Typography>
      </ThemeProvider>
    </React.Fragment>
  );
}

function Step2() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ThemeProvider theme={theme2}>
        <Typography className={classes.p2b2} variant="h5" component="p">
          <strong>SECRET:</strong> ClickFunnels hides their <u>VERY BEST</u>{" "}
          offer <strong>(including 12 Months FREE!)</strong> behind these two{" "}
          <em>amazing presentations...</em>{" "}
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          Watch one or both ...they are <u>PACKED with VALUE.</u>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <strong>Already have ClickFunnels?</strong> Existing customers can
          also take advantage of this hidden offer <em>(and SAVE A TON!).</em>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <strong>
            Get Your FREE Access To The Infamous 10X Presentation NOW! (Where
            Russell Brunson Sells Over $3,000,000 In 90 Minutes!)
          </strong>
        </Typography>
      </ThemeProvider>

      <Card className={classes.card}>
        <CardActionArea>
          <CardContent className={classes.cardContent}>
            <Link
              href={"https://secretfunnelstrategy.com/register"+affiliatestring}
              target="_blank"
            >
              <img
                className={classes.imageCard}
                src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/NjWR-clickfunnels-12monthsfree-1.jpg"
                alt=""
              />
            </Link>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            href={"https://secretfunnelstrategy.com/register"+affiliatestring}
            target="_blank"
          >
            Get FREE Pass & Watch Right Now
          </Button>
        </CardActions>
      </Card>

      <ThemeProvider theme={theme2}>
        <Typography className={classes.p2b} variant="h5" component="p">
          ... OR ...
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <strong>
            Learn How A "Newbie" Entrepreneur With ZERO Tech Experiance, And NO
            Product Launched Her First Funnel... And Changed The Lives Of 1.3
            Million Women In Less Than 3 Years!
          </strong>
        </Typography>
      </ThemeProvider>

      <Card className={classes.card}>
        <CardActionArea>
          <CardContent className={classes.cardContent}>
            <Link
              href={"https://ladybossmovement.com/register"+affiliatestring}
              target="_blank"
            >
              <img
                className={classes.imageCard}
                src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/oAZK-clickfunnels-12monthsfree-2.jpg"
                alt=""
              />
            </Link>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            href={"https://ladybossmovement.com/register"+affiliatestring}
            target="_blank"
          >
            Get FREE Pass & Watch Right Now
          </Button>
        </CardActions>
      </Card>

      <ThemeProvider theme={theme2}>
        <Typography className={classes.p2b} variant="h5" component="p">
          Ok, it's time for you to <strong>slow down.</strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          Seriously, <em>do. not. move. on.</em>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          You <u>NEED</u> to see the hidden offer!{" "}
          <strong>(which includes ClickFunnels FREE For 12 Months)</strong>
          <em>...it's incredible.</em>
        </Typography>
      </ThemeProvider>

      <ThemeProvider theme={theme2}>
        <Typography className={classes.p2b} variant="h5" component="p">
          . <br />
          <br />
          . <br />
          <br />
          . <br />
          <br />
          <span role="img" aria-label="clap">
            👏
          </span>{" "}
          You didn't cheat,{" "}
          <strong>
            <u>YOU'RE AWESOME!</u>
          </strong>{" "}
          Now get pumped for Secret 3!
        </Typography>
      </ThemeProvider>
    </React.Fragment>
  );
}

function Step3() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ThemeProvider theme={theme2}>
        <Typography className={classes.p2b2} variant="h5" component="p">
          <strong>SECRET:</strong> ClickFunnels Affiliate Program pays{" "}
          <u>
            <strong>40% monthly recurring commissions</strong>
          </u>
          ... when you sign up <em>just 3 new members</em>, that's{" "}
          <strong>120% PASSIVE INCOME!!!</strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <strong>The math is simple</strong>. Keep <u>3 active members</u>. Put
          20% in{" "}
          <em>
            <u>YOUR</u> pocket each month
          </em>
          . Invest the other 100% into covering{" "}
          <em>
            <u>YOUR</u> ClickFunnels account.
          </em>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <u>THAT'S</u> how you can have{" "}
          <strong>
            <em>ClickFunnels FREE-FOR-LIFE!!!</em>
          </strong>{" "}
          <span role="img" aria-label="fire">
            🔥🔥🔥
          </span>{" "}
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          . <br />
          <br />
          . <br />
          <br />
          . <br />
          <br />
          ... and why stop at 3?
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <strong>
            Get <u>Just 100</u> New ClickFunnels Members... Pocket Up To{" "}
            <u>$11,880 USD</u> Of PASSIVE INCOME PER MONTH... And Then On Top Of
            That ClickFunnels Will Cover The Payments On{" "}
            <em>YOUR Dream Car!</em> (Not. Even. Joking.)
          </strong>
        </Typography>
      </ThemeProvider>

      <Card className={classes.card}>
        <CardActionArea>
          <CardContent className={classes.cardContent}>
            <Link
              href={"https://whatsyourdreamcar.com/signup-now"+affiliatestring}
              target="_blank"
            >
              <img
                className={classes.imageCard}
                src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/wJg0-clickfunnels-lifetimefree-1.jpg"
                alt=""
              />
            </Link>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            href={"https://whatsyourdreamcar.com/signup-now"+affiliatestring}
            target="_blank"
          >
            Join The FREE ClickFunnels Affiliate Program
          </Button>
        </CardActions>
      </Card>

      <ThemeProvider theme={theme2}>
        <Typography className={classes.p2b} variant="h5" component="p">
          ClickFunnels have awarded <strong>98 affiliates</strong> with their{" "}
          <em>Dream Car</em>... and paid out <u>OVER $52 MILLION</u> in
          commissions.
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          Feeling sceptical? <em>Good.</em>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <strong>
            Check Out ClickFunnels FREE <u>Top Affiliate Interview Series</u>{" "}
            (And Learn How <em>15 ClickFunnels Dream Car Winners</em> Would
            Start Again <u>From Scratch</u>, And Become A{" "}
            <em>Super Affiliate Within 100 Days</em>).
          </strong>
        </Typography>
      </ThemeProvider>

      <Card className={classes.card}>
        <CardActionArea>
          <CardContent className={classes.cardContent}>
            <Link
              href={"https://affiliatebootcamp.com/summit"+affiliatestring}
              target="_blank"
            >
              <img
                className={classes.imageCard}
                src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/Vokp-clickfunnels-lifetimefree-2a.jpg"
                alt=""
              />
            </Link>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            href={"https://affiliatebootcamp.com/summit"+affiliatestring}
            target="_blank"
          >
            Watch The Affiliate Bootcamp Interviews
          </Button>
        </CardActions>
      </Card>

      <ThemeProvider theme={theme2}>
        <Typography className={classes.p2b} variant="h5" component="p">
          . <br />
          <br />
          . <br />
          <br />
          . <br />
          <br />
          <span role="img" aria-label="hand waving">
            👋
          </span>{" "}
          Welcome to the club!
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          You're now a ClickFunnels Affiliate{" "}
          <span role="img" aria-label="celebrate">
            🎉🎉🎉
          </span>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          The <em>worst thing</em> you could do right now is{" "}
          <strong>wait, pause, freeze, hesitate, procrastinate...</strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <strong>99.999%</strong> of affiliate failure comes from{" "}
          <u>a lack of action.</u>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          You want to get started{" "}
          <strong>
            <u>FAST</u> ...<em>LIKE RIGHT NOW.</em>
          </strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          So I'm giving you <u>3 FREE Bonuses</u> to{" "}
          <strong>
            <em>DRAMATICALLY ACCELERATE</em>
          </strong>{" "}
          your first 24 Hours!
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          If you go{" "}
          <strong>
            <u>ALL IN</u>
          </strong>{" "}
          and take action <em>RIGHT NOW</em>, then you could absolutely earn
          yourself <u>ClickFunnels FREE-FOR-LIFE</u> before today ends!
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <span role="img" aria-label="flex">
            💪
          </span>
          YES, LET'S DO THIS!!!
        </Typography>
        <Typography className={classes.p2b} variant="h5" component="p">
          . <br />
          <br />
          . <br />
          <br />
          . <br />
          <br />
          But before we move on to the BONUSES...
        </Typography>
        <Typography className={classes.p2b} variant="h5" component="p">
          <strong>Do you accept the challenge?</strong>
        </Typography>
        <Typography className={classes.p2b} variant="h5" component="p">
          <u>CHALLENGE:</u> Get ClickFunnels <span className={classes.nowrap}>FREE-FOR-LIFE</span> In <span className={classes.nowrap}><strong>Under 24-Hours&nbsp;<span role="img" aria-label="Party Popper">🎉</span></strong></span>
        </Typography>

      </ThemeProvider>

      <Box className={classes.rootFacebook2}>
      <div className="root-background root-facebook2-background">
        <Grid container direction="row" justify="center" alignItems="center" className="facebook2container">
          <Grid item xs={3} s={2} className={classes.logoGrid}>
            <Box className={classes.logoBox}>
              <img
                className={classes.logo}
                src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/aQmT-affiliateteams.jpeg"
                alt=""
              />
            </Box>
          </Grid>
          <Grid item xs={9} s={10}>
            <Box className={classes.facebookBox}>
              <div className={classes.arrowLeft} />
              <ThemeProvider theme={theme2}>
                <Typography
                  className={classes.pLike}
                  variant="body2"
                  component="p"
                >
                  <strong>You:</strong> “Challenge Accepted!”&nbsp; <br />
                  <strong>Next:</strong> LIKE → SHARE → JOIN
                </Typography>
              </ThemeProvider>
              <div
                className="fb-like"
                // data-href="https://clickfunnels.affiliateteams.com.au/clickfunnels-pricing/"
                data-layout="standard"
                data-action="like"
                data-show-faces="true"
                data-share="true"
                data-width="250"
              >
                ...
              </div>
              <ThemeProvider theme={theme2}>
                <Typography
                  className={classes.pLike}
                  variant="body2"
                  component="p"
                >
                  <Link
                    component="a"
                    target="_blank"
                    variant="body2"
                    className={classes.fbgrouplink}
                    href="https://www.facebook.com/groups/clickfunnelsaffiliate24hourchallenge/"
                  >
                    JOIN The 24-Hour Challenge Facebook Group
                  </Link>
                </Typography>
              </ThemeProvider>
            </Box>
          </Grid>
        </Grid>
        </div>
      </Box>
    </React.Fragment>
  );
}

function Step4() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ThemeProvider theme={theme2}>
        <Typography className={classes.p2b2} variant="h5" component="p">
          <strong>BONUS:</strong> Funnel Hack the{" "}
          <u>ClickFunnels affiliate funnels</u> (these masterpieces have been{" "}
          <em>created &amp; optimised</em> by <strong>REAL EXPERTS</strong>).
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          Studying Russells' funnels is{" "}
          <em>like getting a FREE first-hand masterclass</em> in{" "}
          <strong>funnels, marketing & sales.</strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          Discover <u>PURE GOLD</u> to model and use in{" "}
          <strong>your own business...</strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          ...or find an awesome funnel that you{" "}
          <em>
            want to share as an affiliate <strong>right away!</strong>
          </em>
          <br />
          <br />
          . <br />
          <br />
          . <br />
          <br />.
        </Typography>
      </ThemeProvider>

{/*
      <ThemeProvider theme={theme2}>
        <Typography className={classes.p2b} variant="h5" component="p">
          <strong>
            <u>10X Secrets</u> — The Amazing Selling Secrets Of The Worlds #1
            HIGHEST Paid Speaker Who Earns MORE Money Per Keynote Than Tony
            Robbins…Oprah… Bill Clinton… Ellen... Richard Branson… Arnold
            Schwarzenegger… and Mark Cuban COMBINED!
          </strong>
        </Typography>

        <Chip
          label="Max cart value: $1,188.00"
          className={classes.chip}
          variant="outlined"
          color="secondary"
        />

        <Chip
          label="Your potential earnings: $475.20"
          className={classes.chip}
          variant="outlined"
          color="secondary"
        />
      </ThemeProvider>

      <Card className={classes.card}>
        <CardActionArea>
          <CardContent className={classes.cardContent}>
            <Link
              href={"https://10xsecrets.com/masterclass"+affiliatestring}
              target="_blank"
            >
              <img
                className={classes.imageCard}
                src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/Mkjg-clickfunnels-funnelhack-10xsecrets-2.jpg"
                alt=""
              />
            </Link>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            href={"https://10xsecrets.com/masterclass"+affiliatestring}
            target="_blank"
          >
            Funnel Hack 10X Secrets
          </Button>
        </CardActions>
      </Card>
*/}

      <ThemeProvider theme={theme2}>
        <Typography className={classes.p2b3} variant="h5" component="p">
          <strong>
            <u>30 Day Summit</u> — You Suddenly Lose EVERYTHING "What Would You
            Do From Day 1 To Day 30 To Save Yourself...?"
          </strong>
        </Typography>

        <Chip
          label="FREE"
          className={classes.chip}
          variant="outlined"
          color="secondary"
        />

        <Chip
          label="Max cart value: $100.00"
          className={classes.chip}
          variant="outlined"
          color="secondary"
        />

        <Chip
          label="Your potential earnings: $100.00"
          className={classes.chip}
          variant="outlined"
          color="secondary"
        />
      </ThemeProvider>

      <Card className={classes.card}>
        <CardActionArea>
          <CardContent className={classes.cardContent}>
            <Link
              href={"https://www.30days.com/summit"+affiliatestring}
              target="_blank"
            >
              <img
                className={classes.imageCard}
                src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/yMym-clickfunnels-funnelhack-30daysummit-2.jpg"
                alt=""
              />
            </Link>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            href={"https://www.30days.com/summit"+affiliatestring}
            target="_blank"
          >
            Funnel Hack 30 Day Summit
          </Button>
        </CardActions>
      </Card>

{/*
      // <ThemeProvider theme={theme2}>
      //   <Typography className={classes.p2b3} variant="h5" component="p">
      //     <strong>
      //       <u>DCS 108 Split Tests</u> — Free Book! 108 Proven Split Test
      //       Winners! "Simple Tweaks You Can Make To Your Website, So You Can
      //       Make More Money Now!"
      //     </strong>
      //   </Typography>
      //
      //   <Chip
      //     label="FREE + Shipping + Trial"
      //     className={classes.chip}
      //     variant="outlined"
      //     color="secondary"
      //   />
      //
      //   <Chip
      //     label="Max cart value: $494.00"
      //     className={classes.chip}
      //     variant="outlined"
      //     color="secondary"
      //   />
      //
      //   <Chip
      //     label="Your potential earnings: $197.60"
      //     className={classes.chip}
      //     variant="outlined"
      //     color="secondary"
      //   />
      // </ThemeProvider>
      //
      // <Card className={classes.card}>
      //   <CardActionArea>
      //     <CardContent className={classes.cardContent}>
      //       <Link
      //         href={"https://dotcomsecretslabs.com/free-book"+affiliatestring}
      //         target="_blank"
      //       >
      //         <img
      //           className={classes.imageCard}
      //           src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/XNVx-clickfunnels-funnelhack-108splittests.jpg"
      //           alt=""
      //         />
      //       </Link>
      //     </CardContent>
      //   </CardActionArea>
      //   <CardActions>
      //     <Button
      //       variant="contained"
      //       color="primary"
      //       href={"https://dotcomsecretslabs.com/free-book"+affiliatestring}
      //       target="_blank"
      //     >
      //       Funnel Hack DCS 108 Split Tests
      //     </Button>
      //   </CardActions>
      // </Card>
*/}

      <ThemeProvider theme={theme2}>
        <Typography className={classes.p2b3} variant="h5" component="p">
          <strong>
            <u>DotComSecrets Book</u> — The Underground Playbook For Growing
            Your Company Online... "A simple process that ANY company can use to
            geometrically improve their traffic, conversion and sales online." -
            Tony Robbins
          </strong>
        </Typography>

        <Chip
          label="FREE + Shipping"
          className={classes.chip}
          variant="outlined"
          color="secondary"
        />

        <Chip
          label="Max cart value: $2,422.95"
          className={classes.chip}
          variant="outlined"
          color="secondary"
        />

        <Chip
          label="Your potential earnings: $967.00"
          className={classes.chip}
          variant="outlined"
          color="secondary"
        />
      </ThemeProvider>

      <Card className={classes.card}>
        <CardActionArea>
          <CardContent className={classes.cardContent}>
            <Link
              href={"https://dotcomsecrets.com/go"+affiliatestring}
              target="_blank"
            >
              <img
                className={classes.imageCard}
                src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/yAL6-clickfunnels-funnelhack-dotcomsecrets.jpg"
                alt=""
              />
            </Link>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            href={"https://dotcomsecrets.com/go"+affiliatestring}
            target="_blank"
          >
            Funnel Hack DotComSecrets Book
          </Button>
        </CardActions>
      </Card>

      <ThemeProvider theme={theme2}>
        <Typography className={classes.p2b3} variant="h5" component="p">
          <strong>
            <u>Expert Secrets Book</u> — What If People Would Actually Pay You
            For Your Advice? Find Your Message, Build A Tribe, And Change The
            World...
          </strong>
        </Typography>

        <Chip
          label="FREE + Shipping"
          className={classes.chip}
          variant="outlined"
          color="secondary"
        />

        <Chip
          label="Max cart value: $2,322.95"
          className={classes.chip}
          variant="outlined"
          color="secondary"
        />

        <Chip
          label="Your potential earnings: $927.00"
          className={classes.chip}
          variant="outlined"
          color="secondary"
        />
      </ThemeProvider>

      <Card className={classes.card}>
        <CardActionArea>
          <CardContent className={classes.cardContent}>
            <Link
              href={"https://expertsecrets.com/"+affiliatestring}
              target="_blank"
            >
              <img
                className={classes.imageCard}
                src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/3xUx-clickfunnels-funnelhack-expertsecrets.jpg"
                alt=""
              />
            </Link>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            href={"https://expertsecrets.com/"+affiliatestring}
            target="_blank"
          >
            Funnel Hack Expert Secrets Book
          </Button>
        </CardActions>
      </Card>

      <ThemeProvider theme={theme2}>
        <Typography className={classes.p2b3} variant="h5" component="p">
          <strong>
            <u>Freelancer Secrets</u> — FREE Video Reveals... The 42-Minute
            Freelancer Roadmap To Bootstrapping A Highly-Profitable Freelancer
            or Online Agency Business
          </strong>
        </Typography>

        <Chip
          label="FREE + $1 for 14 Days"
          className={classes.chip}
          variant="outlined"
          color="secondary"
        />

        <Chip
          label="Max cart value: $236.00"
          className={classes.chip}
          variant="outlined"
          color="secondary"
        />

        <Chip
          label="Your potential earnings: $94.40"
          className={classes.chip}
          variant="outlined"
          color="secondary"
        />

        <Chip
          label="Your potential recurring: $79.60/yr"
          className={classes.chip}
          variant="outlined"
          color="secondary"
        />
      </ThemeProvider>

      <Card className={classes.card}>
        <CardActionArea>
          <CardContent className={classes.cardContent}>
            <Link
              href={"https://freelancersecrets.com/register"+affiliatestring}
              target="_blank"
            >
              <img
                className={classes.imageCard}
                src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/34XC-clickfunnels-funnelhack-freelancersecrets.jpg"
                alt=""
              />
            </Link>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            href={"https://freelancersecrets.com/register"+affiliatestring}
            target="_blank"
          >
            Funnel Hack Freelancer Secrets
          </Button>
        </CardActions>
      </Card>

{/*
      // <ThemeProvider theme={theme2}>
      //   <Typography className={classes.p2b3} variant="h5" component="p">
      //     <strong>
      //       <u>Funnel Fridays</u> — "Can We Build Your Next Funnel For You...
      //       FOR FREE!?!". Each Friday We Pick ONE Lucky Winner, And In Just 30
      //       Minutes Try To <u>Write Your Copy, Build Your Funnel</u>, And Help
      //       You <u>Get It Launched</u>...
      //     </strong>
      //   </Typography>
      //
      //   <Chip
      //     label="FREE"
      //     className={classes.chip}
      //     variant="outlined"
      //     color="secondary"
      //   />
      //
      //   <Chip
      //     label="Sticky Cookie your leads"
      //     className={classes.chip}
      //     variant="outlined"
      //     color="secondary"
      //   />
      // </ThemeProvider>
      //
      // <Card className={classes.card}>
      //   <CardActionArea>
      //     <CardContent className={classes.cardContent}>
      //       <Link
      //         href={"https://funnelfridays.com/subscribe"+affiliatestring}
      //         target="_blank"
      //       >
      //         <img
      //           className={classes.imageCard}
      //           src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/no7M-clickfunnels-funnelhack-funnelfridays.jpg"
      //           alt=""
      //         />
      //       </Link>
      //     </CardContent>
      //   </CardActionArea>
      //   <CardActions>
      //     <Button
      //       variant="contained"
      //       color="primary"
      //       href={"https://funnelfridays.com/subscribe"+affiliatestring}
      //       target="_blank"
      //     >
      //       Funnel Hack Funnel Fridays
      //     </Button>
      //   </CardActions>
      // </Card>
*/}

{/*
      // <ThemeProvider theme={theme2}>
      //   <Typography className={classes.p2b3} variant="h5" component="p">
      //     <strong>
      //       <u>Funnel Graffiti</u> — Helping Funnel Hackers Responsibly Build
      //       Funnels... Get Yours Today.
      //     </strong>
      //   </Typography>
      //
      //   <Chip
      //     label="FREE + Shipping"
      //     className={classes.chip}
      //     variant="outlined"
      //     color="secondary"
      //   />
      //
      //   <Chip
      //     label="Max cart value: $364.00"
      //     className={classes.chip}
      //     variant="outlined"
      //     color="secondary"
      //   />
      //
      //   <Chip
      //     label="Your potential earnings: $145.60"
      //     className={classes.chip}
      //     variant="outlined"
      //     color="secondary"
      //   />
      //
      //   <Chip
      //     label="Your potential recurring: $26.80/month"
      //     className={classes.chip}
      //     variant="outlined"
      //     color="secondary"
      //   />
      // </ThemeProvider>
      //
      // <Card className={classes.card}>
      //   <CardActionArea>
      //     <CardContent className={classes.cardContent}>
      //       <Link
      //         href={"https://funnelgraffiti.com/getsome"+affiliatestring}
      //         target="_blank"
      //       >
      //         <img
      //           className={classes.imageCard}
      //           src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/jwwT-clickfunnels-funnelhack-funnelgraffiti.jpg"
      //           alt=""
      //         />
      //       </Link>
      //     </CardContent>
      //   </CardActionArea>
      //   <CardActions>
      //     <Button
      //       variant="contained"
      //       color="primary"
      //       href={"https://funnelgraffiti.com/getsome"+affiliatestring}
      //       target="_blank"
      //     >
      //       Funnel Hack Funnel Graffiti
      //     </Button>
      //   </CardActions>
      // </Card>
*/}

{/*
      // <ThemeProvider theme={theme2}>
      //   <Typography className={classes.p2b3} variant="h5" component="p">
      //     <strong>
      //       <u>Funnel Hackers Cookbook</u> — This Book Is Like 10 Years Of
      //       Funnel-Building Knowledge, All Neatly Compiled Into
      //       Easy-To-Understand Recipes.
      //     </strong>
      //   </Typography>
      //
      //   <Chip
      //     label="FREE + Shipping"
      //     className={classes.chip}
      //     variant="outlined"
      //     color="secondary"
      //   />
      //
      //   <Chip
      //     label="Max cart value: $2,332.00"
      //     className={classes.chip}
      //     variant="outlined"
      //     color="secondary"
      //   />
      //
      //   <Chip
      //     label="Your potential earnings: $933.40"
      //     className={classes.chip}
      //     variant="outlined"
      //     color="secondary"
      //   />
      // </ThemeProvider>
      //
      // <Card className={classes.card}>
      //   <CardActionArea>
      //     <CardContent className={classes.cardContent}>
      //       <Link
      //         href={"https://funnelhackerscookbook.com/fh-cookbook"+affiliatestring}
      //         target="_blank"
      //       >
      //         <img
      //           className={classes.imageCard}
      //           src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/PrEy-clickfunnels-funnelhack-funnelhackerscookbook.jpg"
      //           alt=""
      //         />
      //       </Link>
      //     </CardContent>
      //   </CardActionArea>
      //   <CardActions>
      //     <Button
      //       variant="contained"
      //       color="primary"
      //       href={"https://funnelhackerscookbook.com/fh-cookbook"+affiliatestring}
      //       target="_blank"
      //     >
      //       Funnel Hack Funnel Hackers Cookbook
      //     </Button>
      //   </CardActions>
      // </Card>
*/}

      <ThemeProvider theme={theme2}>
        <Typography className={classes.p2b3} variant="h5" component="p">
          <strong>
            <u>Funnel Scripts Unlimited</u> — This is a FREE Webclass. There Are
            No Costs, But Time Is Very Limited... "How To Get ALL Of Your Sales
            Letters, Scripts And Webinar Slides, Emails And Ads Written{" "}
            <u>(In As Little As 10 Minutes)</u> WITHOUT Hiring An Expensive
            Copywriter!"
          </strong>
        </Typography>

        <Chip
          label="Max cart value: $797.00"
          className={classes.chip}
          variant="outlined"
          color="secondary"
        />

        <Chip
          label="Your potential earnings: $318.80"
          className={classes.chip}
          variant="outlined"
          color="secondary"
        />
      </ThemeProvider>

      <Card className={classes.card}>
        <CardActionArea>
          <CardContent className={classes.cardContent}>
            <Link
              href={"https://funnelscripts.com/reserve-your-spot"+affiliatestring}
              target="_blank"
            >
              <img
                className={classes.imageCard}
                src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/ViEp-clickfunnels-funnelhack-funnelscripts.jpg"
                alt=""
              />
            </Link>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            href={"https://funnelscripts.com/reserve-your-spot"+affiliatestring}
            target="_blank"
          >
            Funnel Hack Funnel Scripts Unlimited
          </Button>
        </CardActions>
      </Card>

{/*
      // <ThemeProvider theme={theme2}>
      //   <Typography className={classes.p2b3} variant="h5" component="p">
      //     <strong>
      //       <u>Funnel University</u> — Weird Marketing Experiments That Will
      //       Increase Your Traffic, Conversions &amp; Sales Online...
      //     </strong>
      //   </Typography>
      //
      //   <Chip
      //     label="14 Day FREE Trial"
      //     className={classes.chip}
      //     variant="outlined"
      //     color="secondary"
      //   />
      //
      //   <Chip
      //     label="Max cart value: $894.00"
      //     className={classes.chip}
      //     variant="outlined"
      //     color="secondary"
      //   />
      //
      //   <Chip
      //     label="Your potential earnings: $356.40"
      //     className={classes.chip}
      //     variant="outlined"
      //     color="secondary"
      //   />
      //
      //   <Chip
      //     label="Your potential recurring: $26.80/month"
      //     className={classes.chip}
      //     variant="outlined"
      //     color="secondary"
      //   />
      // </ThemeProvider>
*/}

{/*
      // <Card className={classes.card}>
      //   <CardActionArea>
      //     <CardContent className={classes.cardContent}>
      //       <Link
      //         href={"https://funnelu.com/freegift"+affiliatestring}
      //         target="_blank"
      //       >
      //         <img
      //           className={classes.imageCard}
      //           src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/73dh-clickfunnels-funnelhack-funneluniversity.jpg"
      //           alt=""
      //         />
      //       </Link>
      //     </CardContent>
      //   </CardActionArea>
      //   <CardActions>
      //     <Button
      //       variant="contained"
      //       color="primary"
      //       href={"https://funnelu.com/freegift"+affiliatestring}
      //       target="_blank"
      //     >
      //       Funnel Hack Funnel University
      //     </Button>
      //   </CardActions>
      // </Card>
*/}

{/*
      // <ThemeProvider theme={theme2}>
      //   <Typography className={classes.p2b3} variant="h5" component="p">
      //     <strong>
      //       <u>Funnelhacker TV</u> — Subscribe To The Funnel Hacker TV YouTube
      //       Channel And I'll GIVE YOU... Instant Access To The "GeniusX Bootleg"
      //       Video That Was Never Authorized To Be Shown Online... (For FREE!)
      //     </strong>
      //   </Typography>
      //
      //   <Chip
      //     label="FREE"
      //     className={classes.chip}
      //     variant="outlined"
      //     color="secondary"
      //   />
      //
      //   <Chip
      //     label="Sticky Cookie your leads"
      //     className={classes.chip}
      //     variant="outlined"
      //     color="secondary"
      //   />
      // </ThemeProvider>
      //
      // <Card className={classes.card}>
      //   <CardActionArea>
      //     <CardContent className={classes.cardContent}>
      //       <Link
      //         href={"https://funnelhacker.tv/subscribe"+affiliatestring}
      //         target="_blank"
      //       >
      //         <img
      //           className={classes.imageCard}
      //           src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/1rHE-clickfunnels-funnelhack-funnelhackertv.jpg"
      //           alt=""
      //         />
      //       </Link>
      //     </CardContent>
      //   </CardActionArea>
      //   <CardActions>
      //     <Button
      //       variant="contained"
      //       color="primary"
      //       href={"https://funnelhacker.tv/subscribe"+affiliatestring}
      //       target="_blank"
      //     >
      //       Funnel Hack Funnelhacker TV
      //     </Button>
      //   </CardActions>
      // </Card>
*/}

{/*
      // <ThemeProvider theme={theme2}>
      //   <Typography className={classes.p2b3} variant="h5" component="p">
      //     <strong>
      //       <u>Marketing In Your Car</u> — Get The First 257 Episodes Of
      //       Marketing In Your Car For FREE On This Pre-Loaded MP3 Player...
      //     </strong>
      //   </Typography>
      //
      //   <Chip
      //     label="FREE + Shipping"
      //     className={classes.chip}
      //     variant="outlined"
      //     color="secondary"
      //   />
      //
      //   <Chip
      //     label="Max cart value: $364.00"
      //     className={classes.chip}
      //     variant="outlined"
      //     color="secondary"
      //   />
      //
      //   <Chip
      //     label="Your potential earnings: $145.60"
      //     className={classes.chip}
      //     variant="outlined"
      //     color="secondary"
      //   />
      //
      //   <Chip
      //     label="Your potential recurring: $26.80/month"
      //     className={classes.chip}
      //     variant="outlined"
      //     color="secondary"
      //   />
      // </ThemeProvider>
      //
      // <Card className={classes.card}>
      //   <CardActionArea>
      //     <CardContent className={classes.cardContent}>
      //       <Link
      //         href={"https://marketinginyourcar.com/free-mp3"+affiliatestring}
      //         target="_blank"
      //       >
      //         <img
      //           className={classes.imageCard}
      //           src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/XWnI-clickfunnels-funnelhack-marketinginyourcar.jpg"
      //           alt=""
      //         />
      //       </Link>
      //     </CardContent>
      //   </CardActionArea>
      //   <CardActions>
      //     <Button
      //       variant="contained"
      //       color="primary"
      //       href={"https://marketinginyourcar.com/free-mp3"+affiliatestring}
      //       target="_blank"
      //     >
      //       Funnel Hack Marketing In Your Car
      //     </Button>
      //   </CardActions>
      // </Card>
*/}

      <ThemeProvider theme={theme2}>
        <Typography className={classes.p2b3} variant="h5" component="p">
          <strong>
            <u>Marketing Secrets</u> — The Marketing Secrets Blackbook "99
            Marketing Secrets That Will Change Your Business... And Change Your
            Life!"
          </strong>
        </Typography>

        <Chip
          label="FREE"
          className={classes.chip}
          variant="outlined"
          color="secondary"
        />

        <Chip
          label="Sticky Cookie your leads"
          className={classes.chip}
          variant="outlined"
          color="secondary"
        />
      </ThemeProvider>

      <Card className={classes.card}>
        <CardActionArea>
          <CardContent className={classes.cardContent}>
            <Link
              href={"https://affiliates.clickfunnels.com/blackbook"+affiliatestring}
              target="_blank"
            >
              <img
                className={classes.imageCard}
                src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/MigH-clickfunnels-funnelhack-marketingsecrets.jpg"
                alt=""
              />
            </Link>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            href={"https://affiliates.clickfunnels.com/blackbook"+affiliatestring}
            target="_blank"
          >
            Funnel Hack Marketing Secrets
          </Button>
        </CardActions>
      </Card>

      <ThemeProvider theme={theme2}>
        <Typography className={classes.p2b3} variant="h5" component="p">
          <strong>
            <u>Network Marketing Secrets</u> — "How to Use Sales Funnels To Grow
            Your Network Marketing Team"... So You Only Have To Talk To People
            Who Are <u>SO SUPER INTERESTED</u> In What You're Selling That They
            Actually Raise Their Hands And ASK You To Sign Them Up!"
          </strong>
        </Typography>

        <Chip
          label="FREE + Shipping"
          className={classes.chip}
          variant="outlined"
          color="secondary"
        />

        <Chip
          label="Max cart value: $381.00"
          className={classes.chip}
          variant="outlined"
          color="secondary"
        />

        <Chip
          label="Your potential earnings: $174.60"
          className={classes.chip}
          variant="outlined"
          color="secondary"
        />
      </ThemeProvider>

      <Card className={classes.card}>
        <CardActionArea>
          <CardContent className={classes.cardContent}>
            <Link
              href={"https://networkmarketingsecrets.com/freebook"+affiliatestring}
              target="_blank"
            >
              <img
                className={classes.imageCard}
                src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/LlrO-clickfunnels-funnelhack-networkmarketingsecrets.jpg"
                alt=""
              />
            </Link>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            href={"https://networkmarketingsecrets.com/freebook"+affiliatestring}
            target="_blank"
          >
            Funnel Hack Network Marketing Secrets
          </Button>
        </CardActions>
      </Card>

{/*
      // <ThemeProvider theme={theme2}>
      //   <Typography className={classes.p2b3} variant="h5" component="p">
      //     <strong>
      //       <u>Perfect Webinar</u> — The Perfect Webinar This Webinar Script
      //       Made Me A Millionaire... And I Want To Give It To You... For FREE!
      //     </strong>
      //   </Typography>
      //
      //   <Chip
      //     label="FREE + Shipping"
      //     className={classes.chip}
      //     variant="outlined"
      //     color="secondary"
      //   />
      //
      //   <Chip
      //     label="Max cart value: $344.00"
      //     className={classes.chip}
      //     variant="outlined"
      //     color="secondary"
      //   />
      //
      //   <Chip
      //     label="Your potential earnings: $137.60"
      //     className={classes.chip}
      //     variant="outlined"
      //     color="secondary"
      //   />
      // </ThemeProvider>
      //
      // <Card className={classes.card}>
      //   <CardActionArea>
      //     <CardContent className={classes.cardContent}>
      //       <Link
      //         href={"https://perfectwebinarsecrets.com/get-it-free"+affiliatestring}
      //         target="_blank"
      //       >
      //         <img
      //           className={classes.imageCard}
      //           src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/KLaD-clickfunnels-funnelhack-perfectwebinar.jpg"
      //           alt=""
      //         />
      //       </Link>
      //     </CardContent>
      //   </CardActionArea>
      //   <CardActions>
      //     <Button
      //       variant="contained"
      //       color="primary"
      //       href={"https://perfectwebinarsecrets.com/get-it-free"+affiliatestring}
      //       target="_blank"
      //     >
      //       Funnel Hack Perfect Webinar
      //     </Button>
      //   </CardActions>
      // </Card>
*/}

{/*
      // <ThemeProvider theme={theme2}>
      //   <Typography className={classes.p2b3} variant="h5" component="p">
      //     <strong>
      //       <u>Software Secrets</u> — Free Book! Create And Launch Your Own
      //       Software Or App In The Next 90 Days... Even If You Have No Idea What
      //       To Create, How To Code, Or Where To Start!
      //     </strong>
      //   </Typography>
      //
      //   <Chip
      //     label="FREE + Shipping"
      //     className={classes.chip}
      //     variant="outlined"
      //     color="secondary"
      //   />
      //
      //   <Chip
      //     label="Max cart value: $2041.00"
      //     className={classes.chip}
      //     variant="outlined"
      //     color="secondary"
      //   />
      //
      //   <Chip
      //     label="Your potential earnings: $816.40"
      //     className={classes.chip}
      //     variant="outlined"
      //     color="secondary"
      //   />
      // </ThemeProvider>
      //
      // <Card className={classes.card}>
      //   <CardActionArea>
      //     <CardContent className={classes.cardContent}>
      //       <Link
      //         href={"https://softwaresecrets.com/livewebclass"+affiliatestring}
      //         target="_blank"
      //       >
      //         <img
      //           className={classes.imageCard}
      //           src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/HiHD-clickfunnels-funnelhack-softwaresecrets.jpg"
      //           alt=""
      //         />
      //       </Link>
      //     </CardContent>
      //   </CardActionArea>
      //   <CardActions>
      //     <Button
      //       variant="contained"
      //       color="primary"
      //       href={"https://softwaresecrets.com/livewebclass"+affiliatestring}
      //       target="_blank"
      //     >
      //       Funnel Hack Software Secrets
      //     </Button>
      //   </CardActions>
      // </Card>
*/}

      <ThemeProvider theme={theme2}>
        <Typography className={classes.p2b3} variant="h5" component="p">
          <strong>
            <u>One Funnel Away Challenge</u> — The <u>Life</u> You Want, The{" "}
            <u>Marriage</u> You Want... The <u>Family</u> That You Want, Is
            Going To Be Fueled By The Business You Build...
          </strong>
        </Typography>

        <Chip
          label="FREE"
          className={classes.chip}
          variant="outlined"
          color="secondary"
        />

        <Chip
          label="Max cart value: $100.00"
          className={classes.chip}
          variant="outlined"
          color="secondary"
        />

        <Chip
          label="Your potential earnings: $100.00"
          className={classes.chip}
          variant="outlined"
          color="secondary"
        />
      </ThemeProvider>

      <Card className={classes.card}>
        <CardActionArea>
          <CardContent className={classes.cardContent}>
            <Link
              href={"https://onefunnelaway.com/challenge"+affiliatestring}
              target="_blank"
            >
              <img
                className={classes.imageCard}
                src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/qlmZ-clickfunnels-funnelhack-onefunnelawaychallenge.jpg"
                alt=""
              />
            </Link>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            href={"https://onefunnelaway.com/challenge"+affiliatestring}
            target="_blank"
          >
            Funnel Hack One Funnel Away Challenge
          </Button>
        </CardActions>
      </Card>

      <ThemeProvider theme={theme2}>
        <Typography className={classes.p2b} variant="h5" component="p">
          . <br />
          <br />
          . <br />
          <br />
          . <br />
          <br />
          <span role="img" aria-label="explosion">
            💥
          </span>{" "}
          Is your <u>MIND BLOWN!?!</u> <br />
          <br />
          <u><strong>BIG TIP :</strong></u> The <strong>Traffic Secrets</strong> one-time-offer in the <strong>DotComSecrets Book</strong> funnel is <em>ROCKET FUEL</em> for the next Bonus...
          <br /><br />
          When you're ready, move on to BONUS 2 (...this one{" "}
          <strong>CHANGES EVERYTHING</strong>)!
        </Typography>
      </ThemeProvider>
    </React.Fragment>
  );
}

function Step5() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ThemeProvider theme={theme2}>
        <Typography className={classes.p2b2} variant="h5" component="p">
          <strong>BONUS:</strong> I'm giving you <strong>THIS FUNNEL</strong>{" "}
          for <u>FREE!</u> ... I call it the <u><strong>“ClickFunnels FREE-FOR-LIFE Funnel”.</strong></u>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          It only takes{" "}
          <strong>
            <em>60 Seconds</em>
          </strong>{" "}
          to <em>MAKE IT YOURS!</em>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          Automatically replace all of{" "}
          <strong>
            <u>MY</u> Affiliate Links
          </strong>{" "}
          with{" "}
          <strong>
            <u>YOUR</u> Affiliate Links.
          </strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <strong>
            <u>Zero Cost.</u>
          </strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <strong>
            <u>NO</u> Web Hosting
          </strong>{" "}
          needed.
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <strong>
            <u>NO</u> ClickFunnels
          </strong>{" "}
          account needed.
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <strong>
            <u>NO</u> Email Autoresponder
          </strong>{" "}
          needed.
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          I want to help you{" "}
          <strong>
            <em>LAUNCH TODAY</em>
          </strong>{" "}
          <span role="img" aria-label="raised hands">
            🚀
          </span>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <strong>... WHY?</strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          Because I see <u>FAR TOO MANY</u> affiliates stumble at “Step 1”...
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          I see <u>FAR TOO MANY</u> affiliates{" "}
          <strong>
            <em>
              fail to launch their <u>first funnel.</u>
            </em>
          </strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          (This funnel took me{" "}
          <strong>
            <u>WEEKS</u> TO LAUNCH!
          </strong>
          )
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          So I've made this <em>RIDICULOUSLY SIMPLE</em> for you.
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <strong>
            Seriously, <u>ANYONE</u> can do this.
          </strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          You. Can. Do. This!
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          . <br />
          <br />
          . <br />
          <br />
          . <br />
          <br />
          <strong>
            Is It OK If I <u>Over Deliver?</u>
          </strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          On top of <em>Launching Your First Affiliate Funnel In 60 Seconds</em>{" "}
          you get <strong>for FREE...</strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="div">
          <ol>
            <li>
              <strong>I Keep This Funnel Up-To-Date</strong> With ClickFunnels
              Latest Offers (Zero Maintenance Time For You)
              <br />
              <br />
            </li>
            <li>
              <strong>I A\B Test This Funnel</strong> To Maximise Conversions
              (Zero Optimisation Time For You)
              <br />
              <br />
            </li>
            <li>
              <strong>
                I Add YOUR Affiliate ID Into The Email “Welcome Sequence”
              </strong>{" "}
              For Anyone YOU Share This With That Signs Up (Zero Copywriting
              Time For You)
              <br />
              <br />
            </li>
            <li>
              <strong>I Share With You The Funnels' Analytics</strong> So You
              Can Track Metrics &amp; R.O.I (Zero Guessing If This Is Working For You)
              <br />
              <br />
            </li>
            <li>
              <strong>
                I Cover All The Cost (Design, Development, Testing,
                Copywriting, Hosting, Emailing, etc)
              </strong>{" "}
              So You Get 100% Pure Profit (Zero Cost For You)
            </li>
          </ol>
        </Typography>


        <Typography className={classes.p2b} variant="h5" component="p">
          . <br />
          <br />
          . <br />
          <br />
          . <br />
          <br />
          <strong>... So What's The Catch?</strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          I need your <u>BEST</u> email address.
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          For me to deliver to you <em>all this value (and more)</em> requires a
          way for me to <em>reach you.</em>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          Email is the <strong>simplest &amp; easiest option.</strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          I will <u>not</u> send you <strong>spam</strong>. I will <u>not</u>{" "}
          share <strong>your information.</strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          I <u>will</u> respect your <strong>privacy</strong>. I <u>will</u>{" "}
          only send you <strong>value-packed emails.</strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          ...and you can unsubscribe at <em>any time</em> with a{" "}
          <em>single click.</em>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          Zero Risk. <strong>1000% Awesome!</strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          Yes, <strong>1000%!</strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          So... Are You Ready To Launch?!
        </Typography>
      </ThemeProvider>

      <Card className={classes.card}>
        <CardActionArea>
          <CardContent className={classes.cardContent}>
            <Link
              href={"https://whatsyourdreamcar.com/signup-now"+affiliatestring}
              target="_blank"
            >
              <img
                className={classes.imageCard}
                src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/iVpq-clickfunnelsaffiliatedashboard.png"
                alt=""
              />
            </Link>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            href={"https://whatsyourdreamcar.com/signup-now"+affiliatestring}
            target="_blank"
          >
            Get Your ClickFunnels Affiliate ID
          </Button>
        </CardActions>
      </Card>

      <ThemeProvider theme={theme2}>
        <Typography className={classes.p2b} variant="h5" component="p">
          First, get your ClickFunnels Affiliate ID...
          <br /><br />
          Then send me your details and I'll automatically send you{" "}
          <u>YOUR SPECIAL LINK</u> so you can{" "}<em>INSTANTLY</em>{" "}
          use your own copy of the <u><strong>“ClickFunnels FREE-FOR-LIFE Funnel”</strong></u> <strong><em>RIGHT AWAY.</em></strong>
        </Typography>
      </ThemeProvider>

      <img
        className={classes.imageFormLogo}
        src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/1zIo-affiliateteams_1024.jpg"
        alt="Affiliate Teams Logo"
      />
      <div className="_form_1"></div>

      <ScriptTag isHydrating={false} type="text/javascript" src="https://ichrisjacob.activehosted.com/f/embed.php?id=1" />
      <ScriptTag isHydrating={false} type="text/javascript">
        var el_cf_affiliate_id = document.getElementsByName("field[1]")[0];
        var el_affiliate_id = document.getElementsByName("field[2]")[0];
        var el_aff_sub = document.getElementsByName("field[3]")[0];
        var el_aff_sub2 = document.getElementsByName("field[4]")[0];

        if(el_cf_affiliate_id)
          el_cf_affiliate_id.value = "{`${cf_affiliate_id}`}";

        if(el_cf_affiliate_id)
          el_cf_affiliate_id.setAttribute('value',"{`${cf_affiliate_id}`}");


        if(el_affiliate_id)
          el_affiliate_id.value = "{`${affiliate_id}`}";

        if(el_affiliate_id)
          el_affiliate_id.setAttribute('value',"{`${affiliate_id}`}");


        if(el_aff_sub)
          el_aff_sub.value = "{`${aff_sub}`}";

        if(el_aff_sub)
          el_aff_sub.setAttribute('value',"{`${aff_sub}`}");


        if(el_aff_sub2)
          el_aff_sub2.value = "{`${aff_sub2}`}";

        if(el_aff_sub2)
          el_aff_sub2.setAttribute('value',"{`${aff_sub2}`}");
      </ScriptTag>
      <ThemeProvider theme={theme2}>
        <Typography className={classes.p2b} variant="h5" component="p">
          . <br />
          <br />
          . <br />
          <br />
          . <br />
          <br />
          <span role="img" aria-label="raising hands">
            🙌
          </span>{" "}
          Congratulations, you've <strong>LAUNCHED!!!</strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          You are now <em>A MILE AHEAD</em> of everyone else!
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          Go and share <u>YOUR SPECIAL LINK</u>. Drive traffic to your copy of the <u><strong>“ClickFunnels FREE-FOR-LIFE Funnel”</strong></u> and let this Automated Affiliate Sales Funnel <em>do the hard work for you!</em>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          What <u>MORE</u> could you possibly <u>NEED?</u>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <strong>BONUS 3</strong> is <em>The Secret Sauce...</em>
        </Typography>
      </ThemeProvider>
    </React.Fragment>
  );
}

function Step6() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ThemeProvider theme={theme2}>
        <Typography className={classes.p2b2} variant="h5" component="p">
          <strong>BONUS:</strong> The 24-Hour Challenge Is A <strong>Sprint</strong>.
          Your Longterm Success Is A <strong>Marathon</strong>.
          Find The <em>Motivation</em>, <u>Accountability</u> &amp; <strong>TEAM</strong> You Need To Go-The-Distance.
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          Connect with <em>Beginner, Professional &amp; Super Affiliates</em> in this <strong>FREE (<em>and AWESOME</em>) community.</strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          This is <u>NOT</u> “yet-another-Facebook-Group”... <strong>It's <u>OFF Facebook.</u></strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          . <br />
          <br />
          . <br />
          <br />
          . <br />
          <br />
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
        <strong>Unlike Facebook</strong>, this isn't a “Closed group”, this community is <u>OPEN</u> and indexed by Search Engines so that <u><em>EVERYONE</em></u> can benefit from the knowledge being shared.
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
        <strong>Unlike Facebook</strong>, this forum is <u>STRUCTURED</u> so you can <em>find what you want, when you need it.</em>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
        <strong>Unlike Facebook</strong>, you <em>won't get distracted</em> and sucked into "social media"... you'll stay focused on <u>DOING THE WORK.</u>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
        <strong>Unlike Facebook</strong>, we are centralising ALL the best ClickFunnels <u>CONTENT &amp; RESOURCES</u> to be at your finger tips.
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
        <strong>Unlike Facebook</strong>, you will have dedicated <u>STEP-BY-STEP AFFILIATE BOOTCAMP</u> training discussions and study notes.
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
        <strong>Unlike Facebook</strong>, our group rules are <u>MORE RELAXED</u>... you <strong>CAN</strong> share links, videos, images, promos, affiliate links (<em>so long as you keep-it-classy</em>).
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
        <strong>Unlike Facebook</strong>, you can connect with people at <em>YOUR</em> level ... <u>BEGINNER AFFILIATES</u> (Getting Your First 10 Customers), <u>PROFESSIONAL AFFILIATES</u> (Growing From 10 To 100) &amp; <u>SUPER AFFILIATES</u> (Scaling From 100 To 1000+)
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
        <strong>Unlike Facebook</strong>, you can keep a <u>DAILY JOURNAL</u> (learn, do, share, <em>grow</em>), join a <u>WEEKLY ACCOUNTABILITY TEAM</u> (so you <em>stick</em> to your weekly goals), and a <u>MONTHLY MASTERMIND TEAM</u> (big ideas, honest feedback &amp; <em>massive motivation</em>).
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
        <strong>Unlike Facebook</strong>, you don't have to work alone... you can make genuine friendships, partnerships &amp; <u>WORK TOGETHER <em>IN A TEAM</em>.</u>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
        <strong>Unlike Facebook</strong>, this is <u>YOUR</u> community.
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          . <br />
          <br />
          . <br />
          <br />
          . <br />
          <br />
          <strong>
            Join <u>YOUR</u> Community!
          </strong>
        </Typography>
      </ThemeProvider>

      <Card className={classes.card2}>
        <CardActionArea>
          <CardContent className={classes.cardContent}>
            <Link
              href="https://clickfunnels.affiliateteams.com/"
              target="_blank"
            >
              <img
                className={classes.imageCard}
                src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/1zIo-affiliateteams_1024.jpg"
                alt=""
              />
            </Link>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            href="https://clickfunnels.affiliateteams.com/"
            target="_blank"
          >
            Sign Up (FREE) to Affiliate Teams for ClickFunnels
          </Button>
        </CardActions>
      </Card>

      <ThemeProvider theme={theme2}>
        <Typography className={classes.p2b} variant="h5" component="p">
          . <br />
          <br />
          . <br />
          <br />
          . <br />
          <br />
          <span role="img" aria-label="sparkle">
          ✨✨✨
          </span>{" "}
          <strong>Welcome to <u>AFFILIATE TEAMS!</u></strong> <span role="img" aria-label="sparkle">
          ✨✨✨
          </span>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          You have come a LOOOONG way, well done, <em>I'm proud of you!</em>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          You <em>almost</em> have EVERYTHING you need to <strong>Get ClickFunnels <em>FREE-FOR-LIFE</em> in <u>Under 24-Hours!</u></strong>
        </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
          <u>...Before You Get To Work, You Want To Check Out These 3 Special Offers...</u>
        </Typography>
      </ThemeProvider>
    </React.Fragment>
  );
}

function StepUnknown() {
  return <Typography>Step Unknown</Typography>;
}

function getSteps() {
  return [
    "The clock is ticking...",
    "SECRET 1: FREE for 14 Days",
    "SECRET 2: FREE for 12 Months",
    "SECRET 3: FREE-FOR-LIFE!",
    "BONUS 1: Funnel Hack Russell",
    "BONUS 2: Use THIS Funnel",
    "BONUS 3: Find Your TEAM",
    "OFFER 1: ClickFunnels Stack",
    "OFFER 2: Affiliate Stack",
    "OFFER 3: Traffic Stack"
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Step0 />;
    case 1:
      return <Step1 />;
    case 2:
      return <Step2 />;
    case 3:
      return <Step3 />;
    case 4:
      return <Step4 />;
    case 5:
      return <Step5 />;
    case 6:
      return <Step6 />;
    case 7:
      return <Step7 />;
    case 8:
      return <Step8 />;
    case 9:
      return <Step9 />;
    default:
      return <StepUnknown />;
  }
}

function getStepContentPostRender(step) {
  const FB = window.FB;
  if(step === 3){
    // XXX - for some reason step 3 gets called multiple times when navigating? (investigate latter)
    //console.log(step);
    if(FB !== undefined){
      FB.XFBML.parse();
    }
  }
}

function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [boom, setBoom] = React.useState(0);
  const steps = getSteps();

  function handleNext() {
    document
      .getElementById("step" + activeStep)
      .scrollIntoView({ behavior: "smooth" });
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setBoom(1);
    setTimeout(() => setBoom(0), 1000);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  return (
    <React.Fragment>
    <div className={classes.root}>
      {/* <ElevateAppBar /> */}
      <Confetti
        active={boom}
        config={confettiConfig}
        className={classes.boomleft}
      />
      <Confetti
        active={boom}
        config={confettiConfig}
        className={classes.boomright}
      />

      <Typography className={classes.hidden}>&nbsp;</Typography>
      <ThemeProvider theme={theme2}>
        <Typography className={classes.headline} variant="h3" component="h1">
          <strong>
              <u>ClickFunnels Pricing:</u>
          </strong>
          <br />
          3 Secrets To Get ClickFunnels For <strong>FREE!</strong>&nbsp;<span role="img" aria-label="fire">🔥</span>
        </Typography>
        <Typography className={classes.subheadline} variant="h5" component="h2">
          <u>+ CHALLENGE:</u> Get ClickFunnels <span className={classes.nowrap}>FREE-FOR-LIFE</span> In <span className={classes.nowrap}><strong>Under 24-Hours&nbsp;<span role="img" aria-label="Party Popper">🎉</span></strong></span>
        </Typography>
      </ThemeProvider>

      <Box className={classes.rootFacebook}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={3} s={2} className={classes.logoGrid}>
            <Box className={classes.logoBox}>
              <img
                className={classes.logo}
                src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/aQmT-affiliateteams.jpeg"
                alt=""
              />
            </Box>
          </Grid>
          <Grid item xs={9} s={10}>
            <Box className={classes.facebookBox}>
              <div className={classes.arrowLeft} />
              <ThemeProvider theme={theme2}>
                <Typography
                  className={classes.pLike}
                  variant="body2"
                  component="p"
                >
                  <strong>You:</strong> “Challenge Accepted!”&nbsp; <br />
                  <strong>Next:</strong> LIKE → SHARE → JOIN
                </Typography>
              </ThemeProvider>
              <div
                className="fb-like"
                // data-href="https://clickfunnels.affiliateteams.com.au/clickfunnels-pricing/"
                data-layout="standard"
                data-action="like"
                data-show-faces="true"
                data-share="true"
                data-width="250"
              >
                ...
              </div>
              <ThemeProvider theme={theme2}>
                <Typography
                  className={classes.pLike}
                  variant="body2"
                  component="p"
                >
                  <Link
                    component="a"
                    target="_blank"
                    variant="body2"
                    className={classes.fbgrouplink}
                    href="https://www.facebook.com/groups/clickfunnelsaffiliate24hourchallenge/"
                  >
                    JOIN The 24-Hour Challenge Facebook Group
                  </Link>
                </Typography>
              </ThemeProvider>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Stepper
        className={classes.stepperContainer}
        activeStep={activeStep}
        orientation="vertical"
        id="stepperid"
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent id={"step" + index} transitionDuration={0}>
              {getStepContent(index)}
              {getStepContentPostRender(index)}
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    variant="outlined"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "What Next?..." : "Next"}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>

      <Typography className={classes.p2bc} variant="h4" component="p">
        <span role="img" aria-label="Smiling Face With Heart-Eyes">😍😍😍</span>{" "}THANK YOU{" "}<span role="img" aria-label="Smiling Face With Heart-Eyes">😍😍😍</span>
      </Typography>

        <Typography className={classes.p2b} variant="h5" component="p">
        <img
          className={classes.imageCard75}
          src="https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/wwPA-kim.gif"
          alt="Kim makes it rain!"
        />
        </Typography>

      <Typography className={classes.p2bc} variant="h4" component="p">
        <span role="img" aria-label="flying money">
          💸💸💸
        </span>&nbsp;Now put this funnel to work for <u><strong>YOU!</strong></u>&nbsp;<span role="img" aria-label="flying money">
          💸💸💸
        </span>
      </Typography>

      <Typography className={classes.p2bc} variant="h2" component="p">
        “You're just <strong>THIS</strong> funnel away... #FreeForLifeFunnel”
      </Typography>

      <Typography className={classes.p2bc} variant="h4" component="p">
        <span role="img" aria-label="hearts thumbs-up heart">
          ❤️👇👇👇❤️
        </span>&nbsp;<strong>SHARE THIS</strong>&nbsp;<span role="img" aria-label="hearts thumbs-up heart">
          ❤️👇👇👇❤️
        </span>
      </Typography>

          <Button
            variant="contained"
            color="primary"
            onClick={handleReset}
            className={classes.button}
          >
            Start Again
          </Button>
        </Paper>
      )}
    </div>

    <div className="footer">
      <Typography
        variant="body2"
        component="p"
        >
        <strong>Disclosure:</strong> I am an independent ClickFunnels Affiliate, not an employee. I receive referral payments from ClickFunnels. The opinions expressed here are my own and are not official statements of ClickFunnels or its parent company, Etison LLC.
      </Typography>

    </div>
    </React.Fragment>
  );
}

export default VerticalLinearStepper;
