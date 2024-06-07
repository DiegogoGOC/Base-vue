<template>
    <div>
        <div class="modal-container">
        
             <div class="overlay modal-trigger"></div>
                        
            <div class="modal">
                <button class="close-modal modal-trigger">X</button>
                    <h1>google map bis </h1>
                    <p>LanguAge: scala <br/>(travaille de groupe)</p>
                </div>
        </div>
                        
        <button class="modal-btn modal-trigger">Open</button>
    </div>
</template>

<style>


.modal-btn{
    padding: 10px 14px;
    font-size: 18px;
    margin: 10px auto;
    display: block;
    min-width: 150px;
    cursor: pointer;
  }
  
  .modal-container {
    visibility: hidden;
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    color:black;
  }
  
  .modal-container.active {
    visibility: visible;
    
  }

  .modal {
    width: 95%;
    max-width: 500px;
    min-width: 300px;
    padding: 30px;
    background: #fff;
    border-radius: 5px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  
  }
  
  .close-modal {
    padding: 8px 10px;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    background: #ff365e ;
    color: #fff;
  }
</style>

<script>
const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");

modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal))


function toggleModal(){
    modalContainer.classList.toggle("active")
}
</script>