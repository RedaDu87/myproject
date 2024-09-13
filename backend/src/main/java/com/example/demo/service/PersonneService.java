package com.example.demo.service;

import com.example.demo.model.Personne;
import com.example.demo.repository.PersonneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonneService {

    @Autowired
    private PersonneRepository personneRepository;

    public List<Personne> getAllPersonnes() {
        return personneRepository.findAll();
    }

    public Personne getPersonneById(Long id) {
        return personneRepository.findById(id).orElse(null);
    }

    public Personne createPersonne(Personne personne) {
        return personneRepository.save(personne);
    }

    public Personne updatePersonne(Long id, Personne updatedPersonne) {
        Personne existingPersonne = personneRepository.findById(id).orElse(null);
        if (existingPersonne != null) {
            existingPersonne.setNom(updatedPersonne.getNom());
            existingPersonne.setPrenom(updatedPersonne.getPrenom());
            return personneRepository.save(existingPersonne);
        }
        return null;
    }

    public void deletePersonne(Long id) {
        personneRepository.deleteById(id);
    }
}

