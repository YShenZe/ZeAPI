<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  import('canvas-confetti').then((confetti) => {
    confetti.default({
      particleCount: 100,
      spread: 170,
      origin: { y: 0.6 },
    });
  });
});
</script>