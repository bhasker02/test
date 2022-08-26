
console.log("This is my index js file");
//https://newsapi.org/v2/top-headlines?country=in&apiKey=a1aabaafad7d4cf9b2032116a2b9c045
// Initialize the news api parameters
let source = 'the-times-of-india';
let apiKey = 'a1aabaafad7d4cf9b2032116a2b9c045'

// Grab the news container
let newsaccordion = document.getElementById('newsaccordion');
let slideshow = document.getElementById('slideshow');
// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://free-news.p.rapidapi.com/v1/search?q=business&lang=en");
xhr.setRequestHeader("X-RapidAPI-Key", "184f13f6c3msh81ae48e298919a3p16bc7ejsna4a53e091038");
xhr.setRequestHeader("X-RapidAPI-Host", "free-news.p.rapidapi.com");


// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            // console.log(element, index)
            let news = `<div class="accordion-item" >
            <h2 class="accordion-header" id="heading${index}" >
                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                    <img src=" ${element["media"]}" width="auto" height="100px padding: 10px; ">   
                    &ensp;&ensp;&ensp;&ensp;<b>${element["title"]}</b>
                </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse show" aria-labelledby="heading${index} jcont"
                data-bs-parent="#newsaccordion">
                 ${element["summary"]} 
                <button type="button" class="btn-btn btn dark" style="border-radius:10px; ">  
                           <a href="${element["link"]}" target="_blank"><p style="position:relative; left:20px; top:2px;color:blue">Read more here</p></a> 
                           </button>
                
                </div>
            </div>
        </div>`;
            newsHtml += news;
        });
        newsaccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()

//grabbing the search
document.getElementById("mybutton").onclick = function (event){
    event.preventDefault()
    var search=document.getElementById("userInput").value;
    count= 1;
    console.log(search) 
        // Create an ajax get request
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://free-news.p.rapidapi.com/v1/search?q=${search}&lang=en`);
    xhr.setRequestHeader("X-RapidAPI-Key", "184f13f6c3msh81ae48e298919a3p16bc7ejsna4a53e091038");
    xhr.setRequestHeader("X-RapidAPI-Host", "free-news.p.rapidapi.com");

    // What to do when response is ready
    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles;
            console.log(articles);
            let newsHtml = "";
            articles.forEach(function(element, index) {
                // console.log(element, index)
                let news = `<div class="accordion-item" >
                <h2 class="accordion-header" id="heading${index}" >
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                        <img src=" ${element["media"]}" width="auto" height="100px padding: 10px; ">   
                        &ensp;&ensp;&ensp;&ensp;<b>${element["title"]}</b>
                    </button>
                </h2>
                <div id="collapse${index}" class="accordion-collapse collapse show" aria-labelledby="heading${index} jcont"
                    data-bs-parent="#newsaccordion">
                     ${element["summary"]} 
                    <button type="button" class="btn-btn btn dark" style="border-radius:10px; ">  
                               <a href="${element["link"]}" target="_blank"><p style="position:relative; left:20px; top:2px;color:blue">Read more here</p></a> 
                               </button>
                    
                    </div>
                </div>
            </div>`;
                newsHtml += news;
            });
            newsaccordion.innerHTML = newsHtml;
    
              }
        else {
            console.log("Some error occured")
        }
    }
    
    xhr.send()
    
    }    
