document.getElementById('submit').addEventListener('click', function(event) {
    // Gets data from form
    var firstName = document.getElementById('firstName').value;
    var secondName = document.getElementById('secondName').value;
    var email = document.getElementById('email').value;
    var payload = {'firstName': firstName, 'secondnName': secondName, 'email': email};

    // Sends a request to httpbin
    var req = new XMLHttpRequest();
    req.open('POST', 'http://httpbin.org/post', true);
    req.setRequestHeader('Content-Type', 'application/json');
    
    // Listener that waits for the request to complete
    req.addEventListener('load', function(){  
        if(req.status >= 200 && req.status < 400){
            var res = JSON.parse(JSON.parse(req.responseText)['data']);
            alert(`Thanks for your message, ${res['firstName']}! I'll get back to you at ${res['email']} soon.`);
            
        } else {
            console.log("Error in network request: " + req.statusText);
        }});

    req.send(JSON.stringify(payload)); // Send data
    event.preventDefault();
});