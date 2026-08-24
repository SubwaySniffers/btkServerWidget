// The URL of the website or API returning JSON data
const url = 'https://discord.com/api/guilds/1448709429678575728/widget.json';

// Fetch the data from the website
fetch(url)
  .then(response => {
    // Check if the network request was successful
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Convert the response to usable JSON
  })
  .then(data => {
    // Select the HTML element where data will go
    const listContainer = document.getElementById('user-list');
    const p = document.getElementById('dataa');
    p.textContent = `${data}`;

    // Loop through the array of JSON objects
    const members = data.members;
    members.forEach(user => {
      // Create a new list item element
      const listItem = document.createElement('li');
      
      // Safe way to add text data to prevent security vulnerabilities
      listItem.textContent = `${user.username}`;
      
      // Append the list item to your HTML container
      listContainer.appendChild(listItem);
    });
  })
  .catch(error => {
    // Handle any errors that happen during fetch
    console.error('There was a problem fetching the data:', error);
  });
