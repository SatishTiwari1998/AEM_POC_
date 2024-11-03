import { blogPosts } from "../blogPosts";
import { showSpinner, hideSpinner } from "../spinner";

$(document).ready(function () {
    homePage.initSpinner();
    setTimeout(() => {
        homePage.hideSpinner();
    }, 1500);

    homePage.setUser();

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
        const shuffledPosts = posts.sort(() => 0.5 - Math.random()).slice(0, count);
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
    },

    setUser: function(){
        const userData = JSON.parse(localStorage.getItem("user"));
        const authorProfile = $('.author-profile');
        const name = authorProfile.find('.profile-name .name');
        const uniqueId = authorProfile.find('.profile-name .unique-id');
        const profileImg = authorProfile.find('.profile-image img');
        const idGenerator = $('.poc_idGenerator');
        
        if (userData && userData.loggedIn) {
            name.text(userData.details.name);
            uniqueId.text(userData.details.id);
            if(idGenerator.length>0){
                idGenerator.hide();
            }
        } else {
            name.text("Guest User");
            uniqueId.text("--");
            if(idGenerator.length>0){
                idGenerator.show();
            }
        }
    }
    
};
