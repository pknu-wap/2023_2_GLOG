package com.project.Glog.controller;

import com.project.Glog.domain.Blog;
import com.project.Glog.dto.ReadmeDto;
import com.project.Glog.dto.request.user.UserCreateRequest;
import com.project.Glog.dto.response.blog.MyPageResponse;
import com.project.Glog.dto.response.blog.ReadMeDto;
import com.project.Glog.repository.BlogRepository;
import com.project.Glog.security.CurrentUser;
import com.project.Glog.security.UserPrincipal;
import com.project.Glog.service.BlogService;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
@AllArgsConstructor
@RestController
public class BlogController {
    private final BlogService blogService;
    private final BlogRepository blogRepository;

    @GetMapping("/mypage")
    public ResponseEntity<MyPageResponse> goToMypage(@CurrentUser UserPrincipal userPrincipal){

        MyPageResponse myPageResponse = blogService.getMypage(userPrincipal.getId());

        return new ResponseEntity<>(myPageResponse, HttpStatus.OK);
    }

    @PostMapping("/change/blog/name")
    public ResponseEntity<MyPageResponse> changeBlogName(@CurrentUser UserPrincipal userPrincipal,
                                                         @RequestParam @NotBlank String newBlogName){

        MyPageResponse myPageResponse = blogService.changeBlogName(userPrincipal.getId(), newBlogName);

        return new ResponseEntity<>(myPageResponse, HttpStatus.OK);
    }

    @PostMapping("/blog")
    public ResponseEntity<String> createBlog(@CurrentUser UserPrincipal userPrincipal,
                                             @RequestBody UserCreateRequest userCreateRequest){
        //UserCreateRequest를 받아서 정보를 저장한다.
        String blogUrl = blogService.registerBlog(userPrincipal, userCreateRequest);

        return new ResponseEntity<>(blogUrl, HttpStatus.OK);
    }

    @GetMapping("/blogid")
    public ResponseEntity<Long> getBlogId(@RequestParam String blogUrl){
        Long blogId = blogService.getBlogId(blogUrl);
        return new ResponseEntity<>(blogId, HttpStatus.OK);
    }

    @GetMapping("/read-me")
    public ResponseEntity<ReadMeDto> readReadme(@CurrentUser UserPrincipal userPrincipal,
                                                @RequestParam Long blogId){

        ReadMeDto readMeDto = blogService.getReadme(userPrincipal, blogId);

        return new ResponseEntity<>(readMeDto, HttpStatus.OK);
    }

    @PutMapping("/read-me")
    public ResponseEntity<String> putReadme(@CurrentUser UserPrincipal userPrincipal,
                                            @RequestBody ReadmeDto readme){
        blogService.registerReadme(userPrincipal, readme.getReadme());

        return new ResponseEntity<>("success update read-me", HttpStatus.OK);
    }

    @GetMapping("/is/new/blog")
    public Boolean readHasBlog(@CurrentUser UserPrincipal userPrincipal){
        Optional<Blog> blogOptional = blogRepository.findByUserId(userPrincipal.getId());

        if(blogOptional.isPresent()){
            return true;
        }
        else{
            return false;
        }
    }
    @GetMapping("/blog/url")
    public ResponseEntity<String> getBlogUrl(@RequestParam Long categoryId){
        String blogUrl = blogService.getBlogUrl(categoryId);

        return new ResponseEntity<>(blogUrl, HttpStatus.OK);
    }

}
