
// 抽象类别状态栏数据
 const NUMBERS = new Map([
  [0,0],
  [1,5],
  [2,10],
  [3,10],
  [4,15],
  [5,100],
])
export const statMixin = {
  watch: {
    tabIndex(e) {
      //监听index来滑动导航栏 
      let result = NUMBERS.get(e);
        this.scroll = this.scrollwidth * (result / 100);
    },
  },
  methods: {
    // 上拉加载
    loadmore (index) {
      if (index) {
        var index = index;
      }
      if (!index && !this.loadtext) {
        var index = this.tabIndex;
      }
      if (!this.loadtext) {
        let LIST = this.newsList;
        if (LIST[index].loadtext != '上拉加载更多') {
          return;
        }
        // 修改状态
        LIST[index].loadtext = '加载中...';
        // 获取数据
        setTimeout (() => {
          // 获取数据完成
          LIST[index].list.push (this.obj);
          LIST[index].loadtext = '上拉加载更多';
        }, 1000);
      }
      if (this.loadtext) {
        if (this.loadtext != '上拉加载更多') {
          return;
        }
        this.loadtext = '加载中...';
        setTimeout (() => {
          // 获取数据完成
          this.list.push (this.obj);
          this.loadtext = '上拉加载更多';
        }, 1000);
      }
    },
  },
  // 页面上拉触底事件的处理函数
  onReachBottom () {
    // 上拉加载
    this.loadmore ();
  },
  onLoad () {
    // 计算并设置主要内容区域高度
    uni.getSystemInfo ({
      success: res => {
        let height = res.windowHeight - uni.upx2px (100);
        this.swiperHeight = height;
      },
    });
  },
};

/**
 * TODO:需要注意的一点就是obj和newsList的统一
 * **/
