<template>
  <view>
    <view class="info-box">
      <!-- 每一个item -->
      <view class="info-list-item u-f-ajb">
        <view class="info-left">头像</view>
        <view class="right">
          <view class="info-detail u-f-asb" @tap="changeHeader">
            <image :src="demo.userpic.nineteen" mode="aspectFill" lazy-load></image>
            <view class="icon iconfont icon-bianji1"></view>
          </view>
        </view>
      </view>
      <view class="info-list-item u-f-ajb">
        <view class="info-left">昵称</view>
        <view class="right">
          <view class="info-detail u-f-asb">
            <input type="text" v-model="username" style="font-size: 13px" />
            <view class="icon iconfont icon-bianji1"></view>
          </view>
        </view>
      </view>
      <view class="info-list-item u-f-ajb">
        <view class="info-left">性别</view>
        <view class="right">
          <view class="info-detail u-f-asb" @tap="changeValue('sex')">
            <text>{{ sex }}</text>
            <view class="icon iconfont icon-bianji1"></view>
          </view>
        </view>
      </view>
      <view class="info-list-item u-f-ajb">
        <view class="info-left">生日</view>
        <view class="right">
          <picker
            mode="date"
            :value="date"
            :start="startDate"
            :end="endDate"
            @change="bindDateChange"
          >
            <view class="info-detail u-f-asb">
              <text>{{ date }}</text>
              <view class="icon iconfont icon-bianji1"></view>
            </view>
          </picker>
        </view>
      </view>
      <view class="info-list-item u-f-ajb">
        <view class="info-left">情感</view>
        <view class="right">
          <view class="info-detail u-f-asb" @tap="changeValue('marriage')">
            <text>{{ marriage }}</text>
            <view class="icon iconfont icon-bianji1"></view>
          </view>
        </view>
      </view>
      <view class="info-list-item u-f-ajb">
        <view class="info-left">职业</view>
        <view class="right">
          <view class="info-detail u-f-asb" @tap="changeValue('job')">
            <text>{{ job }}</text>
            <view class="icon iconfont icon-bianji1"></view>
          </view>
        </view>
      </view>
      <view class="info-list-item u-f-ajb">
        <view class="info-left">家乡</view>
        <view class="right">
          <view class="info-detail u-f-asb" @tap="showMulLinkageThreePicker">
            <text>{{ pickerText }}</text>
            <view class="icon iconfont icon-bianji1"></view>
          </view>
        </view>
      </view>
    </view>
    <button>完成</button>
    <mpvue-city-picker
      themeColor="#007AFF"
      ref="mpvueCityPicker"
      :pickerValueDefault="cityPickerValueDefault"
      @onConfirm="onConfirm"
    ></mpvue-city-picker>
  </view>
</template>

<script>
import mpvueCityPicker from "../../components/mpvue-citypicker/mpvueCityPicker.vue";
import { mapState } from "vuex";
var SEX = ["不限", "男", "女"];
var MARRIAGE = ["未婚", "已婚"];
var JOB = ["前端开发工程师", "教师", "公务员"];
export default {
  components: {
    mpvueCityPicker,
  },
  data() {
    const currentDate = this.getDate({
      format: true,
    });
    return {
      defaultHeaderImg:'',
      username: "哈哈哈",
      sex: "不限",
      marriage: "未婚",
      job: "IT",
      date: currentDate,
      cityPickerValueDefault: [0, 0, 1],
      pickerText: "广州市白云区",
    };
  },
  onBackPress() {
    if (this.$refs.mpvueCityPicker.showPicker) {
      this.$refs.mpvueCityPicker.pickerCancel();
      return true;
    }
  },
  onUnload() {
    if (this.$refs.mpvueCityPicker.showPicker) {
      this.$refs.mpvueCityPicker.pickerCancel();
    }
  },
  computed: {
    startDate() {
      return this.getDate("start");
    },
    endDate() {
      return this.getDate("end");
    },

    ...mapState(["demo"]),
  },
  methods: {
    // 头像设置
    changeHeader() {
      uni.chooseImage({
        count: 1, //默认9
        sizeType: ["compressed"], //可以指定是原图还是压缩图，默认二者都有
        // sourceType: ['album'], //从相册选择
        success: (res) => {
          console.log(JSON.stringify(res.tempFilePaths));
          this.list[0].img = res.tempFilePaths[0];
        },
      });
    },
    // 单列选择
    changeValue(value) {
      let arr = [];
      switch (value) {
        case "sex":
          arr = SEX;
          break;
        case "marriage":
          arr = MARRIAGE;
          break;
        case "job":
          arr = JOB;
          break;
      }
      uni.showActionSheet({
        itemList: arr,
        success: (res) => {
          switch (value) {
            case "sex":
              this.sex = arr[res.tapIndex];
              break;
            case "marriage":
              this.marriage = arr[res.tapIndex];
              break;
            case "job":
              this.job = arr[res.tapIndex];
              break;
          }
        },
      });
    },
    bindDateChange: function (e) {
      this.date = e.target.value;
    },
    getDate(type) {
      const date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();

      if (type === "start") {
        year = year - 60;
      } else if (type === "end") {
        year = year + 2;
      }
      month = month > 9 ? month : "0" + month;
      day = day > 9 ? day : "0" + day;
      return `${year}-${month}-${day}`;
    },
    // 三级联动
    showMulLinkageThreePicker() {
      this.$refs.mpvueCityPicker.show();
    },
    onConfirm(e) {
      this.pickerText = e.label;
    },
  },
};
</script>

<style scoped>
image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.info-left {
  font-size: 17px;
  color: #9f9f9f;
}
.info-list-item {
  padding: 15px;
  border-bottom: 1px solid #f5f5f5;
}
.icon {
  margin-left: 15px;
  color: #d6d6d6;
}
button {
  width: 90%;
  margin-top: 15px;
  background: #ffe933;
}
.info-detail > input {
  text-align: right;
}
</style>
