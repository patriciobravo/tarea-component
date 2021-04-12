import React from 'react'

import DATA_PASE from '../../shared/data-pase-batalla';

import PreviewComponent from "../../components/preview-component/preview-component";

class Pase extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        dataPase: DATA_PASE
      };
    }
  
    render() {
      
      const { dataPase } = this.state;
      console.log(dataPase)
      return (
        <div>
          {dataPase.map(({ id, ...otherCollectionProps }) => (
            <PreviewComponent key={id} {...otherCollectionProps} />
          ))}
        </div>
      );
    }
  }
  

export default Pase;