<template>
  <div class="loader">
    <p class="info__paragraph loader__paragraph loader--centred">Waiting for data...</p>
    <div class="loader__circle-border loader__circle-border-1 loader--centred">
      <div class="loader__circle-core"></div>
    </div>
    <div class="loader__circle-border loader__circle-border-2 loader--centred">
      <div class="loader__circle-core"></div>
    </div>
    <div class="loader__circle-border loader__circle-border-3 loader--centred">
      <div class="loader__circle-core"></div>
    </div>
    <div class="loader__circle loader__circle-border loader--centred"></div>
  </div>
</template>

<style lang="scss">

@keyframes spin {
  from { transform: rotate(0); }
  to { transform: rotate(359deg); }
}

.loader {
  min-height: 200px;
  &--centred {
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
  }
  &__paragraph {
    z-index: 100;
  }
  &__circle {
    width: 20px;
    height: 20px;
    background: var(--details-light);
    box-shadow: 0 0 20px var(--details-light);
    &-border {
      padding: 2px;
      border-radius: 50%;
      background: linear-gradient(rgba(250, 225, 1, 0.1) 33%, var(--details-light) 100%);
      &-1 {
        animation: spin .8s ease-in 0s infinite;
        width: 140px;
        height: 140px;
        top: calc(50% - 70px);
        left: calc(50% - 70px);
      }
      &-2 {
        animation: spin 1s ease-out 0s infinite reverse;
        width: 110px;
        height: 110px;
        top: calc(50% - 55px);
        left: calc(50% - 55px);
      }
      &-3 {
        animation: spin 1.2s ease-in-out 0s infinite;
        width: 80px;
        height: 80px;
        top: calc(50% - 40px);
        left: calc(50% - 40px);
      }
    }
    &-core {
      width: 100%;
      height: 100%;
      background-color: var(--light);
      border-radius: 50%;
    }
  }
}
</style>
