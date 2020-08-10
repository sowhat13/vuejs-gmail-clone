<template>
  <div class="gsidebar-page">
    <div class="gside">
      <div class="gsidein">
        <div class="gcompose">
          <div class="gcomposebtn" data-toggle="modal" data-target="#exampleModal">
            <img
              class="gcomposeimg"
              src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png"
            />

            <span class="gsidetext">Compose</span>
          </div>

          <!-- Modal -->
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">...</div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="gsidemenu">
          <div
            class="nav gsidemenumails flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
         
          >
            <router-link
              class="nav-link "
      
              data-toggle="pill"
         to="/mails/inbox"
        

            >
              <i class="fas fa-inbox gsmicon"></i><span class="gsidetext">Inbox 
              <span class=" my-auto messagecount">{{count}}</span> </span>
            </router-link>
            <router-link
              class="nav-link"
         
              data-toggle="pill"
            to="/mails/starred"
           
            >
              <i class="fas fa-star gsmicon"></i><span class="gsidetext">Starred</span>
            </router-link>
            <router-link
              class="nav-link"
     
              data-toggle="pill"
            to="/mails/snoozed"
          
            >
              <i class="fas fa-clock gsmicon"></i><span class="gsidetext">Snoozed</span>
            </router-link>
            <router-link
              class="nav-link"
           
              data-toggle="pill"
                to="/mails/important"
            
           
            >
              <i class="fas fa-exclamation-circle gsmicon"></i><span class="gsidetext">Important</span>
            </router-link>
          </div>
        </div>
      </div>
      <div class="ginsideblock">
    
      <div class="gsidein2">
        <div class="gcompose">
          <div class="gcomposebtn" data-toggle="modal" data-target="#exampleModal">
            <img
              class="gcomposeimg"
              src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png"
            />

            <span class="gsidetext">Compose</span>
          </div>

          <!-- Modal -->
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">...</div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="gsidemenu">
          <div
            class=" gsidemenumails2  nav-pills"
            id="v-pills-tab"
         
          >
            <router-link
              class="nav-link "
      
              data-toggle="pill"
         to="/mails/inbox"
        

            >
              <i class="fas fa-inbox gsmicon"></i><span class="gsidetext">Inbox 
              <span class=" my-auto messagecount">{{count}}</span> </span>
            </router-link>
            <router-link
              class="nav-link"
         
              data-toggle="pill"
            to="/mails/starred"
           
            >
              <i class="fas fa-star gsmicon"></i><span class="gsidetext">Starred</span>
            </router-link>
            <router-link
              class="nav-link"
     
              data-toggle="pill"
            to="/mails/snoozed"
          
            >
              <i class="fas fa-clock gsmicon"></i><span class="gsidetext">Snoozed</span>
            </router-link>
            <router-link
              class="nav-link"
           
              data-toggle="pill"
                to="/mails/important"
            
           
            >
              <i class="fas fa-exclamation-circle gsmicon"></i><span class="gsidetext">Important</span>
            </router-link>
          </div>
        </div>
      </div>


    <transition name="transitionanim" class="transitionanim">
     <router-view />
    </transition>

      </div>
    </div>
    
  </div>
</template>

<script>
export default {

  computed: {
count(){
    return this.$store.getters.getCount
}}
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

.transitionanim-enter-active {
  animation: coming .8s;
  animation-delay:.3s;

  opacity:0;
}

.transitionanim-leave-active {
  animation:going .2s;
 


}

@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(50px);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateX(-50px);
     opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
}

.gside {
  height: 100%;
  display: flex;
    color: rgb(122, 119, 119);

    a {
    color: rgb(122, 119, 119);
    text-decoration: none;
}
}

.gsidein {
  max-width: 256px;
}



.gcompose {
  margin: 16px 8px;
  margin-bottom:10px;
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
  padding: 0 24px 0 0;
  text-transform: none;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),
    0 1px 3px 1px rgba(60, 64, 67, 0.149);
  height: 48px;
}

.gcomposebtn:hover {
  box-shadow: 0 2px 4px 0 rgba(60, 64, 67, 0.302),
    0 2px 6px 3px rgba(60, 64, 67, 0.149);
}

.gcomposeimg {
  padding: 10px 14px;
}



.gsidemenumails{
  a {
  border-radius: 0px 25px 25px 0px !important;
  font-size: 15px !important;
  color: rgb(95, 95, 95) !important;
  width: 95%;
  padding: 5px 24px;
  height: 32px;
  display: flex;
}

 .router-link-active, a.active {
  color: #d93025 !important;
  background-color: #fce8e6 !important;
  font-weight: bold;
}
}


.gsidemenumails2{
  display:none !important;
  a {
  border-radius: 25px !important;
  font-size: 15px !important;
  color: rgb(95, 95, 95) !important;
  width: 95%;
  padding: 5px 24px;
  height: 32px;
  display: flex;
}

 .router-link-active, a.active {
  color: #d93025 !important;
  background-color: #fce8e6 !important;
  font-weight: bold;
}
}

.nav-link:hover {
  background-color: rgb(224, 224, 224);
}



.gsmicon {
margin:auto;
  margin-right: 18px;
  margin-left: 6px;
 cursor:pointer;
}

.messagecount {
    font-size: 12px;
    margin-left: 180%;
}

.gsidemenu {
  height: 150px !important;
  overflow: auto;
  width: 256px;
}

.ginsideblock {
  display: block;
  width: 100%;
}

.ginsidenav {
    border-bottom:0.5px solid rgb(236, 236, 236);
  display: flex;
  width: 100%;
}

.gquestion1 {
    display: flex;
      width:36px;
  height: 36px;
font-size: 16px;
text-align: center;
align-items: center;
justify-content: center;
padding: 2px;
margin-left:5px ;
margin-right:5px;
cursor:pointer;
margin-top: auto;
margin-bottom: auto;
border-radius: 50%;

}

.gquestion1:hover{
  background-color:#F0F0F0;

}

.giconsmall {
   
    font-size: 12px;
}

.gsidetext {
  display:flex;
}
.gsidein2 {
 display:none;
}
</style>