package com.example.demo.Controller;

import com.example.demo.entity.Appointment;
import com.example.demo.repository.AppointmentRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/appointments")
public class AppointmentController {

    private final AppointmentRepository repository;

    public AppointmentController(AppointmentRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/search")
    public List<Appointment> searchByDoctor(@RequestParam("doctor") String doctorName) {
        return repository.findByDoctorNameIgnoreCase(doctorName);
    }
}