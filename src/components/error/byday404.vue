<template>
  <div class="error-container container-star">
    <div class="cloud"></div>
    <div class="cloud"></div>
    <div class="cloud"></div>
    <div class="cloud"></div>
    <div class="cloud"></div>
  </div>
  <div class="error-container container-bird">
    <div class="container-title">
      <div class="title">
        <div class="number">4</div>
        <div class="sun"></div>
        <div class="number">4</div>
      </div>
      <div class="subtitle">哎呀。看来你拐错弯了。</div>
      <div class="btn">
        <button @click="goHome" style="margin-right: 30px">返回首页</button>
        <button @click="goBack" style="margin-left: 20px">返回上一页</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router';
  const router = useRouter();

  const goHome = () => {
    router.push('/');
  };
  const goBack = () => {
    router.back();
  };
</script>

<style scoped lang="scss">
  .error-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .container-star {
    background: -webkit-linear-gradient(
      rgb(140, 198, 243),
      rgb(255, 255, 255) 60%,
      rgb(246, 255, 234)
    );
  }

  /*利用边框绘制云彩,一个圆形,两个长方形*/

  .cloud,
  .cloud::before,
  .cloud::after {
    position: absolute;
    width: 0;
    height: 0;
    border-radius: 100px;
    box-shadow: 0px 0px 2px 2px #fff;
  }

  .cloud {
    border: 50px solid #fff;
  }

  .cloud::before {
    content: '';
    border: 30px solid #fff;
    padding-left: 20px;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    top: -12px;
    left: -90px;
  }

  .cloud::after {
    content: '';
    border: 24px solid #fff;
    padding-left: 110px;
    top: -4px;
    left: -96px;
  }

  /*设置云彩大小,在天空中的位置,观察原图有三朵云大小基本一样,取奇数减少代码量*/

  .cloud:nth-child(odd) {
    -webkit-transform: scale(0.7);
    -moz-transform: scale(0.7);
    -ms-transform: scale(0.7);
    -o-transform: scale(0.7);
    transform: scale(0.7);
  }

  .cloud:nth-child(1) {
    top: 1%;
    left: 10%;
  }

  .cloud:nth-child(3) {
    top: 20vh;
    left: 45vw;
  }

  .cloud:nth-child(2) {
    top: 10vh;
    left: 10%;
    animation: moveClouds1 12s ease-out infinite;
  }

  .cloud:nth-child(4) {
    top: 15vh;
    left: 65vw;
    -webkit-transform: scale(0.5);
    -moz-transform: scale(0.5);
    -ms-transform: scale(0.5);
    -o-transform: scale(0.5);
    transform: scale(0.5);
  }

  .cloud:nth-child(5) {
    top: 3vh;
    right: 10%;
    animation: moveClouds2 12s ease-out infinite;
  }

  .container-star:after {
    background: radial-gradient(
      ellipse at center,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0) 40%,
      rgba(15, 10, 38, 0.2) 100%
    );
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
  }

  .container-title {
    width: 600px;
    height: 450px;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    position: absolute;
    color: white;
    line-height: 1;
    font-weight: 700;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
  }

  .title > * {
    display: inline-block;
    font-size: 200px;
  }

  .number {
    text-shadow: 20px 20px 20px rgba(0, 0, 0, 0.2);
    padding: 0 0.2em;
    font-family: 'Russo One', sans-serif;
  }

  .sun {
    width: 150px;

    height: 150px;

    border-radius: 50%;

    background: rgba(248, 227, 83, 1);
  }

  .sun::before {
    content: '';

    position: absolute;

    top: 34%;

    left: 50%;

    transform: translate(-50%, -50%);

    width: 130px;

    height: 130px;

    border-radius: 50%;

    background: #ffd21f;

    filter: blur(10px);

    z-index: 1;

    animation: inlineSun 5s ease infinite;
  }

  .sun::after {
    content: '';

    position: absolute;

    top: 34%;

    left: 50%;

    transform: translate(-50%, -50%);

    width: 180px;

    height: 180px;

    border-radius: 50%;

    background: #fcf17c;

    z-index: -1;

    box-shadow: 0 0 40px #ffd21f;

    animation: sun 5s ease-in infinite;
  }

  .subtitle {
    font-size: 25px;
    margin-top: 1.5em;
    font-family: 'Lato', sans-serif;
    color: #fcf17c;
  }

  button {
    font-size: 22px;
    margin-top: 1.5em;
    padding: 0.5em 1em;
    letter-spacing: 1px;
    font-family: 'Lato', sans-serif;
    color: #fcf17c;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    z-index: 999;
  }
  button:hover {
    color: #ffd21f;
  }

  @keyframes moveClouds1 {
    0% {
      left: 1%;
    }

    100% {
      left: 100%;
    }
  }

  @keyframes moveClouds2 {
    0% {
      right: 1%;
    }

    100% {
      right: 100%;
    }
  }

  @keyframes inlineSun {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0.5;

      width: 70px;

      height: 70px;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes sun {
    0% {
      box-shadow: 0 0 90px #ffd21f;
    }

    50% {
      box-shadow: 0 0 30px #ffd21f;
    }

    100% {
      box-shadow: 0 0 90px #ffd21f;
    }
  }

  @media screen and (max-width: 580px) {
    .container-404 {
      width: 100%;
    }

    .number {
      font-size: 100px;
    }

    .subtitle {
      font-size: 20px;
      padding: 0 1em;
    }

    .moon {
      width: 100px;
      height: 100px;
    }

    .face {
      -webkit-transform: scale(0.7);
      transform: scale(0.7);
    }
  }
</style>
