var React = require('react');
var ReactDOM = require('react-dom');
var NetflixBox = require('./components/NetflixBox')

window.onload = function(){
  ReactDOM.render(
    <NetflixBox />,
    document.getElementById('app')
  )
}
