<template>
  <nav class="navbar has-shadow">
    <div class="navbar-brand">
      <router-link to="/" exact>
        <img src="http://bit.ly/vue-img"
          alt="Vue SPA" />
      </router-link>
        <div class='tabs'>
          <ul>
              <router-link to="/category/front-end" tag="li">
                <a href="#">Front-end</a>
              </router-link>
              <router-link :to="{ name: 'category', params: {id: 'mobile'}}" tag="li">
                <a href="#">Mobile</a>
              </router-link>
              <router-link to="/login" tag="li">
                <a href="#">Login</a>
              </router-link>
          </ul>
        </div>
    </div>
  </nav>
</template>
