import React, {PropTypes} from 'react';
import MDSpinner from 'react-md-spinner';

const Spinner = ({}) => (
    <div className="spinner-wr">
        <MDSpinner
        color1="rgba(0,0,0,0.8)"
        color2="#fac"
        color3="rgba(0,0,0,0.8)"
        color4="#fac"

        size={100}
        duration={1500}
        />
    </div>
);

// Make ESLint happy again: add validation to props
Spinner.propTypes = {};
Spinner.defaultProps = {};

export default Spinner;
