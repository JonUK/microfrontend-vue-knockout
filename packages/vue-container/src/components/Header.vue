<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark fixed-top">
    <router-link to="/" class="navbar-brand">Investigate</router-link>

    <div class="collapse navbar-collapse justify-content-between" id="navbar">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">Cases <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Requests</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Uploads</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Search</a>
        </li>
      </ul>
      <div>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Marketing</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
          </li>
        </ul>
      </div>
      <div>
        <span class="badge badge-success">container | Vue.js</span>
      </div>
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a href="#"
             class="nav-link dropdown-toggle"
             id="dropdown04"
             data-toggle="dropdown"
             aria-haspopup="true"
             aria-expanded="false">Jonathan Keeping</a>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown04">
            <a class="dropdown-item" href="#">Logout</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
