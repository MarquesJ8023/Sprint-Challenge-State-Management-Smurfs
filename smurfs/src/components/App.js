import React, { useContext, useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import { SmurfContext } from "../contexts/SmurfContext";
import SmurfForm from './SmurfForm';
import SmurfList from './SmurfList';
import styled from 'styled-components';

const Smurfs = styled.div`

  display: flex;
  flex-wrap: wrap;
  flex-direction: center;
`;

const App = () => {
    const [smurfs, setSmurfs] = useState([]);
    const [lastUpdate, setLastUpdate] = useState(null);

    useEffect(() => {
      const getData = async () => {
        const res = await axios.get('http://localhost:3333/smurfs');
        setSmurfs(res.data);
      };
      getData();
    }, [lastUpdate]);

    return (
        <SmurfContext.Provider value={setLastUpdate}>
          <div className="App">
            <SmurfForm/>
            <Smurfs>
              {smurfs.map(smurf => <SmurfList key={smurf.id} smurf={smurf} />)}
            </Smurfs>
          </div>
        </SmurfContext.Provider>
    );
};

export default App;
