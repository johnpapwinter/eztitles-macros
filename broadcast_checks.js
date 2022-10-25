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


function validateCredits() {
  var subNo = Subtitles.Count - 1;

  credit1 = Subtitles.Subtitle(subNo);
  if (credit1.Text.split(":")[0] !== "Subtitling") {
    return false;
  }

  credit2 = Subtitles.Subtitle(subNo - 1);
  if (credit2.Text.split(":")[0] !== "Proofreading") {
    return false;
  }

  credit3 = Subtitles.Subtitle(subNo - 2);
  if (credit3.Text.split(":")[0] !== "Translation") {
    return false;
  }

  return true;
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


if (!validateCredits() {
  MessageBox("Error in Credits!", MB_OK);
}