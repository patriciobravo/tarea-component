import React from 'react'

import DATA_CLUB from '../../shared/data-club';

import PreviewComponent from "../../components/preview-component/preview-component";

class Club extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        dataClub: DATA_CLUB
      };
    }
  
    render() {

      const { dataClub } = this.state;
      console.log(dataClub)
      return (
        <div>
          {dataClub.map(({ id, ...otherCollectionProps }) => (
            <PreviewComponent key={id} {...otherCollectionProps} />
          ))}
        </div>
      );
    }
  }
  

export default Club;