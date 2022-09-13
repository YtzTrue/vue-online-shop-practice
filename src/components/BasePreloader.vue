<template>
  <div class="shadow">
    <div class="loader">
      <div class="mask"></div>
    </div>
  </div>
</template>

<style>
.shadow {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  margin-top: -25px;
  margin-left: -25px;
  box-shadow: -2px 2px 10px 0 rgba(0, 0, 0, 0.5),
    2px -2px 10px 0 rgba(255, 255, 255, 0.5);
}

.loader {
  background: -webkit-linear-gradient(left, #222 50%, #fafafa 50%);
  /* Foreground color, Background colour */
  border-radius: 100%;
  height: 50px;
  /* Height and width */
  width: 50px;
  /* Height and width */
  animation: time 8s steps(500, start) infinite;
}

.mask {
  border-radius: 100% 0 0 100% / 50% 0 0 50%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 50%;
  animation: mask 8s steps(250, start) infinite;
  transform-origin: 100% 50%;
}

@-webkit-keyframes time {
  100% {
    transform: rotate(360deg);
  }
}

@-webkit-keyframes mask {
  0% {
    background: #fafafa;
    /* Background colour */
    transform: rotate(0deg);
  }

  50% {
    background: #fafafa;
    /* Background colour */
    transform: rotate(-180deg);
  }

  50.01% {
    background: #222;
    /* Foreground colour */
    transform: rotate(0deg);
  }

  100% {
    background: #222;
    /* Foreground colour */
    transform: rotate(-180deg);
  }
}
</style>
