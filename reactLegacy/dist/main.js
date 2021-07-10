const React = require('react');
const ReactDOM = require('react-dom');

const Hello = () => {
    return React.createElement('div', {}, 'HELLO');
}

ReactDOM.render(React.createElement(Hello, {}, null), document.getElementById('root'));