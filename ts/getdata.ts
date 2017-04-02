

import * as events from 'events';
import * as sqlite3 from 'sqlite3';

let dbConfig = {
    dbFileName: "pxdb"
}

let pxdb = new sqlite3.Database(dbConfig.dbFileName);

export interface IPriceData {

}

export class PriceData implements IPriceData{
    public testFunc() {
        console.log("in test fun");
    }
}




/*
Check existence of database.
Create database.
Check existence of symbol in DB.
Check last date of symbol in DB.
If date overlap - how to do primary keys?  or select first one?
Build api call.
Build sql query.


*/