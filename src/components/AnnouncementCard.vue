<template>
  <div class="card">
    <div class="card-content">
      <h4 class="card-title">{{ cardTitle }}</h4>
      <div class="text-right">
        <h2>
          <i :class="computedClassIconObject"></i>
          {{ numberText }}
        </h2>
        <span class="text-muted">{{ cardRemark }}</span>
      </div>
      <span :class="computedClassRemarkObject">{{ percent }}</span>
      <progress :class="computedClassProgressObject" :value="cardPercent" max="100">{{ percent }}</progress>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardTitle: {
      type: String,
      default: ""
    },
    cardType: {
      type: String,
      default: "rise"
    },
    cardColor: {
      type: String,
      default: "success"
    },
    cardNumber: {
      type: String,
      default: ""
    },
    cardNumberSymbol: {
      type: String,
      default: ""
    },
    cardRemark: {
      type: String,
      default: ""
    },
    cardPercent: {
      type: String,
      default: ""
    }
  },
  computed: {
    numberText() {
      return this.cardNumberSymbol + this.cardNumber;
    },
    percent() {
      return this.cardPercent + "%";
    },
    computedClassIconObject() {
      const iconFont =
        this.cardType == "rise" ? "fa-arrow-up" : "fa-arrow-down";
      const iconColor = `text-${this.cardColor}`;
      const classObj = {
        fas: true,
        [iconFont]: true,
        [iconColor]: true
      };
      return classObj;
    },
    computedClassRemarkObject() {
      const remarkColor = `text-${this.cardColor}`;
      const classObj = {
        "text-left": true,
        [remarkColor]: true
      };
      return classObj;
    },
    computedClassProgressObject() {
      const progressColor = `is-${this.cardColor}`;
      const classObj = {
        progress: true,
        "is-small": true,
        [progressColor]: true
      };
      return classObj;
    }
  }
};
</script>
<style lang='less' scoped>
.card {
  border: 0;
  border-radius: 0.25rem;
}

.card-title {
  text-align: left;
  line-height: 22px;
  font-size: 18px;
  color: #2c2b2e;
  font-weight: 400;
}

.text-muted {
  color: #90a4ae;
}
</style>