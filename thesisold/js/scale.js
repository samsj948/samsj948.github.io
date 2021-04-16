$( document ).ready(function() {

  //setting all variables
  var scales = ['2%','2.5%','4%','5%','6.25%','10%','12.5%','20%','25%','33.3%','50%'];
  var plus = $('#plus');
  var minus = $('#minus');
  var button = $('.tiles > button');
  var width = button.width();
  var browser_width = $( window ).width();
  var current_scale = '';
  var previous_scale = '';
  var current_scale_index = null;
  var max_scale = '33.3%';
  var min_scale = '2%';
  var tiles_container = $('#tiles');

  //get scale of grid on page load
  function getInitialScale(){
    if (browser_width >= 1200) {
      current_scale = '50%';
      setMinMax('2%','12.5%');
    } else if (browser_width >= 1000) {
      current_scale = '12.5%';
      setMinMax('2.5%','25%');
    } else if (browser_width >= 786) {
      current_scale = '12.5%';
      setMinMax('50%','12.5%');
    } else if (browser_width >= 500) {
      current_scale = '20%';
      setMinMax('6.25%','20%');
    } else if (browser_width >= 400 ) {
      current_scale = '25%';
      setMinMax('6.25%','33.3%');
    } else {
      current_scale = '25%';
      setMinMax('50%','50%');
    }
    console.log(current_scale);
    setScale(current_scale);
    current_scale_index = scales.indexOf(current_scale);
    console.log(current_scale_index);
  }

  function getScaleIndex() {
    scales.findIndex(get_index);
  }

  //get new min and max scale values on page resize
  $( window ).resize(function() {
    browser_width = $(this).width();
    if (browser_width <= 400) {
      setMinMax('5%','33.3%');
    } else if (browser_width <= 500) {
      setMinMax('5%','33.3%');
    } else if (browser_width <= 768) {
      setMinMax('5%','33.3%');
    } else if (browser_width <= 1200) {
      setMinMax('5%','33.3%');
    } else {
      setMinMax('2%','20%');
    }
  });

  //set scale of grid
  function setScale(percent){
    button.width(percent);
  }

  //set min and max of scale
  function setMinMax(min,max){
    min_scale = min;
    max_scale = max;
  }

  function get_index(current) {
    return scale == current_scale;
  }

  function addScaleClass(old_class, new_class){
    // tiles_container.removeClass(old_class);
    // tiles_container.addClass(new_class);
    tiles_container.attr("data-scale",new_class);
    console.log("HELLO");
  }

  plus.on("click", e => {
    current_scale_index += 1;
    previous_scale = current_scale;
    current_scale = scales[current_scale_index];
    if (scales[current_scale_index] == max_scale) {
      plus.addClass('disable-control');
    } else  {
      minus.removeClass('disable-control');
    }
    button.width(scales[current_scale_index]);
    addScaleClass(previous_scale, current_scale);
  });

  minus.on("click", e => {
    current_scale_index -= 1;
    previous_scale = current_scale
    current_scale = scales[current_scale_index];
    if (scales[current_scale_index] == min_scale) {
      minus.addClass('disable-control');
    } else  {
      plus.removeClass('disable-control');
    }
    button.width(current_scale);
    addScaleClass(previous_scale, current_scale);
  });


  //run interval
  getInitialScale();


});
