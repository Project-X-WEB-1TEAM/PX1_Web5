document.addEventListener('DOMContentLoaded', function() {
  var searchInput = document.querySelector('#searchInput');
  var searchButton = document.querySelector('#searchButton');
  var bookTableBody = document.querySelector('#bookTable tbody');

  var bookInfoArray = JSON.parse(localStorage.getItem('bookInfo')) || [];

  function displayBooks(books) {
    bookTableBody.innerHTML = '';

    books.forEach(function(bookInfo) {
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
  }

  searchButton.addEventListener('click', function() {
    var searchKeyword = searchInput.value.toLowerCase();

    var filteredBooks = bookInfoArray.filter(function(bookInfo) {
      return bookInfo.bookName.toLowerCase().includes(searchKeyword) ||
             bookInfo.author.toLowerCase().includes(searchKeyword) ||
             bookInfo.publisher.toLowerCase().includes(searchKeyword);
    });

    displayBooks(filteredBooks);
  });

  displayBooks(bookInfoArray);
});
