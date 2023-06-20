class tvMovie {
  constructor(media) {
    if ("name" in media) {
      this.name = media.name;
    } else if ("title" in media) {
      this.name = media.title;
    }
    this.id = media.id;
    this.overview = media.overview;
    this.poster_path = media.poster_path;
    this.media_type = media.media_type;
    this.vote_average = media.vote_average;
  }
}

export default tvMovie;
