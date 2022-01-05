"use strict";

window.addEventListener('DOMContentLoaded', (e) => {
  const dummyData = [
    {
      url: "#",
      src: "assets/img/about.jpg",
      alt: "#",
    },
    {
      url: "#",
      src: "assets/img/about.jpg",
      alt: "#",
    },
    {
      url: "#",
      src: "assets/img/about.jpg",
      alt: "#",
    },
    {
      url: "#",
      src: "assets/img/about.jpg",
      alt: "#",
    },
    {
      url: "#",
      src: "assets/img/about.jpg",
      alt: "#",
    },
    {
      url: "#",
      src: "assets/img/about.jpg",
      alt: "#",
    },
  ];

  // add posts to body
  // loadPosts(dummyData);
});

async function getPosts() {
    // Make an API call to get posts.
    fetch( "https://easy-instagram-service.p.rapidapi.com/username?username=broadwaydeliuk", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "easy-instagram-service.p.rapidapi.com",
        "x-rapidapi-key":
          "ba5fb7acc5msh6fa24d97b7f0372p18a328jsn2e5ec8ad322c",
        "Access-Control-Allow-Origin": "*"
      }
    })
    .then((response) => response.json())
    .then((result) => {
      let posts = result["last_post"].slice(0,6);
      console.log(posts);
      loadPosts(posts);
    })
    .catch((err) => console.error(err));
}

async function loadPosts(data) {
    // check if posts passed in
    if (data === null || data === undefined) return;
    
    // get element container
    const container = document.querySelector('.gallery__container');
    container.innerHTML = ''; // clear container of placeholders

    data.forEach(post => {
        // post element template
        let template = `<a href="https://www.instagram.com/p/${post.shortcode}/" class="gallery__item"><img src="${post.display_url}" alt="${post.caption}" class="gallery__img" /></a>`;
        container.innerHTML += template; // add post to container
    });
}