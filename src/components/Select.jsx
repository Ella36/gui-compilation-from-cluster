import React from "react";
import SelectElement from "./SelectElement";
import { Container } from 'react-bootstrap';

export default class Select extends React.Component {
render () {
        return (
        <div>
          <h1> Select </h1>
          <Container>
          {[...Array(50)].map((x, i) => <SelectElement key={i}/>)}
</Container>
        </div>
        )
    }}