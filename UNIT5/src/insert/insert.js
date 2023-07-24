window.onload = function () {

  // // Toggle menu links and log to console when clicked
  // var menuLinks = document.querySelectorAll("nav a, aside li a");
  // menuLinks.forEach(function (link) {
  //   link.addEventListener("click", function (e) {
  //     e.preventDefault();
  //     this.classList.toggle("active");
  //     console.log(
  //       this.textContent +
  //         " is " +
  //         (this.classList.contains("active") ? "active" : "inactive")
  //     );
  //   });
  // });

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

      // Show alert
      alert("BookInfo submitted successfully!");

      // Clear form input fields
      bookName.value = "";
      author.value = "";
      publisher.value = "";
    });
  });
};
