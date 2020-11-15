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





























==达到消除所有重复的代码目的==