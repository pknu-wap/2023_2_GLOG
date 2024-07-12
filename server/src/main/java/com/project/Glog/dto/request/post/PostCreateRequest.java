package com.project.Glog.dto.request.post;

import com.project.Glog.domain.Blog;
import com.project.Glog.domain.Category;
import com.project.Glog.domain.Post;
import com.project.Glog.domain.User;
import com.project.Glog.security.UserPrincipal;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.parameters.P;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter
public class PostCreateRequest {
    private Long postId;
    @NotBlank(message = "제목을 입력해주세요")
    private String title;
    @NotBlank(message = "내용을 입력해주세요")
    private String content;
    @NotBlank(message = "공개 여부를 설정해주세요")
    private Boolean isPrivate;
    private Long prId;
    @NotBlank(message = "카테고리를 설정해주세요")
    private Long categoryId;
    private List<String> hashtags;

    public Post toPost(User user, Category category, Blog blog){
        Post post = new Post();
        post.setUser(user);
        post.setCategory(category);
        post.setBlog(blog);
        post.setTitle(title);
        post.setContent(content);
        post.setBlogUrl(blog.getBlogUrl());
        post.setLikesCount(0);
        post.setViewsCount(0);
        post.setIsPrivate(isPrivate);
        return post;
    }
}