<template>
  <div class="sponsors-component">
    <!-- 金牌赞助 -->
    <section v-if="goldSponsor" class="gold-sponsor">
      <h2>🥇 金牌赞助</h2>
      <a :href="goldSponsor.link" target="_blank" rel="noopener noreferrer">
        <img :src="goldSponsor.image" :alt="goldSponsor.alt" class="sponsor-image" />
      </a>
    </section>

    <!-- 铂金赞助 -->
    <section v-if="platinumSponsors && platinumSponsors.length > 0" class="platinum-sponsors">
      <h2>🥈 铂金赞助</h2>
      <div class="sponsors-grid platinum-grid">
        <a v-for="(sponsor, index) in platinumSponsors" :key="index" :href="sponsor.link" target="_blank" rel="noopener noreferrer">
          <img :src="sponsor.image" :alt="sponsor.alt" class="sponsor-image" />
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 硬编码赞助商数据
const goldSponsor = ref({
  image: 'https://imgsbad.semoun.com/uploads/2025/08/22/68a815221d25d.png',
  link: 'https://snpan.com',
  alt: 'Snpan 金牌赞助'
});

const platinumSponsors = ref([
  {
    image: 'https://jingtai.s3-cn-gd.ufileos.com/icon/7EA7165982EBF6302E78C4E6B666164A.png',
    link: 'https://www.pingloc.com/ping',
    alt: 'Pingloc 铂金赞助'
  },
  {
    image: 'https://jingtai.s3-cn-gd.ufileos.com/icon/7EA7165982EBF6302E78C4E6B666164A.png',
    link: 'https://www.pingloc.com/ping',
    alt: 'Pingloc 铂金赞助'
  }
]);
</script>

<style scoped>
.sponsors-component {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.sponsors-grid {
  display: grid;
  gap: 20px;
}

.gold-sponsor {
  margin-bottom: 40px;
}

.gold-sponsor a {
  display: block;
}

.gold-sponsor .sponsor-image {
  width: 100%;
  height: auto;
}

/* 铂金赞助：一行两个 */
.platinum-grid {
  grid-template-columns: repeat(2, 1fr);
}

.platinum-sponsors {
  margin-bottom: 40px;
}

.sponsor-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>