// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const CharacterDiv = styled.div`
    width: 50vw;
    margin: 20px;
    padding: 50px;
    background-color: rgba(255, 0, 0, 0.1);
    border: 10px solid rgba(100, 0, 0, 0.1);
    border-radius: 20px;

    h2 {
        color: red;
    }
    h3 {
        color: darkred;
    }
`
export default function Character (props) {
    const {character} = props

    
    return (
        <CharacterDiv>
            <h2>{character.name}</h2>
            <h3>Mass: {character.mass} kg</h3>
        </CharacterDiv>
    )
}