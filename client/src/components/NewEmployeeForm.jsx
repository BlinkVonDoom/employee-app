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
		<form onSubmit={submit}>
			<input ref={input => firstName = input}
				type='text'
				placeholder='first name'
				required/>
			<input ref={input => lastName = input}
				type='text'
				placeholder='last name'
				required/>
			<input ref={input => employeeId = input}
				type='number'
				placeholder='employee id'
				required/>
			<input ref={input => emailAddress = input}
				type='text'
				placeholder='email address'
				required/>
			<input ref={input => phoneNumber = input}
				type='text'
				placeholder='phone number'
				required/>
			<button>add new employee</button>
		</form>
	)
}

export default NewEmployeeForm