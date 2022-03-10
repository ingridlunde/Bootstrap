package com.example.bootstrap.controller;

import com.example.bootstrap.model.Motorvogn;
import com.example.bootstrap.repository.MotorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class MotorController {

    @Autowired
    MotorRepository repo;

    @GetMapping("/hentAlle")
    public List<Motorvogn> hentAlle() {
        return repo.hentAlle();
    }

    @PostMapping("/lagre")
    public void innRegistrering(Motorvogn motorvogn) {
        repo.innRegistrering(motorvogn);
    }

    @GetMapping("/slettAlle")
    public void slettAlle() {
        repo.slettAlle();
    }

    //ikke pensum
    // @DeleteMapping("/registrer")
    //public void slett() {
        //repo.slett
    //}

    }

