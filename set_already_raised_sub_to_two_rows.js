if (!MoviePlayer.IsVideoLoaded) {
  MessageBox("Please load video", MB_OKCANCEL);
}

var LogList = []
var start = 0;

if (Subtitles.HasZero) {
  start = 1;
}


for (i = start; i < Subtitles.Count; i++) {
  sub = Subtitles.Subtitle(i);

  if (sub.VAlignment !== alVBottom) {
    sub.VAlignment = alVBottom;
    LogList.push(sub);
    if (sub.RowCount === 2) {
      sub.StartRow = 8;
    } else {
      sub.StartRow = 9;
    }
  }
}


if (LogList.length > 0) {
    ShowLogList(LogList, 'Custom checks');
} else {
    MessageBox('No subtitles match the criteria', MB_OK);
}
