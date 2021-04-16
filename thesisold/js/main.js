$( document ).ready(function() {

  var filtersWereOpenBeforeOpeningTheDetailPanel = false;
  // get url
  var url = window.location.href;
  var applauseButton = $('#applause');
  var tile_image_loader = $('.tile-image-loading');
  var header = $('#header');
  var top_menu = $('.filters-and-detail');
  var header_visible = true;
  var body = $('html, body');
  var loader = $('.loader');
  var browser_width = $( window ).width();
  var hashtag = $('#hashtag');
  var clipboardButton = $('.clipboard');
  var tileHashtag = '';

  /* Open filters if on desktop size */
  // if (window.matchMedia("(min-width: 768px)").matches) {
  //   $('body').addClass('filters-open');
  //   filtersWereOpenBeforeOpeningTheDetailPanel = true;
  // }


  //LOADING
  // loadingCheckerTile
  if (browser_width > 768) {
    var loadingCheckerTile = $('.tiles button:nth-child(100) img');
  } else {
    var loadingCheckerTile = $('.tiles button:nth-child(10) img');
  }


  function initialLoad(){
    // console.log(loadingCheckerTile);
    loadingCheckerTile.on('load', function(){
      body.removeClass('loading');
      loader.children().fadeOut(500);
      setTimeout(function(){
        loader.fadeOut(1000);
        // console.log("loaded");
        animateTilesIn();
      }, 500);
      // scrollTop
    });
  }

  // animating tiles elements in
  function animateTilesIn() {
    var eT=100;
    $('.tiles > button').hide().each(function() {
      $(this).delay(eT).fadeIn('slow');
      eT += 10; // Fade in speed
    });
  }

  initialLoad();



  function hideHeader(){
    header.addClass('hide-me');
    header_visible = false;
  }

  function fixTopBar(){
    body.addClass('sticky');
  }

  function reinitTopValues(){
    lax.updateElements();
    filterAndDetailTop = $(".filters-and-detail").offset().top;
    lax.removeElement(document.getElementById('menu-header-lax'));
  }

  function scrollToTiles(){
    var target = top_menu // Set the target as variable

    // perform animated scrolling by getting top-position of target-element and set it as scroll target
    $('html, body').stop().animate({
        scrollTop: $(target).offset().top
    }, 1000, function() {
      hideHeader();
      reinitTopValues();
    });
  }

  function scrollToTilesFilter(){
    var target = top_menu // Set the target as variable

    // perform animated scrolling by getting top-position of target-element and set it as scroll target
    $('html, body').stop().animate({
        scrollTop: $(target).offset().top
    }, 1000, function() {
      hideHeader();
      reinitTopValues();
      window.scrollTo(0, 0);
      $('body').addClass('filters-open');
      $('body').removeClass('detail-open');
      filtersWereOpenBeforeOpeningTheDetailPanel = $('body').hasClass('filters-open');
    });
  }

  function scrollToTilesInfo(){
    var target = top_menu // Set the target as variable

    // perform animated scrolling by getting top-position of target-element and set it as scroll target
    $('html, body').stop().animate({
        scrollTop: $(target).offset().top
    }, 1000, function() {
      hideHeader();
      reinitTopValues();
      $('.info-tab').addClass('show-me');
    });
  }

  function scrollToTop(){
    window.scrollTo(0, 0);
  }

	/* Lazy load images */
	var myLazyLoad = new LazyLoad({
		container: document.getElementById('tiles')
	});

  // check if tile query string is present on load
  function checkIsTileIsInURL(){
    //see if url contains tile query
    if (url.includes('?tile=')){
      goToTileInURL();
    };
  };

  function goToTileInURL() {
    var tileSelected = url.split('?tile=').pop().split("&")[0];
    var tile = $(`button[data-id="${tileSelected}"]`);
    // console.log(tileSelected);
    // console.log(tile);
    selectedATile(tile);
  };

	/* Open and close a panel within the filters*/
	$('.panel-toggle-button').click( function(){
    if (header_visible == true) {
      scrollToTiles();
    }
		$(this).next().toggleClass('closed');
    $(this).toggleClass('open-toggle-button');
	})

	$('.filters-toggle').click( function(){
    if (header_visible == true) {
      scrollToTilesFilter();
    } else {
      openFilter();
    }
	});

  function openFilter(){
    $('body').toggleClass('filters-open');
    $('body').removeClass('detail-open');
    filtersWereOpenBeforeOpeningTheDetailPanel = $('body').hasClass('filters-open');
  }


	$('.detail-toggle').click( function(){
    // You can only ever close the detail panel. It is opened by selecting a tile
    $('body').toggleClass('detail-open');
    if( filtersWereOpenBeforeOpeningTheDetailPanel ){
      $('body').addClass('filters-open');
    }
    //remove tile from url
    if (history.pushState) {
      var urlWithoutTile = url.split('?tile=')[0];
      window.history.pushState({path:urlWithoutTile},'',urlWithoutTile);
    };
    document.title = 'Foraging';
    //revert metadata back
    $("meta[property='og\\:title']").attr("content", "Foraging");
    $("meta[property='og\\:url']").attr("content", "https://glazespectrum.com/");
    $("meta[property='og\\:image']").attr("content", '/img/info1.jpg');
	});

  //open info tab
  $('.info-toggle').click( function(){
    if (header_visible == true) {
      scrollToTilesInfo();
    } else {
  		$('.info-tab').toggleClass('show-me');
      $('body').toggleClass('info-open');
    }
	});

  //close info tab
  $('.info-close').click( function(){
  	$('.info-tab').removeClass('show-me');
    $('body').removeClass('info-open');
  });

  $('.info-close-link').click( function(){
  	$('.info-tab').removeClass('show-me');
    $('body').removeClass('info-open');
  });

	// $('.tiles button').click( function(){
  //   selectedATile(this);
  // });

  // $('.tiles button').on('focus', function(){
  //     selectedATile(this);
  // });

  var hasClicked = false;
  $('.tiles button').on('mousedown : click',function(e){
       if (e.type == 'mousedown') {
          // execute code
          selectedATile(this);
          hasClicked = true;
       }
       if(e.type == 'focus' && !hasClicked) {
          //execute code
          selectedATile(this);
          // console.log(e.type)
       }
       hasClicked = false;
  });

  function selectedATile(self){
    if (header_visible == true) {
      scrollToTiles();
    }
    tile_image_loader.fadeIn();
		$('body').removeClass('filters-open');
		$('body').addClass('detail-open');

		$('.tiles button').removeClass('selected');
		$(self).addClass('selected');

		var tileID = $(self).attr('data-id');
    var tileName = $(self).attr('data-recipe');
    if ($(self).attr('data-recipe-name')) {
      var recipeName = $(self).attr('data-recipe-name');
    } else {
      var recipeName = $(self).attr('data-recipe');
    }
    var clay = $(self).attr('data-clay');
    var additionalOxides = $(self).attr('data-additional-oxides');
    var firing = $(self).attr('data-firing');
    // replace search query with tile that has been selected
    if (history.pushState) {
      var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?tile=' + tileID;
      window.history.pushState({path:newurl},'',newurl);
    };

    //update metadata frm tile
    $("meta[property='og\\:title']").attr("content", "Foraging: " + tileName);
    $("meta[property='og\\:url']").attr("content", newurl);
    $("meta[property='og\\:image']").attr("content", '/tiles/hi/'+tileID+'.jpg');

    //update hashtag info
    tileHashtag = '#foraging' + tileID.replace('_','')
    hashtag.html(tileHashtag);
    hashtag.attr("value", tileHashtag);

    //update page title
    document.title = tileID.replace('_','') + ' | Foraging';

    //change applause button url
    applauseButton.attr('url',`foraging-${tileID}`);
    //remove styling of applause button incase its been clicked
    applauseButton.removeClass('clapped clap-limit-exceeded');
    // get clap count of new tile

    // Attach the id of the selected tile to the next and prev buttons
    $('.tile-next, .tile-prev').attr('data-focusedtileid',tileID);

		populateTilePanel(tileName, recipeName,tileID,clay,additionalOxides, firing);
    //history.replaceState(null, null, 'library.html?tile='+tileID);
    $('.detail-content').scrollTop(0);
	}

	function sentenceCase (str) {
    return str.replace(/[a-z]/i, function (letter) {
      return letter.toUpperCase();
    }).trim();
  }

  function populateTilePanel(tileName, recipeName,tileID,clay,additionalOxides,firing){

    var recipe = recipes[recipeName];

    if( !recipe ){
      recipe = emtpyRecipe;
    }

    if (recipe.name) {
      recipeName = recipe.name
    }


    //$('.tile-detail-recipe-title').html(sentenceCase(recipeName));
    $('.detail-toggle span').html(sentenceCase(recipeName));

    console.log(recipe);

    var tile_image = $('.tile-detail-image img');
    tile_image.attr('src','assets/'+tileID+'.jpg');

    // console.log("TILEEE");

    tile_image.one('load', showImage);

    $('.tile-detail-title').html(sentenceCase(tileName) + " " + tileID.replace('_','#'));

    if( firing == "" ){
      $('.tile-detail-firing').html('-');
    }else{
      $('.tile-detail-firing').html(firing);
    }

    $('.tile-detail-recipe').html('<span class="recipe-title">' + recipeName + '</span>' + '<br>' + recipe.ingredients.replace(/\n/g, "<br />"));

    if( clay && clay.trim() != "" ){
      $('.tile-detail-clay').html(clay);
    }else{
      $('.tile-detail-clay').html('-');
    }

    if( additionalOxides && additionalOxides.trim() != "" ){
      $('.tile-detail-adjustments-row').css('display','table-row');
      $('.tile-detail-adjustments').html(additionalOxides);
    }else{
      $('.tile-detail-adjustments-row').css('display','none');
    }

    var sourceURL = anchorme(recipe.source,{
      	attributes:[
      		{
      			name:"target",
      			value:"_blank"
      		}
      	]
      });

    if( recipe.sourceTitle.trim() != "" ){
      $('.tile-detail-source').html(recipe.sourceTitle + '<br>' + sourceURL);
    }else{
      $('.tile-detail-source').html(sourceURL);
    }

    $('.tile-detail-notes span').html(recipe.notes.replace(/\n/g, "<br />"));

    if (recipe.notes != "") {
      $('.detail-notes-container').addClass('ive-got-notes');
    } else {
      $('.detail-notes-container').removeClass('ive-got-notes');
    }

  }

  $('.tile-next').click( function(){
    nextTile($(this));
  });

  function nextTile(x){
    var focusedID = x.attr('data-focusedtileid');
    var focused = $('[data-id="'+focusedID+'"]');
    var nextAll = focused.nextAll('button:visible');

    // nextAll.first().focus();
    if(nextAll.length){
      if (!nextAll.first().hasClass('oxide-title')) {
        selectedATile(nextAll[0]);
      } else if (nextAll.length > 1) {
        selectedATile(nextAll[1]);
      }
    }
  }

  $('.tile-prev').click( function(){
    prevTile($(this));
  });

  function prevTile(x){
    var focusedID = x.attr('data-focusedtileid');
    var focused = $('[data-id="'+focusedID+'"]');
    var prevAll = focused.prevAll('button:visible');

    //nextAll.first().focus();
    if(prevAll.length){
      if (!prevAll.first().hasClass('oxide-title')) {
        selectedATile(prevAll[0]);
      } else if (prevAll.length > 1) {
        selectedATile(prevAll[1]);
      }
    }
  }

  $("body").keydown(function(e) {
    if ($("body").hasClass('detail-open')) {
      if(e.keyCode == 37) { // left
        // go back
        // $('.tile-prev').click();
        prevTile($('.tile-prev'));
      }
      else if(e.keyCode == 39) { // right
        // go forwards
        // $('.tile-next').click();
        nextTile($('.tile-next'));
      }
    }
  });

  function showImage() {
    tile_image_loader.fadeOut();
  };

  //change applause button on load to heart icon
  function changeApplauseButton() {
    //delete applause
    applauseButton.children().remove();
    //add heart
    heart = '<svg id="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.99 20.02"><defs><style>.cls-10{fill:none;stroke:#fff;stroke-miterlimit:10;}</style></defs><title>Asset 4</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path id="Path_427" data-name="Path 427" class="cls-10" d="M10.51,19.13c-1.75-2.63-4.14-4.52-6.39-6.55A10.47,10.47,0,0,1,1,8.57c-.82-2.2-.83-4.36.8-6.24A5.29,5.29,0,0,1,9.3,1.79a5.41,5.41,0,0,1,1,1.11c.07.12.16.23.24.35a5.32,5.32,0,0,1,10,2.44,7.43,7.43,0,0,1-2.28,5.43c-1,1-2.07,2-3.13,3A25.85,25.85,0,0,0,10.51,19.13Z"/></g></g></svg>'
    bloom = '<svg id="bloom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.07 22.28"><defs><style>.cls-1{fill:white;}</style></defs><title>Asset 3</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_2-2" data-name="Layer 2"><circle class="cls-1" cx="2.01" cy="2.49" r="0.62"/><circle class="cls-1" cx="14.23" cy="0.62" r="0.62"/><circle class="cls-1" cx="25.53" cy="3.83" r="0.95"/><circle class="cls-1" cx="26.45" cy="15.38" r="0.62"/><circle class="cls-1" cx="20.88" cy="21.66" r="0.62"/><circle class="cls-1" cx="5.5" cy="21.49" r="0.62"/><circle class="cls-1" cx="0.93" cy="12.89" r="0.93"/></g></g></svg>'
    applauseButton.append(heart + bloom);
  }

  // run it
  changeApplauseButton();
  // getTitleTileClasses();
  checkIsTileIsInURL();

  if (browser_width > 1000) {
  // magnify tile
  $('.tile-detail-image')
    .zoom({
      'magnify': '0.7'
    });
  };

  lax.setup(); // init

  const updateLax = () => {
  		lax.update(window.scrollY)
  		window.requestAnimationFrame(updateLax)
  };

  window.requestAnimationFrame(updateLax);



  // trying to get new version of lax to work.
  // lax.init()
  //
  // // Add a driver that we use to control our animations
  // lax.addDriver('scrollY', function () {
  //   return window.scrollY
  // })

  // Add animation bindings to elements
    // lax.addElements('.header', {
    //   scrollY: {
    //     opacity: [
    //       [0, 500],
    //       [1, 0]
    //     ],
    //     translateY: [
    //       ['screenHeight', 'screenHeight/4'],   // Animation value map
    //       [0, 500],  // Driver value map
    //     ]
    //   }
    // })

  // window.addEventListener("resize", function() {
  //   lax.updateElements();
  // });

  //header carousel\
  $('.header-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 1000,
    easing: 'easeInOut',
    vertical: true,
    dots: false,
    prevArrow: false,
    nextArrow: false
    // fade: true,
  });






  // w3 schools sticky header
  window.onscroll = function() {scrolling()};

  // Get the initial offset position
	var filterAndDetailTop = $(".filters-and-detail").offset().top;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function scrolling() {
    if (window.pageYOffset > filterAndDetailTop && header_visible == true) {
      hideHeader();
      reinitTopValues();
    } else if (window.pageYOffset > filterAndDetailTop) {
			$("body").addClass("sticky");
    } else {
			$("body").removeClass("sticky");
		}
    //
	}




// Remove focus for users not using keyboard navigators
	function handleFirstTab(e) {
    if (e.keyCode === 9) { // the "I am a keyboard user" key
        document.body.classList.add('user-is-tabbing');
        window.removeEventListener('keydown', handleFirstTab);
	    }
	}

	window.addEventListener('keydown', handleFirstTab);

  //copy to clipboard
  var clipboard = new ClipboardJS('.copy-clipboard');
  var copied = $('.copiedyay');

  clipboard.on('success', function(e) {
     //show copied
     copied.fadeIn().delay(500).fadeOut();
     // console.log('copied');
  });

  var loved = $('.loved');
  applauseButton.on("clapped", function (event) {
    loved.fadeIn().delay(1000).fadeOut();
    applauseButton.unbind();
  });







});
