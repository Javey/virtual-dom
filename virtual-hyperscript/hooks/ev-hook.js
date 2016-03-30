'use strict';

var EvStore = require('ev-store');
var Delegator = require('dom-delegator');

var delegator = new Delegator({defaultEvents: false});

module.exports = EvHook;

function EvHook(value) {
    if (!(this instanceof EvHook)) {
        return new EvHook(value);
    }

    this.value = value;
}

EvHook.prototype.hook = function (node, propertyName) {
    var es = EvStore(node);
    var propName = propertyName.substr(3);

    delegator.listenTo(propName);
    es[propName] = this.value;
};

EvHook.prototype.unhook = function(node, propertyName) {
    var es = EvStore(node);
    var propName = propertyName.substr(3);

    delegator.unlistenTo(propName);
    es[propName] = undefined;
};
