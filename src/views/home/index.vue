<script lang="ts" setup>
  import { useRouter } from 'vue-router';
  import {
    getSearchPhotos,
    getSelectedPhotos,
    getPhotoDetail,
    getVideo,
    getSelectedVideo,
    getVideoDetail,
  } from '@/api/test';
  const router = useRouter();
  const onClick = (path: string) => {
    router.push({ path });
  };
  // 获取图片
  const getPhotos = () => {
    getSearchPhotos({ query: '风景', page: 1, per_page: '20', locale: 'zh-CN' }).then((res) => {
      console.log('搜索图片', res);
    });
  };
  // 精选图片
  const getSelected = () => {
    getSelectedPhotos({ page: '1', per_page: '30' }).then((res) => {
      console.log('精选图片', res);
    });
  };
  // 图片详情
  const getDetail = () => {
    getPhotoDetail('620337').then((res) => {
      console.log('图片详情', res);
    });
  };
  // 查询视频
  const getVideoData = () => {
    getVideo({ query: '美女跳舞', page: 1, per_page: 20, locale: 'zh-CN' }).then((res) => {
      console.log('查询视频', res);
    });
  };
  // 精选视频
  const getPopularVideo = () => {
    getSelectedVideo({ page: '1', per_page: '30' }).then((res) => {
      console.log('精选视频', res);
    });
  };
  // 视频详情
  const getVideoDetailData = () => {
    getVideoDetail('1526909').then((res) => {
      console.log('视频详情', res);
    });
  };
  onMounted(() => {
    getPhotos();
    getSelected();
    getDetail();
    // 视频
    getVideoData();
    getPopularVideo();
    getVideoDetailData();
  });
</script>

<template>
  <div class="home">
    <ul>
      <li class="text-primary" @click="onClick('/')">首页</li>
      <li @click="onClick('mine')">我的</li>
    </ul>
    <div class="app-content flex-center">123</div>
    <img src="@/assets/1.jpg" alt="" />
    <div v-for="item in 100" :key="item">{{ item }}+想想干什么</div>
  </div>
</template>
<style lang="scss"></style>
