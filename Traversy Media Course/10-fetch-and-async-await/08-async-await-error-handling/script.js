// Method 1( Using Try Catch statement )

const getUsers = async () => {
  try {
    // const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const response = await fetch("http://httpstat.us/404");

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const data = await response.text();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// getUsers();

// Method 2
const getPosts = async () => {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const response = await fetch("http://httpstat.us/500");

  if (!response.ok) {
    throw new Error("Request failed");
  }

  const data = await response.text();

  console.log(data);
};

getPosts().catch((err) => console.log(err));
