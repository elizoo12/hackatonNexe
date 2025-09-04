package com.fundacioNexe.webApi.repositories;

import com.fundacioNexe.webApi.entities.Tutor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TutorRepository extends JpaRepository<Tutor,Integer> {
}
