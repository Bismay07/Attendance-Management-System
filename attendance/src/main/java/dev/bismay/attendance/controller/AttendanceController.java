package dev.bismay.attendance.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.bismay.attendance.model.ResponseAttendance;
import dev.bismay.attendance.model.User;
import dev.bismay.attendance.model.UserRequest;
import dev.bismay.attendance.model.UserResponse;
import dev.bismay.attendance.service.AttendanceService;
import dev.bismay.attendance.service.UserService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/attendance")
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class AttendanceController {
  @Autowired
  private AttendanceService attendanceService;

  @Autowired
  private UserService userService;
  
  // @GetMapping("/{userId}")
  // public ResponseEntity<List<Attendance>> getAttendance(@PathVariable Long userId) {
  //     List<Attendance> attendaceList = attendanceService.getAttendanceByUseId(userId);

  //     return ResponseEntity.ok(attendaceList);
  // }

  @PostMapping("/")
  public ResponseEntity<List<ResponseAttendance>> getAttendance(@RequestBody UserRequest u){
    User user = userService.findUserByEmail(u.getEmail());
    if(user.getPassword().equals(u.getPassword())){
      return ResponseEntity.ok(attendanceService.getAttendanceByUseId(user.getId()));
    }
    return ResponseEntity.badRequest().build();
  }

  @PostMapping("/login")
  public ResponseEntity<UserResponse> login(@RequestBody UserRequest u){
    User user = userService.findUserByEmail(u.getEmail());
    if( user != null && u.getPassword().equals(user.getPassword())){
      UserResponse res = new UserResponse(user.getName(), user.getEmail());
      return ResponseEntity.ok(res);
    }
    return ResponseEntity.badRequest().build();
  }

  @GetMapping("/users")
  public ResponseEntity<List<User>> getUsers() {
      return ResponseEntity.ok(userService.findAllUsers());
  }
  
  
}