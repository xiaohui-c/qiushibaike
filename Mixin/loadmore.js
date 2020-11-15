export const statMixin = {
  methods: {
    // 上拉加载
    loadmore(index) {
      if (index) {
        var index = index;
      }
      if (!index) {
        var index = this.tabIndex;
      }
      let LIST=this.newsList
      if (LIST[index].loadtext != '上拉加载更多') {
        return;
      }
      // 修改状态
      LIST[index].loadtext = '加载中...';
      // 获取数据
      setTimeout(() => {
        // 获取数据完成
        LIST[index].list.push(this.obj);
        LIST[index].loadtext = '上拉加载更多';
      }, 1000);
    },
  },
  onReachBottom() {
    // 上拉加载
    this.loadmore();
  },
  onLoad() {
    // 计算并设置主要内容区域高度
    uni.getSystemInfo({
      success: (res) => {
        let height = res.windowHeight - uni.upx2px(100);
        this.swiperHeight = height;
      },
    });
  },
};

/**
 * TODO:需要注意的一点就是obj和newsList的统一
 * **/
