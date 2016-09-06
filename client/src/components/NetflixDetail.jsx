var React = require('react')

var NetflixDetail = React.createClass({

  render: function(){
    if(!this.props.film){
    return(
      <h4> No film yet!</h4>
      );
  }
  return(
    <div>
    <h4>{this.props.film.show_title}</h4>
    <p>Category: {this.props.film.category}</p>
    <p>Released: {this.props.film.release_year}</p>
    <p>Rating: {this.props.film.rating}</p>
    </div>
    )
  }
})

module.exports = NetflixDetail