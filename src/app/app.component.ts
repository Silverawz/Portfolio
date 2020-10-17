import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Portfolio';
  currentSection : Number; //0 home, 2 skills, 3 projets, 4 contact
  language_choosed : Number; //1 french, 2 english
  navbar:String[] = new Array("Home","Skills","Projects","Projects");
  flag_path_img:String;
  content:String[] = new Array(" "," "," "," ");

  ngOnInit() {
    this.flag_path_img = "assets/img/france-flag-icon-32.png";
    this.currentSection = 0;
    this.language_choosed = 2;
    this.navbar[0] = this.navbar[0] + " ←"
    this.content[0] = "Home page";
    this.content[1] = "Skills page";
    this.content[2] = "Projects page";
    this.content[3] = "Contact page";
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";        
  }

  changeSection(selected){
    if(this.language_choosed == 1){
      this.resetDefaultValuesSelectedFrench();
    } else if (this.language_choosed == 2){
      this.resetDefaultValuesSelectedEnglish();
    }
    if(selected != null){
      if(selected == 0 || selected == 1 || selected == 2 || selected == 3){
        this.currentSection = selected;
        this.navbar[selected] = this.navbar[selected] + " ←"; 
      } else{     
        this.currentSection = 1;
        this.navbar[0] = this.navbar[0] + " ←"; 
      }
    } else{
      this.currentSection = 1;
      this.navbar[0] = this.navbar[0] + " ←"; 
    }
  }

  changeLanguage(){
    if(this.flag_path_img == "assets/img/france-flag-icon-32.png"){
      this.flag_path_img = "assets/img/united-kingdom-flag-icon-32.png"; 
      this.language_choosed = 1;
      this.resetDefaultValuesSelectedFrench();
      this.addSelectedSection(this.currentSection);
    } else if (this.flag_path_img == "assets/img/united-kingdom-flag-icon-32.png"){
      this.flag_path_img = "assets/img/france-flag-icon-32.png";    
      this.language_choosed = 2;
      this.resetDefaultValuesSelectedEnglish();
      this.addSelectedSection(this.currentSection);
    }
  }

  addSelectedSection(selected){
    if(selected == 0){
      this.navbar[0] = this.navbar[0] + " ←"; 
    } else if (selected == 1){
      this.navbar[1] = this.navbar[1] + " ←"; 
    } else if (selected == 2){
      this.navbar[2] = this.navbar[2] + " ←"; 
    } else if (selected == 3){
      this.navbar[3] = this.navbar[3] + " ←"; 
    } else {
      this.navbar[0] = this.navbar[0] + " ←"; 
    }
  }

  resetDefaultValuesSelectedFrench(){
      this.navbar[0] = "Accueil";
      this.navbar[1] = "Compétences";
      this.navbar[2] = "Projets";
      this.navbar[3] = "Contact";
  }

  resetDefaultValuesSelectedEnglish(){
      this.navbar[0] = "Home";
      this.navbar[1] = "Skills";
      this.navbar[2] = "Projects";
      this.navbar[3] = "Contact";
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  } 
}
