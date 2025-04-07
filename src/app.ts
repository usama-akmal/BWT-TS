interface Student {
    name: string;
    major: string;
    id: string;
}

const renderRow = (student: Student) => {
    const studentTable = document.getElementById("studentTable") as HTMLTableElement;
    const newRow = studentTable.insertRow();
    const studentName = document.createElement("td");
    studentName.innerText = student.name;
    newRow.appendChild(studentName);
    const major = document.createElement("td");
    major.innerText = student.major;
    newRow.appendChild(major);
    const deleteButton = document.createElement('button');
    deleteButton.innerText = "Delete";
    const updateButton = document.createElement('button');
    updateButton.innerText = "Edit";
    const actions = document.createElement("td");
    actions.appendChild(deleteButton);
    actions.appendChild(updateButton);
    newRow.appendChild(actions);
}

const renderTable = async () => {
    const response = await fetch("http://localhost:3000/students");
    const students = await response.json() as Student[];
    students.forEach(renderRow);
}

renderTable();

