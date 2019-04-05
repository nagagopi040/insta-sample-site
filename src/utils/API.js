import { openDB } from 'idb';
import axios from "axios";
import '@babel/polyfill';

export const DB_Details = {
    database: "PostStore",
    store: "posts"
}

const dbPromise = openDB(DB_Details.database, 1, {
    upgrade(db) {
        db.createObjectStore(DB_Details.store);
    }
});

export const API = {
    async get(key) {
        return (await dbPromise).get(DB_Details.store, key);
    },
    async set(key, val) {
        return (await dbPromise).put(DB_Details.store, val, key);
    },
    async delete(key) {
        return (await dbPromise).delete(DB_Details.store, key);
    },
    async clear() {
        return (await dbPromise).clear(DB_Details.store);
    },
    async keys() {
        return (await dbPromise).getAllKeys(DB_Details.store);
    },
    getInitialPosts: () => {
        axios.get("http://www.mocky.io/v2/5ca5dfd53300008c532ea9e2")
            .then(res => {
                API.set("posts", res.data);
            }).catch(err => {
                console.log(err);
            })
        return API.get("posts");
    }  
}
