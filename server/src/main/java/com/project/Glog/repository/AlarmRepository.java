package com.project.Glog.repository;

import com.project.Glog.domain.Alarm;
import com.project.Glog.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AlarmRepository extends JpaRepository<Alarm, Long> {
    List<Alarm> findAllByUserOrderByCreatedAtDesc(User user);

}
