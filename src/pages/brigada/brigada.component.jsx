import React from 'react'

import DATA_BRIGADA from '../../shared/data-brigada';

import PreviewComponent from "../../components/preview-component/preview-component";

class Brigada extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        dataBrigada: DATA_BRIGADA
      };
    }
  
    render() {
        console.log('aca')

      const { dataBrigada } = this.state;
      console.log(dataBrigada)
      return (
        <div>
          {dataBrigada.map(({ id, ...otherCollectionProps }) => (
            <PreviewComponent key={id} {...otherCollectionProps} />
          ))}
        </div>
      );
    }
  }
  

export default Brigada;