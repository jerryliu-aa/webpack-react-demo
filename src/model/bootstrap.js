var reactor = require('./reactor.js');
var GuiStore = require('./gui/store.js');
reactor.registerStores({
  guiData: GuiStore,
});
module.exports = reactor;
