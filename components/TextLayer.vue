<!-- Please remove this file from your project -->
<template>
	<div class="text-layer">
		<h1 class="logo">AMA</h1>
		<div class="info">
			<div class="text-layer-info_p">
				<p>We are a design-led development studio, passionate about generating beautiful, clean and bespoke websites with unique content.</p>
			</div>
			<div class="text-layer-info_a">
				<p>
					E:
					<a href="mailto:info@ama.work">info@ama.work</a><br> IG:
					<a href="https://www.instagram.com/ama.work_/">ama.work_</a>
				</p>
			</div>
		</div>
	</div>
</template>
<style lang='scss' scoped>
@import "~assets/css/style";
.text-layer {
  .logo {
    position: fixed;
    top: -0.6rem;
    left: 1rem;
    font-size: 7rem;
    line-height: 1.35;
    font-family: $AMARE;
    margin: 0;
    @include media-breakpoint-up(md) {
      top: 3rem;
      left: 5rem;
    }
  }
  .info {
    position: fixed;
    top: 9.2rem;
    left: 1rem;
    right: 1rem;
    font-size: 1.7rem;
    line-height: 1.35;
    max-width: 80rem;
    p {
      margin-bottom: 2em;
      &:last-child {
        margin-bottom: 0;
      }
    }
    @include media-breakpoint-up(md) {
      bottom: 7rem;
      left: 5rem;
      top: unset;
      right: unset;
      width: 50%;
    }
  }
}
</style>
<script>
export default {
  name: "JobPosition"
};
</script>
