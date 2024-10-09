import Request from '@/utils/http';

export const GetGoods = (params: any): Promise<any> => {
  return Request.get('/api/goods-center/goods/getGoods', params);
};
export const getWord = (params: any): Promise<any> => {
  return Request.get('/kuleu/xjj', params);
};
// GET https://api.pexels.com/v1/search?query=cat&page=2&per_page=50
// 搜索图片
export const getSearchPhotos = (params: any): Promise<any> => {
  return Request.get('/pexelsPicAndVideo/v1/search', params);
};
// 精选图片
export const getSelectedPhotos = (params: any): Promise<any> => {
  return Request.get('/pexelsPicAndVideo/v1/curated', params);
};
// 获取图片详情
export const getPhotoDetail = (params: any): Promise<any> => {
  return Request.get('/pexelsPicAndVideo/v1/photos/' + params, {});
};
// 查询视频
export const getVideo = (params: any): Promise<any> => {
  return Request.get('/pexelsPicAndVideo/videos/search', params);
};
// 精选视频
export const getSelectedVideo = (params: any): Promise<any> => {
  return Request.get('/pexelsPicAndVideo/videos/popular', params);
};
// 获取视频详情
export const getVideoDetail = (params: any): Promise<any> => {
  return Request.get('/pexelsPicAndVideo/videos/videos/' + params, {});
};