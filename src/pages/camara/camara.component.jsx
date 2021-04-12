import React from 'react'

import DATA_ARMS from '../../shared/data-camara';

import PreviewComponent from "../../components/preview-component/preview-component";

class Camara extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        dataCamara: DATA_ARMS
      };
    }
  
    render() {
        console.log('aca')

      const { dataCamara } = this.state;
      console.log(dataCamara)
      return (
        <div>
          {dataCamara.map(({ id, ...otherCollectionProps }) => (
            <PreviewComponent key={id} {...otherCollectionProps} />
          ))}
        </div>
      );
    }
  }
  

export default Camara;