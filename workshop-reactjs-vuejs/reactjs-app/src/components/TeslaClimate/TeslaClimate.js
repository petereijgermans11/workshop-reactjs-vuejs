import React from 'react';
import './TeslaClimate.css';
import PropTypes from 'prop-types';

const TeslaClimate = (props) => (
  <div className="tesla-climate">
    <label
      className={`tesla-climate__item ${props.value ? 'tesla-climate__item--active' : '' }  ${!props.limit ? 'tesla-heat':''}`}
    >
      <p>{props.limit ? 'ac' : 'heat'} {props.value ? 'on' : 'off'}</p>
      <i className="tesla-climate__icon"></i>
      <input
        type="checkbox"
        name="climate"
        checked={props.value}
        onChange={() => {props.handleChangeClimate()}}
      />
    </label>
  </div>
);

// ERROR 4
TeslaClimate.propTypes = {
  value: PropTypes.bool,
  limit: PropTypes.bool,
  handleChangeClimate: PropTypes.string
}

export default TeslaClimate;