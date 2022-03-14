//gets previous response and gets a random field
var response = JSON.parse(prev.getResponseDataAsString())
var randomId = response.records[Math.floor(Math.random()*response.records.length)].id
vars.put("randomId",randomId)