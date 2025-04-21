// checks if user is logged in and updates the dropdown menu accordingly
document.addEventListener('DOMContentLoaded', () => {
    
    // fetch the login status from the server
    fetch('../php/checkLoginStatus.php')
        .then(response => response.json()) // parse the to JSON
        .then(data => { // with JSON data
            const dropdown = document.getElementById('blog-dropdown');
            dropdown.innerHTML = ''; // clear existing content

            // if user is logged in, show post and logout options
            // else show login option
            if (data.loggedin) {
                dropdown.innerHTML = `
                    <a href="../php/addEntry.php">Post</a>
                    <a href="../php/logout.php">Logout</a>
                `;
            } else {
                dropdown.innerHTML = `<a href="../pages/login.html">Login</a>`;
            }
        })
        .catch(error => console.error('Error fetching login status:', error));
});
