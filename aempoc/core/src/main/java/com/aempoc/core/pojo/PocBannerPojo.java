package com.aempoc.core.pojo;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;

import java.util.Arrays;
import java.util.stream.Collectors;

@Model(adaptables = Resource.class,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)

public class PocBannerPojo {

    @ValueMapValue
    private String bannerItemtext;

    @ValueMapValue
    private String authorableClasses;

    // Getter for bannerItemtext
    public String getBannerItemtext() {
        return bannerItemtext;
    }

    // Getter for authorableClasses that returns space-separated classes
    public String getAuthorableClasses() {
        if (authorableClasses != null) {
            // Split the string by newlines and join with spaces
            return Arrays.stream(authorableClasses.split("\n"))
                         .map(String::trim)
                         .collect(Collectors.joining(" "));
        }
        return "";
    }
}
