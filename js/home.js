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
    const innerHtml = `
    ${headerHtml}
    <tr>
        <td><img class="profile" src="../assets/logo1.PNG" alt="profile pic"></td>
        <td>Sagar</td>
        <td>Male</td>
        <td><div class="dept-label">HR</div>
            <div class="dept-label">Finance</div></td>
        <td>300000</td>
        <td>1 Nov 2021</td>
        <td>
            <span class="fa fa-trash" id="1" onclick="remove(this)"></span>
            <span class="fa fa-pencil" id="2" onclick="update(this)"></span>
        </td>
    </tr>
    `;
    document.querySelector('#table-display').innerHTML = innerHtml;
}