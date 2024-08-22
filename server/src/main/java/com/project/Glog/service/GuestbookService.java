package com.project.Glog.service;

import com.project.Glog.domain.Blog;
import com.project.Glog.domain.BookMessage;
import com.project.Glog.domain.Guestbook;
import com.project.Glog.domain.User;
import com.project.Glog.dto.MessageDto;
import com.project.Glog.dto.UserDto;
import com.project.Glog.dto.request.guestbook.GuestbookMessageRequest;
import com.project.Glog.dto.response.guestbook.GuestbookResponse;
import com.project.Glog.repository.BlogRepository;
import com.project.Glog.repository.BookMessageRepository;
import com.project.Glog.repository.GuestbookRepository;
import com.project.Glog.repository.UserRepository;
import com.project.Glog.security.UserPrincipal;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
@AllArgsConstructor
@Service
public class GuestbookService {
    private final GuestbookRepository guestbookRepository;
    private final BookMessageRepository bookMessageRepository;
    private final UserRepository userRepository;
    private final BlogRepository blogRepository;


    public void save(UserPrincipal userPrincipal, GuestbookMessageRequest req) {
        User user = userRepository.findById(userPrincipal.getId()).get();
        Blog blog = user.getBlog();
        Guestbook guestBook = guestbookRepository.findById(req.getGuestbookId()).get();

        BookMessage bookMessage = new BookMessage();
        bookMessage.setMessage(req.getMessage());
        bookMessage.setUser(user);
        bookMessage.setGuestBook(guestBook);

        bookMessageRepository.save(bookMessage);
    }

    public GuestbookResponse read(UserPrincipal userPrincipal, Long blogId){
        Guestbook guestbook = guestbookRepository.findByBlog_Id(blogId);
        User user;
        if(userPrincipal!=null) {
            user = userRepository.findById(userPrincipal.getId()).get();
        }
        else{
            user = userRepository.findUserByNickname("anonymous");
        }
        GuestbookResponse guestbookResponse = GuestbookResponse.of(guestbook, user);

        return guestbookResponse;
    }

    public void update(UserPrincipal userPrincipal, GuestbookMessageRequest req) throws Exception{
        BookMessage bookMessage = bookMessageRepository.findById(req.getMessageId()).get();
        User author = userRepository.findById(userPrincipal.getId()).get();

        if(!author.equals(bookMessage.getUser()))
            throw new Exception("not your message");

        bookMessage.setMessage(req.getMessage());
        bookMessageRepository.save(bookMessage);
    }

    public void delete(UserPrincipal userPrincipal, Long messageId) throws Exception {
        BookMessage bookMessage = bookMessageRepository.findById(messageId).get();
        User author = userRepository.findById(userPrincipal.getId()).get();

        if(!author.equals(bookMessage.getUser()))
            throw new Exception("not your message");

        bookMessageRepository.delete(bookMessage);
    }
}
