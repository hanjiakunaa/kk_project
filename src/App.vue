<script setup lang="ts">
  import { useAppStore } from '@/store/modules/app';

  const appStore = useAppStore();
</script>

<template>
  <el-config-provider :locale="appStore.getLocal" :size="appStore.size">
    <router-view v-slot="{ Component }">
      <transition name="el-fade-in-linear" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </el-config-provider>
</template>
