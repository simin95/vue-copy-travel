<template>
  <ul class="list">
    <li class="item"
        v-for="(item,index) in letters"
        :key="index"
        :ref="item"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handleLetterClick"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    };
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      console.log(letters);
      return letters;
    }
  },
  methods: {
    handleLetterClick(event) {
      this.$emit("change", event.target.innerText);
      // console.log(event.target.innerText);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      console.log("-------- handleTouchMove start -------------");
      if (this.touchStatus) {
        // 在此函数节流，通过定时器保证了更新操作每16ms执行一次，在16ms的周期内重复触发仅会重置定时器而不会更新，不错的思路，学习了
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          // console.log(this.$refs)
          // 拿到字母表顶部到list顶部的距离
          // console.log(this.$refs["A"][0].offsetTop);
          const startY = this.startY;
          // 拿到手指触摸位置的坐标
          // console.log(e.touches[0].clientY);
          const touchY = e.touches[0].clientY - 79;
          // 计算出在字母表的顺序位置
          const index = Math.floor((touchY - startY) / 20);
          // console.log(index)
          if (index >= 0 && index < this.letters.length) {
            this.$emit("change", this.letters[index]);
          }
        }, 16);
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibies.styl';

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 1.58rem;
  bottom: 0;
  width: 0.4rem;

  // background red
  .item {
    line-height: 0.4rem;
    text-align: center;
    color: $bgColor;
  }
}
</style>
