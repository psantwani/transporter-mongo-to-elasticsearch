//transporter run --config ./test/config.yaml ./test/venues.js
Source({name:"localmongo", namespace:"elasticsearch.regions"})
.transform({filename: "transformers/regions.js", namespace: "bookmyshow.regions"})
.save({name:"es", namespace:"bookmyshow.regions"});