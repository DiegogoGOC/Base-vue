<template>
    <aside>
        <nav>
            <a href="tel:0781500885" target="_blank" title="numero telephonique : 07 81 50 08 85">
                <img src="../img/appel-telephonique.png" alt="">
            </a>
            <a href="mailto:ael.coic@gmail.com" target="_blank" title="email : ael.coic@gmail.com">
                <img src="../img/email.png" alt="">
            </a>
            <a href="https://www.google.com/maps/place/Douarnenez+Tr%C3%A9boul/@48.0957526,-4.3472889,17z/data=!3m1!4b1!4m6!3m5!1s0x4816d0be5a92ec21:0x344d3b1a4adb1d82!8m2!3d48.095749!4d-4.344714!16s%2Fg%2F11fm5lplhk?entry=ttu
            " target="_blank" title="adresse: 29100 DOUARNENEZ">
                <img src="../img/loc.png" alt="">
            </a>
        </nav>
    </aside> 
    <br>
    <main>
      <h2>Envoyer un mail</h2>
        <form name="Envoiemail" action="#" method="post">
            <div>
                <div>
                    <label for="nom">Nom :</label>
                    <input type="text" name="nom" id="nom" placeholder="" v-model="nommodel">
                </div>
                <div>
                    <label for="prenom">Objet :</label>
                    <input type="text"  name="prenom" id="prenom" placeholder="" v-model="prenommodel">
                </div>

                <div>
                    <label for="emailR">Repondre a l'adresse mail :</label>
                    <input type="text"  name="email" id="emailR" placeholder="" v-model="emailRmodel">
                </div>
                

            </div>
            <div id="com">
                <label for="mail">Contenue du mail :</label>
                <br>
                <textarea id="txtCom" type="text" size="50" style="height:25px;" placeholder="" v-model="messagemodel" ></textarea>
                
            </div>
            
        </form>
        <div>
          <button v-if="nommodel!=''&& prenommodel!=''&& emailRmodel!=''&&  messagemodel!=''" @click="ok = true" class="btn">Envoyer</button>
          <button v-else @click="pb = true" class="btn">Envoyer</button>
        </div>
        

        <popup :show="ok"
          :cancel="cancel"
          :confirm="confirmok"
          description="votre message est envoyer"
          color="green"/>

        <popup :show="pb"
          :cancel="cancel"
          :confirm="confirmpb"
          description="Veuillez renseigner tous les champs"
          color="red"/>




    </main>
</template>
<script>
import popup from "@/components/popup.vue";

export default {
  name: 'App2',
  components: { popup },
  data() {
    return {
      nommodel:"",
      prenommodel:"",
      emailRmodel:"",
      messagemodel:"",
      pb: false,
      ok: false,
    }
  },
  
  methods: {
    cancel() {
      console.log('cancel');
      this.ok = false;
      this.pb = false;
      this.nommodel="";
      this.prenommodel="";
      this.emailRmodel="";
      this.messagemodel="";
    },

    confirmpb() {
      console.log('confirmpb');
      this.pb = false;
    },

    confirmok() {
      console.log('confirmok');
      this.ok = false;
      this.nommodel="";
      this.prenommodel="";
      this.emailRmodel="";
      this.messagemodel="";
    },
  }
}
</script>

<style scoped>
textarea{
  resize : both;
  min-width : 1000px;
  min-height : 100px;
  border: 1px solid;
  border-radius: 5px;
}
div{
  text-align: left;
  font-size: 18px;
}
input {
  border: 1px solid;
  border-radius: 5px; 
}
#Envoyer{
 font-size: 22px;
}


/*--------------------------------------------------------------------------------------------*/
*,
::before,
::after {
  box-sizing: border-box; 
  border-width: 0; 
  border-style: solid; 
  border-color: #e5e7eb; 
}

button {
  cursor: pointer;
}


.btn {
  background-color: rgba(37, 99, 235);
  border-radius: 0.75rem;
  font-weight: 500;
  margin-right: 1rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1rem;
  padding-right: 1rem;
  color: rgba(255, 255, 255);
}

.btn:hover {
  background-color: rgba(30, 64, 175, 0.8);
}

.btn:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.overlay {
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  width: 100%;
  z-index: 10;
}

.dialog {
  background-color: rgba(255, 255, 255);
  border-radius: 0.75rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2.5rem;
  max-width: 100%;
  width: 24rem;
}

.dialog__content {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: rgba(107, 114, 128);
}


.dialog__description{
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-bottom: 1rem;
  --tw-text-opacity: 1;
  color: rgba(107, 114, 128);
}

.dialog__footer {
  display: flex;
  justify-content: flex-end;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.dialog__cancel {
  border-radius: 0.75rem;
  font-weight: 500;
  margin-right: 1rem;
}

.dialog__cancel:focus{
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.dialog__cancel{
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

.dialog__cancel:focus{
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  --tw-ring-opacity: 1;
  --tw-ring-color: rgba(75, 85, 99, var(--tw-ring-opacity));
  --tw-ring-opacity: 0.5;
}
.dialog__confirm {
  background-color: rgba(254, 226, 226);
  border-radius: 0.75rem;
  font-weight: 500;
  margin-right: 1rem;
}

.dialog__confirm:focus{
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.dialog__confirm{
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

.dialog__confirm{
  color: rgba(220, 38, 38);
}

.dialog__confirm:hover {
  background-color: rgba(252, 165, 165);
  
  color: rgba(153, 27, 27);
}



</style>