package com.fundacioNexe.webApi.controllers;


import com.fundacioNexe.webApi.entities.Doctor;
import com.fundacioNexe.webApi.entities.Kid;
import com.fundacioNexe.webApi.repositories.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.print.Doc;
import java.util.List;

@CrossOrigin // Para hacer peticiones desde otro servidor
@RestController // Para hacer peticiones REST
@RequestMapping("/doctor")
public class DoctorController {


    @Autowired
    private DoctorRepository doctorRepository;

    @GetMapping("/")
    public List<Doctor> getDoctors(){
        return doctorRepository.findAll();
    }

    @GetMapping("/{id}/kid")
    public List<Kid> getKidsFromDoctor(@PathVariable("id")int id){
        Doctor d = doctorRepository.getReferenceById(id);
        return d.getKidsCaredFor();
    }


    @PostMapping("/")
    public void addDoctor(@RequestBody Doctor doctor){
        doctorRepository.save(doctor);
    }

    @PutMapping("/{id}")
    public void updatePeople(@RequestBody Doctor doctor, @PathVariable("id")Long id) {
        doctor.setId(id);
        doctorRepository.save(doctor);
    }


    @DeleteMapping("/{id}")
    public void deleteDoctor(@PathVariable("id") Long id) {
        Doctor i = new Doctor();
        i.setId(id);
        doctorRepository.delete(i);
    }


}
