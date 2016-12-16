module.exports = function(doc) {
console.log(JSON.stringify(doc)); //If you are curious you can listen in on what's changed and being copied.
  doc._id = doc.data._id['$oid'];  
  doc["fullName"] = doc["firstName"] + " " + doc["lastName"];
  return doc
}
