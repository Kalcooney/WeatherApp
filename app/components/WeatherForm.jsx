var React = require('react');
var WeatherForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();

        var location = this.refs.location.value; //get the value of the location input
        if (location.length > 0) { //if a value was entered into the input then do something
            this.refs.location.value = ''; //reset the input to an empty string
            this.props.onSearch(location);
        }
    },
    render: function() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="location" placeholder="Search Weather"/>
                    <button className="hollow button expanded">Get Weather</button>
                </form>
            </div>
        );
    }
});

module.exports = WeatherForm;