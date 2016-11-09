var template = "<div><p><span></span></p></div>",
    colors = [
        '52F9FF', 'E90052', '380032',
        'FFFFFF', '00FF87', '033074',
        '005957', '007255', '000A00',
        'BF1534', '43734F', '84BF04',
        'D7F205', 'F2F2F2', '280000',
        '70704E', '0C0B07', '8D6C3F',
        '3F301B', 'F3F3F2', '10071C'
    ],
    next = 0,
    quant = 5,
    play

function toogleAuto() {
    if (play) {
        clearInterval(play)
        play = null;
        return;
    }
    create()
    play = setInterval(create, 1000)
}

function colourBrightness2(target, color) {
    $.colourBrightness2('#' + color).then(function(dark) {
        $('span', target)
            .text('I\'m %s!'.replace('%s', dark ? 'dark' : 'light'))
            .css('color', dark ? '#FFF' : '#000')


        $(target).css('background-color', '#' + color)


    })
}

function create(custom) {
    quant = custom || Math.floor(Math.random() * 5) + 1

    for (var i = 0; i < quant; i++) {
        $('body').append(template)
    }

    $('div').css('width', 100 / quant + '%')

    $('body').find('div').map(function(i, div) {
        var color = colors[Math.floor(Math.random() * colors.length)]
        colourBrightness2(div, color)
    })
}

$(function() {
    $(document).on('click', 'div', function() {
            colourBrightness2(this, colors[next])

            if (++next == colors.length) {
                next = 0
            }
        })
        .on('keypress', function(event) {
            if ($.isNumeric(event.key)) {
                create(parseInt(event.key))
            }
            else if (event.keyCode == 32) {
                toogleAuto()
            }
        })

    create()
})
