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
    this.setupConsoleLog();
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
    },
    setupConsoleLog() {
      console.log(
        "<!-- ---------------------------------------------------------------	-->\n" +
		"<!-- AMA, design-led web development agency http://ama.work (2022)		-->\n" +
		"<!-- info@ama.work 														-->\n" +
		"<!-- ---------------------------------------------------------------	-->"
      );
	  console.log(
        "<!-- ----------------------------------------------	-->\n" +
		"<!-- We are currently looking for developers! 		-->\n" +
		"<!-- Send us an email if you want to know more :)	-->\n" +
		"<!-- info@ama.work 									-->\n" +
		"<!-- ----------------------------------------------	-->"
	  );
    }
  },
  components: { TextLayer, JobPosition, VideoBG }
};
</script>
