package com.project.Glog.dto.request.reply;

import com.project.Glog.domain.Post;
import com.project.Glog.domain.Reply;
import com.project.Glog.domain.User;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ReplyCreateRequest {
    private Long postId;
    @NotBlank(message = "댓글 내용을 작성해주세요")
    private String message;

    public Reply toReply(Post post, User user){
        Reply reply = new Reply();
        reply.setPost(post);
        reply.setUser(user);
        reply.setMessage(message);
        reply.setLikesCount(0);
        reply.setIsEdit(false);
        return reply;
    }
}
