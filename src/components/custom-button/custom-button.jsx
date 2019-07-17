import React from 'react';
import './custom-button.scss'


 export const CustomButton = ({children,isGoogleSignIn, ...OtherProps}) => {
  return(
      <div>
          <button className={`${isGoogleSignIn? 'google-sign-in':''} custom-button`} {...OtherProps}>
              {children}
          </button>
      </div>
  )
 }