const { useWindowResize } = require('./hooks/useWindowResize');

exports.printMsg = function() {
    console.log("This is a message from the demo package");
}

exports.useWindowResize = useWindowResize;
