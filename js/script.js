const firm = new Company();

addPerson.onclick = function () {try
    {
    const employee = new Employee(personId.value.trim(), firstName.value.trim(),
        lastName.value.trim(), age.value, salary.value);
    if (firm.addEmployee(employee)) {
        clearStats();
        const li = employee.createEmployeeDOMElement('li');
        const buttonDel = createButtonDelete(function () {
            firm.removeEmployee(employee.id);
            clearStats();
        });
        buttonDel.classList.add('del');
        li.append(buttonDel);
        personsList.append(li);
    }

} catch (error) {
    console.log(error.message)
    alert ('This id already exists in our database');
    }
    personId.value = firstName.value = lastName.value = age.value = salary.value = '';
}

calcStats.onclick = function () {
    clearStats();
    stats.appendChild(firm.createCompanyStatsDOMElement());
}

function clearStats() {
    if (stats.firstElementChild.nextElementSibling) {
        stats.removeChild(stats.firstElementChild.nextElementSibling);
    }
}