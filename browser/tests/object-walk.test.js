describe('object-walk', function () {
    it('executes the descention function', function () {
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
        expect(obj).toEqual({
            child1 : {
                data : "changed"
            },
            child2 : {
                data : "changed"
            }
        });
    });
    it('executes the ascention function', function () {
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
        expect(obj).toEqual({
            child1 : {
                data : {
                    child4 : {
                        data : "changed"
                    }
                }
            },
            child2 : {
                data : "some data"
            }
        });
    });
});



