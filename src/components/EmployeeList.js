import React from 'react';
import './../styles/EmployeeList.css';

class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: this.props.employees,
      emplist: []
    };
    this.getEmployees = this.getEmployees.bind(this);
    this.searchEmployees = this.searchEmployees.bind(this);
  }

  componentWillMount() {
    this.setState({
      employee: this.props.employees,
      emplist: this.getEmployees(this.props.employees)
    });
  }
  componentWillUpdate(next, prev) {
    if (prev.employee && next.employees && (prev.employee.length !== next.employees.length)) {
      this.setState({
        employee: next.employees,
        emplist: this.getEmployees(next.employees)
      });
    }
  }

  getEmployees(employees) {
    let list = employees.map(element => {
      return (
        <tr>
          <td>{element.name}</td>
          <td>{element.position}</td>
          <td>{element.office}</td>
          <td>{element.Age}</td>
          <td>{element.startDate}</td>
          <td>{element.salary}</td>
        </tr>
      )
    });
    return list;
  }

  searchEmployees(event) {
    if (event.keyCode == 13) {
      let results = [];

      let toSearch = document.getElementById('search').value;
      results = this.state.employee.filter(function (obj) {
        return Object.keys(obj).some(function (key) {
          return obj[key].toLowerCase().includes(toSearch);
        })
      });
      let list = this.getEmployees(results);
      this.setState({
        emplist: list
      });
    }
  }


  render() {
    return (
      <div>
        <div className='search-bar row'>
          <span className='col'>show
            <select>
              <option>10</option>
              <option>20</option>
              <option>50</option>
              <option>100</option>
            </select>
            entries
        </span>
          <span className='col'></span>
          <span className='col'>
            Search :
          <input id='search' onKeyUp={this.searchEmployees}></input>
          </span>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Office</th>
              <th>Age</th>
              <th>Start Date</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {this.state.emplist}
          </tbody>
        </table>
        <footer className='row'>
          <span className='font col-3'>Showing 1 to 10 out of 57 entries</span>
          <span className='font col-3'></span>
          <label className='font col'>Previous</label>
          <label className='font col'>1</label>
          <label className='font col'>2</label>
          <label className='font col'>3</label>
          <label className='font col'>4</label>
          <label className='font col'>5</label>
          <label className='font col'>6</label>
          <label className='font col'>Next</label>
        </footer>
      </div>
    );
  }
}

export default EmployeeList;
