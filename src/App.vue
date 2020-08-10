<template>
  <div class="home-page">

  <div class="gnav ">
    <div class="g1 my-auto ">
<div class="gbar  ">
  <div class="gbaricon">
  <i class="fas fa-bars  "></i>
  </div>
</div>
<router-link class="navbar-brand " to="/">
    <img class="navbar-brand-img" src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x.png"  alt="Gmail" loading="lazy">
  </router-link>
    </div>

<div class="g2">
    <label @focus="onFocus" @blur="onBlur"  for="gsearch" class="my-auto" :class="[isFocused ? 'gsearchlabelfocus' : 'gsearchlabel']">
     <button @focus="onFocus" @blur="onBlur" class="gbtn my-auto  mx-2"><i class="fas fa-search"></i></button>
      <!-- <input @focus="onFocus" @blur="onBlur" id="gsearch" class=" gsearch my-auto"  placeholder="Search mail" aria-label="Search"> -->
       <input class=" gsearch my-auto " type="search"  @focus="onFocus" @blur="onBlur" id="gsearch"  placeholder="Search mail" aria-label="Search">
     
    
    
     <button @focus="onFocus" @blur="onBlur" class="gbtn my-auto ml-auto mr-2"><i class="fas fa-sort-down"></i></button>

 
     </label>
</div>
<div class="g3 ml-auto ">
<div class="gquestion ml-auto  ">
<i class="far fa-question-circle gquestionicon"></i>
</div>

<div class="gquestion ">
<i class="fas fa-cog gquestionicon"></i>
</div>

<div class="gquestion">
<i class="fas fa-th gquestionicon"></i>
</div>

<div class="gavatar my-auto">
E
</div>
</div>




 </div>
<div class="g4 ">
    <label @focus="onFocus" @blur="onBlur"  for="gsearch" class="my-auto" :class="[isFocused ? 'gsearchlabelfocus' : 'gsearchlabel']">
     <button @focus="onFocus" @blur="onBlur" class="gbtn my-auto  mx-2"><i class="fas fa-search"></i></button>
      <!-- <input @focus="onFocus" @blur="onBlur" id="gsearch" class=" gsearch my-auto"  placeholder="Search mail" aria-label="Search"> -->
       <input class=" gsearch my-auto " type="search"  @focus="onFocus" @blur="onBlur" id="gsearch"  placeholder="Search mail" aria-label="Search">
     
    
    
     <button @focus="onFocus" @blur="onBlur" class="gbtn my-auto ml-auto mr-2"><i class="fas fa-sort-down"></i></button>

 
     </label>
 
 </div>

   <transition name="router-anim" enter-active-class="animated flipInX" leave-active-class="animated flipInY">
 <gsidebar > </gsidebar>
 

     </transition>
  </div>
</template>

<script>
import gsidebar from "./components/gsidebar"

export default {
components: {
  gsidebar,
},

data() {
  return{
isFocused:false,


  }
},

methods: {
  onFocus(){
    this.isFocused=true
  
  },
  onBlur(){
    this.isFocused=false
  
  }
}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

html {
    scroll-behavior: smooth;
}

.g1 {
min-width: 238px;
  display:flex;
  padding-right: 30px;
}

.g2 {
padding-left:10px;
padding-right:30px;
display:inline-flex;

}
.ggfl {display:flex;
}

.g3 {
  display: flex;
}



.g4 {display:none;
justify-content: center;
align-items: center;
}


.gbar {
    border-radius: 50%;
  display:flex;
 
    margin: 0px 4px;
width: 48px;
height:48px;
padding: 8px;
justify-content: center;
text-align: center;
align-items: center;

    cursor: pointer;


}

.gbar:hover {
  background-color:#F0F0F0;

}


.gnav{

display: flex;
padding: 3px 10px;
  background-color:white;
  color: rgb(122, 119, 119);
  border-bottom:0.5px solid rgb(236, 236, 236);
}

.gsearchlabel {
  width: 720px;
  height: 46px;

  display: flex;

    border:none !important;
  outline:none !important;
  box-shadow:none !important;
  background-color:#F1F3F4;
  border-radius:6px  !important;
overflow: hidden;
    font-style: normal;
    font-variant-ligatures: none;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-variant-east-asian: normal;
    font-weight: normal;
    font-stretch: normal;
    font-size: 16px;
    line-height: normal;
    font-family:  'Roboto',  Helvetica, Arial, sans-serif;
}

.gsearchlabelfocus {
  width: 720px;
  height: 46px;

  display: flex;

    border:none !important;
  outline:none !important;


  border-radius:6px  !important;

    font-style: normal;
    font-variant-ligatures: none;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-variant-east-asian: normal;
    font-weight: normal;
    font-stretch: normal;
    font-size: 16px;
    line-height: normal;
    font-family:  'Roboto',  Helvetica, Arial, sans-serif;
overflow: hidden;
  background-color:white;
  box-shadow:rgb(212, 211, 211) 0px 0px 3px 1px;
}


.gsearch {
  width: 600px !important;
  height: 32px !important;
  border:none;
background:none;
outline:none;
overflow: hidden;

}

.gsearch:focus {
  



    border:none !important;
  outline:none !important;
 

}

.gbtn {
    background:none !important;
      border:none !important;
  outline:none !important;
  box-shadow:none !important;
  width: 38px;
  height: 38px;
  color: gray; 



}

.gbtn2 {
  position:relative;
     background:none !important;
      border:none !important;
  outline:none !important;
  box-shadow:none !important;
  width: 38px;
  height: 38px;
  color: gray;
right:6%;

}
.gbtn:hover {
  background-color:#e0e0e0 !important;
 border-radius: 50%;
 
}

.gbtn2:hover {
  background-color:#e0e0e0 !important;
 border-radius: 50%;
 
}


.gquestion{
  width:36px;
  height: 36px;
font-size: 22px;
text-align: center;
padding: 2px;
margin-left:2px ;
margin-right:2px;
cursor:pointer;
margin-top: auto;
margin-bottom: auto;
border-radius: 50%;
}

.gquestion:hover{
  background-color:#F0F0F0;

}

.gavatar{
  width:32px;
  height: 32px;

text-align: center;

cursor:pointer;
font-size: 20px;
color:white;
 background-color:#5D4037;
border-radius: 50%;

margin: 12px;
}

.gavatar:hover {
  box-shadow: 0px 0px 6px 3px #c5bcbc;
}


@media only screen and (max-width: 1200px) {

.gquestion1 {
  margin-right:1%;
  margin-left:2%;
  display:flex;
  align-items: center;
}
  
.mailmessage {
overflow:hidden;
width:60vh !important;
display: flex;
height: 24px;

}

.mailmessage:hover {
overflow:hidden;
width:40vh !important;
display: flex;
height: 24px;

}

.mailicons {

    display: flex;
width: 15vh !important;
    background-color: white;
    padding-left: 5px;

    margin-right:60px
}

 .mailsprimarylink {
    width: 151px !important;}
 .mailssociallink {
    width: 151px !important;}
     .mailspromotionslink {
    width: 151px !important;}
.mailicons {

width: 20vh !important;
    background-color: white;
    padding-left: 5px;
}

.mailsender {
margin-left: 12px !important;
width: 150px !important;
color:rgb(59, 59, 59)
}

.gsearchlabel { width:500px !important
}

.gsearchlabelfocus { width:500px !important
}
}

@media only screen and (max-width: 969px) {
.gsearchlabel {width: 300px !important;}

.gsearchlabelfocus {width: 300px !important;}

.gsidetext {
  display:none !important; 
}

.nav-link{width: 75px !important;}
.gsidemenu {
  height: 150px !important;
  overflow: auto;
  width: 86px !important;
}

.gcomposebtn {
  padding: 0px !important;
}
.mailicons {margin-right:100px;}



}
@media only screen and (max-width: 815px) {

.mailicons {display:none !important;}
}

@media only screen and (max-width: 800px) {
.gquestion1 {
  padding:2px;
   height:14px;
  width: 14px;

}
.g3 {
    margin-left:auto !important;
}

.gnav{
  justify-content: center;
align-items: center;
text-align: center;
display: flex;
padding: 3px 10px;
  background-color:white;
  color: rgb(122, 119, 119);
  border-bottom:none
}

.g4 {
  padding-bottom:10px;
  border-bottom:0.5px solid rgb(236, 236, 236);
}

.mailsenderbar {display:block !important;
justify-content: center;
align-items: center;
text-align: center;

}



.replyflex {
    display:flex;
    margin-left:30px !important;
}

.mailmessagee {
  padding-right: 30px !important;
margin-left: 30px !important;
}

.mailsenderimagebar {
  display:flex !important;
justify-content: center;
align-items: center;
text-align: center;
margin-left:auto;
margin-right:auto;
}

.mailsender {width:80px !important;
margin-left: 5px  !important;

}

.navbar-brand {
    width: 50px !important;
    overflow: hidden !important;
    display: inline-block !important;
    padding-top: .3125rem ;
    padding-bottom: .3125rem;
     margin-right: 0rem !important;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
}

.navbar-brand-img {
   width: 50px !important;
    overflow: hidden !important;
    display: inline-block !important;
    padding-top: .3125rem ;
    padding-bottom: .3125rem;
     margin-right: 0rem !important;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
}

.g1 {
min-width: 138px;
  display:flex;
  padding-right: 5px;
}

.mail {font-size: 12px !important; }

.mailmessage {
overflow:hidden;
width:30vh !important;
display: flex;
height: 18px !important;

}

.g2{display:none !important;}


.g4{display:flex !important;}

.mailsender {
  width: 55px !important;
  font-weight: bold;
  height: 18px !important;
}

.mailtitle {
  width: 55px !important;
  height: 18px !important;
}

 .mailsprimarylink {
    width: 70px !important;
    justify-content: center;
    font-size: 10px;
    }
 .mailssociallink {
    width: 70px !important;
     justify-content: center;
    font-size: 10px;}
     .mailspromotionslink {
    width: 70px !important;
     justify-content: center;
    font-size: 10px;
    
    
    }

.ginsidenav {
  font-size: 10px !important;
}

.gquestionicon {
  font-size: 10px !important;
}

.gsmicon2 {
  font-size: 10px !important;
  margin: 0 4px !important;
}
}

@media only screen and (max-width: 460px) {
.gsidein {display:none !important}
.gsidein2 {
 display:flex;
height: 80px !important;
}

.abc {
  display:none;
}

.gsidemenu {
  display:flex !important;
  width: 500px !important;
height: 80px !important;

}

.gsidemenumails2 {
  display:flex !important;
align-items: center;
}
.gcompose {
align-items: center;
display:flex;
margin-top:auto;
margin-bottom:auto;

height: 50px;
}


.gcomposebtn {
  cursor: pointer;
  font-weight: 600;
  background-color: white;
  border-radius: 50%;
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  font-size: 0.875rem;
  letter-spacing: 0.25px;
  -webkit-align-items: center;
  align-items: center;
  background-color: #fff;
  background-image: none;
  -webkit-border-radius: 24px;
  border-radius: 24px;
  color: #3c4043;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: inline-flex;
  font-weight: 500;
  overflow: hidden;
  padding:0px !important;
  text-transform: none;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),
    0 1px 3px 1px rgba(60, 64, 67, 0.149);
  height: 48px;
}

.mailclock {display:none;}

.gnav {align-items: center;}
.gquestion {
  width:14px;
  height: 14px;
font-size: 8px;
padding: 2px;
margin-left:2px ;
margin-right:2px;
cursor:pointer;
margin-top: auto;
margin-bottom: auto;
border-radius: 50%;
}
.gquestion1 {
  height: 14px;
  width:14px;
}

.gavatar {
    height: 14px;
  width:14px;
  margin:0px;
  font-size:6px;
align-items:center;
padding:3px;
}
}

</style>