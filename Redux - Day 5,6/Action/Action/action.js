export const saveemployeedetail = (employeedetails) => (
    {
        type:"SAVE_EMPLOYEE_DETAIL",
        employeedetails:{
            name:employeedetails.name,
            schoolname:employeedetails.schoolname,
            salary:employeedetails.salary
        }
        
    }
);
