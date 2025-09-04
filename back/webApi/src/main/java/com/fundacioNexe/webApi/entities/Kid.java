package com.fundacioNexe.webApi.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;


@Getter @Setter @Entity
public class Kid {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToMany
    private List<Button> buttonList;
    @ManyToMany
    private List<Doctor> doctor;
    @OneToOne
    private Tutor tutor;


}
