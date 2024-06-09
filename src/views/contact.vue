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
                    <input type="text" name="nom" id="nom" placeholder="">
                </div>
                <div>
                    <label for="prenom">Prenom :</label>
                    <input type="text"  name="prenom" id="prenom" placeholder="">
                </div>

                <div>
                    <label for="emailR">Repondre a l'adresse mail :</label>
                    <input type="text"  name="email" id="emailR" placeholder="">
                </div>
                

            </div>
            <div id="com">
                <label for="mail">Contenue du mail :</label>
                <br>
                <textarea id="txtCom" type="text" size="50" style="height:25px;" placeholder=""></textarea>
                <input id="Envoyer" type="submit" value="envoyer">
            </div>
            
        </form>
        <p hidden style="color: red;">"Veuillez renseigner tous les champs"</p>




    </main>
</template>

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
</style>

<script>

export default {
}

</script>