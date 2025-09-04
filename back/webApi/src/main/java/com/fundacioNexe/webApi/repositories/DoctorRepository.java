package com.fundacioNexe.webApi.repositories;

import com.fundacioNexe.webApi.entities.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DoctorRepository extends JpaRepository<Doctor,Integer> {
}
