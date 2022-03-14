function generateRandomString(length) {
    var randomString           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        randomString += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return randomString;
}

var dataSchema = {
    "records": [
    ]
  }

  for(var index=0;index<=Math.floor(Math.random() *2);index++){
    var item = {"fields":{
        "Transaction-Name": generateRandomString(10),
        "ResponseTime": Math.floor(Math.random()*1000),
        "Mar03": Math.floor(Math.random()*1000)
      }}
    dataSchema.records.push(item);
  }
vars.put("dataInsert",JSON.stringify(dataSchema))
log.info(JSON.stringify(dataSchema))