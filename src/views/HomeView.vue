<template>
  <div class="main__absolute home">
    <div class="home__texts text__center main__centered">
      <h2 class="main__title">Explore the Space</h2>
      <p>
        This application is based on
        <br>
        <a
          href="https://github.com/r-spacex/SpaceX-API"
          target="_blank"
          rel="noopener noreferrer"
        > SpaceX REST API</a>
        <br>
      </p>
      <p>I wish you a pleasant exploration</p>
    </div>
  </div>
</template>

<style lang="scss">
.home {
  .home__texts {
    font-size: 2vw;
    width: 50%;
    margin: 1% auto;
    text-shadow: 0 0 5px var(--light);
    @media screen and (orientation: portrait) {
      width: 80%;
    }
  }
}
</style>
