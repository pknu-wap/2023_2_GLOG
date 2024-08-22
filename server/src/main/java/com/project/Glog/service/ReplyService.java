package com.project.Glog.service;

import com.project.Glog.domain.*;
import com.project.Glog.dto.ReplyDto;
import com.project.Glog.dto.request.reply.ReplyCreateRequest;
import com.project.Glog.dto.request.reply.ReplyGetRequest;
import com.project.Glog.dto.request.reply.ReplyUpdateRequest;
import com.project.Glog.dto.response.reply.ReplyGetResponse;
import com.project.Glog.repository.*;
import com.project.Glog.security.UserPrincipal;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
@AllArgsConstructor
@Service
public class ReplyService  {
    private final ReplyRepository replyRepository;
    private final ReplyLikeRepository replyLikeRepository;
    private final PostRepository postRepository;
    private final UserRepository userRepository;
    private final AlarmRepository alarmRepository;


    public Long createReply(UserPrincipal userPrincipal, ReplyCreateRequest req) {
        User user = userRepository.findById(userPrincipal.getId()).get();
        Post post = postRepository.findById(req.getPostId()).get();

        Reply reply = req.toReply(post, user);

        replyRepository.save(reply);

        if(user.getId() != post.getUser().getId()){
            String ShortPostTitle = post.getTitle();
            if(post.getTitle().length() > 8){
                ShortPostTitle = post.getTitle().substring(0, 8) + "...";
            }

            Alarm alarm = new Alarm(
                    null,
                    post.getUser(),
                    post.getId(),
                    post.getCategory().getId(),
                    ShortPostTitle + "에 "+ user.getNickname() + "님이 댓글을 추가했습니다.",
                    false,
                    AlarmType.reply,
                    null);
            alarmRepository.save(alarm);
        }



        return reply.getPost().getId();
    }

    public ReplyGetResponse getReplies(UserPrincipal userPrincipal, ReplyGetRequest req) {
        Post post = postRepository.findById(req.getPostId()).get();
//        Optional<User> currentUserOptional = userRepository.findById(userPrincipal.getId());
        Boolean imOwner;
        Long authorId = postRepository.findById(post.getId()).get().getUser().getId();
        User currentUser = null;

        if (userPrincipal == null){
           imOwner = false;
           currentUser = userRepository.findUserByNickname("anonymous");
        }
        else{
            imOwner = (authorId == userPrincipal.getId());
            currentUser = userRepository.findById(userPrincipal.getId()).get();
        }

        PageRequest pageRequest = PageRequest.of(req.getPage(), 10, Sort.by(req.getOrder()).descending());
        List<Reply> replys = replyRepository.findRepliesByPost(post, pageRequest).getContent();
        List<ReplyDto> replyDtos = new ArrayList<>();
        for(Reply reply : replys){
            ReplyDto replyDto = ReplyDto.of(reply);
            Boolean isLiked = replyLikeRepository.findByReplyAndUser(reply.getId(), currentUser.getId()).isPresent();
            replyDto.setIsLiked(isLiked);

            String who;
            if(reply.getUser().getId() == currentUser.getId()){
                if(imOwner){
                    who = "me(author)";
                }
                else{
                    who = "me";
                }
            }
            else{
                if(reply.getUser().getId() == authorId){
                    who = "author";
                }
                else{
                    who = "other";
                }
            }
            replyDto.setWho(who);

            replyDtos.add(replyDto);
        }

        return new ReplyGetResponse(replyDtos, imOwner);
    }


    public void updateReply(UserPrincipal userPrincipal, ReplyUpdateRequest req) throws Exception{
        Reply reply = replyRepository.findById(req.getRepyId()).get();

        if(userPrincipal.getId()!=reply.getUser().getId()){
            throw new IllegalAccessException("not owner");
        }

        reply.setMessage(req.getMessage());
        replyRepository.save(reply);
    }

    public void deleteReply(UserPrincipal userPrincipal, Long replyId) throws Exception{
        Reply reply = replyRepository.findById(replyId).get();

        if(userPrincipal.getId()!=reply.getUser().getId()){
            throw new IllegalAccessException("not owner");
        }

        replyRepository.delete(reply);
    }

    public String clickLike(UserPrincipal userPrincipal, Long replyId) {
        Reply reply = replyRepository.findById(replyId).get();
        User currentUser = userRepository.findById(userPrincipal.getId()).get();

        Optional<ReplyLike> replyLikeOptional = replyLikeRepository.findByReplyAndUser(reply.getId(), currentUser.getId());
        if(replyLikeOptional.isPresent()){
            reply.setLikesCount(reply.getLikesCount()-1);
            replyRepository.save(reply);

            replyLikeRepository.delete(replyLikeOptional.get());
            return "remove";
        }
        else{
            reply.setLikesCount(reply.getLikesCount()+1);
            replyRepository.save(reply);

            ReplyLike replyLike = new ReplyLike(null,currentUser,reply);
            replyLikeRepository.save(replyLike);
            return "add";
        }
    }
}
