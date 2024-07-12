package com.project.Glog.dto.request.reply;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ReplyUpdateRequest {
    private Long repyId;
    @NotBlank(message = "댓글 내용을 입력해주세요")
    private String message;

}
