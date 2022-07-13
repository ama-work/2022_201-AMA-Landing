<!-- Please remove this file from your project -->
<template>
	<div class="video_container">
		<video autoplay playinsline muted loop :data-v='randomNumber'>
			<source :src="videos[randomNumber]">
		</video>
		<div class="video_container_blur"></div>
	</div>
</template>
<style lang='scss' scoped>
@import "~assets/css/style";
.video_container {
  video {
    position: fixed;
    top: -50vh;
    left: -50vw;
    right: 0;
    bottom: 0;
    width: 200vw;
    height: 200vh;
    object-fit: cover;

  }
  .video_container_blur {
	position: fixed;
    top: -50vh;
    left: -50vw;
    width: 200vw;
    height: 200vh;

    backdrop-filter: blur(100px);
  }
}
</style>
<script>
export default {
  name: "JobPosition",
  mounted: function() {
    this.randomNumber = parseInt(Math.random() * 3);
  },
  data() {
    return {
      randomNumber: 0,
      videos: [
        "https://player.vimeo.com/progressive_redirect/playback/709423696/rendition/1080p/file.mp4?loc=external&signature=6eb12e62be8eba6a120bf53c2ea23232bc094c2815c530ceeb7adb75a96b63d7",
        "https://player.vimeo.com/progressive_redirect/playback/709123983/rendition/1080p/file.mp4?loc=external&signature=1d7d861a8f56c119e4906ce7d8b6f4746040a33ec4c0dac0fdea51e788160868",
        "https://player.vimeo.com/progressive_redirect/playback/709123908/rendition/1080p/file.mp4?loc=external&signature=42adc3067369affc5f349a5208b8706e1ee95332627ac53ebe7fbee736c96c6c",
        "https://player.vimeo.com/progressive_redirect/playback/709423979/rendition/1080p/file.mp4?loc=external&signature=bb1bbbab5d7bc5490dba8bf1109fdae82b042db3aeed829c890c680978f03e20"
      ]
    };
  }
};
</script>
