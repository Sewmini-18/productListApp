<template name="navbar">
  <nav class="navbar navbar-expand-lg navbar-light bg-warning">
    <div class="container-fluid" style="font-weight: bold">
      <a class="navbar-brand mb-2 ml-5">
        <img
          src="../assets/brand.svg"
          alt=""
          width="30"
          height="24"
        />
      </a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/home">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="about">About</router-link>
          </li>
          <li class="nav-item">
              <router-link class="nav-link" to="list">Product List</router-link>
          </li>
          <li class="nav-item">
              <router-link class="nav-link" to="add">Add Product</router-link>
          </li>
         
        </ul>
        <ul class="nav navbar-nav navbar-right mr-5">
             <li class="nav-item">
                 <router-link class="nav-link" to="contact">Contact &nbsp;&nbsp;</router-link>
          </li>
        <button class="btn btn-danger" id="grid">Sign Out</button>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import imageNav from '../assets/logo.png'
export default {
    }
</script>