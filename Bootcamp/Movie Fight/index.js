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

createAutoComplete({
  ...autoCompleteConfig,
  root: document.querySelector("#right-autocomplete"),
  onOptionSelect: (movie) => {
    document.querySelector(".tutorial").classList.add("is-hidden");
    onMovieSelect(movie, document.getElementById("right-summary"));
  },
});

createAutoComplete({
  ...autoCompleteConfig,
  root: document.querySelector("#left-autocomplete"),
  onOptionSelect: (movie) => {
    document.querySelector(".tutorial").classList.add("is-hidden");
    onMovieSelect(movie, document.getElementById("left-summary"));
  },
});

const onMovieSelect = async (movie, summaryElement) => {
  const { data } = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "fdcafb23",
      i: movie.imdbID,
    },
  });

  summaryElement.innerHTML = movieTemplate(data);
};

const movieTemplate = (movieDetail) => {
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
  <article class="notification is-primary">
    <p class="title">${movieDetail.Awards}<p/>
    <p class="subtitle">Awards</p>
  </article>   
  <article class="notification is-primary">
    <p class="title">${movieDetail.BoxOffice}<p/>
    <p class="subtitle">Box Office</p>
  </article>   
  <article class="notification is-primary">
    <p class="title">${movieDetail.Metascore}<p/>
    <p class="subtitle">Metascore</p>
  </article>   
  <article class="notification is-primary">
    <p class="title">${movieDetail.imdbRating}<p/>
    <p class="subtitle">IMDB Rating</p>
  </article>   
  <article class="notification is-primary">
    <p class="title">${movieDetail.imdbVotes}<p/>
    <p class="subtitle">IMDB Votes</p>
  </article>   
  `;
};
