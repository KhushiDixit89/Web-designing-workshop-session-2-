package com.example.studentapi;

import org.springframework.web.bind.annotation.*;

@RestController
public class StudentController {

    // GET API
    @GetMapping("/welcome")
    public String welcome() {
        return "Welcome to Spring Boot REST API";
    }

    // GET Student Details
    @GetMapping("/student")
    public Student getStudent() {
        return new Student(101, "Krishna", "CSE");
    }

    // POST API
    @PostMapping("/student")
    public Student addStudent(@RequestBody Student student) {
        return student;
    }
}