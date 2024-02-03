// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: [],
  _lastMsg: undefined,

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
  getNew: function(messageData) {
    _lastMsg = messageData[messageData.length - 1];
    this._data = messageData;

  }

  // add: function(value) {
  //   _data.push(value);
  // }
};

