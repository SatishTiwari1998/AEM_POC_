package com.aempoc.core.pojo;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;

@Model(adaptables = Resource.class,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)

public class PocHeaderPojo {
    @ValueMapValue
    private String navItemText;

    @ValueMapValue
    private String navItemLink;

    public String getNavItemText() {
        return navItemText;
    }

    public String getNavItemLink() {
        return navItemLink;
    }
    
}


