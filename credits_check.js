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


if (!validateCredits() {
  MessageBox("Error in Credits!", MB_OK);
}