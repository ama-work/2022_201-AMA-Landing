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
  head() {
    return {
      title: "AMA — Design-led web development agency",
      meta: [
        {
          hid: "viewport",
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "AMA — Design-led web development agency"
        },
        {
          hid: "og:site_name",
          property: "og:site_name",
          content: "AMA — Design-led web development agency"
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://ama.work"
        },
        {
          hid: "description",
          name: "description",
          content:
            "Design-led web development agency, passionate about generating beautiful, clean and bespoke websites with unique content."
        },
        {
          hid: "og:description",
          name: "description",
          content:
            "Design-led web development agency, passionate about generating beautiful, clean and bespoke websites with unique content."
        },
        {
          hid: "og:locale",
          property: "og:locale",
          content: "en_US"
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "article"
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "/facebook_share.jpg"
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary"
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "Design-led web development agency, passionate about generating beautiful, clean and bespoke websites with unique content."
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "AMA — Design-led web development agency"
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "/facebook_share.jpg"
        },
        {
          hid: "name",
          itemprop: "name",
          content: "AMA — Design-led web development agency"
        },
        {
          hid: "url",
          itemprop: "url",
          content: "https://ama.work"
        },
        {
          hid: "description",
          itemprop: "description",
          content:
            "Design-led web development agency, passionate about generating beautiful, clean and bespoke websites with unique content."
        },
        {
          hid: "image",
          itemprop: "image",
          content: "/thumb.png"
        },
        {
          hid: "thumbnailUrl",
          itemprop: "thumbnailUrl",
          href: "/thumb.png"
        }
      ]
    };
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
        "<!-- --------------------------------------------- -->\n" +
		"<!-- Code by AMA, http://ama.work (2022) 			-->\n" +
		"<!-- info@ama.work 									-->\n" +
		"<!-- -------------------------------------------	-->"
      );
	  console.log(
        "<!-- --------------------------------------------- -->\n" +
		"<!-- We are currently looking for developers! 		-->\n" +
		"<!-- Send us an email if you want to know more :)	-->\n" +
		"<!-- info@ama.work 									-->\n" +
		"<!-- -------------------------------------------	-->"
	  );
    }
  },
  components: { TextLayer, JobPosition, VideoBG }
};
</script>
