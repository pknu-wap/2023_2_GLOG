package com.project.Glog.dto;

import com.project.Glog.domain.Alarm;
import com.project.Glog.domain.AlarmType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class AlarmDto {
    private String message;
    private Boolean checked;
    private AlarmType type;
    private Long postId;
    private Long categoryId;
    private LocalDateTime createdAt;

    public static AlarmDto of(Alarm alarm){
        return new AlarmDto(
                alarm.getMessage(),
                alarm.getChecked(),
                alarm.getType(),
                alarm.getPostId(),
                alarm.getCategoryId(),
                alarm.getCreatedAt());
    }
}
