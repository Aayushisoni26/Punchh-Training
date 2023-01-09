const initialstate = {
    employeedetails : {
        name:" ",
        schoolname:" ",
        salary:" "
    }
}


const employeedetailreducer = (state=initialstate, action) => {
switch(action.type){
    case "SAVE_EMPLOYEE_DETAIL": {
    return {
        ...state, 
        employeedetails: action.employeedetails
    }
}
default : {
    return state;
}

}

}

export default employeedetailreducer;