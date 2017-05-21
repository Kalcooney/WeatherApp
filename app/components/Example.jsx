var React = require('react');
var {Link} = require('react-router');

var Example = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">Examples</h1>
            <p>Here are a few example locations to try out</p>
            <ol>
                <li>
                    <Link to="/?location=Hamilton">Hamilton, NZ</Link>
                </li>
                <li>
                    <Link to="/?location=NewYorkCity">New York City, USA</Link>
                </li>
            </ol>
        </div>
    )
};
module.exports = Example;