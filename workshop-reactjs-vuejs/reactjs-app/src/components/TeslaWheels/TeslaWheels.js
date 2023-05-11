import React from 'react';
import './TeslaWheels.css';
import PropTypes from 'prop-types';

const LabelLists = (props) => {
  const value = props.wheels.value;
  const changeHandler = props.wheels.handleChangeWheels;
  const sizes = [19, 21];
  // Exersise 1: FIXME
  // and ERROR 7 ---> solution: sizes.map() 
  const LabelItems = sizes.map(size => (
    <label key={size} className={`tesla-wheels__item tesla-wheels__item--${size} ${value === size ? 'tesla-wheels__item--active' : '' }`}>
      <input
        type="radio"
        name="wheelsize"
        value={size}
        checked={value === size} 
        onChange={() => {changeHandler(size)}} />
      <p>
        {size}"
      </p>
    </label> 
    )
  );
  return (
    <div>
      {LabelItems}
    </div>
  );
}
const TeslaWheels = (props) => (
  <div className="tesla-wheels__component">
    <p className="tesla-wheels__title">Wheels</p>
    <div className="tesla-wheels__container cf">
      <LabelLists wheels={props}/>
    </div>
  </div>
);
TeslaWheels.propTypes = {
  value: PropTypes.number,
  handleChangeWheels: PropTypes.func
}
export default TeslaWheels;