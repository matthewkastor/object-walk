
/* vsdoc for _global_ */

(function (window) {
    

    window._global_ = {
        /// <summary></summary>
        /// <returns type="_global_"/>
                
        objectWalk: function(obj, descentionFn, ascentionFn) {
            /// <summary>Walks through an object executing user defined functions at every node on the 
            ///  way down and back up. Functions will be given three arguments: the value
            ///  of the current node, the name of the current node, and the object being
            ///  being walked through. This roughly resembles the callback signature of
            ///  Array.prototype.map.</summary>
            /// <param name="obj" type="Object">The object to walk through.</param>
            /// <param name="descentionFn" type="Function">callback
            ///  function to be executed at every node from the top down.</param>
            /// <param name="ascentionFn" type="Function">callback
            ///  function to be executed at every node from the bottom up.</param>
            /// <returns type="Object">Returns the object with empty values removed.</returns>
        }
        
    };

    var $x = window._global_;
    $x.__namespace = "true";
    $x.__typeName = "_global_";
})(this);
