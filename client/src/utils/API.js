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
        return axios.delete("/api/books/" + id);
    },
    // Saves a book to the database
    updateToy: function() {
        return axios.put("/api/toys");
    }
};