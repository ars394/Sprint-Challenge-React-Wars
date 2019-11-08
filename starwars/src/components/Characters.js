import React from "react";
import './StarWars.css';
import styled from 'styled-components';

const StyledH2 = styled.h2`
  font-size: 1.2rem;
  text-decoration: none;
  text-align: center;
`;

const StyleP = styled.p`
    color: black;
`;

const Characters = (props) => {
    return (
        <div className="Cards">
          <StyledH2><h2>{props.name}</h2></StyledH2>
          <StyleP><p>Gender: {props.gender}</p></StyleP>
          <StyleP><p>Birth Year: {props.birthday}</p></StyleP>
        </div>
    )
}

export default Characters;