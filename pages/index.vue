<template>
	<div class="front-page">
		<VideoBG />
		<TextLayer/>
		<JobPosition/>
	</div>
</template>

<script>
import TextLayer from "../components/TextLayer.vue";
import JobPosition from "../components/JobPosition.vue";
import VideoBG from "../components/VideoBG";
export default {
  name: "IndexPage",
  layout: "default",
  mounted() {
    this.setupIndex();
  },
  methods: {
    setupIndex() {
      this.setHeight();
    },
    setHeight() {
      var vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
      const reportWindowSize = () => {
        vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
      };
      window.onresize = reportWindowSize;
    }
  },
  components: { TextLayer, JobPosition, VideoBG }
};
</script>
