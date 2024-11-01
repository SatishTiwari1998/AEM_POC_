package com.aempoc.core.models;
import java.util.List;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.aempoc.core.pojo.PocChoiceBannerPojo;

import org.apache.sling.models.annotations.DefaultInjectionStrategy;
 
@Model(adaptables = SlingHttpServletRequest.class,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)


public class PocChoiceBanner {
    @ValueMapValue
    private String choiceBannerTitle;

    @ChildResource
    private List<PocChoiceBannerPojo> choiceBannerTextImage;

    public String getChoiceBannerTitle() {
        return choiceBannerTitle;
    }

    public List<PocChoiceBannerPojo> getChoiceBannerTextImage() {
        return choiceBannerTextImage;
    }
    
}
