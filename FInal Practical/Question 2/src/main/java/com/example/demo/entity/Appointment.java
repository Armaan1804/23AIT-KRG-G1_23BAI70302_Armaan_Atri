package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String doctorName;
    private String patientName;


    public Appointment() {}

    public Appointment(String doctorName, String patientName) {
        this.doctorName = doctorName;
        this.patientName = patientName;
    }





}