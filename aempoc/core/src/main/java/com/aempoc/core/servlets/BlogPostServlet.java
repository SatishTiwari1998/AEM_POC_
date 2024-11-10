package com.example.core.servlets;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.SlingAllMethodsServlet;
import org.json.JSONObject;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.propertytypes.ServiceDescription;
import org.osgi.service.component.propertytypes.ServiceVendor;
import org.apache.sling.api.servlets.HttpConstants;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.Node;
import javax.jcr.RepositoryException;
import javax.jcr.Session;
import javax.servlet.Servlet;
import javax.servlet.ServletException;
import java.io.BufferedReader;
import java.io.IOException;

import static org.apache.sling.api.servlets.ServletResolverConstants.SLING_SERVLET_PATHS;

@Component(service = Servlet.class,
    property = {
        "sling.servlet.methods=" + HttpConstants.METHOD_POST,
        "sling.servlet.paths=" + "/bin/blogposts/post"
    })
@ServiceDescription("Blog Post Submission Servlet")
@ServiceVendor("Example")
public class BlogPostServlet extends SlingAllMethodsServlet {

    private static final Logger log = LoggerFactory.getLogger(BlogPostServlet.class);

    @Override
    protected void doPost(SlingHttpServletRequest request, SlingHttpServletResponse response) throws ServletException, IOException {
        log.info("Processing POST request to create blog post");
        Session session = request.getResourceResolver().adaptTo(Session.class);

        if (session == null) {
            log.error("Failed to obtain JCR session");
            response.setStatus(SlingHttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            response.getWriter().write("{\"status\":\"error\",\"message\":\"Failed to obtain session.\"}");
            return;
        }

        try {
            // Read JSON data from request body
            StringBuilder jsonData = new StringBuilder();
            try (BufferedReader reader = request.getReader()) {
                String line;
                while ((line = reader.readLine()) != null) {
                    jsonData.append(line);
                }
            }
            log.info("Received JSON data: {}", jsonData.toString());

            JSONObject jsonRequest = new JSONObject(jsonData.toString());
            String category = jsonRequest.optString("category");
            String title = jsonRequest.optString("blogTitle");
            String description = jsonRequest.optString("description");
            String tags = jsonRequest.optString("tags");
            String author = jsonRequest.optString("authorName");

            log.info("Parsed data - Category: {}, Title: {}, Author: {}", category, title, author);

            Node rootNode;
            if (!session.nodeExists("/content/blogposts")) {
                rootNode = session.getRootNode().addNode("content").addNode("blogposts", "nt:unstructured");
                log.info("Created new root node at /content/blogposts");
            } else {
                rootNode = session.getNode("/content/blogposts");
                log.info("Retrieved existing root node at /content/blogposts");
            }

            // Create a new blog post node
            Node postNode = rootNode.addNode("post_" + System.currentTimeMillis(), "nt:unstructured");
            postNode.setProperty("category", category);
            postNode.setProperty("title", title);
            postNode.setProperty("description", description);
            postNode.setProperty("tags", tags);
            postNode.setProperty("authorName", author);
            log.info("Set properties for new post node");

            session.save();
            log.info("Session saved successfully, blog post created");

            response.setContentType("application/json");
            JSONObject jsonResponse = new JSONObject();
            jsonResponse.put("status", "success");
            jsonResponse.put("message", "Blog post created successfully.");
            response.getWriter().write(jsonResponse.toString());
            log.info("Response sent: Blog post created successfully");

        } catch (RepositoryException e) {
            log.error("RepositoryException while creating blog post", e);
            response.setStatus(SlingHttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            response.getWriter().write("{\"status\":\"error\",\"message\":\"Error creating blog post.\"}");
        } finally {
            if (session != null) {
                session.logout();
                log.info("Session logged out");
            }
        }
    }
}
