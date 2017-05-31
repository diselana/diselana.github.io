$(function () {

        var sections = $('.section'),
                display = $('.maincontent'),
                inScroll = false;

        var scrollToSection = function (sectionEq) {
                var position = 0;

                if (!inScroll) {

                        inScroll = true;

                        position = (sections.eq(sectionEq).index() * -100) + '%';

                        section.eq(sectionEq).addClass('active')
                                .siblings().removeClass('active');

                        display.css({
                                'transform': 'translate3d(0, ' + position + ', 0)'
                        });

                        setTimeout(function () {
                                inScroll = false;

                                $('.fixed__menu-item').eq(sectionEq).addClass('active')
                                        .siblings().removeClass('active');
                        }, 1300)
                }
        }

        $('.wrapper').on('wheel', function (e) {

                var deltaY = e.originalEvent.deltaY,
                        activeSection = sections.filter('.active'),
                        nextSection = activeSection.next(),
                        prevSection = activeSection.prev()

                if (deltaY > 0) { // scroll down
                        scrollToSection(nextSection.index());
                }

                if (deltaY < 0) { // scroll upp 
                        scrollToSection(prevSection.index());
                }

        });

        $('.down-arrow').on('click', function(e) {
                e.preventDefault();

                scrollToSection(1);
        })

        $('.fixed__menu_link').on('click', function (e) {
                e.preventDefault();

                var hreh = parseInt($(this).attr('href'));

                 scrollToSection(href);
        });
});