import { Component, OnInit } from '@angular/core';
import { AdithService } from '../services/hadith/adith.service';
import { Hadith } from '../model/hadith.modele';
import { CollectionsHadiths } from '../model/collectionsHadiths.modele';

@Component({
  selector: 'app-hadith',
  templateUrl: './hadith.component.html',
  styleUrls: ['./hadith.component.css']
})
export class HadithComponent implements OnInit {

  title: string = "";
  listeHadiths: Hadith[] = [];
  selectedHadith: Hadith | null = null;
  isDialogOpen: boolean = false;
  myDropDown: string = "1";
  listeCategories: CollectionsHadiths[] = [];
  categorieNumber: number = 1;

  constructor(public adithService: AdithService) { }

  ngOnInit(): void {
    this.adithService.getHadithCategorie().subscribe({
      next: (data) => {
        this.listeCategories = data.map((element: any) => {
          const categorie = new CollectionsHadiths();
          categorie.id = element.id;
          categorie.title = element.title;
          categorie.hadeeths_count = element.hadeeths_count;
          categorie.parent_id = element.parent_id;
          return categorie;
        });
        this.getListHadithByCategorie();
      },
      error: () => { },
      complete: () => {
        this.listeCategories.forEach((element) => {
          if (element.id == this.categorieNumber) this.title = element.title;
        });
        this.getListHadithByCategorie();
      }
    });
  }

  onChangeofOptions(newGov: any) {
    this.categorieNumber = newGov;
    this.listeHadiths = [];
    this.getListHadithByCategorie();
  }

  getListHadithByCategorie() {
    this.adithService.getHadithsList(this.categorieNumber).subscribe({
      next: (data) => {
        this.listeHadiths = data.data.map((element: any) => {
          const hadith = new Hadith();
          hadith.id = element.id;
          hadith.title = element.title;
          hadith.hadeeth = element.hadeeth;
          hadith.attribution = element.attribution;
          hadith.grade = element.grade;
          hadith.explanation = element.explanation;
          hadith.hadeeth_ar = element.hadeeth_ar;
          hadith.explanation_ar = element.explanation_ar;
          hadith.grade_ar = element.grade_ar;
          return hadith;
        });
        
      }
    });
  }

  openDialog(hadith: Hadith) {
    this.adithService.getHadithDetail(Number(hadith.id)).subscribe({
      next: (data: any) => {
        this.selectedHadith = {
          id: data.id,
          title: data.title,
          hadeeth: data.hadeeth,
          attribution: data.attribution,
          grade: data.grade,
          explanation: data.explanation,
          hadeeth_ar: data.hadeeth_ar,
          explanation_ar: data.explanation_ar,
          grade_ar: data.grade_ar
        };
        this.isDialogOpen = true;
      }
    });
  }

  closeDialog() {
    this.isDialogOpen = false;
    this.selectedHadith = null;
  }
}
