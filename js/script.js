$(".cat-box").click(function(e) {
    e.preventDefault();
    $(this).toggleClass('cat-box__selected')
    $(this).find('.buy-item-chicken').toggleClass('active')
    $(this).find('.buy-item-fish').toggleClass('active')
    $(this).find('.buy-item-fuagra').toggleClass('active')
    $(this).find('.buy-item-chicken-selected').toggleClass('active')
    $(this).find('.buy-item-fish-selected').toggleClass('active')
    $(this).find('.buy-item-fuagra-selected').toggleClass('active')
});

$(".cat-box").hover(
    function() {
        if ($(this).hasClass("cat-box__selected")) {
            $(this).removeClass('cat-box__selected-hover');
        } else {
            $(this).removeClass('cat-box-hover');
        }

    },
    function() {
        if ($(this).hasClass("cat-box__selected")) {
            $(this).addClass("cat-box__selected-hover")
        } else {
            $(this).addClass('cat-box-hover');
        }
    }
);

$(".cat-box").each(function() {
    if ($(this).hasClass('disabled')) {
        $(this).find('.buy-item-fuagra').removeClass('active')
        $(this).find('.buy-item-fuagra-disabled').addClass('active')
        $(this).find('.buy-item-fish').removeClass('active')
        $(this).find('.buy-item-fish-disabled').addClass('active')
        $(this).find('.buy-item-chicken').removeClass('active')
        $(this).find('.buy-item-chicken-disabled').addClass('active')
    } else {
        return;
    }    
});