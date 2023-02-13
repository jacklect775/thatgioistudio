const table = document.getElementById('my-table');
const showMoreBtn = document.getElementById('show-more');
const showLessBtn = document.getElementById('show-less');
const numRows = table.rows.length;
const tableWrapper = document.getElementById('table-wrapper');
const tableButtons = document.getElementById('table-buttons');

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

tableWrapper.appendChild(table);
tableWrapper.appendChild(tableButtons);


// Add click event listeners to each image
const images = table.getElementsByTagName('img');
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('click', function() {
    // Update the popup content
    const imageSrc = this.src;
    const caption = this.alt;
    popupImage.src = imageSrc;
    popupCaption.textContent = caption;

    // Show the popup
    popup.style.display = 'block';
  });
}

// Add click event listener to close the popup
popup.addEventListener('click', function(event) {
  if (event.target === this) {
    this.style.display = 'none';
  }
});
