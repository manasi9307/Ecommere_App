import React from 'react';
import './form-input.scss';

export const FormInput = ({handleChange, label, ...OtherProps}) => {
    return(
   <div className="group">
   <input className="form-input" onChange={handleChange} {...OtherProps} />
   {
       label? <label className={`${OtherProps.value.length ? 'shrink' : ''} form-input-label`}></label> : null
   }
   </div>
    )
}
