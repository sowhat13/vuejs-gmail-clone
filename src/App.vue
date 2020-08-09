<template>
  <div>
  <div class="gnav ">
    <div class="g1 my-auto ">
<div class="gbar  ">
  <div class="gbaricon">
  <i class="fas fa-bars  "></i>
  </div>
</div>
<a class="navbar-brand " href="#">
    <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x.png"  alt="Gmail" loading="lazy">
  </a>
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
<div class="gquestion   ">
<i class="far fa-question-circle gquestionicon"></i>
</div>

<div class="gquestion ">
<i class="fas fa-cog gquestionicon"></i>
</div>

<div class="gquestion">
<i class="fas fa-th gquestionicon"></i>
</div>

<div class="gavatar ">
E
</div>
</div>
  </div>
 
 
 <gsidebar />
 


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

.g3 {
  display: flex;
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

  background-color:white;
  box-shadow:rgb(212, 211, 211) 0px 0px 3px 1px;
}


.gsearch {
  width: 600px !important;
  height: 32px !important;
  border:none;
background:none;
outline:none;


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
font-size: 20px;
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

</style>