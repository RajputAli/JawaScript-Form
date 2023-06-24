const form = document.querySelector("#registration-form");
const studentList = document.querySelector("#student-list");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#name").value;
  const last = document.querySelector("#last").value;
  const age = document.querySelector("#age").value;
  const contact = document.querySelector("#contact").value;
  const subject = document.querySelector("#subject").value;
  const registrationNumber = document.querySelector("#registration-number").value;

  const student = { name, last, age, contact, subject, registrationNumber };
  addStudentToList(student);

  form.reset();
});

function addStudentToList(student) {
  const row = document.createElement("tr");

  for (const prop in student) {
    const cell = document.createElement("td");
    cell.innerHTML = student[prop];
    row.appendChild(cell);
  }

  studentList.appendChild(row);
}
