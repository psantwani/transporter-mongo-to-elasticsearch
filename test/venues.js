//transporter run --config ./test/config.yaml ./test/venues.js
Source({name:"localmongo", namespace:"elasticsearch.venues"})
.transform({filename: "transformers/venues.js", namespace: "bookmyshow.venues"})
.save({name:"es", namespace:"bookmyshow.venues"});