import React from 'react';
import './../styles/App.css';
import EmployeeInput from './EmployeeInput';
import EmployeeList from './EmployeeList';
import Header from './Header';
import Modal from './Modal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [{
        name: 'Airi Satou',
        position: 'Accountant',
        office: 'Tokyo',
        Age: '33',
        startDate: '2008/11/28',
        salary: '$162,700'
      },{
        name: 'Angelica Ramos',
        position: 'Cheif Executive Officer',
        office: 'London',
        Age: '47',
        startDate: '2009/10/09',
        salary: '$1,200,000'
      },{
        name: 'Ashton Cox',
        position: 'Junior Technical Author',
        office: 'San Francisco',
        Age: '66',
        startDate: '2009/01/12',
        salary: '$86,000'
      },{
        name: 'Bradely Greer',
        position: 'Software Engineer',
        office: 'London',
        Age: '41',
        startDate: '2012/10/13',
        salary: '$132,000'
      }]
    };    
    this.addEmployee = this.addEmployee.bind(this);
  }

  addEmployee (employee) {
    this.setState({
      employees: [...this.state.employees, employee]
    });
  }

  render() {
    return (
      <div className='App'>
        <Header></Header>
        <Modal></Modal>
        <EmployeeInput addEmployee={this.addEmployee}></EmployeeInput>
        <EmployeeList employees={this.state.employees}></EmployeeList>
      </div>
    );
  }
}

export default App;

//https://github.com/deeparaghunathank/assignment_altair
