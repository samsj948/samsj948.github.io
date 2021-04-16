$( document ).ready(function() {
	/*
    FILTER BY:
    oxide
    colour
    firing
    clay
    base glaze

    CSS RULES:
    - All tiles are initially shown
    - If we add a class to div.tiles ie g for green all greens will be hidden
    - So to show green only we hide all other colours
    - With everything hidden div.tiles looks like
    <ul class="tiles Co Cr Cu Fe Mn Ni rutile V pr o y g t b p br">
    The output from excel needs to include the class to describe each li
    so a cobalt green tile will be like <li class="Co g">
  */
  /* TODO - onpage load read url params and set filters -- */

  // $('.oxide-panel input[type=checkbox]').change(function() {
  //   console.log($(this));
  //   panelButtonChanged('oxide');
  // });

  $('.panel input[type=checkbox]').on("change", e => {
    panelButtonChanged($(e.currentTarget));
  });

  // $('.colours-panel input[type=checkbox]').change(function() {
  //   panelButtonChanged(clicked);
  // });
  //
  // $('.firing-panel input[type=checkbox]').change(function() {
  //   panelButtonChanged(clicked);
  // });
  //
  // $('.clays-panel input[type=checkbox]').change(function() {
  //   panelButtonChanged(clicked);
  // });
  //
  // $('.base-glaze-panel input[type=checkbox]').change(function() {
  //   panelButtonChanged(clicked);
  // });

  function panelButtonChanged(button){
    fadeOutTiles();
    waitThenUpdateFiltering(button);
  }
  function waitThenUpdateFiltering(button){
    window.setTimeout(function(){
      updateFiltering(button);
    }, 300);
  }

  var selectedFilters = {
    'oxide': ['',''], // ['Cobalt','Co'], //[name,buttonValue],;
    'colours': ['',''],
    'firing': ['',''],
    'clays': ['',''],
    'base-glaze':  ['','']
  };

  function updateFilterPanel(button){

  }

  // Use CSS classes to hide tiles that are filtered out
  function updateFiltering(button){

    //get name of panel that was selected
    var panel = button.attr('name');
    var value = button.attr('value');
    var numberSelected = checkCurrentFilterGroup(panel);

    //check what button was pressed
    if (value == 'All') {
      uncheckPanel(panel);
      button.parent().addClass('all-selected');
    } else if (numberSelected == 0) {
      // all unchecked. need to check all.
      checkAll(panel, true);
    } else if (numberSelected == 2) {
      checkAll(panel, false);
    };

    // The filter buttons which are checkboxes have values that match these class names
    var allClassList = {
      'oxide':'Co Cr Cu Fe Mn Ni rutile V',
      'colours':'pr o y g t b p br',
      'firing':'cones0702 cones45 cones67 cones89 reductioncone9 cones04raku',
      'clays':'whitestoneware groggedwhitestoneware p2porcelain buffstoneware whiteearthenware crankclay redandblackstoneware',
      'base-glaze':'odysseycleargloss valcushingcleargloss cooperwhitesatinmatte whitebirdgloss whitecracklebase clausentodosatinmatte highalkalicleargloss albertaslipbase allotherglazes'
    };

    // reset
    $('.tiles').removeClass(allClassList[panel]);

    if( $('.'+panel+'-panel input[type=checkbox][value=All]').is(':checked') ){
      $('.tiles').removeClass(allClassList[panel]);
      selectedFilters[panel] = ['',''];
      console.log('YO I SELECTED ALL');
      checkCurrentTiles(panel, true);
    }else{
      // remove the checked values from the list of all classes on the tiles div
      $("."+panel+"-panel input[type=checkbox]:checked").each(function () {
        var val = $(this).val();

        updateSelectedFilters(this, selectedFilters, panel);

        allClassList[panel] = allClassList[panel].split(" ").filter(function(value, index, arr){
          return value != val;
        }).join(" ");
      });
      // want to add the inverse list to tiles
      $('.tiles').addClass(allClassList[panel]);

      checkCurrentTiles(panel, false);
    }

    renderSelectedFilters();

    fadeInTiles();
  }

  function updateSelectedFilters(self, selectedFilters, panel) {
    var buttonValue = $(self).val();
    var nameElement = $(self).next();
    var name = nameElement[0].innerText || nameElement[0].textContent;

    if (name == 'All') {
      selectedFilters[panel] = ['',''];
    }
    else {
      selectedFilters[panel] = [name,buttonValue];
    }
    // console.log(selectedFilters);
  }

  function renderSelectedFilters(){
    // <span>Cobalt <button class="filter-remove">x</button></span>
    $('.filters-list').html('');
    for (var option in selectedFilters) {
      if (selectedFilters[option][0] != "") {

        $('.filters-list').append('<span>'+selectedFilters[option][0]+' <button class="filter-remove" data-panel="'+option+'" data-val="'+selectedFilters[option][1]+'" >x</button></span>');

        // Add click handler to newly created element
        $('.filter-remove').click( function(){
          var panel = $(this).data('panel');
          //$('button[val='+buttonValue+']');

          $('[name="panel"]').removeAttr('checked');
          var inputElem = $("input[name="+panel+"][value=All]");
          inputElem.prop('checked', true);

          // TODO update list
          panelButtonChanged(panel);
        });
      }
    }
  }

  $('.filters-reset').click( function(){
    resetFilters();
  })

  function resetFilters(){
    fadeOutTiles();

    //uncheck all tiles
    uncheckAll();

    // Select the 'All' inputs in each panel
    for (var option in selectedFilters) {
      $('[name="'+option+'"]').removeAttr('checked');
      var inputElem = $("input[name="+option+"][value=All]");
      inputElem.prop('checked', true);
    }


    //show all
    $('.panel-radiobutton').each(function() {
      $(this).removeClass('hideOption');
    });


    // Reset the state
    selectedFilters = {
      'oxide': ['',''], // ['Cobalt','Co'], //[name,buttonValue],;
      'colours': ['',''],
      'firing': ['',''],
      'clays': ['',''],
      'base-glaze':  ['','']
    };

    // Render the empty summary output
    renderSelectedFilters();

    waitThenResetTiles();
  }

  function waitThenResetTiles(){
    window.setTimeout(function(){
      // Reset the tiles
      $('.tiles').removeClass().addClass('tiles group');
      fadeInTiles();
    },400);
  }

  //return how many options are selected in a panel
  function checkCurrentFilterGroup(panel){
    return $(`input[name=${panel}]:checked`).length;
  }

  //check all option in a panel group
  function checkAll(panel, check) {
    var allCheckbox = $(`input[name=${panel}][value="All"]`);
    if (check == true ) {
      allCheckbox[0].checked = true;
      allCheckbox.parent().addClass('all-selected');
    } else {
      allCheckbox[0].checked = false;
      allCheckbox.parent().removeClass('all-selected');
    }

  }

  //uncheck all in panel apart from all button
  function uncheckPanel(panel) {
    var checkboxes = $(`input[name=${panel}][value!="All"]:checked`);
    checkboxes.each(function(){
      $(this)[0].checked = false;
      $(this).parent().removeClass('hideOption');
    });
  }

  function uncheckAll() {
    var checkboxes = $(`.panel-radiobutton > input`);
    checkboxes.each(function(index, element){
      element.checked = false;
    })
  }


  // checking what current tiles are visible and hiding any
  // filter options that would show no tiles when selected
  // fires on every filter click event
  function checkCurrentTiles(panel, all) {
    if (all == false) {
      var filters = $(`.panel-radiobutton > input[name!='${panel}']`);
    } else {
      var filters = $(`.panel-radiobutton > input`);
    }
    var tiles = $('#tiles > button:visible');
    var visible = ['All'];
    var titleTiles = $('.oxide-title');

    // going through all tiles and storing classes in array.
    // quicker to then go through an array than go through each tile/element.
    tiles.each(function() {
      var classes = $(this).attr("class").split(/\s+/)
      visible = visible.concat(classes);
      // visible.concat($(this).attr("class").split(/\s+/));

      //remove duplicates from array
      visible = Array.from(new Set(visible));

    });

    titleTiles.each(function() {
      var oxide = $(this).attr('data-oxide');
      if (visible.includes(oxide)) {
        $(this).removeClass('hide-oxide-title')
      } else {
        $(this).addClass('hide-oxide-title')
      }
    });

    //for each filter input go through visible array and see if value is contained
    //if it is not then hide this input
    //if it is then remove class hidden if it exists
    filters.each(function() {
      var option = $(this).attr("value");
      var checked = $(this).is(":checked")
      // console.log(option);
      if (visible.includes(option) || (checked == true) ) {
        $(this).parent().removeClass('hideOption');
      } else {
        $(this).parent().addClass('hideOption');
      };
    });

  }

  // View button - only visible on small screen
  $('.filters-view').click( function(){
    $('body').removeClass('filters-open');
    $('body').removeClass('detail-open');
  });

  function fadeOutTiles(){
    $('.tiles').css('opacity','0');
  }

  function fadeInTiles(){
    $('.tiles').css('opacity','1');
  }

  // add prototype to remove duplicates from array
  Array.prototype.unique = function() {
    var a = this.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
    };

});
