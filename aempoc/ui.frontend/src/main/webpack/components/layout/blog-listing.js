import { blogPosts } from "../blogPosts";
import { showSpinner,hideSpinner } from "../spinner";


////////////////////// GLOBAL DECLARATION ///////////////////////////

// Show spinner immediately
showSpinner();

setTimeout(() => {
    hideSpinner();
}, 1500); 

const categoryInfo = {
  all: { title: "All Categories", description: "Explore all categories of content." },
  travel: { title: "Travel Adventures", description: "Discover the best travel destinations." },
  food: { title: "Food Delights", description: "Dive into delicious culinary experiences." },
  finance: { title: "Finance Insights", description: "Learn tips and insights about finance." },
  tech: { title: "Tech Innovations", description: "Stay updated with the latest in technology." }
};

const tiles = document.querySelectorAll('.tile');

document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('.poc-choice-banner')){
      // Initialize selection based on query parameter
      const categoryQuery = getQueryParam('category');
      let initialTile = tiles[0];
  
      if (categoryQuery && categoryInfo[categoryQuery]) {
          initialTile = Array.from(tiles).find(tile =>
              tile.querySelector('.category-name').textContent.toLowerCase() === categoryQuery
          ) || initialTile;
      }
  
      selectTile(initialTile,false);
  
      tiles.forEach(tile => {
          tile.addEventListener('click', () => selectTile(tile,true));
      });

  }

  updateBlogListingPage();
  
});



function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function removeQueryParam(key) {
  const url = new URL(window.location);
  url.searchParams.delete(key);
  window.history.replaceState({}, '', url);
}

function updateQueryParam(key, value) {
  const url = new URL(window.location);
  url.searchParams.set(key, value);
  window.history.replaceState({}, '', url);
}

function selectTile(tile,reload=false) {
  const selectedInfoTitle = document.querySelector('.banner-right .category-title');
  const selectedInfoDescription = document.querySelector('.banner-right .description');
  tiles.forEach(t => t.classList.remove('selected'));
  tile.classList.add('selected');

  const categoryName = tile.querySelector('.category-name').textContent.toLowerCase();

  if (categoryInfo[categoryName]) {
      selectedInfoTitle.textContent = categoryInfo[categoryName].title;
      selectedInfoDescription.textContent = categoryInfo[categoryName].description;
  }

  if (categoryName === 'all') {
      removeQueryParam('category');
  } else {
      updateQueryParam('category', categoryName);
  }
  if(reload){
    window.location.reload();
  }
}


  // --------------------------------------------- BLOG LISTING PAGE UPDATE -------------------------------

  function updateBlogListingPage(){
    if (document.getElementById("poc-blog-listing-page")) {
      setTeaser();
      setBlogContainerTitle();
      displayBlogs(blogPosts);
    }
  }

  function setTeaser(){
    // Define array of images corresponding to categories
    const images = {
        default: "/content/dam/aempoc/general-teaser.jpg",
        food: "/content/dam/aempoc/food-teaser.jpg",
        travel: "/content/dam/aempoc/travel-teaser.jpg",
        tech: "/content/dam/aempoc/tech-teaser.jpg",
        finance: "/content/dam/aempoc/finance-teaser.jpg"
      };
  
      // Define placeholders for text content
      const titles = {
        default: "Welcome to Our Blog",
        food: "Explore Food Adventures",
        travel: "Discover New Destinations",
        tech: "Latest in Technology",
        finance: "Finance Tips & News"
      };
  
      const descriptions = {
        default: "Discover interesting articles.",
        food: "Find exciting food trends and recipes.",
        travel: "Uncover the best places to travel.",
        tech: "Get updated on the latest tech news.",
        finance: "Stay informed with finance advice."
      };
  
      const categories = {
        default: "General",
        food: "Food",
        travel: "Travel",
        tech: "Tech",
        finance: "Finance"
      };
  
      // Parse the URL for the 'category' query parameter
      const urlParams = new URLSearchParams(window.location.search);
      const category = urlParams.get("category") || "default";
  
      // Get references to the elements
      const teaserImage = document.querySelector(".teaser-background");
      const teaserTitle = document.querySelector(".description h3");
      const teaserDescription = document.querySelector(".description p");
      const teaserCategory = document.querySelector(".category-name");
  
      // Assign the corresponding values based on the category
      teaserImage.src = images[category] || images.default;
      teaserTitle.textContent = titles[category] || titles.default;
      teaserDescription.textContent = descriptions[category] || descriptions.default;
      teaserCategory.textContent = categories[category] || categories.default;
  
      // Change button text if no category exists
      const teaserButton = document.querySelector(".explore-btn");
      teaserButton.style.display="none";
    
  }
  
  function displayBlogs(posts, count = 6) {
    // Get the container to append blog cards
    const container = document.querySelector('.featured-blog-listing #dynamic-blogs-container');
    posts.slice(0, count).forEach(post => {
        const blogCard = `
        <li class='item' style="background-image: url('${post.blogThumbnail}')">
          <div class='content'>
            <h2 class='title'>${post.title}</h2>
            <p class='description'>${post.description}</p>
            <a href="#" class="btn read-more">Read More</a>
          </div>
        </li>
        `;
        container.insertAdjacentHTML('beforeend', blogCard);
    });
  }

  function setBlogContainerTitle(){
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get("category") || "default";
    const titleElement = document.querySelector('.featured-blog-listing h2');
    const containerTitle = {
        default : "",
        food: "Food",
        travel: "Travel",
        tech: "Tech",
        finance: "Finance"
    };
    if (titleElement) {
        titleElement.textContent = titleElement.textContent.replace("{category}", containerTitle[category] || containerTitle.default);
    }
  }
  