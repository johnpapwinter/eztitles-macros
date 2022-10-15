if (!MoviePlayer.IsVideoLoaded) {
  MessageBox("Warning! Video not loaded", MB_OK);
}

ReplaceAll([
  { Find: '…', Replace: '...' },
  { Find: '- ', Replace: '-' },
  { Find: '–', Replace: '-' },
  { Find: '«', Replace: '"' },
  { Find: '»', Replace: '"' },
  { Find: '’', Replace: "'" }
])
