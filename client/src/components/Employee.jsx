import React from 'react';

const Employee = ({emp, onRemoveEmployee = f => f, editingEmployee = f => f}) =>
		<tr className='employee-name' key={emp.id}>
			<td>{emp.first_name}</td>
			<td>{emp.last_name}</td>
			<td>{emp.employee_id}</td>
			<td>{emp.email_address}</td>
			<td>{emp.phone_number}</td>
			<td>
				<button className='delete-employee-btn btn tooltip-right' onClick={() => {if(window.confirm('Fire this person?')){onRemoveEmployee(emp.id)}}}>delete</button>
				<button className='edit-employee-btn btn tooltip-left' onClick={() => editingEmployee(emp.id)}>edit</button>
			</td>
		</tr>

export default Employee;