import React from 'react';

import './collection-component.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import  { Container, Card } from 'react-bootstrap';

const ColleccionComponent = ({ id, name, price, imageUrl}) => (
 
    <Container>
      <Card >
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
          {price} Pavos
          </Card.Text>
          <CustomButton type="submit">COMPRAR</CustomButton>
        </Card.Body>
      </Card>
    </Container>

);






export default ColleccionComponent;