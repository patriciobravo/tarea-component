import React from 'react';

import './custom-button.styles.scss';
import  { Button } from 'react-bootstrap';


const CustomButton = ({children}) => (
    <Button variant="primary">  {children}</Button>
);

export default CustomButton;