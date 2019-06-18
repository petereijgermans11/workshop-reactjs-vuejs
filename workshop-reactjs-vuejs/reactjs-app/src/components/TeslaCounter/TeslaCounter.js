import React from 'react';
import './TeslaCounter.css';
import PropTypes from 'prop-types';

const TeslaCounter = (props) => (
  <div className="tesla-counter">
    <p className="tesla-counter__title">{props.initValues.title}</p>
    <div className="tesla-counter__container cf">
      <div className="tesla-counter__item">
        <p className="tesla-counter__number">
          { props.currentValue }
          <span>{ props.initValues.unit }</span>
        </p>
        <div className="tesla-counter__controls">
         {/* ERROR 5 */}
          <button 
            click={(e) => props.increment(e, props.initValues.title)} 
            disabled={props.currentValue >= props.initValues.max} 
          >
          </button>
          <button 
            click={(e) => props.decrement(e, props.initValues.title)} 
            disabled={props.currentValue <= props.initValues.min} 
          >
          </button>
        </div>
      </div>
    </div>
  </div>  
);

TeslaCounter.propTypes = {
  currentValue: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
  initValues: PropTypes.object
}

export default TeslaCounter;