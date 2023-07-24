document.addEventListener('DOMContentLoaded', function() {
  var bookTableBody = document.querySelector('#bookTable tbody');

  var bookInfoArray = JSON.parse(localStorage.getItem('bookInfo')) || [];

  bookInfoArray.forEach(function(bookInfo) {
    var row = document.createElement('tr');

    var bookNameCell = document.createElement('td');
    bookNameCell.textContent = bookInfo.bookName;
    row.appendChild(bookNameCell);

    var authorCell = document.createElement('td');
    authorCell.textContent = bookInfo.author;
    row.appendChild(authorCell);

    var publisherCell = document.createElement('td');
    publisherCell.textContent = bookInfo.publisher;
    row.appendChild(publisherCell);

    bookTableBody.appendChild(row);
  });
});