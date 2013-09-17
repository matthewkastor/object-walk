# object-walk

Walks through an object executing user defined functions at every node on the 
 way down and back up. Functions will be given three arguments: the value
 of the current node, the name of the current node, and the object being
 being walked through. This roughly resembles the callback signature of
 Array.prototype.map.

## Installation

```
npm install object-walk
```

## Usage

In node:

```
objectWalk = require('object-walk');
var obj = {
    child1 : {
        data : "some data"
    },
    child2 : {
        data : "some data"
    }
};
function descentionFn (val, prop, obj) {
    if (val === "some data") {
        obj[prop] = "changed";
    }
}
objectWalk(obj, descentionFn);
```

```
var obj = {
    child1 : {
        data : {
            child3 : {
                data : "some data"
            },
            child4 : {
                data : "some data"
            }
        }
    },
    child2 : {
        data : "some data"
    }
};
function ascentionFn (val, prop, obj) {
    if (prop === "data") {
        delete obj[prop].child3;
    }
    if (prop === "child4") {
        obj[prop].data = "changed";
    }
}
objectWalk(obj, null, ascentionFn);
```

In the browser, include `./browser/object-walk_web.js` in your page. `objectWalk`
 will be available in your page.
