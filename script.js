console.log('js loaded');

let employees = [];
let monthlyCost = 0;
let totalBudget;

$(document).ready(readyNow);

function readyNow() {
    $('#monthly-cost').addClass('white-background');
    $('#submit').on('click', submit);
    $('.grid').on('click', '.delete-btn', deleteEmployee);
    $('#budget-submit').on('click', setBudget);
}

function render() {
    // Empty grid and monthly cost
    $('.grid').empty();
    $('#monthly-cost').empty();

    // For each employee, append to dom
    for (let i = 0; i < employees.length; i++) {
        $('.grid').append(`
            <p class='white-background' id='${i}'>${employees[i].firstName}</p>
            <p class='light-gray' id='${i}'>${employees[i].lastName}</p>
            <p class='white-background' id='${i}'>${employees[i].employeeID}</p>
            <p class='light-gray' id='${i}'>${employees[i].employeeTitle}</p>
            <p class='white-background' id='${i}'>${employees[i].annualSalary}</p>
            <button id='${i}' class='delete-btn'>Delete Employee</button>
        `);
    }

    //reset monthly cost 
    monthlyCost = 0;

    // Update monthly cost with each employee salary / 12
    for (let i = 0; i < employees.length; i++) {
        //console.log(employees[i].annualSalary);
        monthlyCost += Math.round((Number(employees[i].annualSalary) / 12));
    }

    // Change background color if monthly cost exceeds totalBudget
    if (monthlyCost > totalBudget) {
        $('#monthly-cost').removeClass('white-background');
        $('#monthly-cost').addClass('red-background');
    }

    // If monthlyCost is less than totalBudget, display default setting
    if (monthlyCost < totalBudget) {
        $('#monthly-cost').removeClass('red-background');
        $('#monthly-cost').addClass('white-background');
    }

    // Change monthly cost html
    $('#monthly-cost').html(`Total Monthly: $${monthlyCost}`);
}

function setBudget() {
    // If positive budget input, set totalBudet
    if (totalBudget = $('#budget-input').val() > 0) {
        totalBudget = $('#budget-input').val();
    } 

    // If totalBudget === true display it, else alert user
    if (totalBudget) {
        $('#user-budget').text(`Total Budget: ${totalBudget}`);
    } else {
        alert(`Pleade provide positive budget!`);
    }

    console.log(totalBudget);

    // Reset budget input
    $('#budget-input').val('');
    render();
}

function clearInputs() {
    let firstName = $('#first-name').val('');
    let lastName = $('#last-name').val('');
    let employeeID = $('#employee-id').val('');
    let employeeTitle = $('#employee-title').val('');
    let annualSalary = $('#annual-salary').val('');
}

function deleteEmployee() {
    //console.log(this)
    let indexToRemove = this.id;

    // Remove employee from the employees array
    employees.splice(indexToRemove, 1);
    render();
}

function submit() {
    let firstName = $('#first-name').val();
    let lastName = $('#last-name').val();
    let employeeID = $('#employee-id').val();
    let employeeTitle = $('#employee-title').val();
    let annualSalary = $('#annual-salary').val();

    //console.log(firstName, lastName, employeeID, employeeTitle, annualSalary)
    //console.log(totalBudget);

    // Alert user if totalBudget not defined
    if(totalBudget === undefined || totalBudget <= 0) {
        //console.log(true);
        alert(`What's your budget?`);
    } 
    else if(firstName && lastName && employeeID && employeeTitle && annualSalary && totalBudget){
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
    else{
        //console.log('invalid');
        alert('must fill all inputs');
    }

    //console.log(employees);
    clearInputs();
    render();
}