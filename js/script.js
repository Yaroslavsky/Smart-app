$(document).ready(function(){
    // Отвечает за позицию элементов(начальная позиция) при scroll
    let position = 0;
    // Отвечает сколько элементов нам показывать
    const slidesToShow = 3;
    // Отвечает сколько элементов нам проскролливать
    const slidesToScroll = 1;
    //
    const container = $('.gallery__track',);
    const flex = $('.gallery__flex');
    const items = $('.gallery__items');
    const btnPrev = $('.gallery__btn-previous');
    const btnNext = $('.gallery__btn-next');

    //Кол-во наших элементов
    const itemsCount = items.length;
    //Зная ширину gallery__flex и кол-во элементов gallery__items узнаем ширину каждого элемента
    const itemsWidth = container.width() / slidesToShow;

    //Умножаем кол-во элементов на ширину элемента (узнать на какую дистанцию смещать элементы)
    const movePosition = slidesToScroll * itemsWidth;



    // Узнав ширину каждого элемента, простовляем им ширину
    items.each(function(index, items) {
        $(items).css({
            Width: itemsWidth, 
        });
    });

    // Функция для нажатия кнопок
    btnPrev.click(function(){
      position += movePosition;

      setPosition();
      checkBtns();
    });

    btnNext.click(function(){
      position -= movePosition;

      setPosition();
      checkBtns();
    });

    // Смещаем flex
    const setPosition = () => {
        flex.css({
        transform: `translateX(${position}px)`
      }); 
    };

    // Проверям кнопки (активны или не активны)
    const checkBtns = () => {
        btnPrev.prop('disabled', position === 0); 
        btnNext.prop(
            'disabled',
            //Отнимаем кол-во видимых слайдов и умножаем на ширину каждого нашего items
            position <= -(itemsCount - slidesToShow) * itemsWidth
            
        );
    };

    checkBtns();
});


$(document).ready(function(){
     let position = 0;
    // Отвечает сколько элементов нам показывать
    const slidesToShow = 1;
    // Отвечает сколько элементов нам проскролливать
    const slidesToScroll = 1;
    //
    const container = $('.opinions__track');
    const flex = $('.opinions__flex');
    const items = $('.opinions__items');
    const dotsOne = $('.dots-one');
    const dotsTwo = $('.dots-two');
    const dotsThree = $('.dots-three');

    //Кол-во наших элементов
    const itemsCount = items.length;
    //Зная ширину gallery__flex и кол-во элементов gallery__items узнаем ширину каждого элемента
    const itemsWidth = container.width() / slidesToShow;

    //Умножаем кол-во элементов на ширину элемента (узнать на какую дистанцию смещать элементы)
    const movePosition = slidesToScroll * itemsWidth;


    // Узнав ширину каждого элемента, простовляем им ширину
    items.each(function(index, items) {
        $(items).css({
            Width: itemsWidth, 
        });
    });
    
    dotsOne.click(function(){
      position += movePosition;

      setPosition();
      checkBtns();
    });

    dotsTwo.click(function(){
      position -= movePosition;

      setPosition();
      checkBtns();
    });


    const setPosition = () => {
        flex.css({
        transform: `translateX(${position}px)`
      }); 
    };

    const checkBtns = () => {
        dotsOne.prop('disabled', position === 0); 
        
        dotsTwo.prop(
            'disabled',
            //Отнимаем кол-во видимых слайдов и умножаем на ширину каждого нашего items
            position <= -(itemsCount - slidesToShow) * itemsWidth
        );
    };

    checkBtns();
});



$(document).ready(function() {
  $(".header__burger").click(function() {
    $(this).toggleClass("color");
    $('.header__menu').slideToggle(300, function(){
      if($(this).css('display') === "none"){
        $(this).removeAttr('style');
      }
    });
  });
});
