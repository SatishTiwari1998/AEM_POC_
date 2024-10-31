package com.aempoc.core.pojo.PocFooterPojo;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;

@Model(adaptables = Resource.class,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)

public class PocFooterTextLink2Pojo {
    @ValueMapValue
    private String text2;

    @ValueMapValue
    private String link2;

    public String getText2() {
        return text2;
    }

    public String getLink2() {
        return link2;
    }
    
}
