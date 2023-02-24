console.log('js loaded')

let employees = [];

$(document).ready(readyNow)

function readyNow() {
    $('#submit').on('click', submit)
}

function submit() {
    let firstName = $('#first-name').val();
    let lastName = $('#last-name').val();
    let employeeID = $('#employee-id').val();
    let employeeTitle = $('#employee-title').val();
    let annualSalary = $('#annual-salary').val();

    console.log(firstName, lastName, employeeID, employeeTitle, annualSalary)

    if (firstName && lastName && employeeID && employeeTitle && annualSalary) {
        let employeeObject = {
            firstName: firstName,
            lastName: lastName,
            employeeID: employeeID,
            employeeTitle: employeeTitle,
            annualSalary: annualSalary
        }

        //console.log(employeeObject)
        employees.push(employeeObject);
    }
    else {
        console.log('invalid')
        alert('must fill all inputs')
    }

    console.log(employees)
    clearInputs()
    render()
}



function clearInputs() {
    let firstName = $('#first-name').val('');
    let lastName = $('#last-name').val('');
    let employeeID = $('#employee-id').val('');
    let employeeTitle = $('#employee-title').val('');
    let annualSalary = $('#annual-salary').val('');
}