<template>
  <!-- NAVBAR -->
  <header class="header">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a
            class="navbar-item has-text-white is-size-2 has-text-weight-bold"
            href="#"
          >
            {{ navLogo }}
          </a>
          <span
            role="button"
            tabindex="0"
            class="navbar-burger burger has-text-white"
            data-target="navbar-menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbar-menu" class="navbar-menu">
          <div class="navbar-end">
            <!-- Loop through the navigation items -->
            <a
              v-for="menu in navMenu"
              class="navbar-item nav-home"
              href="#"
              :key="menu.item"
            >
              {{ menu.item }}
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <!-- NAVBAR END -->
</template>

<script>
export default {
  name: "exchangeNavbar",
  data() {
    return {
      navLogo: "Exchangario",
      navMenu: [
        { item: "Home" },
        { item: "About" },
        { item: "Faq" },
        { item: "Login" },
        { item: "Register" },
      ],
    };
  },
};
</script>

<style></style>
