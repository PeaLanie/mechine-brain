$(function() {
    $('.fa-bars').on('click', () => {
        $('#side-nav').addClass('show-nav')
        $('.fa-bars').hide()
    })
    $('.cls-side-nav').on('click', () => {
        $('#side-nav').removeClass('show-nav')
        $('.fa-bars').show()
    })
    $('aside li').on('click', () => {
        $('#side-nav').removeClass('show-nav')
        $('.fa-bars').show()
    })
    $('.cls-alert').on('click', () => {
        countdown = 10
        click_count = 0
        sum = 0
        score = 0
        score_out.text(score)
        timeout_alert.removeClass('timeout_alert_visible')
        timer.text(countdown)
        progress_bar.css('width', '100%')
        progress_bar.css('background', '#2cba00')

        numbers_el.each(function() {
            let each_num
            $(this).text(Math.floor(Math.random() * 9) + 1)
            each_num = $(this).text()
            sum += parseInt(each_num)
        })
    })
    const timer = $('#timer')
    let numbers_el = $('.the-list span')
    let sum = 0
    let grade_el = $('#grade')
    let click_count = 0
    let countdown = 10
    let my_interval
    let my_interval_submit
    let score = 0
    let score_out = $('.score_out')
    const input_el = $('#users-answer')
    
    numbers_el.each(function() {
        let each_num
        $(this).text(Math.floor(Math.random() * 9) + 1)
        each_num = $(this).text()
        sum += parseInt(each_num)
    })
    
    $('#submit').on('click', () => {
        let users_answer = parseInt(input_el.val())
        if (users_answer === sum) {

            sum = 0
            grade_el.addClass('correct')
            grade_el.text('Correct!')

            setTimeout(() => {
                grade_el.removeClass('correct')
                grade_el.text('No Results Yet')
            }, 2000)
            
            numbers_el.each(function() {
                let each_num
                $(this).text(Math.floor(Math.random() * 9) + 1)
                each_num = $(this).text()
                sum += parseInt(each_num)
            })

            clearInterval(my_interval)
            score += countdown
            countdown = 11
            progress_bar.css('background', '#2cba00')

            my_interval = setInterval(() => {
                if (countdown > 0) {
                    countdown--
                    timer.text(countdown)
                    let progress_witdth = countdown / 10 * 100
                        
                    progress_bar.css('width', progress_witdth + '%')
                    if (countdown < 8) {
                        progress_bar.css('background', 'yellow')
                    }
                    if (countdown < 6) {
                        progress_bar.css('background', 'orange')
                    }
                    if (countdown <  4) {
                        progress_bar.css('background', '#ff5964ff')
                    }
                    if (countdown < 2) {
                        progress_bar.css('background', 'red')
                    }
                } else if (countdown == 0) {
                    clearInterval(my_interval)
                    timeout_alert.addClass('timeout_alert_visible')
                    document.activeElement.blur()
                }
            }, 1000)

        } else if (users_answer != sum && input_el.val() != '') {
            grade_el.addClass('wrong')
            grade_el.text('Try Again!')
            setTimeout(() => {
                grade_el.removeClass('wrong')
                grade_el.text('No Results Yet')
            }, 2000)
        } else if (input_el.val() == '') {
            grade_el.addClass('empty')
            grade_el.text('Empty')
            input_el.css('border', '2px dashed #ff5964ff')
            setTimeout(() => {
                grade_el.removeClass('empty')
                grade_el.text('No Results Yet')
                input_el.css('border', '2px dashed #c2c2c2')
            }, 2000)
        }
        input_el.val('')
        score_out.text(score)
    })
    const timeout_alert = $('.timeout_alert')
    const progress_bar = $('.progress_inner')
    input_el.on('click', () => {
        //setTimeout(() => {
            if (click_count == 0) {
                countdown = 10
                my_interval = setInterval(() => {
                    if (countdown > 0) {
                        countdown--
                        let progress_witdth = countdown / 10 * 100
                        
                        progress_bar.css('width', progress_witdth + '%')
                        timer.text(countdown)
                        if (countdown < 8) {
                            progress_bar.css('background', 'yellow')
                        }
                        if (countdown < 6) {
                            progress_bar.css('background', 'orange')
                        }
                        if (countdown <  4) {
                            progress_bar.css('background', '#ff5964ff')
                        }
                        if (countdown < 2) {
                            progress_bar.css('background', 'red')
                        }
                    } else if (countdown == 0) {
                        clearInterval(my_interval)
                        timeout_alert.addClass('timeout_alert_visible')
                        timeout_alert.focus()
                        document.activeElement.blur()
                    }
                }, 1000)
            }
            click_count++
        //}, 1000)
    })

    const play_again_btn = $('#play_again_btn')
    play_again_btn.on('click', () => {
        input_el.val('')
        sum = 0
        score = 0
        score_out.text(score)
        numbers_el.each(function() {
            let each_num
            $(this).text(Math.floor(Math.random() * 9) + 1)
            each_num = $(this).text()
            sum += parseInt(each_num)
        })
        timeout_alert.removeClass('timeout_alert_visible')
        countdown = 10
        timer.text(countdown)
        progress_bar.css('width', '100%')
        progress_bar.css('background', '#2cba00')
        setTimeout(() => {
            
            my_interval = setInterval(() => {
                
                if (countdown > 0) {
                    countdown--
                    timer.text(countdown)
                    let progress_witdth = countdown / 10 * 100
                        
                    progress_bar.css('width', progress_witdth + '%')
                    if (countdown < 8) {
                        progress_bar.css('background', 'yellow')
                    }
                    if (countdown < 6) {
                        progress_bar.css('background', 'orange')
                    }
                    if (countdown <  4) {
                        progress_bar.css('background', '#ff5964ff')
                    }
                    if (countdown < 2) {
                        progress_bar.css('background', 'red')
                    }
                } else if (countdown == 0) {
                    clearInterval(my_interval)
                    timeout_alert.addClass('timeout_alert_visible')
                    document.activeElement.blur()
                }
            }, 1000)
        }, 1000)
    })
});