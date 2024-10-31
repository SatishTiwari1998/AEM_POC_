package com.aempoc.core.models;
import java.util.List;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import com.aempoc.core.pojo.PocHeaderPojo;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
 
@Model(adaptables = SlingHttpServletRequest.class,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)

public class PocHeader {
    @ValueMapValue
    private String brandName;

    @ValueMapValue
    private String headerLogoImage;

    @ValueMapValue
    private String brandLink;

    @ChildResource
    private List<PocHeaderPojo> navItems;

    public String getBrandName() {
        return brandName;
    }

    public String getHeaderLogoImage() {
        return headerLogoImage;
    }

    public String getBrandLink() {
        return brandLink;
    }

    public List<PocHeaderPojo> getNavItems() {
        return navItems;
    }

    
}
