Source({name:"localmongo", namespace:"elasticsearch.movies"})
.transform({filename: "transformers/movies.js", namespace: "bookmyshow.movies"})
.save({name:"es", namespace:"bookmyshow.movies"});