const table = document.getElementById('my-table');
const showMoreBtn = document.getElementById('show-more');
const showLessBtn = document.getElementById('show-less');
const numRows = table.rows.length;

// Hide all rows after the 6th row
for (let i = 6; i < numRows; i++) {
  table.rows[i].style.display = 'none';
}

showMoreBtn.addEventListener('click', function() {
  for (let i = 6; i < numRows; i++) {
    table.rows[i].style.display = 'table-row';
  }
  showMoreBtn.style.display = 'none';
  showLessBtn.style.display = 'block';
});

showLessBtn.addEventListener('click', function() {
  for (let i = numRows - 1; i >= 6; i--) {
    table.rows[i].style.display = 'none';
  }
  showMoreBtn.style.display = 'block';
  showLessBtn.style.display = 'none';
});
