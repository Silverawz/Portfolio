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
  title_section:String;
  navbar:String[] = new Array("Home","Skills","Projects","Contact");
  flag_path_img:String;
  content:String[][] = new Array(new Array ("","","","",""),new Array ("","","","","") ,new Array ("","","","","") ,new Array ("","","","",""));

  ngOnInit() {
    this.initializeContent();
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
    this.title_section = this.navbar[this.currentSection.valueOf()];
    this.title_section = this.title_section.substring(0, this.title_section.length - 1);
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
    this.title_section = this.navbar[this.currentSection.valueOf()];
    this.title_section = this.title_section.substring(0, this.title_section.length - 1);
    this.initializeContentPage();
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
    
    //document.getElementById("title_section").style.visibility = "hidden";
    document.getElementById("btn-navbar").style.visibility = "hidden";
    //document.getElementById("title_container").style.width = "0";
   // document.getElementById("title_container").style.visibility = "hidden";

   document.getElementById("title_container").style.marginLeft = "20%";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    //document.getElementById("title_section").style.visibility = "visible";
    document.getElementById("btn-navbar").style.visibility = "visible";
    //document.getElementById("title_container").style.width = "100%";
    //document.getElementById("title_container").style.visibility = "visible";

    document.getElementById("title_container").style.marginLeft = "10%";
  } 

  initializeContent(){
    this.flag_path_img = "assets/img/france-flag-icon-32.png";
    this.currentSection = 0;
    this.language_choosed = 2;
    this.title_section = "Home";
    this.navbar[0] = this.navbar[0] + " ←";
    this.initializeContentPage();
  }

  initializeContentPage(){
    if(this.language_choosed == 1){
      this.initializePageFrench();   
    }
    else if(this.language_choosed == 2){
      this.initializePageEnglish();    
    } else{
      this.initializePageEnglish();
    }
  }

  initializePageFrench(){
      //accueil
      this.content[0][0] = "Bienvenue sur mon portfolio!";
      this.content[0][1] = "Je m'appelle Nicolas et je suis un développeur junior Fullstack.";
      this.content[0][2] = "Je suis quelqu'un de passionné par l'informatique et la programmation.";
      this.content[0][3] = "assets/img/france-flag-icon-32.png";
      this.content[0][4] = "img2";
      //competences
      this.content[1][0] = "Page de compétences";
      this.content[2][0] = "Page de projets perso";
      this.content[3][0] = "Contactez moi";
  }

  initializePageEnglish(){
    this.content[0][0] = "Home page";
      this.content[1][0] = "Skills page";
      this.content[2][0] = "Projects page";
      this.content[3][0] = "Contact page";
  }

}
