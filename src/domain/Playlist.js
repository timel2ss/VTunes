export default class Playlist {
  constructor(number, playlistName, listOfMusic) {
    this.numberOfMusic = number;
    this.playlistName = playlistName;
    this.listOfMusic = listOfMusic;
  }

  addMusic(music) {
    this.listOfMusic.push(music);
    this.numberOfMusic = this.listOfMusic.length;
  }

  deleteMusic(index) {
    if (index >= 0 && index < this.listOfMusic.length) {
      this.listOfMusic.splice(index, 1);
      this.numberOfMusic = this.listOfMusic.length;
    }
  }

  adjustOrder(from, to) {
    if (from >= 0 && from < this.listOfMusic.length && to >= 0 && to < this.listOfMusic.length) {
      const movedMusic = this.listOfMusic.splice(from, 1)[0];
      this.listOfMusic.splice(to, 0, movedMusic);
    }
  }

  renamePlaylist(name) {
    this.playlistName = name;
  }
}