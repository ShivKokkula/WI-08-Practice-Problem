window.addEventListener('DOMContentLoaded',(event) =>{
    createInnerHTML();
});

const createInnerHTML = () => {
    const headerHtml = `
    <tr>
        <th></th>
        <th>Name</th>
        <th>Gender</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Start Date</th>
        <th>Actions</th>
    </tr>`;

    let empPayRollData = createEmployeePayRollJSON()[0];

    const innerHtml = `
    ${headerHtml}
    <tr>
        <td><img class="profile" src="${empPayRollData._profilePic}" alt="profile pic"></td>
        <td>${empPayRollData._name}</td>
        <td>${empPayRollData._gender}</td>
        <td><div class="dept-label">${empPayRollData._department[0]}</div>
            <div class="dept-label">${empPayRollData._department[1]}</div></td>
        <td>${empPayRollData._salary}</td>
        <td>${empPayRollData._startDate}</td>
        <td>
            <span name="${empPayRollData._id}" class="fa fa-trash" id="1" onclick="remove(this)"></span>
            <span name="${empPayRollData._id}" class="fa fa-pencil" id="2" onclick="update(this)"></span>
        </td>
    </tr>
    `;
    document.querySelector('#table-display').innerHTML = innerHtml;
}

let createEmployeePayRollJSON = () => {
    let empPayRollListLocal = [{
        _name : "Sagar",
        _gender : "male",
        _department : ["finance","hr"],
        _salary : 45000,
        _startDate : "1 OCt 2021",
        _note : "",
        _id : new Date().getTime(),
        _profilePic : "../assets/logo1.PNG"
    },
    {
        _name : "Sunny",
        _gender : "female",
        _department : ["finance","engineering"],
        _salary : 48000,
        _startDate : "1 OCt 2020",
        _note : "",
        _id : new Date().getTime() + 1,
        _profilePic : "../assets/logo2.PNG"
    }
    ];

    return empPayRollListLocal;
}