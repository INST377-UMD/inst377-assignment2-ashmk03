if (typeof annyang !== "undefined") {
  const commands = {
    'say hello': () => {
      alert("Hello World");
    },
    'change the color to :color': (color) => {
      document.body.style.backgroundColor = color;
    },
    'navigate to *page': (page) => {
      window.location.href = `${page.toLowerCase()}.html`;
    }
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
