package com.example.demo.repository;

import com.example.demo.entity.Appointment;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

    @Query("SELECT a FROM Appointment a WHERE LOWER(a.doctorName) = LOWER(:doctorName)")
    List<Appointment> findByDoctorNameIgnoreCase(@Param("doctorName") String doctorName);
}