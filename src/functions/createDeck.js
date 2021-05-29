"use strict";
exports.__esModule = true;
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
var createDeck = function (stripes, colors, shapes, textures) {
    var deck = [];
    for (var i = 1; i <= stripes; i++) {
        for (var j = 1; j <= colors; j++) {
            for (var k = 1; k <= shapes; k++) {
                for (var m = 1; m <= textures; m++) {
                    deck.push({
                        stripes: i,
                        colors: j,
                        shapes: k,
                        textures: m
                    });
                }
            }
        }
    }
    return deck;
};
exports["default"] = createDeck;
console.log(createDeck(3, 3, 3, 3).length);
