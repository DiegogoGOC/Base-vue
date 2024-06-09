<template>
  <main>
  <div>
      <div >
        <section id="portpholio2"> 
            <div>            
                <h1>MES projets/
                    experiance</h1>
            </div>
            <img src="../img/projet2.png" alt="">
        </section>
        <section id ="nav-bis-2">
            <div id="div1">
                <img src="../img/map-bis.png" alt="google map bis" title="google map bis" name ="google map bis">
                <br>
                <button @click="portpholio = true" class="btn">portpholio</button>
              
            </div>
            <div id="div2">
                <img src="../img/cv.png" alt="">
                <br>
                <button @click="cv = true" class="btn">curiculom vitae</button>
                
            </div>
            <div id="div3">
                <img src="../img/demineur.png" alt="">
                <br>
                <button @click="demineur = true" class="btn">demineur</button>
            </div>
        </section>
      </div>

      <modal :show="portpholio"
          :cancel="cancel"
          :confirm="confirmportpholio"
          title="portpholio"
          description="Langage : HTML, CSS" 
          date="09/06/2024"
          lien="https://github.com/DiegogoGOC/Base-vue"/>



      <modal :show="cv"
          :cancel="cancel"
          :confirm="confirmcv"
          title="cv"
          description="Langage : HTML, CSS" 
          date="09/05/2024"
          lien="https://github.com/DiegogoGOC/cv2"/> 
          
      <modal :show="demineur"
          :cancel="cancel"
          :confirm="confirmdemineur"
          title="demineur"
          description="Langage : Java, JavaFX" 
          date="01/12/2023"
          lien="https://github.com/DiegogoGOC/demineur" />

  </div>
</main>
</template>

<script>
import modal from "@/components/modal.vue";

export default {
  name: 'App',
  components: { modal },
  data() {
    return {
      portpholio: false,
      cv: false,
      demineur: false
    }
  },

  methods: {
    cancel() {
      console.log('cancel');
      this.portpholio = false;
      this.cv = false;
      this.demineur = false;
    },

    confirmportpholio() {
      console.log('confirmportpholio');
      this.portpholio = false;
    },

    confirmcv() {
      console.log('confirmcv');
      this.cv = false;
    },

    confirmdemineur() {
      console.log('confirmdemineur');
      this.demineur = false;
    }

  }
}
</script>

<style>
#portpholio2{
    display: flex;
    justify-content: space-around;
}

#portpholio2 img {
    width: 100px;
}
h1{
    font-size: 300%;
}
img {
    width: 200px;
}
#div1 {
    margin-left: -500px;
}
#div3 {
    margin-left: -500px;
}
#div2 {
    margin-right: -500px;
}


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

.dialog__title {
  font-weight: 500;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: rgba(17, 24, 39);
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
