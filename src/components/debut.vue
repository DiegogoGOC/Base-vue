<template>
    <header>
        <a id="remonte" href="#"><img src="../img/rmt.png" alt=""></a>
        <img id="band" src="../img/bandrole.png" alt="">
        <nav>
            <router-link to="/"  title="Accueil">
                <img src="../img/qui2.png" alt="">
            </router-link>
            <router-link to="/qui"  title="QUI suis-je ?">
                <img src="../img/qui2.png" alt="">
            </router-link>
            <router-link to="/projet"  title="projet">
                <img src="../img/projet2.png" alt="">
            </router-link>
            <!-- exemple d'ajout du lien vers la page contact dans la navbar -->
            <router-link to="/contact" title="contact">
                <img src="../img/appel-telephonique.png" alt="">
            </router-link>
        </nav>
    <hr/>
  </header>
</template>

<style>
body{
    background-color: #5699a0;
    width: 1000px;
    margin:auto;
    text-align: center;
    color: white;
    font-family:Roboto, light ;
    display: flexbox;
    flex-direction: column;
}
#remonte img{
    width: 60px;
}
#band{
    width: 1000px;
    height: 200px;
}
nav img {
    width: 60px;
}
#remonte{
    position: fixed;
    left: 1350px;
}
nav{
    display: flex;
    justify-content: space-between;
}
</style>