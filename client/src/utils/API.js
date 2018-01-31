import axios from "axios";

export default {
    // Gets all books
    getToys: function() {
        return axios.get("/api/toys");
    },
    // Gets the book with the given id
    getToy: function() {
        return axios.get("/api/toys/latest");
    },
    // Deletes the book with the given id
    deleteToy: function(id) {
        return axios.delete("/api/toys/" + id);
    },
    // Saves a book to the database
    updateToy: function(obj) {
        return axios.put("/api/toys" , obj);
    },
    latestToy: function() {
        return axios.get("/api/toys/latest");
    },
    userToy: function(user) {
        return axios.get("/api/toys/user",user);
    },
    createToy: function(obj) {
        return axios.post("/api/toys", obj);
    }

};