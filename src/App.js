import React, { Fragment } from 'react';
import Header from './components/Header';
import Form from './components/Form';

function App() {
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
                
              />
            </div>
            <div className="col m6 s12">
              12
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
