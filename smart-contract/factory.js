import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x622427eDd537899a7b6507AE826F82dBc3Cb307c"
);

export default instance;
