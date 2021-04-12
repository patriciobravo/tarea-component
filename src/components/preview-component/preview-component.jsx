
import React from "react";

import CollectionComponent from "../collection-component/collection-component";

import './preview-component.styles.scss';

const PreviewComponent = ({ title, items }) => (
    
    
  <div className="collection-preview">
    <h1 className="title ml-3">{title.toUpperCase()}</h1>
    <div className="preview">
        
      {
      items.filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
            
            
          <CollectionComponent key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default PreviewComponent;