import React from 'react';
import './previewCollection.scss';
import { CollectionItem } from '../collectionItem/collectionItem';

export const PreviewCollection = ({title,items}) => {
    return(
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
            {items.filter((item,index) => index<4).map(({id, ...OtherProperties}) => (
                <CollectionItem key={id} {...OtherProperties} />
            ))}
            </div>
        </div>
    )
}
