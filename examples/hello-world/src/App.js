import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

const minDate = moment()
const maxDate = moment(minDate).add(4, 'years')
const monthsShown = maxDate.diff(moment(), "months") + 2

class App extends Component {
  constructor() {
    super();
    this.state = {
      startDate: moment()
    };
  }

  render() {
    return (
      <DatePicker
        inline
        selected={this.state.startDate}
        onChange={this.handleChange.bind(this)}
        monthsShown={monthsShown}
      />
    );
  }
        // minDate={minDate}
        // maxDate={maxDate}

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
}

export default App;
