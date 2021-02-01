import { Component, OnInit } from '@angular/core';

declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {

  title = 'Portfolio';
  menu:String = "Ouvrir";
  msg_introduction:String = "Bonjour, je m'appelle Nicolas Deroussen";
  color:String = "white";
  currentSection:number = 1;
  timer:number = 100;
  index:number = 0;
  animationActiveSection:boolean[] = [false, false, false, false, false];

  ngOnInit() {
    this.typeWriter();
    particlesJS.load('particles-js', 'assets/data/particles.json');
    window.addEventListener('scroll', this.animationOnScroll);
  }

  typeWriter() {
    if (this.index < this.msg_introduction.length) {
      document.querySelector(".message").innerHTML += this.msg_introduction[this.index];
      this.index++;
      if(this.index == 8){
        setTimeout(this.typeWriter.bind(this), this.timer*5);
      } else{
        setTimeout(this.typeWriter.bind(this), this.timer);
      }
    }
  }

  over(category){
    document.getElementById('menu_'+category).style.color = "red";
  }

  out(category){
    document.getElementById('menu_'+category).style.color = this.backToInitialColor(category);
  }

  backToInitialColor(category){
    this.color = "white";
    if(this.currentSection == category){
      return "green";
    } 
    return "white";
  } 

  backAllToInitialColor(){
    let actualColor;
    if(this.color == "rgb(37, 189, 181)"){
      actualColor = "rgb(37, 189, 181)";
    } else {
      actualColor = "white";
    }
    document.getElementById('menu_1').style.color = actualColor;
    document.getElementById('menu_2').style.color = actualColor;
    document.getElementById('menu_3').style.color = actualColor;
    document.getElementById('menu_4').style.color = actualColor;
  }

  hamburger(){
    if(document.getElementById('nav-ul').className != 'true'){
      document.getElementById('nav-ul').className = 'true';
      this.menu = "Fermer";
    }   
    else{
      document.getElementById('nav-ul').className = 'false';
      this.menu = "Ouvrir";
    }
  }

  moveToSection(sectionNumber){
    if(sectionNumber == 1) document.getElementById('home').scrollIntoView({behavior:"smooth"});
    else if(sectionNumber == 2) document.getElementById('skills').scrollIntoView({behavior:"smooth"});
    else if(sectionNumber == 3) document.getElementById('projects').scrollIntoView({behavior:"smooth"});
    else if(sectionNumber == 4) document.getElementById('contact').scrollIntoView({behavior:"smooth"});
    else document.getElementById('home').scrollIntoView({behavior:"smooth"});
  }



  animationOnScroll = (event): void => {
    /* navbar fixed on scroll */
    if(window.scrollY > 0 && document.getElementById('nav').className != 'scroll'){
      document.getElementById('nav').className = 'scroll';
    } 
    else if(window.scrollY == 0 && document.getElementById('nav').className == 'scroll'){
      document.getElementById('nav').className = '';
    }
    /* navbar fixed on scroll end */

    /* category selected*/
    this.backAllToInitialColor();
    if(window.scrollY >= 0 && window.scrollY < 700 ){
      document.getElementById('menu_1').style.color = "green";
      if(this.currentSection != 1) this.currentSection = 1;
    }  else if(window.scrollY >= 700 && window.scrollY < 1800){
      document.getElementById('menu_2').style.color = "green";
      if(this.currentSection != 2) this.currentSection = 2;
    } else if(window.scrollY >= 1800 && window.scrollY < 4350){
      document.getElementById('menu_3').style.color = "green";
      if(this.currentSection != 3) this.currentSection = 3;
    } else if(window.scrollY >= 4350){
      document.getElementById('menu_4').style.color = "green";
      if(this.currentSection != 4) this.currentSection = 4;
    }
    /* category selected end */

    /**section skills */
    if(!this.animationActiveSection[0]){
      if(window.scrollY >= 700 && window.scrollY < 1200){
        let elements1 = document.getElementsByClassName('description_1_items');
        let elements2 = document.getElementsByClassName('description_2_items');
        let elements3 = document.getElementsByClassName('description_3_items');
        for(let i=0; i < elements3.length; i++){
          if(i<6){
            elements1[i].className = "description_1_items animate_description";
            elements2[i].className = "description_2_items animate_description";
            elements3[i].className = "description_3_items animate_description";
          }else{
            elements3[i].className = "description_3_items animate_description";
          }
        }
        this.animationActiveSection[0] = true;
      }
    }
    else if(this.animationActiveSection[0]){
      if(window.scrollY < 700){
        let elements1 = document.getElementsByClassName('description_1_items');
        let elements2 = document.getElementsByClassName('description_2_items');
        let elements3 = document.getElementsByClassName('description_3_items');
        for(let i=0; i < elements3.length; i++){
          if(i<6){
            elements1[i].className = "description_1_items";
            elements2[i].className = "description_2_items";
            elements3[i].className = "description_3_items";
          }else{
            elements3[i].className = "description_3_items";
          }
        }
        this.animationActiveSection[0] = false;
      }
    }
    /**section skills end*/

    /**section projects */
    /*1*/
    if(!this.animationActiveSection[1]){
      if(window.scrollY >= 1788 && window.scrollY < 2350){
        let elements1 = document.getElementsByClassName('image_card_odd_1');
        let elements2 = document.getElementsByClassName('description_card_1');
        elements1[0].className = "image_card_odd_1 move_animation_img";
        elements2[0].className = "description_card_1 move_animation_p";
        this.animationActiveSection[1] = true;
      }
    }
    else if(this.animationActiveSection[1]){
      if(window.scrollY < 1788){
        let elements1 = document.getElementsByClassName('image_card_odd_1 move_animation_img');
        let elements2 = document.getElementsByClassName('description_card_1 move_animation_p');
        elements1[0].className = "image_card_odd_1";
        elements2[0].className = "description_card_1";
        this.animationActiveSection[1] = false;
      }
    } 
    /*2*/
    if(!this.animationActiveSection[2]){
      if(window.scrollY >= 2395 && window.scrollY < 2995){
        let elements1 = document.getElementsByClassName('image_card_even');
        let elements2 = document.getElementsByClassName('description_card_even');
        elements1[0].className = "image_card_even move_animation_img_even";
        elements2[0].className = "description_card_even move_animation_p_even";
        this.animationActiveSection[2] = true;
      }
    }
    else if(this.animationActiveSection[2]){
      if(window.scrollY < 2395){
        let elements1 = document.getElementsByClassName('image_card_even move_animation_img_even');
        let elements2 = document.getElementsByClassName('description_card_even move_animation_p_even');
        elements1[0].className = "image_card_even";
        elements2[0].className = "description_card_even";
        this.animationActiveSection[2] = false;
      }
    }
    /*3*/
    if(!this.animationActiveSection[3]){
      if(window.scrollY >= 2965 && window.scrollY < 3365){
        let elements1 = document.getElementsByClassName('image_card_odd_2');
        let elements2 = document.getElementsByClassName('description_card_3');
        elements1[0].className = "image_card_odd_2 move_animation_img";
        elements2[0].className = "description_card_3 move_animation_p";
        this.animationActiveSection[3] = true;
      }
    }
    else if(this.animationActiveSection[3]){
      if(window.scrollY < 2965){
        let elements1 = document.getElementsByClassName('image_card_odd_2 move_animation_img');
        let elements2 = document.getElementsByClassName('description_card_3 move_animation_p');
        elements1[0].className = "image_card_odd_2";
        elements2[0].className = "description_card_3";
        this.animationActiveSection[3] = false;
      }
    }
    /**section projects end*/

    /**section contact */
    if(!this.animationActiveSection[4]){
      if(window.scrollY >= 4100 && window.scrollY < 4350){
        for(let i=1; i < 8; i++) {
          document.getElementById('span'+i).className = "animation_span";
        }
        this.animationActiveSection[4] = true;
      }
    }
    else if(this.animationActiveSection[4]){
      if(window.scrollY < 4100){
        for(let i=1; i < 8; i++) {
          document.getElementById('span'+i).className = "";
        }
        this.animationActiveSection[4] = false;
      }
    }
    /**section contact end*/
  }

}
