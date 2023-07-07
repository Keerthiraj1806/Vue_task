<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="main" style="width:20%">
      <!--img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /-->

      <div>
        <!--HelloWorld msg="You did it!" /-->
        <nav class="sidenav">
          <RouterLink class= 'route' to="/">Home</RouterLink><br>
          <RouterLink class= 'route' to="/about">About</RouterLink><br>
          <RouterLink class= 'route' to="/table">Table</RouterLink><br>
          <RouterLink class= 'route' to="/age">Age</RouterLink><br>
          <RouterLink class='route' to="/writable">Writable</RouterLink>
        </nav>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
        /* Style for the container */
        .main {
            display: flex;
            height: 100vh;
        }

        /* Style for the sidebar */
        .sidenav {
                height: 100%;
                width: 160px;
                position: fixed;
                z-index: 1;
                top: 0;
                left: 0;
                background-color: #111;
                overflow-x: hidden;
                padding-top: 20px;
                font-size: larger;
        }

        /* Style for the sidebar links */
        .route{
            font-size: large;
            display: block;
            color: #ccc;
            text-decoration: none;
            margin: 2px 5px;
            border: 2px gray solid;
        }
        .route:hover {
            color: #f1f1f1;
        }

        /* Style for the active link in the sidebar */
        .route.active {
            color: #fff;
            font-weight: bold;
        }
</style>
