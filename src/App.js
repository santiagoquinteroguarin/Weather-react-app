import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';

function App() {

  // ?1. state of form
  const [search, setSavedSearch] = useState({
    city: '',
    country: '',
  });

  // ?4. 
  const [query, setSavedQuery] = useState(false);
  const [data, setSavedData] = useState({});

  // ?2. extract
  const { city, country } = search;

  // ?3. useEffect - cada vez que el estate se actualiza, aca se va a buscar en la API, solo cuando el state de query este en true
  useEffect(() => {
    const queryAPI = async () => {
      
      // ?4. 
      if(query) {

        // ?5.
        const appId = '7d978aef66bca4c0848f2914e448926e';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;

        const response = await fetch(url);
        const data = await response.json();

        // ?6. guardar
        setSavedData(data);
        // ?7. para volver a consultar
        setSavedQuery(false);
      }
    }
    queryAPI();
  }, [query])

  return (
    <Fragment>
      <Header 
        titleHeader="Clima React App"
      />

      <div className="container-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form 
                search={search}
                setSavedSearch={setSavedSearch}
                setSavedQuery={setSavedQuery}
              />
            </div>
            <div className="col m6 s12">
              <Weather
                data={data}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
