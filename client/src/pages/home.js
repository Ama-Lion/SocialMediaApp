import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";

import Scream from "../components/scream/Scream";
import Profile from "../components/profile/Profile";
import ScreamSkeleton from "../util/ScreamSkeleton";
import withStyles from "@material-ui/core/styles/withStyles";

import { connect } from "react-redux";
import { getScreams } from "../redux/actions/dataActions";
const styles = (theme) => ({
  ...theme.spreadThis,
  profile: {
    right: 5,
  },
});

class home extends Component {
  componentDidMount() {
    this.props.getScreams();
  }
  render() {
    const { classes } = this.props;

    const { screams, loading } = this.props.data;
    let recentScreamsMarkup = !loading ? (
      screams.map((scream) => <Scream key={scream.screamId} scream={scream} />)
    ) : (
      <ScreamSkeleton />
    );
    return (
      <Grid container spacing={16}>
        <Grid item sm={8} xs={12}>
          {recentScreamsMarkup}
        </Grid>
        <Grid item sm={4} xs={12} className={classes.profile}>
          <Profile />
        </Grid>
      </Grid>
    );
  }
}

home.propTypes = {
  classes: PropTypes.object.isRequired,
  getScreams: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getScreams })(
  withStyles(styles)(home)
);
