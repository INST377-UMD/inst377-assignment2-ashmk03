
function fetchQuote () {
    fetch('https://zenquotes.io/api/quotes')
    .then(res => res.json())
    .then(data => {
      const quoteHTML = data[0].h; // Use the pre-formatted HTML from the API
    
      const container = document.getElementById('quote-container');
      container.innerHTML = quoteHTML;
    })
    }
    window.onload = fetchQuote();
    