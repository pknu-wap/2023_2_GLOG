package com.project.Glog.controller;

import com.project.Glog.dto.AlarmDtos;
import com.project.Glog.security.CurrentUser;
import com.project.Glog.security.UserPrincipal;
import com.project.Glog.service.AlarmService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
public class AlarmController {
    private final AlarmService alarmService;
    @GetMapping("/alarms")
    public ResponseEntity<AlarmDtos> getAlarms(@CurrentUser UserPrincipal userPrincipal){

        AlarmDtos alarmsResponse = alarmService.getAlarms(userPrincipal.getId());

        return new ResponseEntity<>(alarmsResponse, HttpStatus.OK);
    }
}
