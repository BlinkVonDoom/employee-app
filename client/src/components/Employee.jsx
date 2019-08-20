import React from 'react';

const Employee = ({emp, onRemoveEmployee = f => f, editingEmployee = f => f}) =>
		<tr key={emp.id}>
			<td>{emp.first_name}</td>
			<td>{emp.last_name}</td>
			<td>{emp.employee_id}</td>
			<td>{emp.email_address}</td>
			<td>{emp.phone_number}</td>
			<td><button onClick={() => onRemoveEmployee(emp.id)}>delete employee</button> </td>
			<td><button onClick={() => editingEmployee(emp.id)}>edit</button></td>
		</tr>

export default Employee;