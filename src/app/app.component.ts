import { Component, OnInit, HostListener} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {

  title = 'Portfolio';
  menu:String = "Ouvrir";
  msg_introduction:String = "Bonjour, je m'appelle Nicolas Deroussen";
  msg_introduction_next:String = "Je suis un développeur Java/Web junior full-stack";
  color:String = "black";
  timer:number = 100;
  index:number = 0;
  index2:number = 0;
  startSecondMessage:boolean = false;

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true); //third parameter
    this.typeWriter();
    this.typeWriter2nd();
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
      if(this.index == 19){
        this.startSecondMessage = true;
      }
    }
  }
  
  typeWriter2nd(){
    if (this.startSecondMessage && this.index2 < this.msg_introduction_next.length) {
      if(this.index2 < this.msg_introduction_next.length){
        document.querySelector(".message2").innerHTML += this.msg_introduction_next[this.index2];
        this.index2++;
      }
      setTimeout(this.typeWriter2nd.bind(this), this.timer*0.8);
    } else if (!this.startSecondMessage){
      setTimeout(this.typeWriter2nd.bind(this), this.timer*25);
    }
  } 

  // ngOnDestroy() {
  //   window.removeEventListener('scroll', this.scroll, true);
  // }

  scroll = (event): void => {
    if(window.scrollY > 0 && document.getElementById('nav').className != 'scroll'){
      document.getElementById('nav').className = 'scroll';
      this.color = "white";
    } 
    else if(window.scrollY == 0 && document.getElementById('nav').className == 'scroll'){
      document.getElementById('nav').className = '';
      this.color = "black";
    }
    
    //handle your scroll here
    //notice the 'odd' function assignment to a class field
    //this is used to be able to remove the event listener
  };

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


  /*
  $(document).ready(function()
  {
      $(".hamburger").on("click", function(){
          $("nav ul").toggleClass("menu");
      });
  });
  
  
  
  
          $(window).on("scroll", function() {
              if($(window).scrollTop()){
                              $('nav').addClass('scroll');
                          }
                          else{
                          $('nav').removeClass('scroll');
                          }
          }) */

}
