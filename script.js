window.addEventListener("DOMContentLoaded", (event) => {
      const req = new XMLHttpRequest();
      req.open("GET","https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json", true);
      req.send();
      req.onload = () => {
const importedQuotes = JSON.parse(req.responseText);

let inject = importedQuotes.quotes[
    Math.floor(Math.random() * importedQuotes.quotes.length)
  ];
  document.getElementById("text").innerHTML = `"${inject.quote}"`;
  document.getElementById("author").innerHTML = `— ${inject.author}`;

document.getElementById("new-quote").onclick = () => {
let inject = importedQuotes.quotes[
    Math.floor(Math.random() * importedQuotes.quotes.length)
  ];
  document.getElementById("text").innerHTML = `"${inject.quote}"`;
  document.getElementById("author").innerHTML = `— ${inject.author}`;
  document.getElementById("tweet-quote").href = `https://twitter.com/intent/tweet?text="${inject.quote}"  — ${inject.author}`
    };
   };
});