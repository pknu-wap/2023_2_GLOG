package com.project.Glog.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "githubRepository")
public class GithubRepository {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    private User user;

    @NotNull
    private String repoName;

    @NotNull
    private String ownerName;

    @OneToOne(fetch = FetchType.LAZY)
    private Category category;

    @NotNull
    private Boolean isCategoryRegi;

    @OneToMany(mappedBy = "githubRepository", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<PrPost> prPost;
}
