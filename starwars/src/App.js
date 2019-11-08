import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Characters from './components/Characters';
import styled from "styled-components";


const CharCard = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = () => {
    axios.get(`https://swapi.co/api/people/?page=${page}&format=json`)
    .then(response => {
      setData(response.data.results)
    })
    .catch(error =>{console.log('Sorry! There is an error in the API request!')})
  }


  useEffect(fetchData, [page])

  console.log(data);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharCard>
        {data.map((starwars, index) => {
          return <
            Characters 
            name={starwars.name} 
            key={index} 
            birthday={starwars.birth_year} 
            gender={starwars.gender}
            />
        })}
      </CharCard>
      <div className="Buttons">
        <button className="Back" onClick={() => setPage(page - 1)}>Back</button>

        <button className="Next" onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
}

export default App;