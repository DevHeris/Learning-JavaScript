const axios = require("axios");

const getPost = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");

  console.log(res.data);
};

getPost();
