<template>
  <div class="notFound">
    <byday404 v-if="isDayTime" />
    <night404 v-else />
  </div>
</template>
<script lang="ts" setup>
  import byday404 from '@/components/error/byday404.vue';
  import night404 from '@/components/error/night404.vue';

  const timer = ref<any>(null);
  const currentTime = ref(new Date());

  // 判断当前是否白天还是晚上
  const isDayTime = computed(() => {
    const hour = currentTime.value.getHours();
    return hour >= 6 && hour < 18;
  });

  timer.value = setInterval(() => {
    currentTime.value = new Date();
  }, 60000);

  // 组件
  onUnmounted(() => {
    clearInterval(timer.value);
  });
</script>

<style lang="scss" scoped>
  .notFound {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
</style>
