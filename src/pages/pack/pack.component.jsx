import React from 'react'

import DATA_PACK from '../../shared/data-pack';

import PreviewComponent from "../../components/preview-component/preview-component";

class Pack extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        dataPack: DATA_PACK,
     
      };
    }
  
    render() {
        console.log('aca')

      const { dataPack} = this.state;
     
      return (
        <div>
          {dataPack.map(({ id, ...otherCollectionProps }) => (
            <PreviewComponent key={id} {...otherCollectionProps} />
          ))}
        </div>
      );
    }
  }
  

export default Pack;