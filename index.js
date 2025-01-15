document.querySelector('.submit-table').addEventListener('click', function () {
    const table = Number(document.querySelector('.table-number').value);
    const tableLimit = Number(document.querySelector('.table-limit').value);
    const tableContainer = document.querySelector('.generated-table');

    for (let i = 1; i <= tableLimit; i++) {
        const tableGenerate = `${table} x ${i} = ${table * i}`;
        const paragraph = document.createElement('p');
        paragraph.textContent = tableGenerate;
        tableContainer.appendChild(paragraph);
    }
})