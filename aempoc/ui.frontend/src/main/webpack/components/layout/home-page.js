import { blogPosts } from "../blogPosts";
import { showSpinner, hideSpinner } from "../spinner";

$(document).ready(function () {
    homePage.init();
});

const homePage = {
    init: function () {
        this.initSpinner();
        this.setUser();
        
        if ($("#poc-home").length) {
            this.displayRandomBlogs(blogPosts);
        }
        
        setTimeout(() => {
            this.hideSpinner();
        }, 1500);
    },

    initSpinner: function () {
        showSpinner();
    },

    hideSpinner: function () {
        hideSpinner();
    },

    displayRandomBlogs: function (posts, count = 6) {
        const carouselContainer = $(".home-page-featured #dynamic-carousel-content");
        const thumbnailContainer = $(".home-page-featured .thumbnail");
        const shuffledPosts = posts.sort(() => 0.5 - Math.random()).slice(0, count);

        // Render blog items for both containers
        const carouselItems = shuffledPosts.map(post => this.createCarouselItem(post)).join('');
        const thumbnailItems = shuffledPosts.map(post => this.createThumbnailItem(post)).join('');

        carouselContainer.append(carouselItems);
        thumbnailContainer.append(thumbnailItems);
    },

    createCarouselItem: function (post) {
        return `
            <div class="item">
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
                <img src="${post.blogThumbnail}">
                <div class="content">
                    <div class="author">${post.author.name}</div>
                    <div class="title">${post.title}</div>
                </div>
            </div>
        `;
    },

    setUser: function () {
        const userData = JSON.parse(localStorage.getItem("user"));
        const authorProfile = $('.author-profile');
        const name = authorProfile.find('.profile-name .name');
        const uniqueId = authorProfile.find('.profile-name .unique-id');
        const idGenerator = $('.poc_idGenerator');
        
        if (userData?.loggedIn) {
            name.text(userData.details.name);
            uniqueId.text(userData.details.id);
            idGenerator.hide();
        } else {
            name.text("Guest User");
            uniqueId.text("--");
            idGenerator.show();
        }
    },
};
