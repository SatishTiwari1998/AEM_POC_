package com.aempoc.core.pojo.PocFooterPojo;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;

@Model(adaptables = Resource.class,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)

public class PocFooterSocialMediaIconsPojo {

    @ValueMapValue
    private String iconImage;

    @ValueMapValue
    private String iconLink;

    public String getIconImage() {
        return iconImage;
    }

    public String getIconLink() {
        return iconLink;
    }
    
}
