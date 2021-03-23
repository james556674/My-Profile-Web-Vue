<template>
  <div class="home">
    <button class="btn" v-on:click="this.languageChange">
      {{ this.language ? "中文" : "English" }}
    </button>
    <div class="eng-version" v-if="this.language">
      <p>{{ Intro.myInroEng.firstP }}</p>

      <p>
        {{ Intro.myInroEng.secondP }} <br />
        <router-link to="/projects">{{ Intro.myInroEng.project }}</router-link>
        、
        <router-link to="/skills">{{ Intro.myInroEng.skills }}</router-link>
        {{ Intro.myInroEng.and }}
        <router-link to="/about">{{ Intro.myInroEng.info }}</router-link>
      </p>
      <p>
        {{ Intro.myInroEng.thirdP }}
        <a href="https://medium.com/@james556674" target="_blank">{{
          Intro.myInroEng.blog
        }}</a>
        {{ Intro.myInroEng.and }}
        <a href="https://github.com/james556674" target="_blank">{{
          Intro.myInroEng.github
        }}</a>
        {{ Intro.myInroEng.forthP }}
      </p>
    </div>
    <div class="chi-version" v-else>
      <p>{{ Intro.myInroChi.firstP }}</p>

      <p>
        {{ Intro.myInroChi.secondP }} <br />
        <router-link to="/projects">{{ Intro.myInroChi.project }}</router-link>
        、
        <router-link to="/skills">{{ Intro.myInroChi.skills }}</router-link>
        {{ Intro.myInroChi.and }}
        <router-link to="/info">{{ Intro.myInroChi.info }}</router-link>
      </p>
      <p>
        {{ Intro.myInroChi.thirdP }}
        <a href="https://medium.com/@james556674" target="_blank">{{
          Intro.myInroChi.blog
        }}</a>
        {{ Intro.myInroChi.and }}
        <a href="https://github.com/james556674" target="_blank">{{
          Intro.myInroChi.github
        }}</a>
        {{ Intro.myInroChi.forthP }}
      </p>
    </div>
  </div>
</template>

<script>
const dummyData = {
  myInroEng: {
    firstP: "Hello My name is Tsai Chung Wei",
    secondP:
      "I am a learner for becoming a front-end-engineer. This web is written by vue.js framework, recording ",
    thirdP: "Furthermore, I also get a ",
    forthP: "to record my learning process",
    project: "my project",
    skills: "my skills",
    info: "my info",
    blog: "Blog",
    github: "GitHub",
    and: "and",
  },
  myInroChi: {
    firstP: "你好，我的名字叫蔡仲維",
    secondP:
      "我是一位立志成為前端工程師的學習者，這個網站是用Vue.js框架寫成，記錄著",
    thirdP: "此外，我也有一個",
    forthP: "記錄著我的學習經歷",
    project: "我的專案",
    skills: "我的技能",
    info: "我的資訊",
    blog: "部落格",
    github: "GitHub",
    and: "以及",
  },
};
export default {
  data() {
    return {
      Intro: {},
      language: true,
    };
  },

  created() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      this.Intro = dummyData;
    },
    languageChange() {
      if (this.language) {
        this.language = false;
      } else {
        this.language = true;
      }
    },
  },
};
</script>

<style scoped>
button {
  border: 0;
  border-radius: 10px;
  transition: transform 0.5s;
  padding: 12px 40px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  background: inherit;
  font-size: 1rem;
}

button:hover {
  opacity: 0.9;
  transform: scale(1.05);
}
a {
  text-decoration: rgb(236, 147, 114);
  position: relative;
}

a:hover::after {
  top: 0%;
}
a::after {
  content: "";
  position: absolute;
  z-index: -1;
  top: 60%;
  left: -0.1em;
  right: -0.1em;
  bottom: 0;
  transition: top 200ms cubic-bezier(0, 0.8, 0.13, 1);
  background-color: rgb(236, 147, 114);
}

.home {
  margin: auto;
  width: 80%;
  height: 80%;
  text-align: center;
  margin-top: 1rem;
}
p {
  width: 100%;
  font-family: "Larishneue webfont", sans-serif;
  color: #000;
  font-size: 45px;
  text-align: left;
  line-height: 4rem;
}
</style>