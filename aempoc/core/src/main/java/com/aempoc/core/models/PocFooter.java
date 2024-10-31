package com.aempoc.core.models;
import java.util.List;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import com.aempoc.core.pojo.PocFooterPojo.PocFooterSocialMediaIconsPojo;
import com.aempoc.core.pojo.PocFooterPojo.PocFooterTextImagePojo;
import com.aempoc.core.pojo.PocFooterPojo.PocFooterTextLink1Pojo;
import com.aempoc.core.pojo.PocFooterPojo.PocFooterTextLink2Pojo;
 
@Model(adaptables = SlingHttpServletRequest.class,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)

public class PocFooter {
    @ValueMapValue
    private String socialCopyText;

    @ValueMapValue
    private String brandName;

    @ValueMapValue
    private String brandCopy;

    @ValueMapValue
    private String footerCol1Title;

    @ValueMapValue
    private String footerCol2Title;

    @ValueMapValue
    private String footerCol3Title;

    @ChildResource
    private List<PocFooterSocialMediaIconsPojo> socialMediaIcons;

    @ChildResource
    private List<PocFooterTextLink1Pojo> textLink1;
    
    @ChildResource
    private List<PocFooterTextLink2Pojo> textLink2;
    
    @ChildResource
    private List<PocFooterTextImagePojo> textImage;

    public String getSocialCopyText() {
        return socialCopyText;
    }

    public String getBrandName() {
        return brandName;
    }

    public String getBrandCopy() {
        return brandCopy;
    }

    public String getFooterCol1Title() {
        return footerCol1Title;
    }

    public String getFooterCol2Title() {
        return footerCol2Title;
    }

    public String getFooterCol3Title() {
        return footerCol3Title;
    }

    public List<PocFooterSocialMediaIconsPojo> getSocialMediaIcons() {
        return socialMediaIcons;
    }

    public List<PocFooterTextLink1Pojo> getTextLink1() {
        return textLink1;
    }

    public List<PocFooterTextLink2Pojo> getTextLink2() {
        return textLink2;
    }

    public List<PocFooterTextImagePojo> getTextImage() {
        return textImage;
    }
    

    
}
