import axios from "axios";

const KEY = "AIzaSyAgcPN4q1BX2S5JkamySh2pQQwBlqLzCXA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
