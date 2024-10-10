<script setup lang="ts">
  import LayoutHeader from './components/LayoutHeader.vue';
  // import LayoutFooter from './components/LayoutFooter.vue';
</script>
<template>
  <div class="common-layout">
    <LayoutHeader />
    <main class="common-layout__content">
      <router-view />
    </main>
    <!-- <LayoutFooter /> -->
  </div>
</template>
