import { Component, ElementRef, OnInit } from '@angular/core';
import { AdithService } from '../services/hadith/adith.service';
import { Hadith } from '../model/hadith.modele';
import { CollectionsHadiths } from '../model/collectionsHadiths.modele';

@Component({
  selector: 'app-hadith',
  templateUrl: './hadith.component.html',
  styleUrls: ['./hadith.component.css']
})
export class HadithComponent implements OnInit {
  
  
title : string = "";
  listeHadiths : Hadith[] = [];
  hadith  : Hadith = new Hadith();
  categorieNumber : number = 1;
  myDropDown : string = "1";
  listeCategories : CollectionsHadiths[] = [];
categorie : CollectionsHadiths = new CollectionsHadiths();
  constructor( public adithService : AdithService,private elementRef: ElementRef<HTMLElement>){}
 
  onChangeofOptions(newGov: any) {
    console.log("+++++++",this.myDropDown);
    this.listeCategories.forEach((element)=>{
      if (element.id == newGov) this.title = element.title;
    });
  
    this.categorieNumber = newGov;
    this.listeHadiths = [];
    this.getListHadithByCategorie();
   
     
}

  ngOnInit(): void {
  

    this.adithService.getHadithCategorie().subscribe({
      next : (data) => {
        data.forEach((element : any)=>{
          this.categorie = new CollectionsHadiths();
          this.categorie.id = element.id;
          this.categorie.title = element.title;
          this.categorie.hadeeths_count = element.hadeeths_count;
          this.categorie.parent_id = element.parent_id;
          this.listeCategories.push(this.categorie);
        });
      },
      error : () => {},
      complete : () => {
        this.listeCategories.forEach((element)=>{
          if (element.id == this.categorieNumber) this.title = element.title;
        });
        this.getListHadithByCategorie();
      }
    });




    
  }

  getListHadithByCategorie(){
    this.adithService.getHadithsList(this.categorieNumber).subscribe({
      next : (data) => {
        console.log(data);
        
        data.data.forEach((element : any)=>{
          this.hadith = new Hadith();
          this.hadith.id = element.id;
          this.hadith.title = element.title;
          this.listeHadiths.push(this.hadith);
        });
      }
    });
  }

  hadithExplaynation(id :number){
    this.adithService.getHadithDetail(id).subscribe({
      next : (data :any) => {
        console.log(data);
        
       
       
          this.hadith.id = data.id;
          this.hadith.title = data.title;
          this.hadith.hadeeth = data.hadeeth;
          this.hadith.attribution = data.attribution;
          this.hadith.grade = data.grade;
          this.hadith.explanation = data.explanation;
          this.hadith.hadeeth_ar = data.hadeeth_ar;
          this.hadith.explanation_ar = data.explanation_ar;
          this.hadith.grade_ar = data.grade_ar;
           
       
      }
    });
  }

}
