if (!MoviePlayer.IsVideoLoaded) {
  MessageBox("Please load video", MB_OK);
}


var start = 0;
if (Subtitles.HasZero) {
  start = 1;
}

for (i = start; i < Subtitles.Count; i++) {
  sub = Subtitles.Subtitle(i);
  sub.VAlignment = alVBottom;
}

MessageBox("Operation completed", MB_OK);
