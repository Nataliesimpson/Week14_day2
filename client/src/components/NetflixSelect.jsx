var React = require('react')

var NetflixSelect = React.createClass({

  //we want the select to keep tabs on its own state//
  //and change when its clicked//
  //first we set the inital state//
  getInitialState: function(){
    return {selectedIndex: null}
  },

  handleChange: function(e){
    e.preventDefault()
    var newIndex = e.target.value
    this.setState({selectedIndex: newIndex})
    this.props.setCurrentFilm(this.props.films[newIndex])
  },

  render: function(){
    var options = this.props.films.map(function(film, index) {
      return(
       <option value={index} key={index}>
       {film.show_title}
       </option>
       )
    }.bind(this))
    return(
      //we want to listen to when the select has changed//
    <select value={this.state.selectedIndex} onChange={this.handleChange}>
    {options}
    </select>
    )
  }
})

module.exports = NetflixSelect











