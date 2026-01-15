/**
 * Created by Sergiu Șandor (micku7zu) on 1/27/2017.
 * Original idea: https://github.com/gijsroge/tilt.js
 * MIT License.
 * Version 1.7.2
 */

export default class VanillaTilt {
  constructor(element, settings = {}) {
    if (!(element instanceof Node)) {
      throw ("Can't initialize VanillaTilt because " + element + " is not a Node.");
    }

    this.width = null;
    this.height = null;
    this.clientWidth = null;
    this.clientHeight = null;
    this.left = null;
    this.top = null;

    this.gammazero = null;
    this.betazero = null;
    this.lastgammazero = null;
    this.lastbetazero = null;

    this.transitionTimeout = null;
    this.updateCall = null;
    this.event = null;

    this.updateBind = this.update.bind(this);
    this.resetBind = this.reset.bind(this);

    this.element = element;
    this.settings = this.extendSettings(settings);

    this.reverse = this.settings.reverse ? -1 : 1;
    this.glare = VanillaTilt.isSettingTrue(this.settings.glare);
    this.glarePrerender = VanillaTilt.isSettingTrue(this.settings["glare-prerender"]);
    this.fullPageListening = VanillaTilt.isSettingTrue(this.settings["full-page-listening"]);
    this.gyroscope = VanillaTilt.isSettingTrue(this.settings.gyroscope);
    this.gyroscopeSamples = this.settings.gyroscopeSamples;

    this.elementListener = this.getElementListener();

    if (this.glare) this.prepareGlare();
    if (this.fullPageListening) this.updateClientSize();

    this.addEventListeners();
    this.reset();
    this.updateInitialPosition();
  }

  static isSettingTrue(setting) {
    return setting === "" || setting === true || setting === 1;
  }

  // ... (rest of your class stays EXACTLY the same)

  static init(elements, settings) {
    if (elements instanceof Node) elements = [elements];
    if (elements instanceof NodeList) elements = [].slice.call(elements);
    if (!(elements instanceof Array)) return;

    elements.forEach((element) => {
      if (!("vanillaTilt" in element)) {
        element.vanillaTilt = new VanillaTilt(element, settings);
      }
    });
  }
}
