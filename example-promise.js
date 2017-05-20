/*
function getTempCallback (location, callback) {
    callback(undefined, 78);
    callback('City not found');
}

getTempCallback('Auckland', function(err, temp) {
    if (err) {
        console.log('error', err);
    } else {
        console.log('success', temp);
    }
});

function getTempPromise (location) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(79);
            reject('City not found');
        }, 1000);
    });
}

getTempPromise('Auckland').then(function (temp) {
    console.log('promise success', temp);
}, function (err) {
        console.log('promise error', err);
    }
); */

/*Challenge Area */
function addPromise (a, b) {
    return new Promise(function (resolve, reject) {
        if (typeof a == 'number' && typeof b == 'number') {
            resolve(a + b);
        } else {
            reject ('Invalid Input');
        }
    });
}

addPromise(10, 12).then(function (sum) {
    console.log('The sum of your two numbers is: ', sum);
}, function (err) {
    console.log(err);
    }
);

addPromise('Bob', 12).then(function (sum) {
        console.log('The sum of your two numbers is: ', sum);
    }, function (err) {
        console.log('Invalid input');
    }
);
