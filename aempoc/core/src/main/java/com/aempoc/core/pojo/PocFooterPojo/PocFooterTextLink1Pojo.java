package com.aempoc.core.pojo.PocFooterPojo;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;

@Model(adaptables = Resource.class,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)

public class PocFooterTextLink1Pojo {
    @ValueMapValue
    private String text1;

    @ValueMapValue
    private String link1;

    public String getText1() {
        return text1;
    }

    public String getLink1() {
        return link1;
    }
    
}
