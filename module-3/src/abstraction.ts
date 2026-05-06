// // oop -- abstraction

// // age idea
// // implementation pore korbo

// /*
// 1.interface
// 2.abstract class
// */

// interface MediaPlayer {
//   play(): void;
//   pause(): void;
//   stop(): void;
// }

// // implementation
// class MusicPlayer implements MediaPlayer {
//   play() {
//     console.log("Playing Music");
//   }

//   pause() {
//     console.log("Music Paused...");
//   }

//   stop() {
//     console.log(`Music Stopped...`);
//   }
// }

// const topuPlayer = new MusicPlayer();

// topuPlayer.play();

abstract class MediaPlayer {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}

class topuPlayer extends MediaPlayer {
  play() {
    console.log(`Playing Music...`);
  }

  pause() {
    console.log(`Music is Pause`);
  }

  stop() {
    console.log(`Music is stopped...`);
  }
}

const topuPlayer1 = new topuPlayer();
topuPlayer1.play();
