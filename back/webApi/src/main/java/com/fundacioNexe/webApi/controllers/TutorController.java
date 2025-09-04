package com.fundacioNexe.webApi.controllers;


import com.fundacioNexe.webApi.entities.Kid;
import com.fundacioNexe.webApi.entities.Tutor;
import com.fundacioNexe.webApi.repositories.KidRepository;
import com.fundacioNexe.webApi.repositories.TutorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin // Para hacer peticiones desde otro servidor
@RestController // Para hacer peticiones REST
@RequestMapping("/tutor")
public class TutorController {


    @Autowired
    private TutorRepository tutorRepository;


    @GetMapping("/")
    public List<Tutor> getTutor(){
        return tutorRepository.findAll();
    }


    @PostMapping("/")
    public void addTutor(@RequestBody Tutor tutor){
        tutorRepository.save(tutor);
    }

    @PutMapping("/{id}")
    public void updateTutor(@RequestBody Tutor tutor, @PathVariable("id")Long id) {
        tutor.setId(id);
        tutorRepository.save(tutor);
    }


    @DeleteMapping("/{id}")
    public void deleteTutor(@PathVariable("id") Long id) {
        Tutor i = new Tutor();
        i.setId(id);
        tutorRepository.delete(i);
    }
}
