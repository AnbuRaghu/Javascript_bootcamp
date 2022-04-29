// Pseudo code for the solution

// create a function getUser()
    // try 
        // await fetch call into a variable
        // if response is not ok
            // throw an error
        // if response is ok
            // remember that response.json is a promise, 
            // so it needs to be awaited. 
            // Store the result in a variable
            // Log the message with person's details to the console. 
    // catch any errors
        // display errors in the console