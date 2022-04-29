/**
 * Challenge:
 * 
 * Check this website for how to change the Content-Type header
 * to indicate that there's JSON in the request body.
 * 
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options
 * 
 * Apply that header to our fetch request, send it, and check what comes back.
 */

fetch("https://apis.scrimba.com/jsonplaceholder/todos", {
    method: "POST",
    body: JSON.stringify({
        title: "Buy Milk",
        completed: false
    }),
    /*if we don't set the content-type the browser doesn't know what to do with the body if we tell the browser content type it parse the json body and added to db for example*/
    headers: {
        "Content-Type": "application/json"
    }
})
    .then(res => res.json())
    .then(data => console.log(data))