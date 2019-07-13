import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';


 const MenuItem = (props) => {
    return (
        <div className={`${props.section.size} menu-item`} onClick ={() => props.history.push(`${props.match.url}${props.section.linkUrl}`)}>
        <div className="background-image" style={{
            backgroundImage:`url(${props.section.imageUrl})`
        }}  />
              <div className="content">
              <h1 className="title">{props.section.title.toUpperCase()}</h1>
              <span className="subtitle">Shop</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);