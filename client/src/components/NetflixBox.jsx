var React = require('react')
var NetflixSelect = require('./NetflixSelect')
var NetflixDetail = require('./NetflixDetail')

var NetflixBox = React.createClass({

  //setting up initial state so that the box has an empty list of countries //
  getInitialState: function(){
    return{ films: [], currentFilm: null }
  },

  //sets the country that we want to focus on//
  //we then pass this method to the countries selector//
  setCurrentFilm: function(film){
    this.setState({currentFilm: film })
  },

  //this method will be triggered when the component has been rendered to the DOM //
  componentWillMount: function(){
    console.log("componentWillMount!!")
    var url = "http://netflixroulette.net/api/api.php?actor=Kevin%20Spacey"
    var request = new XMLHttpRequest()
    request.open("GET", url)
    request.onload = function(){
      if(request.status === 200){
        var data = JSON.parse(request.responseText)
        this.setState({films: data, currentFilm: data[0]})
      }
    }.bind(this)
    request.send(null)
  },

  render: function(){
    return (
      <div>
      <h4>Kevin Spacey Films</h4>
      <NetflixSelect films={this.state.films} setCurrentFilm={this.setCurrentFilm}/>
      <NetflixDetail film={ this.state.currentFilm}/>
      </div>
      )
  }
})



module.exports = NetflixBox




















