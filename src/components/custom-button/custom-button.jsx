import React from 'react';
import './custom-button.scss'


 export const CustomButton = ({children,isGoogleSignIn,inverted, ...OtherProps}) => {
  return(
      <div>
          <button className={`${inverted?'inverted':''} ${isGoogleSignIn? 'google-sign-in':''} custom-button`}  {...OtherProps}>
              {children}
          </button>
      </div>
  )
 }