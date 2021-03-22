<template>
  <div class="project-page">
    <div class="project-title">
      <h1 class="title-name">{{ project.name }}</h1>
      <span>Caregory - Web App</span>
    </div>

    <div class="container">
      <div class="project-wrapper">
        <div class="project-intro">
          <div class="left-side">
            <h3>專案介紹</h3>
            <div class="project-description">
              <p>
                {{ project.longIntro }}
              </p>
            </div>
          </div>
          <div class="right-side">
            <h3>相關資訊</h3>
            <div class="project-info">
              <span>網站連結 - </span>
              <a :href="project.demo"> demo domain </a>
            </div>
            <div class="project-info" v-show="project.github">
              <span>程式碼 - </span> <a :href="project.github"> GitHub </a>
            </div>
            <div class="project-info">
              <span>相關工具 - </span> {{ project.tool }}
            </div>
          </div>
        </div>
      </div>
      <div class="project-img">
        <div class="img-box inner-shadow">
          <img :src="project.pic" class="outer-shadow" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const dummyData = [
  {
    id: 1,
    name: "Simple Twitter",
    shortIntro: "簡易版推特復刻，四人協作開發，前後分離",
    longIntro:
      "四人小組開發的前後分離專案，具備新增推文、按讚推文、追蹤、公開聊天等功能。 自己在團隊中負責前端畫面切版與API串接，並使用了socket.io初步完成了公開聊天室。 ",
    tool: "Vue.js, Bootstrap, Node.js, Express.js, MySQL,Heroku ",
    demo: "https://afternoon-bayou-14704.herokuapp.com/#/signin",
    github: "https://github.com/hooty868/Twitter-API-Frontend-v1",
    pic:
      "https://camo.githubusercontent.com/cf8d1b3ed6d02d02f56c9cae1661c56a8604a85711fc38c1124d5eb77aa9099c/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f57486f525448637078596e795872626c63572f67697068792e676966",
  },
  {
    id: 2,
    name: "個人網站",
    shortIntro: "一個記錄著我的資訊、學習經歷、與專案的網站",
    longIntro:
      "瀏覽了許多網站後，匯集了許多想法以Vue.js框架所製作的個人網站，裡面記錄了我的相關資訊包含了我的專案作品...等等，持續優化中",
    tool: "Vue.js, FontAwesome, HTML, CSS, JS",
    demo: "",
    github: "https://github.com/james556674/My-Profile-Web-Vue",
    pic:
      "https://github.com/james556674/My-Profile-Web-Vue/blob/master/assets/projectPics/profile.png?raw=true",
  },
  {
    id: 3,
    name: "簡易記帳網站",
    shortIntro: "全端開發，以Node.js完成基本的CRUD功能",
    longIntro:
      "全端開發，以Node.js完成基本的CRUD功能，在這個網站中可以新增支出，瀏覽所有支出，瀏覽分類支出，編輯支出以及刪除支出，",
    tool: "Node.js, Express.js, Handlebars, Mongoose, MongoDB Atlas",
    demo: "https://stark-atoll-88352.herokuapp.com/",
    github: "https://github.com/james556674/expense-tracker-express",
    pic:
      "https://github.com/james556674/My-Profile-Web-Vue/blob/master/assets/projectPics/expense-tracker.png?raw=true",
  },
  {
    id: 4,
    name: "翻牌遊戲",
    shortIntro: "以Javascript為主，透過Dom實現的小遊戲",
    longIntro: "以Javascript為主，透過Dom實現的翻牌記憶小遊戲．",
    tool: "HTML, CSS, JavaScript",
    demo: "https://codepen.io/James556674/pen/BaKxgaj",
    pic:
      "https://raw.githubusercontent.com/james556674/My-Profile-Web-Vue/master/assets/projectPics/card-flip-game.png",
  },
];
export default {
  data() {
    return {
      project: {},
    };
  },
  created() {
    const { id } = this.$route.params;
    const data = dummyData.find((project) => project.id === Number(id));
    this.project = data;
  },
};
</script>

<style scoped>
.project-page {
  margin: auto;
  width: 80%;
  height: 100%;
  padding: 0 1rem;
}

.project-page .project-title {
  text-align: left;
  position: relative;
}

.project-page .project-title::after {
  content: "";
  width: 100%;
  border: 0.2px #7a828a solid;
  position: absolute;
  bottom: -7px;
  left: 0px;
  opacity: 30%;
}

.project-wrapper {
  position: relative;
}

.project-wrapper:after {
  content: "";
  width: 100%;
  border: 0.2px #7a828a solid;
  position: absolute;
  bottom: -10px;
  left: 0px;
  opacity: 30%;
}

.project-page .project-title h1 {
  margin-bottom: 0.5rem;
}

.project-wrapper .project-intro {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.project-wrapper .project-intro .left-side {
  width: 70%;
  text-align: left;
}

.project-wrapper .project-intro .left-side .project-description {
  width: 90%;
}

.project-wrapper .project-intro .right-side {
  width: 30%;
  text-align: left;
}

.project-wrapper .project-intro .right-side .project-info {
  margin-top: 1rem;
}

.project-wrapper .project-intro .right-side .project-info span {
  font-weight: 500;
}

.project-img {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}

.project-img .img-box {
  width: 600px;
  height: 400px;
  padding: 15px;
  border-radius: 5px;
}
.project-img .img-box img {
  width: 95%;
  height: 95%;
  border: 10px solid transparent;
  border-radius: 5px;
}
</style>