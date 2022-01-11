import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xF97C2FC614C3884dc37eE13d4f7b9A1857F0027a"
);

export default instance;
