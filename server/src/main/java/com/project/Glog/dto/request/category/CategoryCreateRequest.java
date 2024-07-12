package com.project.Glog.dto.request.category;

import com.project.Glog.domain.Blog;
import com.project.Glog.domain.Category;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter
public class CategoryCreateRequest {
    @NotBlank(message = "카테고리 이름을 설정해주세요")
    private String categoryName;
    private Boolean isPrCategory;
    private String repositoryUrl;

    public Category toCategory(Blog blog){
        Category category = new Category();
        category.setBlog(blog);
        category.setCategoryName(categoryName);
        category.setIsPrcategory(isPrCategory);
        category.setReopsitoryUrl(repositoryUrl);
        return category;
    }
}
