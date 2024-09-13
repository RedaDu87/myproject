import { Component, OnInit } from '@angular/core';
import { PersonneService } from '../../services/personne.service';
import { Personne } from '../../models/personne.model';

@Component({
  selector: 'app-personnes',
  templateUrl: './personnes.component.html'
})
export class PersonnesComponent implements OnInit {

  personnes: Personne[] = [];
  newPersonne: Personne = { nom: '', prenom: '' };

  constructor(private personneService: PersonneService) { }

  ngOnInit(): void {
    this.getPersonnes();
  }

  getPersonnes(): void {
    this.personneService.getAllPersonnes().subscribe((data: Personne[]) => {
      this.personnes = data;
    });
  }

  addPersonne(): void {
    this.personneService.createPersonne(this.newPersonne).subscribe(() => {
      this.getPersonnes();
      this.newPersonne = { nom: '', prenom: '' };
    });
  }

  deletePersonne(id: number | undefined): void {
    if (id !== undefined) {
      this.personneService.deletePersonne(id).subscribe(() => {
        this.getPersonnes();
      });
    } else {
      console.error('ID is undefined');
    }
  }
  
}

