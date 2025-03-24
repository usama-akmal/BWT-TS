"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const renderRow = (student) => {
    const studentTable = document.getElementById("studentTable");
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
};
const renderTable = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch("http://localhost:3000/students");
    const students = yield response.json();
    students.forEach(renderRow);
});
renderTable();
