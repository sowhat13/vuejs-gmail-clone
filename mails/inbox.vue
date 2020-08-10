<template>
  <div class="inbox-page">
    <div class="mailsblock">
           <div class="ginsidenav p-2  ">
       
<div class="gquestion1  " >
<i class="far fa-square m-auto gquestionicon"></i>
<i class="fas fa-sort-down  giconsmall "></i>
</div>

<div class="gquestion1">
<i class="fas fa-redo m-auto gquestionicon"></i>
</div>

<div class="gquestion1">
<i class="fas fa-ellipsis-v m-auto gquestionicon"></i>
</div>

<span class="ml-auto my-auto"> 1-50 of {{count}}</span>

<div class="gquestion1 ">
<i class="fas fa-chevron-left m-auto gquestionicon"></i>
</div>

<div class="gquestion1">
<i class="fas fa-chevron-right m-auto gquestionicon"></i>
</div>

<div class="gquestion1  ">
<i class="fas fa-keyboard m-auto gquestionicon"></i>
<i class="fas fa-sort-down  giconsmall "></i>
</div>
        
        </div>
      <div class="mailstabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item mailsprimary">
            <a
              class="mailsprimarylink active"
              id="primary-tab"
              data-toggle="tab"
              href="#primary"
              role="tab"
              aria-controls="primary"
              aria-selected="true"
            >
              <i class="fas fa-inbox iconmargin"></i>
              <span>Primary</span>
            </a>
          </li>
          <li class="nav-item mailssocial">
            <a
              class="mailssociallink"
              id="social-tab"
              data-toggle="tab"
              href="#social"
              role="tab"
              aria-controls="social"
              aria-selected="false"
            >
              <i class="fas fa-user-friends iconmargin "></i>
              <span>Social</span>
            </a>
          </li>
          <li class="nav-item mailspromotions">
            <a
              class="mailspromotionslink"
              id="promotions-tab"
              data-toggle="tab"
              href="#promotions"
              role="tab"
              aria-controls="promotions"
              aria-selected="false"
            >
              <i class="fas fa-tag iconmargin"></i>Promotions
            </a>
          </li>
        </ul>
      </div>

      <div class="tab-content mailsinterface" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="primary"
          role="tabpanel"
          aria-labelledby="primary-tab"
        >
      

    
        <inboxvalue v-for="i in count" :key="i"/> 
        
        
        
        </div>
        <div class="tab-pane fade" id="social" role="tabpanel" aria-labelledby="social-tab">...</div>
        <div
          class="tab-pane fade"
          id="promotions"
          role="tabpanel"
          aria-labelledby="promotions-tab"
        >...</div>
      </div>
    </div>
  </div>
</template>

<script>
import inboxvalue  from "./inboxvalue"
export default {
components: {
    inboxvalue
},
computed: {
count(){
    return this.$store.getters.getCount
}
}
};
</script>

<style lang="scss">
.mailsblock {
  display: block;
}

.mailstabs {
  border-bottom: 0.5px solid rgb(236, 236, 236);
  display: flex;
}

.mailsprimary {
  .mailsprimarylink {
    width: 251px;
    height: 56px;
    display: flex;
    align-items: center;

    font-weight: bold;

    border-bottom: 3px solid transparent;
  }
  .router-link-active,
  a.active {
    color: #d93025 !important;
    border-bottom: 3px solid #d93025;
    border-radius: 3px;
  }
}
.mailsprimary:hover {
  background-color: #f2f2f2;
  color: black;
}

.mailssocial {
  .mailssociallink {
    width: 251px;
    height: 56px;
    display: flex;
    align-items: center;

    font-weight: bold;

    border-bottom: 3px solid transparent;
  }
  .router-link-active,
  a.active {
    color: #1a73e8 !important;
    border-bottom: 3px solid #1a73e8;
    border-radius: 3px;
  }
}
.mailssocial:hover {
  background-color: #f2f2f2;
  color: black;
}

.mailspromotions {
  .mailspromotionslink {
    width: 251px;
    height: 56px;
    display: flex;
    align-items: center;

    font-weight: bold;

    border-bottom: 3px solid transparent;
  }
  .router-link-active,
  a.active {
    color: #188038 !important;
    border-bottom: 3px solid #188038;
    border-radius: 3px;
  }
}
.mailspromotions:hover {
  background-color: #f2f2f2;
  color: black;
}
.mailsinterface {
    height: 70vh;
    overflow-y: auto;
}


.mail {
    display: flex;
    height: 40px;
    align-items: center;

      border-bottom: 0.5px solid rgb(236, 236, 236);


.gsmicon2 {
    margin-left: 8px;
    margin-right:8px;
    color: rgb(228, 228, 228);
    cursor:pointer;
}

.mailsender {
margin-left: 15px;
width: 200px;
color:rgb(59, 59, 59);
overflow:hidden;
height: 24px;
}

.mailtitle{
display: flex;
overflow: hidden;
width:12vh;
height: 24px;
color:rgb(59, 59, 59) 
}

.mailmessage {
overflow:hidden;
width:70vh;
display: flex;
height: 24px;

}


.mailicons {
  
    display: none;
}

}

.mail:hover {
 display: flex;
    height: 40px;
    align-items: center;
     -webkit-box-shadow: 0px 5px 5px -4px rgba(0,0,0,0.15);
-moz-box-shadow: 0px 5px 5px -4px rgba(0,0,0,0.15);
box-shadow: 0px 5px 5px -4px rgba(0,0,0,0.15);
 

.gsmicon2 {
    margin-left: 8px;
    margin-right:8px;
    color: rgb(129, 127, 127);
}

.mailsender {
margin-left: 15px;
width: 200px;
color:rgb(59, 59, 59)
}

.mailtitle{


color:rgb(59, 59, 59) 
}

.mailmessage {
overflow:hidden;
width:69vh;
display: flex;
height: 24px;

}

.mailclock {
    display:none;
}

.mailicons {

    display: flex;
width: 30vh;
    background-color: white;
    padding-left: 5px;
}

}

.iconmargin {margin-left: 5%;
margin-right: 5%;}

</style>