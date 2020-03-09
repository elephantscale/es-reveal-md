var RevealSpeakerNote = window.RevealSpeakerNote || (function () {

    var speakerNoteIcon = document.createElement('div');
    speakerNoteIcon.id = "speakerNoteIcon";
    speakerNoteIcon.classList.add('btn-tools');
    speakerNoteIcon.style.position = 'fixed';
    speakerNoteIcon.style.bottom = '30px';
    speakerNoteIcon.style.left = '190px';
    speakerNoteIcon.style.top = 'auto';
    speakerNoteIcon.style.right = 'auto';
    speakerNoteIcon.style.zIndex = 30;
    speakerNoteIcon.style.fontSize = '24px';
    speakerNoteIcon.innerHTML = '<a href="#""><i class="fas fa-comment"></i></a>';




    function showSpeakerNote() {
        document.getElementById('speakerNoteIcon').getElementsByTagName('i')[0].className = 'fas fa-comment-slash';
        document.querySelector('div.speaker-notes').style.display = 'block';
        var mq = window.matchMedia("(max-width: 1024px)");
        if (mq.matches)
            document.querySelector('.reveal.show-notes').style.maxHeight = '75%';
        else
            document.querySelector('.reveal.show-notes').style.maxWidth = '75%';
    }

    function hideSpeakerNote() {
        document.getElementById('speakerNoteIcon').getElementsByTagName('i')[0].className = 'fas fa-comment';
        document.querySelector('div.speaker-notes').style.display = 'none';
        var mq = window.matchMedia("(max-width: 1024px)");
        if (mq.matches)
            document.querySelector('.reveal.show-notes').style.maxHeight = '100%';
        else
            document.querySelector('.reveal.show-notes').style.maxWidth = '100%';
    }

    function toggle() {
        if (document.getElementById('speakerNoteIcon').getElementsByTagName('i')[0].className == 'fas fa-comment-slash')
            hideSpeakerNote();
        else
            showSpeakerNote();
    }

    document.addEventListener( 'keydown', function( event ) {
		if( event.key == "S" && (event.ctrlKey || event.metaKey) ) { //Control+Shift+N
			event.preventDefault();
			toggle();
		}
	}, false );
	if( window.Reveal ) Reveal.registerKeyboardShortcut( 'CTRL + Shift + S', 'Speaker Note' );

    Reveal.addEventListener('ready', function (evt) {
        //console.log('ready');
        var config = Reveal.getConfig();
        if (config.showNotes == true) {
            document.querySelector('.reveal').appendChild(speakerNoteIcon);

            hideSpeakerNote();

            document.getElementById('speakerNoteIcon').addEventListener('click', function (event) {
                event.preventDefault();
                toggle();
            }, false);
        }
    });

    return this;
})();