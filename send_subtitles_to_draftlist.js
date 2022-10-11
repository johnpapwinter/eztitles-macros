function FirstXToDraft()
{
    cnt=1;
    for (j=start; j<Subtitles.Count; j++){
        sub=Subtitles.Subtitle(j);
        if (cnt<=firstX) {

            DraftList.Add(sub);
            sub.Comment+=((sub.Comment != '')?'\r\n':'') +cnt+' of '+firstX+' subtitles in the beginning of file added to Draft.';
            cnt++;

        }
        else {
            break;
        }
    }
}

function LastXToDraft()
{
    cnt=lastX;
    for (j=Subtitles.Count; j>0; j--){
        sub=Subtitles.Subtitle(j-1);
        if (cnt>=1){
            DraftList.Add(sub);
            sub.Comment+=((sub.Comment != '')?'\r\n':'') +cnt+' of '+lastX+' subtitles from the end of file added to Draft.';
            cnt--;
        }
        else {
        break;
        }
    }
}

function ChekDistance(num, videoMark, before, after)
{
    var qPos=Math.round(last*videoMark);
    var tc=MoviePlayer.TCforFrame(qPos);
    var sub=Subtitles.Subtitle(num);
    var FOut=MoviePlayer.FrameForTC(sub.OutCue);
    var FIn=MoviePlayer.FrameForTC(sub.InCue);

        if ((FIn==-1)||(FOut==-1))
        {
            return;
        }
        if ((FIn<=qPos)&&(qPos<=FOut))
        {
            DraftList.Add(sub);
            var msg='Subtitle is split by position ' + videoMark*100 + '%: ' + TCtoStr(tc);
            /*Warning message in Comments when one of the specified video positions splits a subtitle*/
            sub.Comment+=((sub.Comment != '')?'\r\n':'') + msg;
        }
        else
            {    if ( (FOut<=qPos)&&((qPos-FOut)<=before*fps)  )
                {
                    DraftList.Add(sub);
                    var msg='Out-cue ' + before + 'sec before position ' + videoMark*100 + '%: ' + TCtoStr(tc);
                    /*Warning message in Comments when subtitles' OUT-CUE is before the specific video position*/
                   sub.Comment+=((sub.Comment != '')?'\r\n':'') + msg;
                }
                if ( (qPos<=FIn)&&((FIn-qPos)<=after*fps) )
                {
                    DraftList.Add(sub);
                    var msg='In-cue '+ after+ 'sec after position ' + videoMark*100 + '%: ' + TCtoStr(tc);
                    /*Warning message in Comments when subtitles' IN-CUE is after the specific video position*/
                    sub.Comment+=((sub.Comment != '')?'\r\n':'') + msg;
                }
            }

}

if (!MoviePlayer.IsVideoLoaded){
        MessageBox('No video loaded!', MB_ICONWARNING);
        Terminate;
}
var start=0;

if (Subtitles.HasZero){
    start=1;
}

var fps=Math.round(ProjectSettings.VideoFPS);
var last=MoviePlayer.VideoLength;
var BeforeInterval=1;/*BeforeInterval in seconds, used to check if OUT-CUE of a subtitle is X seconds before the specified video position.*/
var AfterInterval=3;/*AfterInterval in seconds, used to check if IN-CUE is Y seconds after the specified video position.*/

var firstX=10;/*specifies the number of subtitles from the BEGINNING of the file that will be added to the Draft List*/
var lastX=10; /*specified the number of subtitles from theEND of the file that will be added to the Draft List*/

for (i=start; i<Subtitles.Count;i++){
/*Checks are performed by the CheckDistance function. It has 4 arguments:
i - subtitle number, video position expressed as fraction (25%=0.25), BeforeInterval and AfterInterval interlvas. */
    ChekDistance(i,0.25,BeforeInterval,AfterInterval);
/*To add new video position simply copy & paste it on new line. Like this: */
    ChekDistance(i,0.50,BeforeInterval,AfterInterval);
/*Modify the 2nd argument to specify different position in the video. The above line will do the check for a position at 50% of the video (50%=0.5)*/
    ChekDistance(i,0.75,BeforeInterval,AfterInterval);
/*Add as many video positions as you need*/
}

FirstXToDraft()/*Adds the FIRST X subtitles to the Draft List*/

LastXToDraft();/*Adds the LAST X subtitles to the Draft List*/