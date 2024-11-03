$(document).ready(function () {
    if ($('#blogForm').length > 0) { // Check if the form exists
        BlogPostForm.init();
    }
});

const BlogPostForm = {
    init: function () {
        this.cacheDom();
        this.bindEvents();
    },

    cacheDom: function () {
        this.$form = $('#blogForm');
        this.$submitButton = this.$form.find('button[type="submit"]');
    },

    bindEvents: function () {
        this.$form.on('submit', this.handleSubmit.bind(this));
    },

    handleSubmit: function (e) {
        e.preventDefault();

        // Validate required fields
        if (!this.$form[0].checkValidity()) {
            this.$form.addClass('was-validated');
            return;
        }

        // Gather form data into a JSON object
        const formData = {
            category: $('input[name="category"]:checked').val(),
            blogTitle: $('#blogTitle').val(),
            description: $('#description').val(),
            tags: $('#tags').val(),
            authorName: $('.author-name .value').text() // Static author name from the HTML
        };

        // Send form data to the AEM servlet
        console.log(formData);
        this.sendData(formData);
    },

    sendData: function (data) {
        $.ajax({
            type: 'POST',
            url: '/bin/blogposts/post',
            data: JSON.stringify(data),
            contentType: 'application/json',  // Tell the server to expect JSON data
            success: function (response) {
                if (response.status === 'success') {
                    alert('Blog post created successfully!');
                } else {
                    alert('Failed to create blog post.');
                }
            },
            error: function (xhr, status, error) {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            }
        });
    }
    
};
