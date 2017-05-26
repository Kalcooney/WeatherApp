var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    onSearch: function (e) {
        e.preventDefault();

        var searchQuery = this.refs.searchQuery.value; //get the value of the search box
        var encodedLocation = encodeURIComponent(searchQuery);

        if (searchQuery.length > 0) {
            this.refs.searchQuery.value = '';
            window.location.hash = '#/?location=' + encodedLocation;
        }
    },
    render: function () {
        return(
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">Weather by Kal</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                        </li>
                        <li>
                            <Link to="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" ref="searchQuery" placeholder="Search Weather by city" />
                            </li>
                            <li>
                                <button type="submit" className="button">Get Weather</button>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = Nav;