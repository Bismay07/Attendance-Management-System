package dev.bismay.attendance.service;


import dev.bismay.attendance.model.Attendance;
import dev.bismay.attendance.model.ResponseAttendance;
import dev.bismay.attendance.repository.AttendanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AttendanceService {
    @Autowired
    private AttendanceRepository attendanceRepository;

    public List<ResponseAttendance> getAttendanceByUseId(Long userId){
        List<Attendance> a = attendanceRepository.findByUserId(userId);
        List<ResponseAttendance> res = new ArrayList<>();
        for (Attendance attendance : a) {
            ResponseAttendance responseAttendance = new  ResponseAttendance(attendance.getUser().getName(), attendance.getUser().getEmail(), attendance.getSubName(), attendance.getTotalClasses(), attendance.getAttendedClasses());
            res.add(responseAttendance);

        }
        return res;
    }

}