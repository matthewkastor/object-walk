/**
 * Walks through an object executing user defined functions at every node on the 
 *  way down and back up. Functions will be given three arguments: the value
 *  of the current node, the name of the current node, and the object being
 *  being walked through. This roughly resembles the callback signature of
 *  Array.prototype.map.
 * @param {Object} obj The object to walk through.
 * @param {Function} [descentionFn = function () {return null;}] callback
 *  function to be executed at every node from the top down.
 * @param {Function} [ascentionFn = function () {return null;}] callback
 *  function to be executed at every node from the bottom up.
 * @returns {Object} Returns the object with empty values removed.
 */
function objectWalk(obj, descentionFn, ascentionFn) {
    "use strict";
    descentionFn = descentionFn || function () {return null;}
    ascentionFn = ascentionFn || function () {return null;}
    var objectForeach = require('object-foreach');
    function walk(obj) {
        objectForeach(obj, function (val, prop, aObj) {
            descentionFn(val, prop, aObj);
            if (val instanceof Object) {
                walk(val);
                ascentionFn(val, prop, aObj);
            }
        });
        return obj;
    }
    return walk(obj);
};
module.exports = objectWalk;