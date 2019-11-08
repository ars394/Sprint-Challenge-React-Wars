import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Persons from './components/Persons';
import styled from 'styled-components';

const AppBox = styled.div `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  `;

const PageButtons = styled.div  `
  display: flex;
  width 60%;
  justify-content: flex-end;
  align-items: center
  height: 25px;
  `;

const ButtonPrevious = styled.button`
  width: 25%;
  border-radius: 5px;
  background-color: white;
  font-size: 16px;
  margin-right: 125px;
  `;

const ButtonNext = styled.button`
  width: 25%;
  border-radius: 5px;
  background-color: white;
  font-size: 16px;
  margin-right: 125px;
  `;


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

const [data, setData] = useState({});
const [page, setPage] = useState(1);

const fetchData = () => {
  axios.get(`htts://swapi.co/ap/people/?page=${page}&format=json`)

  .then(response => {
    setData(response.data.results)
  })
  .catch(error =>{console.log('error in API request :(')})
}

useEffect(fetchData, [page])

console.log(data);
console.log(page);
console.log(page.length);
return (
  <div className="App">
    <h1 className="Header">React Wars</h1>
    <PageButtons>
    {page === 1 ? null : <ButtonPrevious onClick={() => setPage(page - 1)}>Previous</ButtonPrevious>}

    {page === page.length ? null : <ButtonNext onClick={() => setPage(page + 1)}>Next</ButtonNext>}
    </PageButtons>

    <AppBox> 
      {data.map((starwars, index) => {
        return <Persons name={starwars.name} key={index}
        height={starwars.height} birthday={starwars.birth_year} mass={starwars.mass} gender={starwars.gender}/>
      })}
    </AppBox>

    <PageButtons>
    {page === 1 ? null : <ButtonPrevious onClick={() => setPage(page - 1)}>Previous</ButtonPrevious>}

    {page === page.length ? null : <ButtonNext onClick={() => setPage(page + 1)}>Next</ButtonNext>}
    </PageButtons>
  </div>
    
  );
}

/*
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
*/

export default App;
