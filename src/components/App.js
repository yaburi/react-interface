import React, {Component} from 'react';
import '../css/App.css';

import AddAppointment from './AddAppointment';
import SearchAppointments from './SearchAppointments';
import ListAppointments from './ListAppointments';

import { without } from 'lodash';

class App extends Component {
  constructor() {
    super();
    this.state = {
      myAppointments: [],
      formDisplay: false,
      lastIndex: 0
    };

    this.addAppointment = this.addAppointment.bind(this);
    this.deleteAppointment = this.deleteAppointment.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }

  addAppointment(apt) {
    let tempApt = this.state.myAppointments;
    apt.aptId = this.state.lastIndex;
    tempApt.unshift(apt);
    this.setState({
      myAppointments: tempApt,
      lastIndex: this.state.lastIndex + 1
    });
  }

  deleteAppointment(apt) {
    let tempApt = this.state.myAppointments;
    tempApt = without(tempApt, apt); // lodash without() method

    this.setState({
      myAppointments: tempApt
    });
  }

  toggleForm() {
    this.setState({
      formDisplay: !this.state.formDisplay
    });
  }

  componentDidMount() {
    fetch('./data.json')
      .then(response => response.json())
      .then(result => {
        const apts = result.map(item => {
          item.aptId = this.state.lastIndex;
          this.setState({lastIndex: this.state.lastIndex + 1});
          return item;
        })

        this.setState({
          myAppointments: apts
        });
      });
  }
  
  render() {
    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <AddAppointment 
                  formDisplay={this.state.formDisplay} 
                  toggleForm={this.toggleForm}
                  addAppointment = {this.addAppointment}
                />
                <SearchAppointments />
                <ListAppointments 
                  appointments={this.state.myAppointments} 
                  deleteAppointment={this.deleteAppointment} 
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
