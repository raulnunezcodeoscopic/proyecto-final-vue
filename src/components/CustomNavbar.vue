<template>
    <header>
        <div class='logo'>
            <img src="../assets/logo.png" />
        </div>
        <nav>
            <div>
                <router-link to="/">Inicio</router-link> |
                <router-link to="/contact">Contacto</router-link> |
                <router-link to="/author">Autor</router-link>
            </div>
        </nav>
    </header>
</template>
<style scoped>
    
    header {
        display: flex;
        justify-content: space-between;
    }
    
    .logo img {
        width: 60px;
        padding: 10px;
        object-position: center;
        object-fit: cover;
        margin-top: 10px;
    }

</style>