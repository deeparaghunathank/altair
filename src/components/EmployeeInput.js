import React from 'react';
import './../styles/EmployeeInput.css';
import { isNumber } from 'util';

class EmployeeInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    let date = new Date();
    let salary = document.getElementById('salary').value;
    let employee = {
      name: document.getElementById('name').value,
      position: document.getElementById('position').value,
      office: document.getElementById('office').value,
      Age: document.getElementById('age').value,
      salary: '$' + salary,
      startDate: date.toLocaleString(),
    }
    this.props.addEmployee(employee);
  }

  render() {
    return (
      <div className='margin--top row'>
        <input className='col' type='text' id='name' placeholder='Enter Name' />
        <input className='col' type='text' id='position' placeholder='Enter Position' />
        <input className='col' type='text' id='office' placeholder='Enter Office' />
        <input className='col' type='number' id='age' placeholder='Enter Age' />
        <input className='col' type='number' id='salary' placeholder='Salary' />
        <button type='submit' className='col' onClick={this.handleSubmit}>Add</button>
      </div>
    )
  }
}

export default EmployeeInput;
