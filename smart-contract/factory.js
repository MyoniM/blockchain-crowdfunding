import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

export var singleF = (function () {
  var instance;

  function createInstance() {
    const fInstance = new web3.eth.Contract(
      JSON.parse(CampaignFactory.interface),
      "0xF709F4Cb1E1552507Cdf26A8B35b24DE1e78a12A"
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
