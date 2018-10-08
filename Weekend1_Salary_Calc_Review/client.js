console.log('js sourced');

let totalYearlySalary = 0;

$(document).ready(handleReady);

//This doesn't work
// $(document).on('ready', handleReady);

function handleReady() {
    console.log('jquery sourced');
    addClickListeners();
}

//When submit is clicked get info from inputs

function addClickListeners() {
    $('#submitBtn').on('click', handleSubmit);
}

function handleSubmit() {
    console.log('submit Clicked!');
    //grab input data .val() 
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let idNumber = $('#idNumber').val();
    let title = $('#title').val();
    let salary = $('#salary').val();

    // push amounth of salary to total annual salary
    totalYearlySalary += parseInt(salary);

    console.log(totalYearlySalary);

    calculateAndAppendMonthlySalary();

    console.log('Here is your data:', firstName, lastName, idNumber, title, salary);

    // take data, put into table
    // "<td>" + firstName + "</td>"

    let stringOfHtml = `
    <tr>
      <td>${firstName}</td>
      <td>${lastName}</td>
      <td>${idNumber}</td>
      <td>${title}</td>
      <td>${salary}</td>
    </tr>
    `;

    $('#tableContent').append(stringOfHtml);

    //To Do Labels
    // To Do Clear Inputs

}

function calculateAndAppendMonthlySalary() {
    let monthlyAmount = totalYearlySalary / 12;

    $('#total').empty();

    //append to DOM
    $('#total').append(`<p> Total Monthly Salaries: ${monthlyAmount}</p>`);

}