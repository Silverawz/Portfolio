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
  url:String = "assets/img/Hubble.-L-oeil-de-l-espace.jpg";
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
    this.changeLayoutColor();
  }

  changeLayoutColor(){
    if(this.currentSection == 0){
      document.getElementById("main").style.backgroundColor = "rgb(228, 206, 178)";
    } else if(this.currentSection == 1){
      document.getElementById("main").style.backgroundColor = "rgb(165, 140, 161)";
    } else if(this.currentSection == 2){
      document.getElementById("main").style.backgroundColor = "rgb(108, 193, 196)";
    } else if(this.currentSection == 3){
      document.getElementById("main").style.backgroundColor = "rgb(134, 190, 134)";
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
    document.getElementById("btn-navbar").style.visibility = "hidden";
    document.getElementById("title_container").style.marginLeft = "20%";
    document.getElementById("projects_section").style.marginRight = "10%";
    document.getElementById("projects_section").style.borderColor = "rgb(238, 233, 164)";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("btn-navbar").style.visibility = "visible";
    document.getElementById("title_container").style.marginLeft = "10%";
    document.getElementById("projects_section").style.marginRight = "20%";
    document.getElementById("projects_section").style.borderColor = "rgb(255, 255, 255)";
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
      this.content[0][1] = "Je m'appelle Nicolas Deroussen résidant sur Paris et je suis un développeur junior full-stack.";
      this.content[0][2] = "Ce site est toujours en cours de construction.";
      this.content[0][3] = "assets/img/france-flag-icon-32.png";
      this.content[0][4] = "";
      //competences
      this.content[1][0] = "En tant que developpeur, il est important de posséder un arsenal de compétences élevées.";
      this.content[1][1] = "Il faut sans cesse apprendre et se mettre à jour via une veille technologique.";
      this.content[1][2] = "";
      this.content[1][3] = "assets/img/france-flag-icon-32.png";
      this.content[1][4] = "";
      //projets
      this.content[2][0] = "Mon travail récent";
      this.content[2][1] = "";
      this.content[2][2] = "";
      this.content[2][3] = "assets/img/france-flag-icon-32.png";
      this.content[2][4] = "";




      
      this.content[3][0] = "Contactez moi";
  }

  initializePageEnglish(){
    //home
    this.content[0][0] = "Welcome to my portfolio!";
    this.content[0][1] = "Hello, I'm Nicolas Deroussen currently living in Paris. I'm a junior full-stack web developer.";
    this.content[0][2] = "This website is still under construction.";
    this.content[0][3] = "assets/img/france-flag-icon-32.png";
    this.content[0][4] = "";

    this.content[1][0] = "As a developer, an high amount of skills is required to perform and be effective in most situations.";
    this.content[1][1] = "Technological watch is as important as knowledge in IT. We must adapt and improve everyday, months and year with the newest technologies.";
    this.content[1][2] = "";
    this.content[1][3] = "assets/img/france-flag-icon-32.png";
    this.content[1][4] = "";

    //projets
    this.content[2][0] = "My Recent Work";
    this.content[2][1] = "";
    this.content[2][2] = "";
    this.content[2][3] = "assets/img/france-flag-icon-32.png";
    this.content[2][4] = "";


    this.content[3][0] = "Contact page";
  }

}
