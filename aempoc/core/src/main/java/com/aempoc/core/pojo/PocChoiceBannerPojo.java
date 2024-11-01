package com.aempoc.core.pojo;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;

import java.util.Arrays;
import java.util.stream.Collectors;

@Model(adaptables = Resource.class,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)

public class PocChoiceBannerPojo {

    @ValueMapValue
    private String categoryText;

    @ValueMapValue
    private String categoryIcon;

    public String getCategoryText() {
        return categoryText;
    }

    public String getCategoryIcon() {
        return categoryIcon;
    }

}
