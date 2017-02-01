import React from 'react';


const CheckBox = ({ className, type, onClick, label, answerId ,defaultChecked }) => (
    <div className={`checkbox-wr ${className}`}>
      <input type={`${type}`} id={`featured-${answerId}`} defaultChecked={defaultChecked}
             onClick={typeof onClick === 'function' ? onClick : false}/>
      <label htmlFor={`featured-${answerId}`}>{label}</label>
    </div>
);

// Make ESLint happy again: add validation to props
CheckBox.propTypes = {
  type: React.PropTypes.string,
  onClick: React.PropTypes.func,
  label: React.PropTypes.string,
  answerId: React.PropTypes.number
};

CheckBox.defaultProps = {
  type: 'default',
    defaultChecked:false
};

export default CheckBox;