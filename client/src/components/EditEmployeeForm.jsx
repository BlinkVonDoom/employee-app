import React, { Component } from 'react'

class EditEmployeeForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			id: this.props.emp.id,
			firstName: this.props.emp.first_name,
			lastName: this.props.emp.last_name,
			employeeId: this.props.emp.employee_id,
			emailAddres: this.props.emp.email_address,
			phoneNumber: this.props.emp.phone_number
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value })
	}

	handleSubmit(e) {
		e.preventDefault()
		const { id, firstName, lastName,
			employeeId, emailAddres, phoneNumber } = this.state
		
		this.props.editEmployee(id, firstName, lastName,
			employeeId, emailAddres, phoneNumber)
	}

	render() {
		return (
			<form key={this.state.id} onSubmit={this.handleSubmit}>
				<input
					name='firstName'
					type='text'
					placeholder='first name'
					value={this.state.firstName}
					onChange={this.handleChange}
				/>
				<input
					name='lastName'
					type='text'
					placeholder='last name'
					value={this.state.lastName}
					onChange={this.handleChange}
					required />
				<input
					name='employeeId'
					type='number'
					placeholder='employee id'
					value={this.state.employeeId}
					onChange={this.handleChange}
					required />
				<input
					name='emailAddress'
					type='text'
					placeholder='email address'
					value={this.state.emailAddres}
					onChange={this.handleChange}
					required />
				<input
					name='phoneNumber'
					type='text'
					placeholder='phone number'
					value={this.state.phoneNumber}
					onChange={this.handleChange}
					required />
				<button>edit employee</button>
			</form>
		)
	}
}

export default EditEmployeeForm