<template>
  <div>
    <div class="mailsblock">
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
              <i class="fas fa-inbox mx-3"></i>
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
              <i class="fas fa-user-friends mx-3"></i>
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
              <i class="fas fa-tag mx-3"></i>Promotions
            </a>
          </li>
        </ul>
      </div>

      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="primary"
          role="tabpanel"
          aria-labelledby="primary-tab"
        >
        <router-link to="mails/inbox" class="mail"> 

          <i class="far fa-square gsmicon2 ml-3"></i>
          <i class="far fa-star gsmicon2"></i>
       <i class="fas fa-exclamation-circle gsmicon2"></i>
<div class="mailsender">
Kendrick Lamar
</div>
<div class="mailtitle">Humble -</div>

<div class="mailmessage my-auto">
Nobody pray for me
Even a day for me
Way (yeah, yeah!)
Ay, I remember syrup sandwiches and crime allowances
Finesse a nigga with some counterfeits
But now I'm countin' this
Parmesan where my accountant lives
In fact, I'm downin' this

</div>
<div class="ml-auto mx-3 mailclock">4:24 PM</div>
<div class="ml-auto mailicons">
<i class="fas fa-archive gsmicon"></i>
<i class="fas fa-trash gsmicon"></i>
<i class="fas fa-envelope-open gsmicon"></i>
<i class="fas fa-clock gsmicon"></i></div>
        </router-link>

                <router-link to="mails/inbox" class="mail"> 

          <i class="far fa-square gsmicon2 ml-3"></i>
          <i class="far fa-star gsmicon2"></i>
       <i class="fas fa-exclamation-circle gsmicon2"></i>
<div class="mailsender">
Kendrick Lamar
</div>
<div class="mailtitle">Humble -</div>

<div class="mailmessage my-auto">
Nobody pray for me
Even a day for me
Way (yeah, yeah!)
Ay, I remember syrup sandwiches and crime allowances
Finesse a nigga with some counterfeits
But now I'm countin' this
Parmesan where my accountant lives
In fact, I'm downin' this

</div>
<div class="ml-auto mx-3 mailclock">4:24 PM</div>
<div class="ml-auto mailicons">
<i class="fas fa-archive gsmicon"></i>
<i class="fas fa-trash gsmicon"></i>
<i class="fas fa-envelope-open gsmicon"></i>
<i class="fas fa-clock gsmicon"></i></div>
        </router-link>
        
        
        
        
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
export default {};
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


.mail {
    display: flex;
    height: 40px;
    align-items: center;
      border-bottom: 0.5px solid rgb(236, 236, 236);


.gsmicon2 {
    margin-left: 8px;
    margin-right:8px;
    color: rgb(228, 228, 228);
}

.mailsender {
margin-left: 15px;
width: 200px;
color:rgb(59, 59, 59)
}

.mailtitle{
display: flex;

color:rgb(59, 59, 59) 
}

.mailmessage {
overflow:hidden;
width:600px;
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
width:600px;
display: flex;
height: 24px;

}

.mailclock {
    display:none;
}

.mailicons {
    position:absolute;
    z-index: 5;
    display: flex;
    right: 20px;
    background-color: white;
}

}
</style>