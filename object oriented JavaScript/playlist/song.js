function Song(title, artist, duration) {
  var song = this;
  Media.call(song, title, duration);
  this.artist = artist;
}

Song.prototype = Object.create(Media.prototype);

Song.prototype.toHTML = function() { // function to build HTML output to build playlist
  var htmlString = "<li";
  if(this.isPlaying) {
    htmlString += " class='current'";
  }
  htmlString += ">"
  htmlString += this.title;
  htmlString += " - "
  htmlString += this.artist;
  htmlString += "<span class='duration'>"
  htmlString += this.duration;
  htmlString += "</span></li>"

  return htmlString;
};
