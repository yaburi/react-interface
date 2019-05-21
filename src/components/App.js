import React from 'react';
import '../css/App.css';

import AddAppointment from './AddAppointment';
import SearchAppointments from './SearchAppointments';
import ListAppointments from './ListAppointments';

function App() {
  return (
    <main className="page bg-white" id="petratings">
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-white">
            <div className="container">
              <AddAppointment />
              <SearchAppointments />
              <ListAppointments />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
