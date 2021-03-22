<template>
  <div class="project-page">
    <h2>My Projects</h2>
    <div class="div-line"></div>
    <div class="container">
      <div class="project-wrapper" v-for="pro in projects" :key="pro.id">
        <div class="project-img">
          <img :src="pro.pic" alt="" />
        </div>
        <div class="project-name">{{ pro.name }}</div>
        <div class="project-description">{{ pro.des }}</div>
      </div>
    </div>
  </div>
</template>

<script>
const dummyData = [
  {
    id: 1,
    name: "Simple Twitter",
    des: "簡易版推特復刻，四人協作開發，前後分離",
    pic:
      "https://camo.githubusercontent.com/cf8d1b3ed6d02d02f56c9cae1661c56a8604a85711fc38c1124d5eb77aa9099c/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f57486f525448637078596e795872626c63572f67697068792e676966",
  },
  {
    id: 2,
    name: "個人網站",
    des: "一個記錄著我的資訊、學習經歷、與專案的網站",
    pic:
      "https://camo.githubusercontent.com/cf8d1b3ed6d02d02f56c9cae1661c56a8604a85711fc38c1124d5eb77aa9099c/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f57486f525448637078596e795872626c63572f67697068792e676966",
  },
  {
    id: 3,
    name: "簡易記帳網站",
    des: "全端開發，以Node.js完成基本的CRUD功能",
    pic:
      "https://camo.githubusercontent.com/cf8d1b3ed6d02d02f56c9cae1661c56a8604a85711fc38c1124d5eb77aa9099c/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f57486f525448637078596e795872626c63572f67697068792e676966",
  },
  {
    id: 4,
    name: "翻牌遊戲",
    des: "以Javascript為主，透過Dom實現的小遊戲",
    pic:
      "https://camo.githubusercontent.com/cf8d1b3ed6d02d02f56c9cae1661c56a8604a85711fc38c1124d5eb77aa9099c/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f57486f525448637078596e795872626c63572f67697068792e676966",
  },
];
export default {
  data() {
    return {
      projects: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.projects = dummyData;
    },
  },
};
</script>

<style scoped>
.project-page {
  margin: auto;
  min-width: 300px;
}
.container {
  margin: auto;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: center;
}

.project-wrapper {
  width: 300px;
  margin-top: 2rem;
}

.project-img {
  width: 300px;
  height: 200px;
  background: grey;
  cursor: pointer;
}

.project-img:hover {
  transform: translate(-1px, -5px);
  transition: all 0.2s ease-out;
}
.project-img img {
  width: 300px;
  height: 200px;
  object-fit: cover;
  box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
}

.project-name {
  color: grey;
  margin-top: 1rem;
}

.project-description {
  color: black;
  text-align: left;
  font-size: 14px;
}
</style>