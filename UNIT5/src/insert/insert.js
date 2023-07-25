window.onload = function () {

  // Handle form submission
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    var form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var bookName = document.getElementById("bookName");
      var author = document.getElementById("author");
      var publisher = document.getElementById("publisher");

      var bookInfo = {
        bookName: bookName.value,
        author: author.value,
        publisher: publisher.value,
      };

      var bookInfoArray = JSON.parse(localStorage.getItem("bookInfo")) || [];
      bookInfoArray.push(bookInfo);

      localStorage.setItem("bookInfo", JSON.stringify(bookInfoArray));

      alert("BookInfo submitted successfully!");
      
      bookName.value = "";
      author.value = "";
      publisher.value = "";
    });
  });
};
