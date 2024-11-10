import { blogPosts } from "../blogPosts";
import { showSpinner, hideSpinner } from "../spinner";

$(document).ready(function () {
    blogPage.init();
});

const blogPage = {
    categoryInfo: {
        all: { title: "All Categories", description: "Explore all categories of content." },
        travel: { title: "Travel Adventures", description: "Discover the best travel destinations." },
        food: { title: "Food Delights", description: "Dive into delicious culinary experiences." },
        finance: { title: "Finance Insights", description: "Learn tips and insights about finance." },
        tech: { title: "Tech Innovations", description: "Stay updated with the latest in technology." }
    },

    init: function () {
        if ($("#poc-blog-listing-page").length) {
            this.showSpinner();
            this.initTileSelection();
            this.updateBlogListingPage();
            
            setTimeout(() => {
                this.hideSpinner();
            }, 1500);
        }
    },

    showSpinner: function () {
        showSpinner();
    },

    hideSpinner: function () {
        hideSpinner();
    },

    initTileSelection: function () {
        console.log("Init Tile Selection");
        const categoryQuery = this.getQueryParam('category');
        const tiles = $('.tile');
        let initialTile = tiles.first();

        if (categoryQuery && blogPage.categoryInfo[categoryQuery]) {
            initialTile = Array.from(tiles).find(tile =>
                tile.querySelector('.category-name').textContent.toLowerCase() === categoryQuery
            ) || initialTile;
        }

        this.selectTile(initialTile, false);

        tiles.on('click', (e) => {
            this.selectTile($(e.currentTarget), true);
        });
    },

    getQueryParam: function (param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    },

    updateQueryParam: function (key, value) {
        const url = new URL(window.location);
        url.searchParams.set(key, value);
        window.history.replaceState({}, '', url);
    },

    removeQueryParam: function (key) {
        const url = new URL(window.location);
        url.searchParams.delete(key);
        window.history.replaceState({}, '', url);
    },

    selectTile: function (tile, reload = false) {
        console.log("select tile method");
        tile=$(tile);
        const categoryName = tile.find('.category-name').text().toLowerCase(); // Get the selected category name
    
        // Avoid overwriting category-name in other places
        const selectedInfoTitle = $('.banner-right .category-title');
        const selectedInfoDescription = $('.banner-right .description');
    
        $('.tile').removeClass('selected');
        tile.addClass('selected'); // Mark the selected tile
    
        if (this.categoryInfo[categoryName]) {
            selectedInfoTitle.text(this.categoryInfo[categoryName].title);
            selectedInfoDescription.text(this.categoryInfo[categoryName].description);
        }
    
        // Update or remove the query parameter in the URL based on the category selection
        if (categoryName === 'all') {
            this.removeQueryParam('category');
        } else {
            this.updateQueryParam('category', categoryName);
        }
    
        if (reload) {
            window.location.reload();
        }
    },
    

    updateBlogListingPage: function () {
        this.setTeaser();
        this.setBlogContainerTitle();
        this.displayBlogs(blogPosts);
    },

    setTeaser: function () {
        const images = {
            default: "/content/dam/aempoc/general-teaser.jpg",
            food: "/content/dam/aempoc/food-teaser.jpg",
            travel: "/content/dam/aempoc/travel-teaser.jpg",
            tech: "/content/dam/aempoc/tech-teaser.jpg",
            finance: "/content/dam/aempoc/finance-teaser.jpg"
        };

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

        const category = this.getQueryParam("category") || "default";
        const teaserImage = $(".teaser-background");
        const teaserTitle = $(".description h3");
        const teaserDescription = $(".description p");
        const teaserCategory = $(".category-name");
        const teaserButton = $(".explore-btn");

        teaserImage.attr("src", images[category] || images.default);
        teaserTitle.text(titles[category] || titles.default);
        teaserDescription.text(descriptions[category] || descriptions.default);
        teaserCategory.text(categories[category] || categories.default);
        teaserButton.hide();
    },

    displayBlogs: function (posts, count = 6) {
        const carouselContainer = $('.featured-blog-listing #dynamic-carousel-content');
        const thumbnailContainer = $('.featured-blog-listing #dynamic-thumbnail-content');

        posts.slice(0, count).forEach(post => {
            carouselContainer.append(this.createCarouselItem(post));
            thumbnailContainer.append(this.createThumbnailItem(post));
        });
    },

    createCarouselItem: function (post) {
        return `
            <div class="item">
              <div class="overlay"></div>
                <img src="${post.blogThumbnail}">
                <div class="content">
                    <div class="author">${post.author.name}</div>
                    <div class="title">${post.title}</div>
                    <div class="topic">${post.type}</div>
                    <div class="des">${post.description}</div>
                    <div class="buttons">
                        <button>SEE MORE</button>
                    </div>
                </div>
            </div>
        `;
    },

    createThumbnailItem: function (post) {
        return `
            <div class="item">
              <div class="overlay"></div>
                <img src="${post.blogThumbnail}">
                <div class="content">
                    <div class="author">${post.author.name}</div>
                    <div class="title">${post.title}</div>
                </div>
            </div>
        `;
    },

    setBlogContainerTitle: function () {
        const category = this.getQueryParam("category") || "default";
        const titleElement = $('.featured-blog-listing h2');
        const containerTitle = {
            default: "",
            food: "Food",
            travel: "Travel",
            tech: "Tech",
            finance: "Finance"
        };

        if (titleElement.length) {
            titleElement.text(titleElement.text().replace("{category}", containerTitle[category] || containerTitle.default));
        }
    }
};
