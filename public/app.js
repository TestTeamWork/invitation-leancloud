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
                    loopCount: false,
                });
            }
            if (anchorLink == '2ndPage') {
                // animation for the text
                $("#text1").typed({
                    strings: ["一份意外降临的感情<br/>" +
                    "一场跨州跨洋的爱恋<br/>" +
                    "从相遇到相恋到如今步入婚姻<br/>" +
                    "貌似不可思议，貌似意想不到<br/>" +
                    "我们也迷茫也怀疑也犹豫过<br/>" +
                    "但和后来我们打算在一起的决心相比<br/>" +
                    "那些貌似的不可能都只是浮云<br/>" +
                    "梁思成问林徽因：'为什么是我？'<br/>"+
                    "林徽因答：'答案很长，我得用一生去回答你'<br/>"+
                    "<br/>" +
                    "新郎： 徐海明<br/>" +
                    "新娘： 严智慧<br/>" +
                    "<br/><br/>" +
                    "宴席很短<br>" +
                    "祝福却能长留心中"],
                    typeSpeed: 100,
                    backDelay: 1000,
                    loop: false,
                    showCursor: false,
                    loopCount: false,
                });
            }
            //using anchorLink
            if (anchorLink == '3rdPage') {
                $("#text2").fadeIn(1000,"swing");
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
            $("#speaker").css({"backgroundPositionX": "-=55%"}, "slow", "swing");
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