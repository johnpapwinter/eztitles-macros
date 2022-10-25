# eztitles-macros
small utility scripts made with EZTitles' API

1. all_subs_to_bottom_position: runs through all events in the file moving all to the bottom-center position
2. diacritics-replacements: globally change punctuation characters that might cause an issue when read by broadcast players
3. send_sub_to_draftlist: sends the first and last 10 sub events to the draftlist, then picks 3 points in the video duration between and sends all sub events included in them in the draft list
4. set_already_raised_subs_to_two_rows: selects all raised events in the file and sets them to be raised two rows
5. broadcast_checks: replaces erroneous diacritics, checks if credits are valid
