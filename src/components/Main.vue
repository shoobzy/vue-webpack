<template>
  <div>
    <router-view></router-view>
    <p>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </p>
  </div>
</template>
<script>
  export default {
    name: "Main"
  };
</script>
<style>
body {
  font-family: "Roboto", sans-serif;
}
p {
  text-align: center;
}
</style>
