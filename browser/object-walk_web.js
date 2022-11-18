(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
objectWalk = require('../src/object-walk.js');

},{"../src/object-walk.js":3}],2:[function(require,module,exports){
/**
 * Executes a function on each of an objects own enumerable properties. The
 *  callback function will receive three arguments: the value of the current
 *  property, the name of the property, and the object being processed. This is
 *  roughly equivalent to the signature for callbacks to
 *  Array.prototype.forEach.
 * @param {Object} obj The object to act on.
 * @param {Function} callback The function to execute.
 * @returns {Object} Returns the given object.
 */
function objectForeach(obj, callback) {
    "use strict";
    Object.keys(obj).forEach(function (prop) {
        callback(obj[prop], prop, obj);
    });
    return obj;
};
module.exports = objectForeach;
},{}],3:[function(require,module,exports){
/*jslint
    indent: 4,
    maxerr: 50,
    white: true,
    node: true,
    browser: true,
    devel: true,
    plusplus: true,
    regexp: true
*/
/*global atropa */
// end header

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
    descentionFn = (descentionFn || function () {return null;});
    ascentionFn = (ascentionFn || function () {return null;});
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
}
module.exports = objectWalk;
},{"object-foreach":2}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvYnJvd3Nlck1haW4uanMiLCJub2RlX21vZHVsZXMvb2JqZWN0LWZvcmVhY2gvc3JjL29iamVjdC1mb3JlYWNoLmpzIiwic3JjL29iamVjdC13YWxrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJvYmplY3RXYWxrID0gcmVxdWlyZSgnLi4vc3JjL29iamVjdC13YWxrLmpzJyk7XHJcbiIsIi8qKlxyXG4gKiBFeGVjdXRlcyBhIGZ1bmN0aW9uIG9uIGVhY2ggb2YgYW4gb2JqZWN0cyBvd24gZW51bWVyYWJsZSBwcm9wZXJ0aWVzLiBUaGVcclxuICogIGNhbGxiYWNrIGZ1bmN0aW9uIHdpbGwgcmVjZWl2ZSB0aHJlZSBhcmd1bWVudHM6IHRoZSB2YWx1ZSBvZiB0aGUgY3VycmVudFxyXG4gKiAgcHJvcGVydHksIHRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eSwgYW5kIHRoZSBvYmplY3QgYmVpbmcgcHJvY2Vzc2VkLiBUaGlzIGlzXHJcbiAqICByb3VnaGx5IGVxdWl2YWxlbnQgdG8gdGhlIHNpZ25hdHVyZSBmb3IgY2FsbGJhY2tzIHRvXHJcbiAqICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5cclxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIGFjdCBvbi5cclxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGZ1bmN0aW9uIHRvIGV4ZWN1dGUuXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGdpdmVuIG9iamVjdC5cclxuICovXHJcbmZ1bmN0aW9uIG9iamVjdEZvcmVhY2gob2JqLCBjYWxsYmFjaykge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcclxuICAgICAgICBjYWxsYmFjayhvYmpbcHJvcF0sIHByb3AsIG9iaik7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBvYmo7XHJcbn07XHJcbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0Rm9yZWFjaDsiLCIvKmpzbGludFxyXG4gICAgaW5kZW50OiA0LFxyXG4gICAgbWF4ZXJyOiA1MCxcclxuICAgIHdoaXRlOiB0cnVlLFxyXG4gICAgbm9kZTogdHJ1ZSxcclxuICAgIGJyb3dzZXI6IHRydWUsXHJcbiAgICBkZXZlbDogdHJ1ZSxcclxuICAgIHBsdXNwbHVzOiB0cnVlLFxyXG4gICAgcmVnZXhwOiB0cnVlXHJcbiovXHJcbi8qZ2xvYmFsIGF0cm9wYSAqL1xyXG4vLyBlbmQgaGVhZGVyXHJcblxyXG4vKipcclxuICogV2Fsa3MgdGhyb3VnaCBhbiBvYmplY3QgZXhlY3V0aW5nIHVzZXIgZGVmaW5lZCBmdW5jdGlvbnMgYXQgZXZlcnkgbm9kZSBvbiB0aGUgXHJcbiAqICB3YXkgZG93biBhbmQgYmFjayB1cC4gRnVuY3Rpb25zIHdpbGwgYmUgZ2l2ZW4gdGhyZWUgYXJndW1lbnRzOiB0aGUgdmFsdWVcclxuICogIG9mIHRoZSBjdXJyZW50IG5vZGUsIHRoZSBuYW1lIG9mIHRoZSBjdXJyZW50IG5vZGUsIGFuZCB0aGUgb2JqZWN0IGJlaW5nXHJcbiAqICBiZWluZyB3YWxrZWQgdGhyb3VnaC4gVGhpcyByb3VnaGx5IHJlc2VtYmxlcyB0aGUgY2FsbGJhY2sgc2lnbmF0dXJlIG9mXHJcbiAqICBBcnJheS5wcm90b3R5cGUubWFwLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gd2FsayB0aHJvdWdoLlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZGVzY2VudGlvbkZuID0gZnVuY3Rpb24gKCkge3JldHVybiBudWxsO31dIGNhbGxiYWNrXHJcbiAqICBmdW5jdGlvbiB0byBiZSBleGVjdXRlZCBhdCBldmVyeSBub2RlIGZyb20gdGhlIHRvcCBkb3duLlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbYXNjZW50aW9uRm4gPSBmdW5jdGlvbiAoKSB7cmV0dXJuIG51bGw7fV0gY2FsbGJhY2tcclxuICogIGZ1bmN0aW9uIHRvIGJlIGV4ZWN1dGVkIGF0IGV2ZXJ5IG5vZGUgZnJvbSB0aGUgYm90dG9tIHVwLlxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBvYmplY3Qgd2l0aCBlbXB0eSB2YWx1ZXMgcmVtb3ZlZC5cclxuICovXHJcbmZ1bmN0aW9uIG9iamVjdFdhbGsob2JqLCBkZXNjZW50aW9uRm4sIGFzY2VudGlvbkZuKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIGRlc2NlbnRpb25GbiA9IChkZXNjZW50aW9uRm4gfHwgZnVuY3Rpb24gKCkge3JldHVybiBudWxsO30pO1xyXG4gICAgYXNjZW50aW9uRm4gPSAoYXNjZW50aW9uRm4gfHwgZnVuY3Rpb24gKCkge3JldHVybiBudWxsO30pO1xyXG4gICAgdmFyIG9iamVjdEZvcmVhY2ggPSByZXF1aXJlKCdvYmplY3QtZm9yZWFjaCcpO1xyXG4gICAgZnVuY3Rpb24gd2FsayhvYmopIHtcclxuICAgICAgICBvYmplY3RGb3JlYWNoKG9iaiwgZnVuY3Rpb24gKHZhbCwgcHJvcCwgYU9iaikge1xyXG4gICAgICAgICAgICBkZXNjZW50aW9uRm4odmFsLCBwcm9wLCBhT2JqKTtcclxuICAgICAgICAgICAgaWYgKHZhbCBpbnN0YW5jZW9mIE9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgd2Fsayh2YWwpO1xyXG4gICAgICAgICAgICAgICAgYXNjZW50aW9uRm4odmFsLCBwcm9wLCBhT2JqKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gd2FsayhvYmopO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0V2FsazsiXX0=
