let movies = [
  {
    name: "The Falcon and the Winter Soldier",
    des:
      "Falcon and the Winter Soldier are a mismatched duo who team up for a global adventure that will test their survival skills -- as well as their patience.",
    image: "images/slider 2.jpg"
  },
  {
    name: "Loki",
    des:
      "Loki, the God of Mischief, steps out of his brother's shadow to embark on an adventure that takes place after the events of Avengers: Endgame",
    image: "images/slider 1.jpg"
  },
  {
    name: "WandaVision",
    des:
      "Living idealized suburban lives, super-powered beings Wanda and Vision begin to suspect that everything is not as it seems.",
    image: "images/slider 3.jpg"
  },
  {
    name: "LokiRaya and the Last Dragon",
    des:
      "Raya, a warrior, sets out to track down Sisu, a dragon, who transferred all her powers into a magical gem which is now scattered all over the kingdom of Kumandra, dividing its people.",
    image: "images/slider 4.jpg"
  },
  {
    name: "Luca",
    des:
      "Luca, a sea monster, befriends Alberto, another one of his kind who takes him on a land adventure. He experiences an exciting summer while keeping his parents in the dark.",
    image: "images/slider 5.jpg"
  }
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0; //track the current slide

const createslide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  //create DOM elements
  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  //attaching all elements
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  //setting up images
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  //setting element classname
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * slideIndex}% - ${
      30 * slideIndex
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createslide();
}

setInterval(() => {
  createslide();
}, 3000);

//video cards

const videocards = [...document.querySelectorAll(".video-card")];

videocards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

// card sliders

let cardcontainer = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".next-btn")];

cardcontainer.forEach((item, i) => {
  let containerDimension = item.getBoundingClientRect();
  let containerWidth = containerDimension.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
