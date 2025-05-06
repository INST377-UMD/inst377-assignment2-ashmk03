
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

if (typeof annyang !== "undefined") {
    const commands = {
      'hello': () => {
        alert("Hello World");
      },
      'change the color to :color': (color) => {
        document.body.style.backgroundColor = color;
      },
      'navigate to *page': (page) => {
        window.location.href = `${page.toLowerCase()}.html`;
      },
    };
    
      annyang.addCommands(commands);
    
      function startVoice() {
        if (annyang) {
          annyang.start();
        }
      }
    
      function stopVoice() {
        if (annyang) {
          annyang.abort();
        }
      }
}
    