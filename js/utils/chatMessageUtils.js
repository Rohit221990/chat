


export function getCreatedMessageData(text) {
  var timestamp = Date.now();
  return {
    id: 'm_' + timestamp,
    authorName: 'Rohit', // hard coded for the example
    date: new Date(timestamp),
    text: text,
  };
};
