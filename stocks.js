async function getData() {
    const ticker = document.getElementById("ticker").value.toUpperCase();
    const days = document.getElementById("timePeriod").value;
    const toDate = new Date();
    const fromDate = new Date();
    fromDate.setDate(toDate.getDate() - parseInt(days));
  
    const from = fromDate.toISOString().split('T')[0];
    const to = toDate.toISOString().split('T')[0];
  
    const url = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${from}/${to}?adjusted=true&sort=asc&apiKey=qv8e9dr9XN3chWNqfKpOte542sK7IG42`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

async function loadRedditStocks() {
  const res = await fetch('https://tradestie.com/api/v1/apps/reddit?date=2022-04-03');
  const data = await res.json();
  const top5 = data.slice(0, 5);
  const table = document.getElementById("stocksTable")

  top5.forEach(stock => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><a href="https://finance.yahoo.com/quote/${stock.ticker}" target="_blank">${stock.ticker}</a></td>
      <td>${stock.no_of_comments}</td>
      <td>${stock.sentiment === "Bullish" ? `<img src="https://static.vecteezy.com/system/resources/previews/013/062/676/non_2x/bullish-trader-logo-forex-bull-logo-design-template-financial-bull-logo-design-trade-bull-chart-vector.jpg" alt="Bullish" width="100">` : `<img src="https://cdn.iconscout.com/icon/free/png-256/free-bearish-icon-download-in-svg-png-gif-file-formats--downtrend-animal-stocks-finance-investment-pack-business-icons-1570417.png" alt="Bullish" width="100">`}</td>
    `;
    table.appendChild(row);
  });
}
loadRedditStocks()

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