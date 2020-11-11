# 糗事百科持续开发文档

## 任务分解，问题提出，建议解决方案和最终解决方案

1：重新搭建动态页静态页面

问题一：根据判断条件动态添加类

```
<view class="u-f nickName" >
    {{item.username}}
    <view class="icon iconfont u-f-asb" :class="[item.sex?'icon-nv':'icon-nan']">
    {{item.age}}
    </view>
</view>
```

问题二：animate.css 特效库怎么使用

```
  <view class="common-list u-f animate__animated animate__fadeInUp">

```

问题三：关注成功提示

```
uni.showToast({
		  	title: '关注成功'
		  });

```

问题三：动态页点击关注按钮报错

```
 TypeError: e.apply is not a function
20:25:33.014 [Vue warn]: Error in v-on handler: "TypeError: e.apply is not a function"
20:25:33.076 found in
20:25:33.139 ---> <CommonList> at components/common/common-list.vue:1
20:25:33.170 　　　　at pages/news/news.vue:1
20:25:33.202 TypeError: e.apply is not a function
```

建议解决方案

1：参考比对首页关注按钮代码以及视频

<img src="C:\Users\xiaohui\AppData\Roaming\Typora\typora-user-images\image-20201109100250191.png" alt="image-20201109100250191" style="zoom:67%;" />

问题四：微信开发者工具运行报错

<img src="C:\Users\xiaohui\AppData\Roaming\Typora\typora-user-images\image-20201109103709896.png" alt="image-20201109103709896" style="zoom:80%;" />

百度解决方案

[微信开方者社区](https://developers.weixin.qq.com/community/develop/doc/00066e66324fd8a53e9acba165b400)

问题五：父组件全局传递数组对象到子组件，导致子组件因为代码设计原因无法顺利更新