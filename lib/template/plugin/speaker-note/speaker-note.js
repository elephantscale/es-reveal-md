/*
 * Handles show/hide speaker-notes with bottom toolbar icon
 *
 * By Mohammad Foolady <foolady@gmail.com>, March 2020
 */

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

    function toggleNote() {
        if (document.getElementById('speakerNoteIcon').getElementsByTagName('i')[0].className == 'fas fa-comment-slash')
            hideSpeakerNote();
        else
            showSpeakerNote();
    }

    function toggleIcon() {
        var icon = document.getElementById('speakerNoteIcon');
        if (!icon)
            return;

        var note = Reveal.getSlideNotes();
        if (note)
            icon.style.display = 'block';
        else
            icon.style.display = 'none';
    }

    var config = Reveal.getConfig();
    var printMode = (/print-pdf/gi).test(window.location.search);
    //console.log("createPrintout: " + printMode)
    if (!printMode && config.showNotes) {
        document.addEventListener('keydown', function (event) {
            if (event.key == "Z" || event.key == "z") {
                event.preventDefault();
                toggleNote();
            }
        }, false);

        if (window.Reveal)
            Reveal.registerKeyboardShortcut('Z', 'Speaker Note');

        Reveal.addEventListener('ready', function (evt) {
            document.querySelector('.reveal').appendChild(speakerNoteIcon);

            hideSpeakerNote();
            toggleIcon();

            document.getElementById('speakerNoteIcon').addEventListener('click', function (event) {
                event.preventDefault();
                toggleNote();
            }, false);

            Reveal.addEventListener('slidechanged', function (event) {
                // event.previousSlide, event.currentSlide, event.indexh, event.indexv
                try {
                    hideSpeakerNote();
                    toggleIcon();
                } catch (error) {

                }
            });
        });
    }

    return this;
})();