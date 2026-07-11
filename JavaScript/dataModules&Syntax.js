// Import the datejs package
require("datejs");

// Create a function that accepts any number of arrays
function combineUsers(...args) {
    let combinedObject = {
        users: []
    };

    // Loop through each array inside args
    for (let array of args) {

        // Add all usernames into the users array
        combinedObject.users = [
            ...combinedObject.users,
            ...array
        ];
    }

    // Add today's date in M/d/yyyy format
    combinedObject.merge_date = Date.today().toString("M/d/yyyy");

    // Return the completed object
    return combinedObject;
}

// Export the function so the tests can use it
module.exports = {
    combineUsers
};