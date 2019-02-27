import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ResponsiveDrawer from './ResponsiveDrawer';
import { Typography } from '@material-ui/core';

class Combination extends Component {
    render() {
        return (
            <div>
                <ResponsiveDrawer/>
                <Typography paragraph>
                    lorem ipsum dolor sit amet pos consiquious mon der at vera pista.
                </Typography>
            </div>
        );
    }
}

Combination.propTypes = {

};

export default Combination;