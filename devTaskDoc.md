# 糗事百科持续开发文档

任务分解，问题提出，建议解决方案和最终解决方案



#### 1：重新搭建动态页静态页面



##### 问题一：根据判断条件动态添加类

```
<view class="u-f nickName" >
    {{item.username}}
    <view class="icon iconfont u-f-asb" :class="[item.sex?'icon-nv':'icon-nan']">
    {{item.age}}
    </view>
</view>
```

==问号前面的属性千万不要加引号==

##### 问题二：animate.css 特效库怎么使用

```
  <view class="common-list u-f animate__animated animate__fadeInUp">

```



##### 问题三：关注成功提示

```
uni.showToast({
		  	title: '关注成功'
		  });

```





##### 问题三：动态页点击关注按钮报错

```
 TypeError: e.apply is not a function
20:25:33.014 [Vue warn]: Error in v-on handler: "TypeError: e.apply is not a function"
20:25:33.076 found in
20:25:33.139 ---> <CommonList> at components/common/common-list.vue:1
20:25:33.170 　　　　at pages/news/news.vue:1
20:25:33.202 TypeError: e.apply is not a function
```

建议解决方案

参考比对首页关注按钮代码以及视频

<img src="https://i.loli.net/2020/11/11/wepYdaHAiuUJz4L.png" alt="image-20201109100250191" style="zoom:67%;" />



最终解决方案：methods漏了s,代码语句粗心错误



##### 问题四：微信开发者工具运行报错

<img src="C:\Users\xiaohui\AppData\Roaming\Typora\typora-user-images\image-20201109103709896.png" alt="image-20201109103709896" style="zoom:80%;" />

百度解决方案

[微信开方者社区](https://developers.weixin.qq.com/community/develop/doc/00066e66324fd8a53e9acba165b400)

意思就是要使用APPID



##### 问题五：父组件全局传递数组对象到子组件，导致子组件因为代码设计原因无法顺利更新

解决方案：保持耐心，细心，冷静进行==代码业务逻辑思辨==



##### 问题六：话题页话题详情以及小纸条顶部栏设计出现技术问题

1:总结 传统顶部栏内容设计以及自定义顶部栏内容设计方法

<img src="https://i.loli.net/2020/11/11/C6hGMsafBczlWr7.png" alt="image-20201111212159243" style="zoom:80%;" />

效果：

<img src="https://i.loli.net/2020/11/11/IjZasMCOYDXiQRH.png" alt="image-20201111212428916" style="zoom:80%;" />





<img src="https://i.loli.net/2020/11/11/upBh3dnitrycGX9.png" alt="image-20201111212542530" style="zoom:67%;" />

效果：
<img src="https://i.loli.net/2020/11/11/iRzFd82YJAMEBvT.png" alt="image-20201111212649503" style="zoom:80%;" />



导航栏定义的方式有两种，第一种是在pages.json中配置，并且结合官方文档[uni-app](https://uniapp.dcloud.io/collocation/pages?id=app-plus),第二种是导入hello-uniapp中定义的自定义导航栏

导航栏点击事件根据是否为自定义导航栏有所不同，如果是在pages.json中配置的导航栏，使用`onNavigationBarButtonTap`来监听导航栏图标的点击事件，否则直接绑定`@tap`事件即可





##### 问题七：顶部栏的样式调整问题，主要是在H5，微信小程序上==顶部栏显示不理想甚至不显示==

在`pages.json`中配置`navigationBarTextStyle`

![image-20201113163135174](https://i.loli.net/2020/11/13/neUvfPVO2tDmk7d.png)



![image-20201113163213199](https://i.loli.net/2020/11/13/jZbUJxP64r9dB8g.png)





尝试把全部顶部栏修改为自定义



3：话题页上拉加载，下拉刷新功能

==提出问题-->给出建议解决方案-->最终解决方案==

==对于一些api的使用还不怎么熟悉==

==达不到预期效果就一定是某一个地方出现了问题==

4：动态滑动导航栏该怎么实现？

<img src="https://i.loli.net/2020/11/12/M3kLiBqDba6TQ2y.png" alt="image-20201112093355443" style="zoom:80%;" />





##### 问题八：怎么让封装的公用动态滑动导航栏可以适应多页面场景

a:订阅方传递padding为true告诉发布方需要使用padding来维持样式



##### 问题九：怎么样更高效的封装公用组件以及方法

组件封装思想：对于要在多个页面使用的代码进行组件封装，包括`template`以及`method`

例子：滑动导航栏组件，下拉刷新方法2，加载更多方法



##### 问题十：动态页关注（已解决）和话题区域下拉刷新功能（不用添加下拉刷新功能）失效

达不到预期效果一定就是某一个地方有问题，冷静下来进行业务逻辑思辨



##### 问题十一：动态详情页下拉刷新，上拉功能

已经解决

##### 问题十二：顶部栏样式问题，尤其是自定义顶部栏

找到自定义导航栏的组件，并修改样式初步解决样式问题



#### 2：整理页面滑动，上拉加载等实现逻辑步骤

#### 3：封装method中的公用属性和方法

建议解决方案：使用mixin来解决下拉加载以及对应声明周期函数



##### 问题十三：抽离出来的方法里面要使用的数据在一些页面上有所不同，导致下拉加载公用js文件受到使用阻碍

建议解决方案：

第一步：把公用js文件中的数据在目标页面定义

第二步：分析每个页面的列表数据，分析特点类型

主页数据：

```
 newsList: [
        {
          loadtext: "上拉加载更多",
          list: [ ],
        },
        { loadtext: "上拉加载更多", list: [] },
        { loadtext: "上拉加载更多", list: [] },
        { loadtext: "上拉加载更多", list: [] },
        { loadtext: "上拉加载更多", list: [] },
        { loadtext: "上拉加载更多", list: [] },
      ]
```

动态关注页

```
attention:
        {
          loadtext: "上拉加载更多",
          list: []
        }
```

热门分类页

```
 newsList: [
        {
          loadtext: "上拉加载更多",
          nearlyObj: [],
        },
        { loadtext: "上拉加载更多", nearlyObj: [] },
        { loadtext: "上拉加载更多", nearlyObj: [] },
        { loadtext: "上拉加载更多", nearlyObj: [] },
        { loadtext: "上拉加载更多", nearlyObj: [] },
        { loadtext: "上拉加载更多", nearlyObj: [] },
      ]
```

话题详情页

```
  newsList: [
        {
          loadtext: "上拉加载更多",
          list: [],
        },
        {
          loadtext: "上拉加载更多",
          list: [],
        },
      ]
```

如何定制公用下拉加载插件达到适用于多种数据目的

当接收的数据类型是Object,或者是Array,如何同时兼容





##### 问题十四：怎样抽象出设置导航页的代码，使得通过精简的代码实现页面跳转



1：聊天列表详情页动态类别导航栏数字

2：小纸条页下拉加载(修改数据格式即可)





==页面的计算逻辑是一个重点和难点==





##### 问题十五：根据页面高度计算页面滑动实施步骤还没有理清



##### 问题十六：内容详情页图片应该为一个数组展示，并且提供图片的具体全屏展示



##### 问题十七：对于底部输入聊天框组件的封装无法实现，对于输入框父子组件通信的技术还处于缺失状态

建议解决方案：

暂时先采用CV大法





阶段计划：

1：首页内容详情页评论功能

2：设置部分的每一个选项的内容（完成）

* 资料编辑不能简化操作，需要一行一行
* 声明公共数组，通过不同类型的点击替换函数里面数组
* 直接在文字上面添加输入框



3：解决类型滑动导航栏无法跟随页面滑动问题（完成）

4：解决聊天和评论时间格式问题（完成）

**4：解决在pages.json中配置的顶部导航栏无法在微信小程序和H5页面成功显示问题**



建议解决方案：把全部在pages.json中配置的顶部栏模仿动态页自定义导航栏一个页面一个页面全部替换

待修改的页面：

1：首页(完成)    2：搜索页 (完成)    3：首页内容详情页 (完成)

4：动态页内容详情页(完成)

问题：怎么让自定义导航栏变透明

  5：小纸条首页(完成)  6：小纸条聊天列表 (完成) 

7：小纸条聊天页(完成)   8：个人首页(完成)

实现步骤：修改pages.json中titleView为false  ---->  CV顶部栏组件并修改到对应内容图标













5：解决项目选题冲突情况（更改主题，比如主体颜色，对一些功能进行CURD）

6：开始搭建后台环境进行后端开发



监听pages.json中定义的导航栏图标的点击事件

```js
// 监听原生标题导航按钮点击事件
  onNavigationBarButtonTap(e) {
    switch (e.index) {
      case 1:
        // 打开发布页面
        uni.navigateTo({
          url: "../add-input/add-input",
        });
        break;
    }
  }

 // 监听搜索框点击事件
  onNavigationBarSearchInputClicked() {
    uni.navigateTo({
      url: "../search/search",
    });
  }
```



##### 问题18：如何封装自定义导航栏公用组件

每一个自定义导航栏都要重复设置图标大小



##### 问题19：优化if-else代码

原来

```js
 if (id == 6) {
        uni.navigateTo({
          url: "../about/about",
        });
      }
      if (id == 5) {
        uni.navigateTo({
          url: "../feedBack/feedBack",
        });
      }
      if (id == 2) {
        uni.navigateTo({
          url: "../editmeans/editmeans",
        });
      }
      if (id == 1) {
        uni.navigateTo({
          url: "../emailbind/emailbind",
        });
      }
      if (id == 0) {
        uni.navigateTo({
          url: "../changepassword/changepassword",
        });
    }
```



优化一

```js
//抽象出数据对象方法
const ACTIONS={
  '0':'changepassword',
  '1':'emailbind',
  '2':"editmeans",
  '5':"feedBack",
  '6':"about"
}

//函数调用
config(id) {
      let ids = id + "";
      let action = ACTIONS[ids];

      uni.navigateTo({
      url: `../${action}/${action}`,
  });
 }
```





优化二

```js
const ACTIONS = new Map([
  [0, "changepassword"],
  [1, "emailbind"],
  [2, "editmeans"],
  [5, "feedBack"],
  [6, "about"],
]);

config(id) {
      let action = ACTIONS.get(id);

      uni.navigateTo({
        url: `../${action}/${action}`,
      });
}
```



原来

```js
 // 顶踩
    control(type, index) {
      switch (type) {
        case "ding":
          // 如果已经顶过了就不能再顶，直接return
          if (this.indexlist[index].infonum.index === 1) {
            return;
          }
          // 如果此时的状态是踩，那么点击顶就会让踩减1
          if (this.indexlist[index].infonum.index === 2) {
            this.indexlist[index].infonum.cai--;
          }
          // 如果顶和踩都没有操作，或者已经操作了踩，就让顶加一
          this.indexlist[index].infonum.dingnum++;
          // 并且修改状态为顶
          this.indexlist[index].infonum.index = 1;
          break;
        case "cai":
          if (this.indexlist[index].infonum.index === 2) {
            return;
          }

          if (this.indexlist[index].infonum.index === 1) {
            this.indexlist[index].infonum.dingnum--;
          }
          this.indexlist[index].infonum.cai++;
          this.indexlist[index].infonum.index = 2;
          break;
      }
}
```



优化一

```js
control(type, index) {
      const CONSTANT = this.indexlist[index].infonum;
      switch (type) {
        case "ding":
          // 如果已经顶过了就不能再顶，直接return
          if (CONSTANT.index === 1) return;

          // 如果此时的状态是踩，那么点击顶就会让踩减1
          if (CONSTANT.index === 2) CONSTANT.cai--;

          // 如果顶和踩都没有操作，或者已经操作了踩，就让顶加一
          CONSTANT.dingnum++;
          // 并且修改状态为顶
          CONSTANT.index = 1;
          break;
        case "cai":
          if (CONSTANT.index === 2) return;

          if (CONSTANT.index === 1) CONSTANT.dingnum--;

          CONSTANT.cai++;
          CONSTANT.index = 2;
          break;
      }
    }
```

因为涉及到后台数据的关系，所以暂时不要过度优化

优化二

```js
   
```



##### 问题20：优化每个页面的组件导入







==达到消除所有重复的代码目的==