# 糗事百科持续开发文档

任务分解，问题提出，建议解决方案和最终解决方案
-------------

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

问题二：animate.css特效库怎么使用
```
  <view class="common-list u-f animate__animated animate__fadeInUp">

```
