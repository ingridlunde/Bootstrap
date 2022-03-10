package com.example.bootstrap.repository;

import com.example.bootstrap.model.Motorvogn;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class MotorRepository {

    private final List<Motorvogn> motorRegister = new ArrayList<>();

    public void innRegistrering(Motorvogn motorvogn) {
        motorRegister.add(motorvogn);
    }

    public List <Motorvogn> hentAlle() {
        return motorRegister;
    }

    public void slettAlle() {
        motorRegister.clear();
    }
}