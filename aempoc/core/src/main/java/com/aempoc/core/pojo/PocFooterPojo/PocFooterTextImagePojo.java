package com.aempoc.core.pojo.PocFooterPojo;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;

@Model(adaptables = Resource.class,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)

public class PocFooterTextImagePojo {
    @ValueMapValue
    private String contactText;

    @ValueMapValue
    private String contactIcon;

    public String getContactText() {
        return contactText;
    }

    public String getContactIcon() {
        return contactIcon;
    }
    
}
