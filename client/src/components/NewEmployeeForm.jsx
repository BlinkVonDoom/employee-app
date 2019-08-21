import React from 'react'

const NewEmployeeForm = ({onNewEmployee = f => f}) => {
	let firstName, lastName, employeeId, emailAddress, phoneNumber

	const submit = e => {
		e.preventDefault()
		onNewEmployee(firstName.value, 
			lastName.value, 
			employeeId.value, 
			emailAddress.value, 
			phoneNumber.value)

			firstName.value = ''
			lastName.value = ''
			employeeId.value = 0
			emailAddress.value = ''
			phoneNumber.value = ''

			firstName.focus()
	}

	return (
		<form className='employee-form' onSubmit={submit}>
			<h4 className='employee-form-header'>Add New Employee</h4>
			<div>First Name<input ref={input => firstName = input}
				type='text'
				placeholder='first name'
				required/></div>
			<div>Last Name<input ref={input => lastName = input}
				type='text'
				placeholder='last name'
				required/></div>
			<div>Employee Id<input ref={input => employeeId = input}
				type='number'
				placeholder='employee id'
				required/>
			</div>
			<div>Email Address<input ref={input => emailAddress = input}
				type='text'
				placeholder='email address'
				required/></div>
			<div>Phone Number<input ref={input => phoneNumber = input}
				type='text'
				placeholder='phone number'
				required/></div>
			<button className='employee-form-btn btn'>add employee</button>
		</form>
	)
}

export default NewEmployeeForm