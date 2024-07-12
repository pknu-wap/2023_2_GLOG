package com.project.Glog.dto.request.user;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UserCreateRequest {
    @NotBlank(message = "url을 설정해주세요")
    private String blogUrl;
    @NotBlank(message = "블로그 이름을 설정해주세요")
    private String blogName;
    @NotBlank(message = "닉네임을 설정해주세요")
    private String nickname;
}
