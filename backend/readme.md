# Backend

### Endpoints

GET
/api/merdata/{id} 

returns json

MerDataResponse{
    "id" : int,
    "dataCh1" : [array of doubles],
    "dataCh2" : [array of doubles],
}

###

GET
/api/labels/{id}

returns json

Label{
    "id" : int,
    "labelStart" : int,
    "labelEnd" : int,
    "channel" : int (channel=={1,2})
    "merDataId" : int
}

###

PUT
/api/labels

put new label in the database

Label{
    "id" : int,
    "labelStart" : int,
    "labelEnd" : int,
    "channel" : int (channel=={1,2})
    "merDataId" : int
}

###

DELETE 
/api/labels/{id}
