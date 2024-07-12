package com.project.Glog.domain;

import com.project.Glog.dto.request.post.PostCreateRequest;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;
import java.util.List;

@NoArgsConstructor
@Getter @Setter
@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name = "post")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<PostHashtag> hashtags;
    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Reply> replies;
    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<PostLike> postLikes;
    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Scrap> scraps;
    @JoinColumn(name = "pr_post_id", unique = true)
    @OneToOne(mappedBy = "post", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private PrPost prPost;

    @ManyToOne(fetch = FetchType.LAZY)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    private Category category;

    @ManyToOne(fetch = FetchType.LAZY)
    private Blog blog;

    @NotNull
    private String title;
    @NotNull
    private String content;
    private String thumbnail;
    @NotNull
    private String blogUrl;
    @NotNull
    private Integer likesCount;
    @NotNull
    private Integer viewsCount;
    @NotNull
    private Boolean isPrivate;
    @NotNull
    private Boolean isPr;
    @CreatedDate
    private LocalDateTime createdAt;

    public void update(PostCreateRequest req){
        this.title=req.getTitle();
        this.content=req.getContent();
        this.isPrivate=req.getIsPrivate();
//        this.isPr=req.getPrId();
    }

    public void addCount(){
        viewsCount++;
    }

}