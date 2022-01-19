import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

export var singleF = (function () {
  var instance;

  function createInstance() {
    const fInstance = new web3.eth.Contract(
      JSON.parse(CampaignFactory.interface),
      "0x69e8C91f4180CD6bc38Ac7813fB586311900c05c"
    );
    return fInstance;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();
