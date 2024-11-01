import { blogPosts } from "../blogPosts";
import { showSpinner, hideSpinner } from "../spinner";

$(document).ready(function () {
    // Spinner Control
    homePage.initSpinner();
    setTimeout(() => {
        homePage.hideSpinner();
    }, 1500);
    
    // Initialize Blog Page if on Home Page
    if ($("#poc-home").length) {
        homePage.init();
    }
});

const homePage = {
    initSpinner: function () {
        showSpinner();
    },

    hideSpinner: function () {
        hideSpinner();
    },

    init: function () {
        this.displayRandomBlogs(blogPosts);
    },

    displayRandomBlogs: function (posts, count = 6) {
        const container = $(".home-page-featured #dynamic-blogs-container");

        // Shuffle and slice posts
        const shuffledPosts = posts.sort(() => 0.5 - Math.random()).slice(0, count);

        // Render each post
        $.each(shuffledPosts, (index, post) => {
            const blogCard = `
                <li class='item' style="background-image: url('${post.blogThumbnail}')">
                  <div class='content'>
                    <h2 class='title'>${post.title}</h2>
                    <p class='description'>${post.description}</p>
                    <a href="#" class="btn read-more">Read More</a>
                  </div>
                </li>
            `;
            container.append(blogCard);
        });
    }
};
