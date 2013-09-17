;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"object-foreach":2}]},{},[1])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGthc3RvclxcRGVza3RvcFxcb2JqZWN0LXdhbGtcXGRldlxcYnJvd3Nlck1haW4uanMiLCJDOlxcVXNlcnNcXGthc3RvclxcRGVza3RvcFxcb2JqZWN0LXdhbGtcXG5vZGVfbW9kdWxlc1xcb2JqZWN0LWZvcmVhY2hcXHNyY1xcb2JqZWN0LWZvcmVhY2guanMiLCJDOlxcVXNlcnNcXGthc3RvclxcRGVza3RvcFxcb2JqZWN0LXdhbGtcXHNyY1xcb2JqZWN0LXdhbGsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIm9iamVjdFdhbGsgPSByZXF1aXJlKCcuLi9zcmMvb2JqZWN0LXdhbGsuanMnKTtcclxuIiwiLyoqXHJcbiAqIEV4ZWN1dGVzIGEgZnVuY3Rpb24gb24gZWFjaCBvZiBhbiBvYmplY3RzIG93biBlbnVtZXJhYmxlIHByb3BlcnRpZXMuIFRoZVxyXG4gKiAgY2FsbGJhY2sgZnVuY3Rpb24gd2lsbCByZWNlaXZlIHRocmVlIGFyZ3VtZW50czogdGhlIHZhbHVlIG9mIHRoZSBjdXJyZW50XHJcbiAqICBwcm9wZXJ0eSwgdGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5LCBhbmQgdGhlIG9iamVjdCBiZWluZyBwcm9jZXNzZWQuIFRoaXMgaXNcclxuICogIHJvdWdobHkgZXF1aXZhbGVudCB0byB0aGUgc2lnbmF0dXJlIGZvciBjYWxsYmFja3MgdG9cclxuICogIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gYWN0IG9uLlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gdG8gZXhlY3V0ZS5cclxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgZ2l2ZW4gb2JqZWN0LlxyXG4gKi9cclxuZnVuY3Rpb24gb2JqZWN0Rm9yZWFjaChvYmosIGNhbGxiYWNrKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xyXG4gICAgICAgIGNhbGxiYWNrKG9ialtwcm9wXSwgcHJvcCwgb2JqKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG9iajtcclxufTtcclxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RGb3JlYWNoOyIsIi8qKlxyXG4gKiBXYWxrcyB0aHJvdWdoIGFuIG9iamVjdCBleGVjdXRpbmcgdXNlciBkZWZpbmVkIGZ1bmN0aW9ucyBhdCBldmVyeSBub2RlIG9uIHRoZSBcclxuICogIHdheSBkb3duIGFuZCBiYWNrIHVwLiBGdW5jdGlvbnMgd2lsbCBiZSBnaXZlbiB0aHJlZSBhcmd1bWVudHM6IHRoZSB2YWx1ZVxyXG4gKiAgb2YgdGhlIGN1cnJlbnQgbm9kZSwgdGhlIG5hbWUgb2YgdGhlIGN1cnJlbnQgbm9kZSwgYW5kIHRoZSBvYmplY3QgYmVpbmdcclxuICogIGJlaW5nIHdhbGtlZCB0aHJvdWdoLiBUaGlzIHJvdWdobHkgcmVzZW1ibGVzIHRoZSBjYWxsYmFjayBzaWduYXR1cmUgb2ZcclxuICogIEFycmF5LnByb3RvdHlwZS5tYXAuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byB3YWxrIHRocm91Z2guXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtkZXNjZW50aW9uRm4gPSBmdW5jdGlvbiAoKSB7cmV0dXJuIG51bGw7fV0gY2FsbGJhY2tcclxuICogIGZ1bmN0aW9uIHRvIGJlIGV4ZWN1dGVkIGF0IGV2ZXJ5IG5vZGUgZnJvbSB0aGUgdG9wIGRvd24uXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFthc2NlbnRpb25GbiA9IGZ1bmN0aW9uICgpIHtyZXR1cm4gbnVsbDt9XSBjYWxsYmFja1xyXG4gKiAgZnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWQgYXQgZXZlcnkgbm9kZSBmcm9tIHRoZSBib3R0b20gdXAuXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG9iamVjdCB3aXRoIGVtcHR5IHZhbHVlcyByZW1vdmVkLlxyXG4gKi9cclxuZnVuY3Rpb24gb2JqZWN0V2FsayhvYmosIGRlc2NlbnRpb25GbiwgYXNjZW50aW9uRm4pIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgZGVzY2VudGlvbkZuID0gZGVzY2VudGlvbkZuIHx8IGZ1bmN0aW9uICgpIHtyZXR1cm4gbnVsbDt9XHJcbiAgICBhc2NlbnRpb25GbiA9IGFzY2VudGlvbkZuIHx8IGZ1bmN0aW9uICgpIHtyZXR1cm4gbnVsbDt9XHJcbiAgICB2YXIgb2JqZWN0Rm9yZWFjaCA9IHJlcXVpcmUoJ29iamVjdC1mb3JlYWNoJyk7XHJcbiAgICBmdW5jdGlvbiB3YWxrKG9iaikge1xyXG4gICAgICAgIG9iamVjdEZvcmVhY2gob2JqLCBmdW5jdGlvbiAodmFsLCBwcm9wLCBhT2JqKSB7XHJcbiAgICAgICAgICAgIGRlc2NlbnRpb25Gbih2YWwsIHByb3AsIGFPYmopO1xyXG4gICAgICAgICAgICBpZiAodmFsIGluc3RhbmNlb2YgT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICB3YWxrKHZhbCk7XHJcbiAgICAgICAgICAgICAgICBhc2NlbnRpb25Gbih2YWwsIHByb3AsIGFPYmopO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuICAgIHJldHVybiB3YWxrKG9iaik7XHJcbn07XHJcbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0V2FsazsiXX0=
;