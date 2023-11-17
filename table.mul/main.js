document.addEventListener('DOMContentLoaded', function () {
  var tbody = document.querySelector('tbody');

  for (var i = 0; i <= 6; i++) {
    const row = document.createElement('tr');

    const nCell = document.createElement('td');
    const tenNCell = document.createElement('td');
    const hunNCell = document.createElement('td');
    const thouNCell = document.createElement('td');

    nCell.textContent = i;
    tenNCell.textContent = 10 * i;
    hunNCell.textContent = 100 * i;
    thouNCell.textContent = 1000 * i;

    row.appendChild(nCell);
    row.appendChild(tenNCell);
    row.appendChild(hunNCell);
    row.appendChild(thouNCell);

    tbody.appendChild(row);
  }
});
