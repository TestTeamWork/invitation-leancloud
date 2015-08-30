$(document).ready(function () {
    $('#fullpage').fullpage({
        anchors: ['1stPage', '2ndPage', '3rdPage', '4thPage'],
        loopTop: true,
        loopBottom: true,
        scrollingSpeed: 1000,
        css3: true,
        afterLoad: function (anchorLink, index) {
            var loadedSection = $(this);
            if (anchorLink == '1stPage') {
                // animation for the text
                $("#text").typed({
                    strings: ["婚礼请柬"],
                    typeSpeed: 350,
                    backDelay: 1000,
                    loop: false,
                    showCursor: false,
                    loopCount: false
                });
            }
            if (anchorLink == '2ndPage') {
                // animation for the text
                $("#text1").typed({
                    strings: ["缘分让我们 相遇，相识<br/>" +
                    "爱恋让我们 相知，相守<br/>" +
                    "我们诚挚地邀请您来见证这份感情<br>"+
                    "分享这份甜蜜!<br/><br/>" +
                    "新郎： 徐海明<br/>" +
                    "新娘： 严智慧<br/>"
                    ],
                    typeSpeed: 100,
                    backDelay: 1000,
                    loop: false,
                    showCursor: false,
                    loopCount: false
                });
            }
            //using anchorLink
            if (anchorLink == '3rdPage') {
                $("#fade-content").fadeIn(1500,"swing");
            }
        }
    });
// animation for the arrows
    $('.up').velocity(
        {translateY: ["3em", "4.5em"]},
        {
            duration: 1700,
            loop: true
        });

    $('.down').velocity(
        {translateY: ["1.5em", "0em"]},
        {
            duration: 1700,
            loop: true
        });

    $('.fp-prev').velocity(
        {translateX: ["1.5em", "0em"]},
        {
            duration: 1700,
            loop: true
        });
    $('.fp-next').velocity(
        {translateX: ["-1.5em", "0em"]},
        {
            duration: 1700,
            loop: true
        });
//animation for the flower
    $(window).load(function () {
        $('body').sakura();
    });

// the animation of the heart
    $('.inside').each(function (id) {
        $(this).css({
            position: 'relative',
            top: '-200px',
            opacity: 0
        });
        var wait = Math.floor((Math.random() * 3000) + 1);
        $(this).delay(wait).velocity({
            top: '0px',
            opacity: 1
        }, 1000);
    });
    //play the audio
    var vid = document.getElementById("player");

    var isIOS = false,
    p = navigator.platform;
	if( p === 'iPad' || p === 'iPhone' || p === 'iPod' ){
    	isIOS = true;
	}
    // if is APPLE device then set the speaker to pause image
    if (isIOS) {
        var count = 0;
        $("#speaker").css("background-position", "105% -7%");
    }
    else {
        count = 1;
    }
console.log(isIOS);
    $("#speaker").click(function () {
        if (count == 0) {
            vid.play();
            $("#speaker").animate({"backgroundPositionX": "-=55%"}, "slow", "swing");
            //$("#speaker").css("backgroundPositionX", "-=70%");
            count = 1;
        }
        else {
            vid.pause();
            $("#speaker").animate({"backgroundPositionX": "+=55%"}, "slow", "swing");
            count = 0;
        }
console.log(count);
    });
});