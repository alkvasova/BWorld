import React, { useEffect, useMemo, useState } from 'react';
import { EmployeesApi } from '../../api';
import { StaffDto } from '../../api/EmployeesApi';
import { EmployeeCard } from './components/EmployeeCard';

export function EmployeesPage () {
    const [employees, setEmployees] = useState<StaffDto[]>([]);
    
    // const employees = useMemo<any[]>(() => {
    //     return [
    //     {
    //       id: 1,
    //       photo: 'https://kartinkin.net/uploads/posts/2022-03/1646728968_3-kartinkin-net-p-litsa-devushek-kartinki-4.jpg',
    //       name: 'Анжела',
    //       position: 'Маникюр'
    //     }
    //   ];
    // }, []);

    useEffect(() => {
        EmployeesApi.getAll().then(setEmployees);
    }, []);

    return (
        <>
            <h1>Сотрудники</h1>

            {employees.map(employee => 
                <EmployeeCard 
                key={employee.id} 
                employee={employee}
                onInfoMain={() => console.log('OnInfo')} 
                />
            )}
        </>
    )
}