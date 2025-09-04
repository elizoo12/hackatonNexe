package com.fundacioNexe.webApi.repositories;

import com.fundacioNexe.webApi.entities.Kid;
import org.springframework.data.jpa.repository.JpaRepository;

public interface KidRepository extends JpaRepository<Kid,Integer> {
}
