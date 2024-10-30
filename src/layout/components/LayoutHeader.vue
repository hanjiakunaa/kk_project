<script setup lang="ts">
  import switchTheme from '@/components/switchTheme/index.vue';
</script>
<template>
  <div class="navbar">
    <div class="navbar-wrapper">
      <div class="header-logo">
        <h-icon name="pi-gastly" :scale="2.5" :hover="true" animation="ring" speed="slow" />
      </div>
      <div class="header-menu">我是菜单</div>
      <div class="header-login">
        <div class="header-lock">
          <h-icon name="ri-lock-fill" fill="red" :scale="1.8" animation="pulse" />
        </div>
        <switchTheme />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .navbar {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    z-index: $navBar-z-index;
    padding-top: 0;
  }
  .navbar-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: $header-height;
    padding: 0 48px;
    background-image: radial-gradient(transparent 1px, var(--bg-color) 1px);
    background-size: 4px 4px;
    backdrop-filter: saturate(50%) blur(4px);
    -webkit-backdrop-filter: saturate(50%) blur(4px);
    border-bottom: 1px solid var(--border-color);
    top: 0;
  }
  .header-logo {
    margin-right: 30px;
  }
  .header-menu {
    font-size: 20px;
    flex: 1;
  }
  .header-login {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 42px;
    margin-left: 20px;
  }
</style>
