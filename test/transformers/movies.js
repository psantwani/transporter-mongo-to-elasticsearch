module.exports = function(doc) {
console.log(JSON.stringify(doc));
  doc._id = doc.data._id['$oid'];
  return doc
}
