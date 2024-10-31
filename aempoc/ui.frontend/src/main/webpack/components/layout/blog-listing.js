document.addEventListener("DOMContentLoaded", function () {
    // Only execute if on the correct page
    if (document.getElementById("poc-blog-listing-page")) {
        setTeaser();
        setBlogContainerTitle();
        displayBlogs(blogPosts);
    }
  });

  function setTeaser(){
    // Define array of images corresponding to categories
    const images = {
        default: "/content/dam/aempoc/default-teaser.jpg",
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

  let blogPosts = [
    {
      "id": "blog_001",
      "type": "Tech",
      "createdDate": "2024-10-15T10:30:00Z",
      "author": {
        "id": "ABC123",
        "name": "John Doe",
        "profileImage": "https://picsum.photos/100/100?random=1"  // hosted image URL
      },
      "blogThumbnail": "https://picsum.photos/400/200?random=1",  // hosted image URL
      "description": "Exploring how AI is reshaping the future of technology and what lies ahead.",
      "title": "AI in the Future",
      "tags": ["AI", "Machine Learning", "Tech"]
    },
    {
      "id": "blog_002",
      "type": "Food",
      "createdDate": "2024-10-16T12:00:00Z",
      "author": {
        "id": "DEF456",
        "name": "Jane Smith",
        "profileImage": "https://picsum.photos/100/100?random=2"  // hosted image URL
      },
      "blogThumbnail": "https://picsum.photos/400/200?random=2",  // hosted image URL
      "description": "A journey into the evolving world of culinary art and its cultural significance.",
      "title": "The Art of Modern Cooking",
      "tags": ["Food", "Culinary", "Culture"]
    },
    {
      "id": "blog_003",
      "type": "Finance",
      "createdDate": "2024-10-17T09:15:00Z",
      "author": {
        "id": "GHI789",
        "name": "Michael Brown",
        "profileImage": "https://picsum.photos/100/100?random=3"  // hosted image URL
      },
      "blogThumbnail": "https://picsum.photos/400/200?random=3",  // hosted image URL
      "description": "How blockchain is revolutionizing the financial industry and global markets.",
      "title": "Blockchain and Finance",
      "tags": ["Finance", "Blockchain", "Tech"]
    },
    {
      "id": "blog_004",
      "type": "Travel",
      "createdDate": "2024-10-18T14:45:00Z",
      "author": {
        "id": "JKL012",
        "name": "Emily White",
        "profileImage": "https://picsum.photos/100/100?random=4"  // hosted image URL
      },
      "blogThumbnail": "https://picsum.photos/400/200?random=4",  // hosted image URL
      "description": "Exploring the hidden gems of Southeast Asia and their breathtaking landscapes.",
      "title": "Unveiling Southeast Asia",
      "tags": ["Travel", "Adventure", "Asia"]
    },
    {
      "id": "blog_005",
      "type": "Tech",
      "createdDate": "2024-10-19T08:30:00Z",
      "author": {
        "id": "MNO345",
        "name": "Sarah Green",
        "profileImage": "https://picsum.photos/100/100?random=5"  // hosted image URL
      },
      "blogThumbnail": "https://picsum.photos/400/200?random=5",  // hosted image URL
      "description": "The latest trends in software development and their impact on businesses.",
      "title": "Trends in Software Development",
      "tags": ["Tech", "Software", "Development"]
    },
    {
      "id": "blog_006",
      "type": "Finance",
      "createdDate": "2024-10-20T11:00:00Z",
      "author": {
        "id": "ABC123",
        "name": "John Doe",
        "profileImage": "https://picsum.photos/100/100?random=6"  // hosted image URL
      },
      "blogThumbnail": "https://picsum.photos/400/200?random=6",  // hosted image URL
      "description": "A guide to personal finance and investment strategies for the modern era.",
      "title": "Mastering Personal Finance",
      "tags": ["Finance", "Investments", "Wealth"]
    },
    {
      "id": "blog_007",
      "type": "Travel",
      "createdDate": "2024-10-21T17:20:00Z",
      "author": {
        "id": "DEF456",
        "name": "Jane Smith",
        "profileImage": "https://picsum.photos/100/100?random=7"  // hosted image URL
      },
      "blogThumbnail": "https://picsum.photos/400/200?random=7",  // hosted image URL
      "description": "Travel tips for backpackers exploring the beauty of New Zealand.",
      "title": "Backpacking in New Zealand",
      "tags": ["Travel", "New Zealand", "Adventure"]
    },
    {
      "id": "blog_008",
      "type": "Food",
      "createdDate": "2024-10-22T13:10:00Z",
      "author": {
        "id": "GHI789",
        "name": "Michael Brown",
        "profileImage": "https://picsum.photos/100/100?random=8"  // hosted image URL
      },
      "blogThumbnail": "https://picsum.photos/400/200?random=8",  // hosted image URL
      "description": "A deep dive into sustainable food practices and their impact on health.",
      "title": "Sustainable Food Practices",
      "tags": ["Food", "Sustainability", "Health"]
    },
    {
      "id": "blog_009",
      "type": "Tech",
      "createdDate": "2024-10-23T10:45:00Z",
      "author": {
        "id": "JKL012",
        "name": "Emily White",
        "profileImage": "https://picsum.photos/100/100?random=9"  // hosted image URL
      },
      "blogThumbnail": "https://picsum.photos/400/200?random=9",  // hosted image URL
      "description": "Exploring quantum computing and its potential to transform industries.",
      "title": "Quantum Computing Revolution",
      "tags": ["Tech", "Quantum", "Future"]
    },
    {
      "id": "blog_010",
      "type": "Finance",
      "createdDate": "2024-10-24T12:00:00Z",
      "author": {
        "id": "MNO345",
        "name": "Sarah Green",
        "profileImage": "https://picsum.photos/100/100?random=10"  // hosted image URL
      },
      "blogThumbnail": "https://picsum.photos/400/200?random=10",  // hosted image URL
      "description": "How AI is impacting financial services and reshaping business models.",
      "title": "AI in Financial Services",
      "tags": ["Finance", "AI", "Tech"]
    }
  ];
  
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
  