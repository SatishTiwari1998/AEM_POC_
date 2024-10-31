package com.aempoc.core.servlets;

import com.day.cq.commons.jcr.JcrUtil;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.SlingAllMethodsServlet;
import org.json.JSONObject;
import org.osgi.service.component.annotations.Component;
import org.apache.sling.api.servlets.HttpConstants;
import org.apache.sling.jcr.api.SlingRepository;

import javax.jcr.Node;
import javax.jcr.Session;
import javax.servlet.Servlet;
import javax.servlet.ServletException;
import java.io.IOException;

@Component(
    service = Servlet.class,
    property = {
        "sling.servlet.methods=" + HttpConstants.METHOD_GET,
        "sling.servlet.paths=" + "/bin/createNodeServlet"
    }
)
public class CreateNodeServlet extends SlingAllMethodsServlet {

    @Override
    protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response) throws ServletException, IOException {
        response.setContentType("application/json");

        Session session = null;

        try {
            // Get the JCR session
            session = request.getResourceResolver().adaptTo(Session.class);

            // Create a node under /content/swatishNode
            Node rootNode = session.getNode("/content");
            Node newNode = JcrUtil.createPath("/content/swatishNode", "nt:unstructured", session);

            // Add properties to the node
            newNode.setProperty("name", "swatish");
            newNode.setProperty("age", 15);

            // Save the session
            session.save();

            // Prepare JSON response
            JSONObject jsonResponse = new JSONObject();
            jsonResponse.put("name", "swatish");
            jsonResponse.put("age", 15);
            jsonResponse.put("message", "Node created successfully");

            // Send JSON response
            response.getWriter().write(jsonResponse.toString());

        } catch (Exception e) {
            response.getWriter().write("{\"error\":\"Unable to create node\"}");
        } finally {
            if (session != null) {
                session.logout();
            }
        }
    }
}
