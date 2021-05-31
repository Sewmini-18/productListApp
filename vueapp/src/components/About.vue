<template>
  <div class="container mt-5">
    <h3>About Us</h3>
    <img
          src="../assets/brand.svg"
          alt=""
          width="30"
          height="24"
        />
        
    <ValidationProvider rules="min:3" v-slot="{ errors }">
      <input v-model="value" type="text" />
      <span>{{ errors[0] }}</span>
    </ValidationProvider>
  </div>
</template>

<script>
</script>