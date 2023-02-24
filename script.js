console.log('js loaded')

let employees = [];
let monthlyCost = 0;

$(document).ready(readyNow);

function readyNow() {
    $('#submit').on('click', submit);
    $('.grid').on('click', '.delete-btn', deleteEmployee);
}

function clearInputs() {
    let firstName = $('#first-name').val('');
    let lastName = $('#last-name').val('');
    let employeeID = $('#employee-id').val('');
    let employeeTitle = $('#employee-title').val('');
    let annualSalary = $('#annual-salary').val('');
}

function render() {
    $('.grid').empty();
    $('#monthly-cost').empty();
    for (let i = 0; i < employees.length; i++) {
        $('.grid').append(`
            <p id='${i}'>${employees[i].firstName}</p>
            <p id='${i}'>${employees[i].lastName}</p>
            <p id='${i}'>${employees[i].employeeID}</p>
            <p id='${i}'>${employees[i].employeeTitle}</p>
            <p id='${i}'>${employees[i].annualSalary}</p>
            <button id='${i}' class='delete-btn'>Delete Me</button>
        `);
    }

    monthlyCost = 0;

    for (let i = 0; i < employees.length; i++) {
        console.log(employees[i].annualSalary);
        monthlyCost += Number(employees[i].annualSalary);
    }

    if (monthlyCost > 20000) {
        $('#monthly-cost').addClass('red-background');
    }
    if (monthlyCost < 25000) {
        $('#monthly-cost').removeClass('red-background');
    }
    $('#monthly-cost').html(`Total Monthly: $${monthlyCost}`);
}

function deleteEmployee() {
    // console.log(this.id)
    let indexToRemove = this.id;

    employees.splice(indexToRemove, 1);
    render()
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
        console.log('invalid');
        alert('must fill all inputs');
    }

    console.log(employees);
    clearInputs();
    render();
}