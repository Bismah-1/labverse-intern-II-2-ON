
  // Q1:
  function fetchDataAfterDelay(data, delay) {
    return new Promise(function(resolve) {
      setTimeout(function() {
        resolve(data);
      }, delay);
    });
  }

  function handleButtonClick() {
    fetchDataAfterDelay("Data has been fetched!", 2000)
      .then(function(fetchedData) {
        document.getElementById('promiseResult').textContent = fetchedData;
        console.log(fetchedData);
      });
  }

  var button = document.getElementById('promiseBtn');
  button.addEventListener('click', handleButtonClick);



  // Q2:
  async function fetchDataAsync(data, delay) {
    const resultElement = document.getElementById('async-await-result');
    resultElement.textContent = "Waiting for data to be fetched.....";
    console.log("Waiting for data to be fetched.....");
    const result = await fetchDataAfterDelay(data, delay);
    resultElement.textContent =  result;
    console.log( result);
  }

  document.getElementById('btn-async-await').addEventListener('click', () => {
    fetchDataAsync("Data has been fetched!", 2000);
  });

  //Q3:
async function userDisplay() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    if (!response.ok) throw new Error('Error 404:)');
    const user = await response.json();
    const userInfoElement = document.getElementById('user-info');
    userInfoElement.textContent = `Name: ${user.name}, Email: ${user.email}`;
  } catch (error) {
    console.error("Failed to fetch data... Please try again.... Error 404:)");
  }
}

document.getElementById('fetchuserbtn').addEventListener('click', userDisplay);

//Q4:
async function fetchAndDisplayPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) throw new Error('Network response not ok');
    const posts = await response.json();
    const postsList = document.getElementById('posts-list');
    postsList.innerHTML = '';  // Clear previous posts if any
    posts.slice(0, 5).forEach(function(post) {
      const li = document.createElement('li');
      li.textContent = post.title;
      postsList.appendChild(li);
    });
  } catch (error) {
    console.error("Failed to fetch posts. Please try again later.");
  }
}

document.getElementById('btn-fetch-posts').addEventListener('click', fetchAndDisplayPosts);

 //Q5:
async function displayUserWithErrorHandling() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/nonexistent');
    if (!response.ok) {
      throw new Error('Error 404: Not Found');
    }
    const user = await response.json();
    const userInfoElement = document.getElementById('userinfoerror');
    userInfoElement.textContent = `Name: ${user.name}, Email: ${user.email}`;
  } catch (error) {
    console.error("Failed to fetch user data. Please try again later. Error:", error);
    const userInfoElement = document.getElementById('userinfoerror');
    userInfoElement.textContent = "Failed to fetch user data. Please try again later.";
  }
}

document.getElementById('errorbtn').addEventListener('click', displayUserWithErrorHandling);

