const scriptURL = 'PASTE_YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'; 

function handleLogin() {
    const user = document.getElementById('username').value;
    if(user === "") return alert("Please enter a handle.");
    
    // This sends the data to your Google Sheet backend
    fetch(scriptURL, { 
        method: 'POST', 
        mode: 'no-cors',
        body: JSON.stringify({ user: user, action: 'login' }) 
    })
    .then(() => alert("Sovereign Initialization Complete. Welcome, " + user + "&gocaptify"));
}