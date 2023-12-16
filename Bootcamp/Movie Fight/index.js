// Configuration object for autocomplete
const autoCompleteConfig = {
  renderOption: (movie) => {
    const imageSrc = movie.Poster === "N/A" ? "" : movie.Poster;

    return `
    <img src="${imageSrc}"/>
        ${movie.Title} (${movie.Year})
    `;
  },
  inputValue: (movie) => {
    return movie.Title;
  },
  fetchData: async (searchTerm) => {
    const { data } = await axios.get("http://www.omdbapi.com/", {
      params: {
        apikey: "fdcafb23",
        s: searchTerm,
      },
    });

    if (data.Error) {
      return [];
    }

    return data.Search;
  },
};

// Initialize autocomplete for both sides
createAutoComplete({
  ...autoCompleteConfig,
  root: document.querySelector("#right-autocomplete"),
  onOptionSelect: (movie) => {
    document.querySelector(".tutorial").classList.add("is-hidden");
    onMovieSelect(movie, document.getElementById("right-summary"), "right");
  },
});

createAutoComplete({
  ...autoCompleteConfig,
  root: document.querySelector("#left-autocomplete"),
  onOptionSelect: (movie) => {
    document.querySelector(".tutorial").classList.add("is-hidden");
    onMovieSelect(movie, document.getElementById("left-summary"), "left");
  },
});

// Variables to store selected movies
let leftMovie;
let rightMovie;

// Function to fetch movie details and update summary
const onMovieSelect = async (movie, summaryElement, side) => {
  const { data } = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "fdcafb23",
      i: movie.imdbID,
    },
  });

  summaryElement.innerHTML = movieTemplate(data);

  if (side === "left") {
    leftMovie = data;
  } else {
    rightMovie = data;
  }

  // If both movies are selected, run the comparison
  if (leftMovie && rightMovie) {
    runComparison();
  }
};

// Function to compare and update styles based on movie statistics
const runComparison = () => {
  const leftSideStats = document.querySelectorAll(
    "#left-summary .notification"
  );
  const rightSideStats = document.querySelectorAll(
    "#right-summary .notification"
  );

  leftSideStats.forEach((leftStat, index) => {
    const rightStat = rightSideStats[index];

    const leftSideValue = leftStat.dataset.value;
    const rightSideValue = rightStat.dataset.value;

    // To make background color either green or yellow
    if (rightSideValue > leftSideValue) {
      leftStat.classList.remove("is-primary");
      leftStat.classList.add("is-warning");
    } else {
      rightStat.classList.remove("is-primary");
      rightStat.classList.add("is-warning");
    }
  });
};

// Function to generate HTML template for movie details
const movieTemplate = (movieDetail) => {
  const dollars = parseInt(
    movieDetail.BoxOffice.replace(/\$/g, "").replace(/,/g, "")
  );
  const metaScore = parseInt(movieDetail.Metascore);
  const imdbRating = parseInt(movieDetail.imdbRating);
  const imdbVotes = parseInt(movieDetail.imdbVotes.replace(/,/g, ""));
  const awards = movieDetail.Awards.split(" ").reduce((prev, word) => {
    const value = parseInt(word);

    if (isNaN(value)) {
      return prev;
    } else {
      return prev + value;
    }
  }, 0);

  return `
  <article class="media">
    <figure class="media-left">
      <p class="image">
        <img src="${movieDetail.Poster}" />
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <h1>${movieDetail.Title}</h1>   
        <h4>${movieDetail.Genre}</h4>
        <p>${movieDetail.Plot}</p>
      </div>
    </div>
  </article> 
  <article data-value="${awards}" class="notification is-primary">
    <p class="title">${movieDetail.Awards}<p/>
    <p class="subtitle">Awards</p>
  </article>   
  <article data-value="${dollars}" class="notification is-primary">
    <p class="title">${movieDetail.BoxOffice}<p/>
    <p class="subtitle">Box Office</p>
  </article>   
  <article data-value="${metaScore}" class="notification is-primary">
    <p class="title">${movieDetail.Metascore}<p/>
    <p class="subtitle">Metascore</p>
  </article>   
  <article data-value="${imdbRating}" class="notification is-primary">
    <p class="title">${movieDetail.imdbRating}<p/>
    <p class="subtitle">IMDB Rating</p>
  </article>   
  <article data-value="${imdbVotes}" class="notification is-primary">
    <p class="title">${movieDetail.imdbVotes}<p/>
    <p class="subtitle">IMDB Votes</p>
  </article>   
  `;
};
