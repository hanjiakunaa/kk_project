<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { useAppStore } from '@/store/modules/app';
  import { Local } from '@/utils/storage';
  const appStore = useAppStore();
  let checkFlag = ref(false);
  const onChangeCheck = (e: any) => {
    appStore.setTheme(e.target.checked ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', appStore.theme);
  };
  onMounted(() => {
    const appStorage = Local.get('app');
    if (appStorage && appStorage.theme) {
      checkFlag.value = appStorage.theme == 'dark' ? true : false;
      document.documentElement.setAttribute('data-theme', appStore.theme);
    }
  });
</script>
<template>
  <div class="switch-theme__container">
    <label class="switch">
      <input class="cb" type="checkbox" @change="onChangeCheck" v-model="checkFlag" />
      <span class="toggle">
        <span class="left">
          <h-icon name="bi-emoji-sunglasses" />
        </span>
        <span class="right">
          <h-icon name="bi-emoji-sunglasses-fill" />
        </span>
      </span>
    </label>
  </div>
</template>
<style scoped lang="scss">
  .switch {
    font-size: 13px;
    position: relative;
    display: inline-block;
    width: 4.1em;
    height: 2.5em;
    user-select: none;
    border-radius: 10px;
  }

  .switch .cb {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .toggle {
    position: absolute;
    cursor: pointer;
    width: 100%;
    height: 100%;
    background: var(--text-color);
    border-radius: 0.1em;
    transition: 0.4s;
    text-transform: uppercase;
    font-weight: 700;
    overflow: hidden;
    box-shadow:
      -0.3em 0 0 0 var(--text-color),
      -0.3em 0.3em 0 0 var(--text-color),
      0.3em 0 0 0 var(--text-color),
      0.3em 0.3em 0 0 var(--text-color),
      0 0.3em 0 0 var(--text-color);
  }

  .toggle > .left {
    position: absolute;
    display: flex;
    width: 50%;
    height: 88%;
    background-color: #f3f3f3;
    color: #373737;
    left: 0;
    bottom: 0;
    align-items: center;
    justify-content: center;
    transform-origin: right;
    transform: rotateX(10deg);
    transform-style: preserve-3d;
    transition: all 150ms;
  }

  .left::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgb(206, 206, 206);
    transform-origin: center left;
    transform: rotateY(90deg);
  }

  .left::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgb(112, 112, 112);
    transform-origin: center bottom;
    transform: rotateX(90deg);
  }

  .toggle > .right {
    position: absolute;
    display: flex;
    width: 50%;
    height: 88%;
    background-color: #f3f3f3;
    color: var(--text-color);
    right: 1px;
    bottom: 0;
    align-items: center;
    justify-content: center;
    transform-origin: left;
    transform: rotateX(10deg) rotateY(-45deg);
    transform-style: preserve-3d;
    transition: all 150ms;
  }

  .right::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgb(206, 206, 206);
    transform-origin: center right;
    transform: rotateY(-90deg);
  }

  .right::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgb(112, 112, 112);
    transform-origin: center bottom;
    transform: rotateX(90deg);
  }

  .switch input:checked + .toggle > .left {
    transform: rotateX(10deg) rotateY(45deg);
    color: rgb(206, 206, 206);
  }

  .switch input:checked + .toggle > .right {
    transform: rotateX(10deg) rotateY(0deg);
    color: #487bdb;
  }
</style>
