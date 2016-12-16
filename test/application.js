Source({name:"localmongo", namespace:"foo.bar"})
.transform({filename: "transformers/addFullName.js", namespace: "foo.bar"})
.save({name:"es", namespace:"foo.bar"});