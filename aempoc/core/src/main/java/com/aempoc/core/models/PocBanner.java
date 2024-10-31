package com.aempoc.core.models;
import java.util.List;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.aempoc.core.pojo.PocBannerPojo;

import org.apache.sling.models.annotations.DefaultInjectionStrategy;
 
@Model(adaptables = SlingHttpServletRequest.class,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)


public class PocBanner {
    @ValueMapValue
    private String bannerImage;

    @ChildResource
    private List<PocBannerPojo> bannerText;

    public String getBannerImage() {
        return bannerImage;
    }

    public List<PocBannerPojo> getBannerText() {
        return bannerText;
    }
    
}
