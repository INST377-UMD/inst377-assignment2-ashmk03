async function loadDogImages() {
  const response = await fetch('https://dog.ceo/api/breeds/image/random/10');
  const data = await response.json();
  const imageUrls = data.message;

  const slider = document.getElementById('myslider');
  slider.innerHTML = "";

  imageUrls.forEach(url => {
      const img = document.createElement('img');
      img.src = url;
      img.style.width = "100%";
      img.style.height = "100%";
      slider.appendChild(img);
  });

  simpleslider.getSlider({
      container: slider,
      duration: 1,
      delay: 3
  });
}
async function loadDogBreeds() {
    const res = await fetch('https://dogapi.dog/api/v2/breeds');
    const data = await res.json();
    const container = document.getElementById('breed-buttons');
  
    data.data.forEach(breed => {
      const button = document.createElement('button');
      button.textContent = breed.attributes.name;
      button.classList.add('button');
      button.onclick = () => showBreedInfo(breed);
      container.appendChild(button);
    });
  }
  function showBreedInfo(breed) {
    document.getElementById('breed-name').textContent = breed.attributes.name;
    document.getElementById('breed-description').textContent = breed.attributes.description;
    const life = breed.attributes.life || {};
    document.getElementById('breed-min-life').textContent = life.min;
    document.getElementById('breed-max-life').textContent = life.max;
    document.getElementById('breed-info').style.display = 'block';
  }
  


  window.onload = () => {
    loadDogImages();
    loadDogBreeds();
  };
  
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
      'Load Dog Breed *dogbreedname': (dogbreedname) => {
        document.getElementById(dogbreedname).click();
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