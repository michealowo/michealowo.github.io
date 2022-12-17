(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@bhmb/bot')) :
    typeof define === 'function' && define.amd ? define(['@bhmb/bot'], factory) :
    (factory(global['@bhmb/bot']));
}(this, (function (bot) { 'use strict';
    const MessageBot = bot.MessageBot
    MessageBot.registerExtension('mikeal/sex', function(ex, world) {
        world.addCommand('sex', function(player, args) {
            ex.bot.send('SEX!')
        })
    })
})))
