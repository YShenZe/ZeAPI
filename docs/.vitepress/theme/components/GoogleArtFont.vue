<template>
<section class="love-card">
    <p class="love-card__text">
      Free, Fast, Always-On
    </p>
    <p class="love-card__sign">—— ZeAPI</p>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap');

.love-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Dancing Script', cursive;
  font-size: 2.5rem;
  text-align: center;
  color: #333;
}

.love-card__text {
  line-height: 1.4;
  margin: 0 0 0.6em;
}

.love-card__sign {
  font-size: 0.9em;
  font-weight: 400;
  margin: 0;
  align-self: flex-end;
  padding-right: 1em;
}
</style>