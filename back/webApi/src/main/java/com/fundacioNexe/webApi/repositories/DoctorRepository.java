package com.fundacioNexe.webApi.repositories;

import com.fundacioNexe.webApi.entities.Doctor;
import com.fundacioNexe.webApi.entities.Kid;
import jakarta.websocket.server.PathParam;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DoctorRepository extends JpaRepository<Doctor,Integer> {

}
