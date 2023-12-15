const fetchData = async (searchTerm) => {
  const { data } = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "fdcafb23",
      s: searchTerm,
    },
  });
};

const input = document.querySelector("input");

let timeoutId;
const onInput = (event) => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  timeoutId = setTimeout(() => {
    fetchData(event.target.value);
  }, 500);
};

input.addEventListener("input", onInput);
