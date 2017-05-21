var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center">About</h1>
            <h4 className="text-center">What is Kal Weather?</h4>
            <p>Kal Weather is a web application that allows you to search for a city and get back the current temperature
                for that city. <br /><br />
                The application is built with React and was created to demonstrate and reinforce my knowledge of the
                React framework.
            </p>
        </div>
    )
};

module.exports = About;