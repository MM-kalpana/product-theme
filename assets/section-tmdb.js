document.addEventListener("DOMContentLoaded",()=>{
    //try
    
    let array=[];
    
    
    document.getElementById('myButton').addEventListener('click', function() {
      // Get the input element by its ID
      const inputElement = document.getElementById('myInput');
      const imgElcontainer= document.getElementById("similarimage");
      imgElcontainer.innerHTML=""
      
      // Get the value of the input element
      const inputValue = inputElement.value;
      
      // Print the value (e.g., log it to the console)
      // console.log('Input value:', inputValue);
    
    const apiKey = 'DgjEfSW9YjD83xHQEA3jV88SPCC2r4Dd0fSdLL1xtLkCgvY3oibZWtmX';
    const query = inputValue;
    const perPage = 10;
    
    const url = `https://api.pexels.com/v1/search?query=${query}&per_page=${perPage}&page=1`;
    
    fetch(url, {
    headers: {
      Authorization: apiKey
    }
    })
    .then(response => response.json())
    .then(data => {
      // console.log(data);
     //before try
    
      data.photos.forEach(photo => {
          // Iterate over each size in the src object
          for (const size in photo.src) {
              if (photo.src.hasOwnProperty(size)) {
                  const imageUrl = photo.src[size];
                //   console.log( imageUrl);
                  if (size === 'original') {
                //   let imgEl= document.createElement('img');
                //   imgEl.src=imageUrl;
                //   imgEl.classList.add('similerimmage');
                //   imgElcontainer.appendChild(imgEl);
          
    
    
                 let liEl= document.createElement("li");
                 liEl.classList.add('splide__slide');
                 document.getElementById("slidecontainer").appendChild(liEl);
                 similerimgEl=document.createElement('img');
                 similerimgEl.src=imageUrl;
                 similerimgEl.id="slideimage";
                 liEl.appendChild(similerimgEl);
                 console.log(liEl)
                 //try
                //  similerimgEl.addEventListener("click",() => {
                //   console.log(similerimgEl.src)
                // //   array.push(similerimgEl.src)
    
                // //   array.forEach(img=>{
                //     // let liEl= document.createElement("li");
                //     // liEl.classList.add('splide__slide');
                    
                //     let favimg =document.createElement('img');
                //     favimg.src=similerimgEl.src;
                //     favimg.id ="slideimage"
                //     // liEl.appendChild(favimg);
                //     // console.log(liEl);
                //     document.getElementById("fav").appendChild(favimg);
                // //   })
                // })
                 //try


                 similerimgEl.addEventListener("click", (e) => {
                    let favimg = document.createElement('img');
                    favimg.src = e.target.src;  // Use e.target.src to get the clicked image source
                    favimg.id = "slideimage";
                    document.getElementById("fav").appendChild(favimg);
                });
    
    
                 var splide = new Splide( '.splide', {
                  perPage : 3,
                  autoplay: true,
                } );
                
                splide.mount();
    
              
    
                  }
              }
          }
      });
    // before try
    
    
    
    
    
    
      // Process the data as needed
       if (data.photos && data.photos.length > 0) {
          const imageUrl = data.photos[0].src.medium; // Get the URL of the medium-sized image
          
          // Create an img element and set its src attribute
          const imgElement = document.createElement('img');
          imgElement.src = imageUrl;
          imgElement.alt = query;
    
          // Clear any previous image and append the new image to the imageContainer
          const imageContainer = document.getElementById('imageContainer');
          imageContainer.innerHTML = ''; // Clear previous image
          imageContainer.appendChild(imgElement);
    
      
    } else {
          // Handle the case when no images are found
          console.log('No images found');
          const imageContainer = document.getElementById('imageContainer');
          imageContainer.innerHTML = 'No images found';
      }
    
    
    })
    .catch(error => {
      console.error('Error fetching data from Pexels API:', error);
    });
    
    
    })
    
    
    
    
    
    
    
    
    
    
    
    
      // new Splide('.splide').mount();
      var splide = new Splide( '.splide', {
        type    : 'loop',
        perPage : 3,
        autoplay: true,
      } );
      
      splide.mount();
    })