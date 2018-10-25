import axios from "axios";

export default {
  // Gets all envents
  getEvents: function() {
    return axios.get("/home");
  },
  // Gets the event with the given id
  getEvent: function(id) {
    return axios.get("/home/" + id);
  },
  // Deletes the event with the given id
  deleteEvent: function(id) {
    return axios.delete("/home/" + id);
  },
  // Saves an event to the database
  saveEvent: function(eventData) {
    return axios.post("/home", eventData);
  }
};
