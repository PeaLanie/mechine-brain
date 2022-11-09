$(function() {
    $('.fa-bars').on('click', () => {
        $('#side-nav').addClass('show-nav')
        $('.fa-bars').hide()
    })
    $('.fa-xmark').on('click', () => {
        $('#side-nav').removeClass('show-nav')
        $('.fa-bars').show()
    })
    $('aside li').on('click', () => {
        $('#side-nav').removeClass('show-nav')
        $('.fa-bars').show()
    })
    let numbers_el = $('.the-list span')
    let sum = 0
    let grade_el = $('#grade')
    numbers_el.each(function() {
        let each_num
        $(this).text(Math.floor(Math.random() * 9) + 1)
        each_num = $(this).text()
        sum += parseInt(each_num)
    })
    $('#submit').on('click', () => {
        const input_el = $('#users-answer')
        let users_answer = parseInt(input_el.val())
        
        if (users_answer === sum) {
            if (grade_el.attr('class') == 'grade wrong') {
                grade_el.removeClass('wrong')
                grade_el.addClass('correct')
                grade_el.text(sum+' is Correct.')
            } else if (grade_el.attr('class') == 'grade empty') {
                grade_el.removeClass('empty')
                grade_el.addClass('correct')
                grade_el.text(sum+' is Correct.')
            } else {
                grade_el.addClass('correct')
                grade_el.text(sum+' is Correct.')
            }
        } else if (users_answer != sum && input_el.val() != '') {
            if (grade_el.attr('class') == 'grade correct') {
                grade_el.removeClass('correct')
                grade_el.addClass('wrong')
                grade_el.text(sum+', Try Again!')
            } else if (grade_el.attr('class') == 'grade empty') {
                grade_el.removeClass('empty')
                grade_el.addClass('wrong')
                grade_el.text(sum+', Try Again!')
            } else {
                grade_el.addClass('wrong')
                grade_el.text(sum+', Try Again!')
            }
        } else if (input_el.val() == '') {
            if (grade_el.attr('class') == 'grade wrong') {
                grade_el.removeClass('wrong')
                grade_el.addClass('empty')
                grade_el.text('Write your answer below.')
            } else if (grade_el.attr('class') == 'grade correct') {
                grade_el.removeClass('correct')
                grade_el.addClass('empty')
                grade_el.text('Write your answer below.')
            } else {
                grade_el.addClass('empty')
                grade_el.text('Write your answer below.')
                input_el.css('border', )
            }
        }
        input_el.val('')
    })
    $('#reload').on('click', () => {
        sum = 0
        if (grade_el.attr('class') == 'grade wrong' || grade_el.attr('class') == 'grade correct' || grade_el.attr('class') == 'grade empty') {
            grade_el.attr('class', 'grade')
            grade_el.text('No Results Yet')
        }
        numbers_el.each(function() {
            let each_num
            $(this).text(Math.floor(Math.random() * 9) + 1)
            each_num = $(this).text()
            sum += parseInt(each_num)
        })
    })
});

