<template>
  <div class="skill">
    <div class="title">
      <h1>Skills</h1>
    </div>

    <div class="skill-wrapper">
      <div class="front-end card">
        <h2>Front-End</h2>
        <div class="skill-items">
          <div class="items">
            <font-awesome-icon
              class="font-awesome-icon"
              :icon="['fab', 'html5']"
            />
            <p>HTML</p>
          </div>
          <div class="items">
            <font-awesome-icon
              class="font-awesome-icon"
              :icon="['fab', 'css3-alt']"
            />
            <p>CSS</p>
          </div>
          <div class="items">
            <font-awesome-icon
              class="font-awesome-icon"
              :icon="['fab', 'js']"
            />
            <p>JavaScript</p>
          </div>
          <div class="items">
            <font-awesome-icon
              class="font-awesome-icon"
              :icon="['fab', 'vuejs']"
            />
            <p>Vue.js</p>
          </div>
        </div>
      </div>
      <div class="back-end card">
        <h2>Back-End</h2>
        <div class="skill-items">
          <div class="items">
            <font-awesome-icon
              class="font-awesome-icon"
              :icon="['fab', 'node-js']"
            />
            <p>Node.js / Express.js</p>
          </div>
        </div>
      </div>
      <div class="other card">
        <h2>Other</h2>
        <div class="skill-items">
          <div class="items">
            <font-awesome-icon
              class="font-awesome-icon"
              :icon="['fab', 'git']"
            />
            <p>Git</p>
          </div>
          <div class="items">
            <font-awesome-icon
              class="font-awesome-icon"
              :icon="['fab', 'github']"
            />
            <p>Github</p>
          </div>

          <div class="items">
            <font-awesome-icon
              class="font-awesome-icon"
              :icon="['fab', 'bootstrap']"
            />
            <p>Bootstrap</p>
          </div>
        </div>
      </div>
    </div>

    <div class="skill-detail">
      <div class="detail-wrapper" v-for="skill in skills" :key="skill.id">
        <div class="skill-name">
          <h3>- {{ skill.name }}</h3>
        </div>
        <div class="skill-intro">
          <p>{{ skill.intro }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const dummyData = [
  {
    id: 1,
    name: "Vue.js",
    intro:
      "API串接, Vue方法(v-bind, v-for, v-on...), vue-router, 動態路由, 模板元件化, Vuex, Vue生命週期",
  },
  {
    id: 2,
    name: "HTML/CSS",
    intro: "了解語意化命名結構，Flex/Grid排版，RWD",
  },

  {
    id: 3,
    name: "JavaScript",
    intro: "Dom節點操作, 理解promise與async/ await, 解構賦值等ES6+基本概念",
  },
  {
    id: 4,
    name: "Node.js/ Express",
    intro: "會使用Express架設基本web應用, npm工具",
  },
  {
    id: 5,
    name: "Git/ GitHub",
    intro: "會使用Git基本指令, github團隊協作, GitHub Page部署, heroku部署",
  },
  {
    id: 6,
    name: "Bootstrap",
    intro: "能夠使用bootstrap快速進行rwd網站開發切版",
  },
];
export default {
  data() {
    return {
      skills: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.skills = dummyData;
    },
  },
};
</script>

<style scoped>
.skill {
  width: 80%;
  margin: auto;
}

.skill .title {
  position: relative;
}

.skill .title::after {
  content: "";
  width: 100%;
  border: 0.2px #7a828a solid;
  position: absolute;
  bottom: -7px;
  left: 0px;
  opacity: 30%;
}

.skill .skill-wrapper {
  width: 100%;
  height: 100%;
  margin-top: 2rem;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  position: relative;
}
.skill .skill-wrapper:after {
  content: "";
  width: 100%;
  border: 0.2px #7a828a solid;
  position: absolute;
  bottom: -50px;
  left: 0px;
  opacity: 30%;
}

.skill .card {
  width: 300px;
  height: 300px;
  margin-right: 1rem;
  margin-top: 1rem;
  box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
}

.skill .card .skill-items {
  width: 70%;
  text-align: left;
  margin: auto;
}

.skill .card .skill-items .items {
  display: flex;
  width: 100%;
  align-items: center;

  margin-top: -10px;
}
.skill .card .skill-items .font-awesome-icon {
  margin-right: 1rem;
  font-size: 2rem;
}

.skill-detail {
  margin-top: 4rem;
}

.skill-detail .detail-wrapper {
  width: 100%;
  text-align: left;
  position: relative;
}

.skill-detail .detail-wrapper::after {
  content: "";
  width: 100%;
  border: 0.2px #7a828a solid;
  position: absolute;
  bottom: -20px;
  left: 0px;
  opacity: 30%;
}

.skill-detail .detail-wrapper h3 {
  margin-top: 2rem;
}
</style> 