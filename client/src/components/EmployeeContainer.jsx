import React, { Component } from 'react'
import axios from 'axios'

import Employee from './Employee'
import NewEmployeeForm from './NewEmployeeForm'
import EditEmployeeForm from './EditEmployeeForm';

class EmployeeContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			employees: [],
			editingEmployeeID: null,
			editingEmployee: null
		}

		this.addNewEmployee = this.addNewEmployee.bind(this)
		this.removeEmployee = this.removeEmployee.bind(this)
		this.editEmployee = this.editEmployee.bind(this)
		this.editingEmployee = this.editingEmployee.bind(this)
	}

	componentDidMount() {
		axios.get('/api/v1/employees.json')
			.then(res => {
				this.setState({
					employees: res.data
				})
			})
			.catch(err => console.log(err))
	}

	addNewEmployee(first_name, last_name, employee_id, email_address, phone_number) {
		axios.post('/api/v1/employees',
			{
				employee:
				{
					first_name,
					last_name,
					employee_id,
					email_address,
					phone_number
				}
			})
			.then(res => {
				const employees = [...this.state.employees, res.data]
				this.setState({ employees })
			})
			.catch(err => console.log(err))
	}

	removeEmployee(id) {
		axios.delete(`/api/v1/employees/${id}`)
			.then(res => {
				const employees = this.state.employees.filter(
					emp => emp.id !== id
				)
				this.setState({ employees })
			})
			.catch(err => console.log(err))
	}

	editingEmployee(id) {
		const employee = this.state.employees.filter(emp => {
			return emp.id === id;
		})
		this.setState({
			editingEmployeeID: id,
			editingEmployee: employee[0]
		})
	}

	editEmployee(id, first_name, last_name, employee_id, email_address, phone_number) {
		axios.put(`/api/v1/employees/${id}`, {
			employee:
			{
				first_name,
				last_name,
				employee_id,
				email_address,
				phone_number
			}
		})
			.then(res => {
				let employees = this.state.employees
				employees = employees.filter(emp => {return emp.id !== this.state.editingEmployeeID })
				employees.push(res.data)
				this.setState({
					employees,
					editingEmployeeID: null
				})
			})
			.catch(err => console.log(err))
	}

	render() {
		return (
			<div>
				<div className='App-header'></div>
				<div>
					{this.state.editingEmployeeID === null ?
						<NewEmployeeForm onNewEmployee={this.addNewEmployee} />
						:
						<EditEmployeeForm className='employee-name'
							key={this.state.editingEmployeeID}
							emp={this.state.editingEmployee}
							onRemoveEmployee={this.removeEmployee}
							editEmployee={this.editEmployee} />
					}
				</div>
				<table className='employee-table'>
					<thead>
						<tr className='table-headers'>
							<th>Fist Name</th>
							<th>Last Name</th>
							<th>Employee ID</th>
							<th>Email</th>
							<th>Phone Number</th>
							<th>Options</th>
						</tr>
					</thead>
					<tbody>
						{this.state.employees.map(emp => {
							return (
								<Employee
									key={emp.id}
									emp={emp}
									onRemoveEmployee={this.removeEmployee}
									editingEmployee={this.editingEmployee} />
							)
						})}
					</tbody>
				</table>
			</div>
		)
	}
}

export default EmployeeContainer