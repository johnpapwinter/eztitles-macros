function replaceDiacritics(subEvent) {
  var txtLength = subEvent.Text.length;

  subEvent.SetTextRange(0, txtLength, subEvent.Text.replace(";", ","));
  subEvent.SetTextRange(0, txtLength, subEvent.Text.replace("  ", " "));
  subEvent.SetTextRange(0, txtLength, subEvent.Text.replace("…", "..."));
  subEvent.SetTextRange(0, txtLength, subEvent.Text.replace("- ", "-"));
  subEvent.SetTextRange(0, txtLength, subEvent.Text.replace("–", "-"));
  subEvent.SetTextRange(0, txtLength, subEvent.Text.replace('«', '"'));
  subEvent.SetTextRange(0, txtLength, subEvent.Text.replace('»', '"'));
  subEvent.SetTextRange(0, txtLength, subEvent.Text.replace("’", "'"));

}


var LogList = [];

var start = 0;
if (Subtitles.HasZero) {
  start = 1;
}

for (i = start; i < Subtitles.Count; i++) {
  sub = Subtitles.Subtitle(i);

  replaceDiacritics(sub);

  if(!sub.HasText) {
    LogList.push(sub);
  }
}

