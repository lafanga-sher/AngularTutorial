function Epona() {
    if (jQuery.browserDetect(), _topNav(), _animate(), _owl_carousel(), _popover(), _lightbox(), _scrollTo(), _parallax(), _masonry(), _toggle(), _bgimage(), _quickCart(), _placeholder(), _wrotate(), _misc(), _datepicker(), _colorpicker(), _newsletterSubscribe(), _htmlEditor(), jQuery("html").hasClass("chrome") && jQuery("body").hasClass("smoothscroll") && jQuery.smoothScroll(), jQuery("a[data-toggle=tooltip], span[data-toggle=tooltip]").tooltip(), jQuery(document).bind("click", function() {
            jQuery("div.navbar-collapse").hasClass("in") && jQuery("button.btn-mobile").trigger("click")
        }), jQuery("li.list-toggle").bind("click", function() {
            jQuery(this).toggleClass("active")
        }), jQuery("html").hasClass("ie") && jQuery("body").hasClass("boxed"));
    else {
        if (jQuery("#header.sticky").hasClass("has-slider")) var a = jQuery(".slider").outerHeight(!0) + jQuery("#header").outerHeight(!0);
        else var a = jQuery("#header").outerHeight(!0);
        jQuery("#header.sticky").affix({
            offset: {
                top: a
            },
            bottom: function() {
                return this.bottom = jQuery("#footer").outerHeight(!0)
            }
        })
    }
}

function _topNav() {
    function a() {
        _scrollTop = jQuery(document).scrollTop(), _scrollTop > 100 ? jQuery("#toTop").is(":hidden") && jQuery("#toTop").show() : jQuery("#toTop").is(":visible") && jQuery("#toTop").hide()
    }
    window.scrollTop = 0, jQuery(window).scroll(function() {
        a()
    });
    var b = !1;
    jQuery("#topMain a.dropdown-toggle").bind("click", function(a) {
        "#" == jQuery(this).attr("href") && a.preventDefault(), b = jQuery(this).parent().hasClass("resp-active"), jQuery("#topMain").find(".resp-active").removeClass("resp-active"), b || jQuery(this).parents("li").addClass("resp-active")
    }), jQuery("#topMain li.dropdown, #topMain a.dropdown-toggle").bind("click", function(a) {
        a.stopPropagation()
    }), (jQuery("html").hasClass("ie") || jQuery("html").hasClass("ff3")) && (jQuery("#topNav ul.nav > li.mega-menu div").addClass("block"), jQuery("#topNav ul.nav > li.mega-menu div div").addClass("pull-left"))
}

function _animate() {
    jQuery("[data-animation]").each(function() {
        var a = jQuery(this);
        jQuery(window).width() > 767 ? a.appear(function() {
            var b = a.attr("data-animation-delay") ? a.attr("data-animation-delay") : 1;
            b > 1 && a.css("animation-delay", b + "ms"), a.addClass(a.attr("data-animation")), setTimeout(function() {
                a.addClass("animation-visible")
            }, b)
        }, {
            accX: 0,
            accY: -50
        }) : a.addClass("animation-visible")
    }), jQuery("[data-appear-progress-animation]").each(function() {
        var a = jQuery(this);
        jQuery(window).width() > 767 ? a.appear(function() {
            _delay = 1, a.attr("data-appear-progress-animation-delay") && (_delay = a.attr("data-appear-progress-animation-delay")), _delay > 1 && a.css("animation-delay", _delay + "ms"), a.addClass(a.attr("data-appear-progress-animation")), setTimeout(function() {
                a.addClass("animation-visible")
            }, _delay)
        }, {
            accX: 0,
            accY: -50
        }) : a.addClass("animation-visible")
    }), jQuery("[data-appear-progress-animation]").each(function() {
        var a = jQuery(this);
        a.appear(function() {
            var b = a.attr("data-appear-animation-delay") ? a.attr("data-appear-animation-delay") : 1;
            b > 1 && a.css("animation-delay", b + "ms"), a.addClass(a.attr("data-appear-animation")), setTimeout(function() {
                a.animate({
                    width: a.attr("data-appear-progress-animation")
                }, 1e3, "easeOutQuad", function() {
                    a.find(".progress-bar-tooltip").animate({
                        opacity: 1
                    }, 500, "easeOutQuad")
                })
            }, b)
        }, {
            accX: 0,
            accY: -25
        })
    }), jQuery(".countTo [data-to]").each(function() {
        var a = jQuery(this);
        a.appear(function() {
            a.countTo()
        }, {
            accX: 0,
            accY: -50
        })
    }), jQuery().knob && jQuery(".knob").knob(), jQuery(".animate_from_top").each(function() {
        jQuery(this).appear(function() {
            jQuery(this).delay(150).animate({
                opacity: 1,
                top: "0px"
            }, 1e3)
        })
    }), jQuery(".animate_from_bottom").each(function() {
        jQuery(this).appear(function() {
            jQuery(this).delay(150).animate({
                opacity: 1,
                bottom: "0px"
            }, 1e3)
        })
    }), jQuery(".animate_from_left").each(function() {
        jQuery(this).appear(function() {
            jQuery(this).delay(150).animate({
                opacity: 1,
                left: "0px"
            }, 1e3)
        })
    }), jQuery(".animate_from_right").each(function() {
        jQuery(this).appear(function() {
            jQuery(this).delay(150).animate({
                opacity: 1,
                right: "0px"
            }, 1e3)
        })
    }), jQuery(".animate_fade_in").each(function() {
        jQuery(this).appear(function() {
            jQuery(this).delay(350).animate({
                opacity: 1,
                right: "0px"
            }, 1e3)
        })
    })
}

function _owl_carousel() {
    var total = jQuery("div.owl-carousel").length,
        count = 0;
    jQuery("div.owl-carousel").each(function() {
        function progressBar(a) {
            $elem = a, buildProgressBar(), start()
        }

        function buildProgressBar() {
            $progressBar = $("<div>", {
                id: "progressBar"
            }), $bar = $("<div>", {
                id: "bar"
            }), $progressBar.append($bar).prependTo($elem)
        }

        function start() {
            percentTime = 0, isPause = !1, tick = setInterval(interval, 10)
        }

        function interval() {
            isPause === !1 && (percentTime += 1 / time, $bar.css({
                width: percentTime + "%"
            }), percentTime >= 100 && $elem.trigger("owl.next"))
        }

        function pauseOnDragging() {
            isPause = !0
        }

        function moved() {
            clearTimeout(tick), start()
        }
        var slider = jQuery(this),
            options = slider.attr("data-plugin-options"),
            $opt = eval("(" + options + ")");
        if ("true" == $opt.progressBar) var afterInit = progressBar;
        else var afterInit = !1;
        var defaults = {
                items: 5,
                itemsCustom: !1,
                itemsDesktop: [1199, 4],
                itemsDesktopSmall: [980, 3],
                itemsTablet: [768, 2],
                itemsTabletSmall: !1,
                itemsMobile: [479, 1],
                singleItem: !0,
                itemsScaleUp: !1,
                slideSpeed: 200,
                paginationSpeed: 800,
                rewindSpeed: 1e3,
                autoPlay: !1,
                stopOnHover: !1,
                navigation: !1,
                navigationText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
                rewindNav: !0,
                scrollPerPage: !1,
                pagination: !0,
                paginationNumbers: !1,
                responsive: !0,
                responsiveRefreshRate: 200,
                responsiveBaseWidth: window,
                baseClass: "owl-carousel",
                theme: "owl-theme",
                lazyLoad: !1,
                lazyFollow: !0,
                lazyEffect: "fade",
                autoHeight: !1,
                jsonPath: !1,
                jsonSuccess: !1,
                dragBeforeAnimFinish: !0,
                mouseDrag: !0,
                touchDrag: !0,
                transitionStyle: !1,
                addClassActive: !1,
                beforeUpdate: !1,
                afterUpdate: !1,
                beforeInit: !1,
                afterInit: afterInit,
                beforeMove: !1,
                afterMove: 0 == afterInit ? !1 : moved,
                afterAction: !1,
                startDragging: !1,
                afterLazyLoad: !1
            },
            config = jQuery.extend({}, defaults, options, slider.data("plugin-options"));
        slider.owlCarousel(config).addClass("owl-carousel-init");
        var elem = jQuery(this),
            time = 7
    })
}

function _popover() {
    jQuery("a[data-toggle=popover]").bind("click", function(a) {
        jQuery(".popover-title .close").remove(), a.preventDefault()
    });
    var a = !1,
        b = !1;
    jQuery("a[data-toggle=popover], button[data-toggle=popover]").popover({
        html: !0,
        trigger: "manual"
    }).click(function(c) {
        jQuery(this).popover("show"), b = !1, a = !0, c.preventDefault()
    }), jQuery(document).click(function() {
        a & b ? (jQuery("a[data-toggle=popover], button[data-toggle=popover]").popover("hide"), a = b = !1) : b = !0
    }), jQuery("a[data-toggle=popover], button[data-toggle=popover]").popover({
        html: !0,
        trigger: "manual"
    }).click(function(a) {
        $(this).popover("show"), $(".popover-title").append('<button type="button" class="close">&times;</button>'), $(".close").click(function() {
            jQuery("a[data-toggle=popover], button[data-toggle=popover]").popover("hide")
        }), a.preventDefault()
    })
}

function _lightbox() {
    return "undefined" == typeof jQuery.magnificPopup ? !1 : (jQuery.extend(!0, jQuery.magnificPopup.defaults, {
        tClose: "Close",
        tLoading: "Loading...",
        gallery: {
            tPrev: "Previous",
            tNext: "Next",
            tCounter: "%curr% / %total%"
        },
        image: {
            tError: "Image not loaded!"
        },
        ajax: {
            tError: "Content not loaded!"
        }
    }), jQuery(".lightbox").each(function() {
        var a = jQuery(this),
            b = a.attr("data-plugin-options"),
            c = {},
            d = {
                type: "image",
                fixedContentPos: !1,
                fixedBgPos: !1,
                mainClass: "mfp-no-margins mfp-with-zoom",
                image: {
                    verticalFit: !0
                },
                zoom: {
                    enabled: !1,
                    duration: 300
                },
                gallery: {
                    enabled: !1,
                    navigateByImgClick: !0,
                    preload: [0, 1],
                    arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                    tPrev: "Previou",
                    tNext: "Next",
                    tCounter: '<span class="mfp-counter">%curr% / %total%</span>'
                }
            };
        a.data("plugin-options") && (c = jQuery.extend({}, d, b, a.data("plugin-options"))), jQuery(this).magnificPopup(c)
    }), void 0)
}

function _scrollTo() {
    jQuery("a.scrollTo").bind("click", function(a) {
        a.preventDefault();
        var b = jQuery(this).attr("href");
        "#" != b && jQuery("html,body").animate({
            scrollTop: jQuery(b).offset().top
        }, 800, "easeInOutExpo")
    }), jQuery("a#toTop").bind("click", function(a) {
        a.preventDefault(), jQuery("html,body").animate({
            scrollTop: 0
        }, 800, "easeInOutExpo")
    })
}

function _parallax() {
    jQuery().parallax && (jQuery(".parallax.parallax-default").css("background-attachment", "fixed"), jQuery(".parallax.parallax-default").parallax("50%", "0.4"), jQuery(".parallax.parallax-1").css("background-attachment", "fixed"), jQuery(".parallax.parallax-1").parallax("50%", "0.4"), jQuery(".parallax.parallax-2").css("background-attachment", "fixed"), jQuery(".parallax.parallax-2").parallax("50%", "0.4"), jQuery(".parallax.parallax-3").css("background-attachment", "fixed"), jQuery(".parallax.parallax-3").parallax("50%", "0.4"), jQuery(".parallax.parallax-4").css("background-attachment", "fixed"), jQuery(".parallax.parallax-4").parallax("50%", "0.4"), jQuery("#home div.slider").css("background-attachment", "fixed"), jQuery("#home div.slider").parallax("50%", "0.4"))
}

function _masonry() {
    jQuery(window).load(function() {
        jQuery("span.js_loader").remove(), jQuery("li.masonry-item").addClass("fadeIn"), jQuery(".masonry-list").each(function() {
            var a = jQuery(this);
            a.waitForImages(function() {
                a.masonry({
                    itemSelector: ".masonry-item"
                })
            })
        })
    }), jQuery("ul.isotope-filter").each(function() {
        var a = jQuery(this),
            b = jQuery("ul.sort-destination[data-sort-id=" + jQuery(this).attr("data-sort-id") + "]");
        b.get(0) && jQuery(window).load(function() {
            b.isotope({
                itemSelector: "li",
                layoutMode: "sloppyMasonry"
            }), a.find("a").click(function(c) {
                c.preventDefault();
                var d = jQuery(this),
                    e = d.parents(".sort-source").attr("data-sort-id"),
                    f = d.parent().attr("data-option-value");
                return a.find("li.active").removeClass("active"), d.parent().addClass("active"), b.isotope({
                    filter: f
                }), jQuery(".sort-source-title[data-sort-id=" + e + "] strong").html(d.html()), !1
            })
        })
    }), jQuery(window).load(function() {
        jQuery("ul.isotope").addClass("fadeIn")
    })
}

function _toggle() {
    var b = 25;
    jQuery("div.toggle.active > p").addClass("preview-active"), jQuery("div.toggle.active > div.toggle-content").slideDown(400), jQuery("div.toggle > label").click(function(a) {
        var c = jQuery(this).parent(),
            d = jQuery(this).parents("div.toggle"),
            e = !1,
            f = d.hasClass("toggle-accordion");
        if (f && "undefined" != typeof a.originalEvent && d.find("div.toggle.active > label").trigger("click"), c.toggleClass("active"), c.find("> p").get(0)) {
            e = c.find("> p");
            var g = e.css("height"),
                h = e.css("height");
            e.css("height", "auto"), e.css("height", g)
        }
        var i = c.find("> div.toggle-content");
        c.hasClass("active") ? (jQuery(e).animate({
            height: h
        }, 350, function() {
            jQuery(this).addClass("preview-active")
        }), i.slideDown(350)) : (jQuery(e).animate({
            height: b
        }, 350, function() {
            jQuery(this).removeClass("preview-active")
        }), i.slideUp(350))
    })
}

function _bgimage() {
    function a() {
        var a = jQuery("body").attr("data-background");
        a && (jQuery.backstretch(a), jQuery("body").addClass("transparent"))
    }
    jQuery("body").hasClass("boxed") && a()
}

function _quickCart() {
    jQuery("li.quick-cart").bind("click", function() {
        return jQuery("li.quick-cart .quick-cart-content").bind("click", function(a) {
            a.stopPropagation()
        }), jQuery(this).hasClass("open") ? (disable_overlay(), enable_scroll(), jQuery(this).removeClass("open")) : (enable_overlay(), disable_scroll(), jQuery(this).addClass("open"), jQuery("li.search").removeClass("open")), !1
    }), jQuery(document).keydown(function(a) {
        var b = a.keyCode ? a.keyCode : a.which;
        27 == b && (jQuery("li.search, li.quick-cart").removeClass("open"), disable_overlay(), enable_scroll())
    }), jQuery(document).bind("click", function() {
        jQuery("li.quick-cart").hasClass("open") && (jQuery("li.search, li.quick-cart").removeClass("open"), disable_overlay(), enable_scroll())
    })
}

function _placeholder() {
    -1 != navigator.appVersion.indexOf("MSIE") && jQuery("[placeholder]").focus(function() {
        var a = jQuery(this);
        a.val() == a.attr("placeholder") && (a.val(""), a.removeClass("placeholder"))
    }).blur(function() {
        var a = jQuery(this);
        ("" == a.val() || a.val() == a.attr("placeholder")) && (a.addClass("placeholder"), a.val(a.attr("placeholder")))
    }).blur()
}

function _wrotate() {
    jQuery(".word-rotator").each(function() {
        var a = jQuery(this),
            b = a.find(".items"),
            c = b.find("> span"),
            d = c.eq(0),
            e = d.clone(),
            f = jQuery(this).height(),
            g = 1,
            h = 0,
            i = jQuery(this).attr("data-delay") || 2e3;
        b.append(e), a.height(f).addClass("active"), setInterval(function() {
            h = g * f, b.animate({
                top: -h + "px"
            }, 300, "easeOutQuad", function() {
                g++, g > c.length && (b.css("top", 0), g = 1)
            })
        }, i)
    })
}

function _misc() {
    jQuery().flexslider && jQuery("div.flexslider").length > 0 && jQuery("div.flexslider").flexslider(flex_options), jQuery().layerSlider && jQuery("div.layerslider").length > 0 && jQuery("div.layerslider").each(function() {
        jQuery(this).layerSlider(layer_options)
    })
}

function _datepicker() {
    jQuery(".demo-datepicker").daterangepicker({
        singleDatePicker: !0
    }, function() {}), jQuery(".demo-rangepicker").daterangepicker(null, function() {})
}

function _colorpicker() {
    jQuery(".colorpicker").colorpicker(), jQuery(".colorpicker-element").colorpicker()
}

function contactMap() {
    var a = new google.maps.LatLng($googlemap_latitude, $googlemap_longitude),
        b = {
            zoom: $googlemap_zoom,
            center: a,
            disableDefaultUI: !1,
            navigationControl: !1,
            mapTypeControl: !1,
            scrollwheel: !1,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        },
        c = new google.maps.Map(document.getElementById("gmap"), b);
    google.maps.event.trigger(c, "resize"), c.setZoom(c.getZoom());
    var d = new google.maps.Marker({
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAArCAYAAAD7YZFOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAABONJREFUeNrEmMFvG0UUh7+13dI0Ng0pVEJIEJCQcgmEI1zo7pEDyh+A1JY7EhUnTglIvSG1cEGIQ3JBAg5VwglBWW9JSQWFkoCsxFjJOgpWtlXjNE6dOl57h8vbauV61/baEU8aRfaMZ7/83pvfzKymlCIqDMOYBM4Bk8DZNkMs4DowBxSj5jJNk15CC4MzDOMsMB0CFBYWcBFYHgRcIgTsMpDtEQwZ/ycwwwAi1QI1IlCTfc47DbwAXOhnklblBgHmx3lgdiBwkspBgQUB34/7Y00p5Rd/tovxy1L0e8ApYAoY6+J3LwLFXhdEKlAjnVbhhTZWcVEWQSfVp+PUX0J8LGpVzpmmqZumWYwAf018Liq9Y3Fq7lxE/7xpmt3+xxfC/E1iKg5clGoXe5wvavybceAmI9JZ7HE+K0K9sdhW0iZWYjqAFfL95CDhlmPC7Q3KJKPgxvifIwru1ZhzhhV+MQ7c/TBvkoNALzEWsfpjwYXV1kiMffFyRF9R07SE9ngQ1hIdCn/aMIzzYZ3ZbFaTllBKvRtltJ7n5YDjwBPSjsv2mRKRtHZ76/UOCs0ahjFmmuZMEEomTExMTIyOjo5+omnaO1GSViqVW0AaUIEG0AQa0pqA5/dpuq6PALtdpKwIzHuet9hsNveVUqeTyeTbyWTyLTmhhIZSasuyrNcD6mgCoAlQE6gDh9I8QPlHpjhH8q6j0Wh8s7i4+AFwTBRPtaTRA1ygCjzwAX0rWThKv2o2mwvAAfBQFEsBQ8BJaWlR/0n5PgloPtzcEbIVl5aWvhVFHggksihOAsOBlpbvE49M2DTN+8D8EcHN67ruF71fU0og0oE2HADTWneIT48ILjivJik90aKYD6YFVq1KBC68VhwX76QaUBTrSYlCzwBPi8n7qp0QNatATeAe21s/GiSZUuqzbDZ7TGrrNPA88BLwHPAUkJE+gH3ZSmuPfK71dYRhGPYgTiRKqUXLsqbk4aeAM8CzAumvyIZAbQHrQEnU8x678QfUm+0XznGcr4BXBGxUlEoHvM4H2wX+Be4ErCb8RU6/6tVqtX9u3rz5uSg0FNhPE/JwV1K4CeQBWz43gnCJkJR83I9qtm2vAuOB+jojBjssyj2UFOZlEe61goXCWZY1p5S6EQdsZ2en6DhOXWprRKDSUnuaKFQA/gY2JK1uK1jkSbher1+KsU256+vrm7IK0/LX97AG4AA5eU223i6VHeGUUmppaSnruu7VXuC2t7e3q9VqMuD4Q6JWRdS6Bfwhqaz4ZhvnDtGwbftDpVS1G7CDg4OHhUJhR6BOymHSBe7KNfMX4LbYRrUTWCc4VSqVnN3d3SvdwBUKhXuBlalJkeeBG3Kg/QvYlo3f6+v2pZTygNrKyspsrVbLR01SKpX2y+WyJ75ZE4u4BfwE/CyQ5bDCj6McUqxl27ZnPM87bDfg8PCwadv2gTz4jqTwR+B74FcB3dd1vdELWEc4Ua/qOM5vjuN83W7M2tranuu6O8CavIBcAK6JVdwFDnVd9+LYUqqbUzZwL5/Pf5nJZN7IZDIv+x2bm5uVcrmcl3q6LarZUm9uXKhu0+qrdwDYq6url+r1elVWZ21jY+Ma8B1wVdTKATtAvV+wbpXzr2+71Wr190Kh8MX4+Ph7uVxuAfhBfGtLjuCuruuKAcV/AwDnrxMM7gFGVQAAAABJRU5ErkJggg==",
        position: a,
        map: c,
        title: ""
    });
    d.setMap(c), google.maps.event.addListener(d, "click", function() {}), google.maps.event.addDomListener(window, "resize", function() {
        c.setCenter(a)
    })
}

function showMap(a) {
    var b = document.createElement("script");
    b.type = "text/javascript", b.src = "https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=true&callback=" + a, document.body.appendChild(b)
}

function _newsletterSubscribe() {
    jQuery("form#newsletterSubscribe button").bind("click", function(a) {
        a.preventDefault();
        var b = jQuery("form#newsletterSubscribe input").val(),
            c = jQuery("#newsletterSubscribe").attr("action"),
            d = jQuery("#newsletterSubscribe").attr("method");
        $.ajax({
            url: c,
            data: {
                ajax: "true",
                action: "newsletter_subscribe",
                email: b
            },
            type: d,
            error: function() {
                alert("Server Internal Error")
            },
            success: function(a) {
                a = a.trim(), "_required_" == a ? alert("Please complete all fields!") : "_invalid_email_" == a ? alert("Invalid Email!") : "_ok_" == a ? (jQuery("#newsletter_email").val(""), alert("Thank You!")) : alert(a)
            }
        })
    })
}

function _htmlEditor() {
    jQuery("textarea.summernote").length > 0 && jQuery().summernote && jQuery("textarea.summernote").each(function() {
        jQuery(this).summernote({
            height: jQuery(this).attr("data-height") || 200,
            toolbar: [
                ["style", ["style"]],
                ["fontsize", ["fontsize"]],
                ["style", ["bold", "italic", "underline", "strikethrough", "clear"]],
                ["color", ["color"]],
                ["para", ["ul", "ol", "paragraph"]],
                ["table", ["table"]],
                ["media", ["link", "picture", "video"]],
                ["misc", ["codeview", "fullscreen", "help"]]
            ]
        })
    }), jQuery("textarea.markdown").length > 0 && jQuery().markdown && jQuery("textarea.markdown").each(function() {
        jQuery(this).markdown({
            autofocus: !1,
            savable: !1,
            height: jQuery(this).attr("data-height") || "inherit",
            language: jQuery(this).attr("data-language") || ""
        })
    })
}

function wheel(a) {
    a.preventDefault()
}

function disable_scroll() {
    window.addEventListener && window.addEventListener("DOMMouseScroll", wheel, !1), window.onmousewheel = document.onmousewheel = wheel
}

function enable_scroll() {
    window.removeEventListener && window.removeEventListener("DOMMouseScroll", wheel, !1), window.onmousewheel = document.onmousewheel = document.onkeydown = null
}

function enable_overlay() {
    jQuery("span.global-overlay").remove(), jQuery("body").append('<span class="global-overlay"></span>')
}

function disable_overlay() {
        jQuery("span.global-overlay").remove()
    }! function(a, b, c, d, e, f, g) {
        a.GoogleAnalyticsObject = e, a[e] = a[e] || function() {
            (a[e].q = a[e].q || []).push(arguments)
        }, a[e].l = 1 * new Date, f = b.createElement(c), g = b.getElementsByTagName(c)[0], f.async = 1, f.src = d, g.parentNode.insertBefore(f, g)
    }(window, document, "script", "//www.google-analytics.com/analytics.js", "ga"), ga("create", "UA-34016412-11", "auto"), ga("send", "pageview"), jQuery(window).ready(function() {
        Epona()
    }), 
    function(a) {
        function b(a, b) {
            return a.toFixed(b.decimals)
        }
        a.fn.countTo = function(b) {
            return b = b || {}, jQuery(this).each(function() {
                function k() {
                    i += e, h++, l(i), "function" == typeof c.onUpdate && c.onUpdate.call(f, i), h >= d && (g.removeData("countTo"), clearInterval(j.interval), i = c.to, "function" == typeof c.onComplete && c.onComplete.call(f, i))
                }

                function l(a) {
                    var b = c.formatter.call(f, a, c);
                    g.html(b)
                }
                var c = jQuery.extend({}, a.fn.countTo.defaults, {
                        from: jQuery(this).data("from"),
                        to: jQuery(this).data("to"),
                        speed: jQuery(this).data("speed"),
                        refreshInterval: jQuery(this).data("refresh-interval"),
                        decimals: jQuery(this).data("decimals")
                    }, b),
                    d = Math.ceil(c.speed / c.refreshInterval),
                    e = (c.to - c.from) / d,
                    f = this,
                    g = jQuery(this),
                    h = 0,
                    i = c.from,
                    j = g.data("countTo") || {};
                g.data("countTo", j), j.interval && clearInterval(j.interval), j.interval = setInterval(k, c.refreshInterval), l(i)
            })
        }, a.fn.countTo.defaults = {
            from: 0,
            to: 0,
            speed: 1e3,
            refreshInterval: 100,
            decimals: 0,
            formatter: b,
            onUpdate: null,
            onComplete: null
        }
    }(jQuery),
    function(a) {
        var b = "waitForImages";
        a.waitForImages = {
            hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage", "cursor"]
        }, a.expr[":"].uncached = function(b) {
            if (!a(b).is('img[src!=""]')) return !1;
            var c = new Image;
            return c.src = b.src, !c.complete
        }, a.fn.waitForImages = function(c, d, e) {
            var f = 0,
                g = 0;
            if (a.isPlainObject(arguments[0]) && (e = arguments[0].waitForAll, d = arguments[0].each, c = arguments[0].finished), c = c || a.noop, d = d || a.noop, e = !!e, !a.isFunction(c) || !a.isFunction(d)) throw new TypeError("An invalid callback was supplied.");
            return this.each(function() {
                var h = a(this),
                    i = [],
                    j = a.waitForImages.hasImageProperties || [],
                    k = /url\(\s*(['"]?)(.*?)\1\s*\)/g;
                e ? h.find("*").addBack().each(function() {
                    var b = a(this);
                    b.is("img:uncached") && i.push({
                        src: b.attr("src"),
                        element: b[0]
                    }), a.each(j, function(a, c) {
                        var e, d = b.css(c);
                        if (!d) return !0;
                        for (; e = k.exec(d);) i.push({
                            src: e[2],
                            element: b[0]
                        })
                    })
                }) : h.find("img:uncached").each(function() {
                    i.push({
                        src: this.src,
                        element: this
                    })
                }), f = i.length, g = 0, 0 === f && c.call(h[0]), a.each(i, function(e, i) {
                    var j = new Image;
                    a(j).on("load." + b + " error." + b, function(a) {
                        return g++, d.call(i.element, g, f, "load" == a.type), g == f ? (c.call(h[0]), !1) : void 0
                    }), j.src = i.src
                })
            })
        }
    }(jQuery),
    function(a) {
        a.extend({
            browserDetect: function() {
                var a = navigator.userAgent,
                    b = a.toLowerCase(),
                    d = function(a) {
                        return b.indexOf(a) > -1
                    },
                    e = "gecko",
                    f = "webkit",
                    g = "safari",
                    h = "opera",
                    i = document.documentElement,
                    j = [!/opera|webtv/i.test(b) && /msie\s(\d)/.test(b) ? "ie ie" + parseFloat(navigator.appVersion.split("MSIE")[1]) : d("firefox/2") ? e + " ff2" : d("firefox/3.5") ? e + " ff3 ff3_5" : d("firefox/3") ? e + " ff3" : d("gecko/") ? e : d("opera") ? h + (/version\/(\d+)/.test(b) ? " " + h + RegExp.jQuery1 : /opera(\s|\/)(\d+)/.test(b) ? " " + h + RegExp.jQuery2 : "") : d("konqueror") ? "konqueror" : d("chrome") ? f + " chrome" : d("iron") ? f + " iron" : d("applewebkit/") ? f + " " + g + (/version\/(\d+)/.test(b) ? " " + g + RegExp.jQuery1 : "") : d("mozilla/") ? e : "", d("j2me") ? "mobile" : d("iphone") ? "iphone" : d("ipod") ? "ipod" : d("mac") ? "mac" : d("darwin") ? "mac" : d("webtv") ? "webtv" : d("win") ? "win" : d("freebsd") ? "freebsd" : d("x11") || d("linux") ? "linux" : "", "js"];
                c = j.join(" "), i.className += " " + c;
                var k = !window.ActiveXObject && "ActiveXObject" in window;
                return k ? (jQuery("html").removeClass("gecko").addClass("ie ie11"), void 0) : void 0
            }
        })
    }(jQuery),
    function(a) {
        a.extend({
            smoothScroll: function() {
                function l() {
                    var a = !1;
                    if (document.URL.indexOf("google.com/reader/view") > -1 && (a = !0), b.excluded) {
                        var d = b.excluded.split(/[,\n] ?/);
                        d.push("mail.google.com");
                        for (var e = d.length; e--;)
                            if (document.URL.indexOf(d[e]) > -1) {
                                i && i.disconnect(), z("mousewheel", r), a = !0, c = !0;
                                break
                            }
                    }
                    a && z("keydown", s), b.keyboardSupport && !a && y("keydown", s)
                }

                function m() {
                    if (document.body) {
                        var a = document.body,
                            e = document.documentElement,
                            j = window.innerHeight,
                            k = a.scrollHeight;
                        if (g = document.compatMode.indexOf("CSS") >= 0 ? e : a, h = a, l(), f = !0, top != self) d = !0;
                        else if (k > j && (a.offsetHeight <= j || e.offsetHeight <= j)) {
                            var m = !1,
                                n = function() {
                                    m || e.scrollHeight == document.height || (m = !0, setTimeout(function() {
                                        e.style.height = document.height + "px", m = !1
                                    }, 500))
                                };
                            e.style.height = "auto", setTimeout(n, 10);
                            var o = {
                                attributes: !0,
                                childList: !0,
                                characterData: !1
                            };
                            if (i = new G(n), i.observe(a, o), g.offsetHeight <= j) {
                                var p = document.createElement("div");
                                p.style.clear = "both", a.appendChild(p)
                            }
                        }
                        if (document.URL.indexOf("mail.google.com") > -1) {
                            var q = document.createElement("style");
                            q.innerHTML = ".iu { visibility: hidden }", (document.getElementsByTagName("head")[0] || e).appendChild(q)
                        } else if (document.URL.indexOf("www.facebook.com") > -1) {
                            var r = document.getElementById("home_stream");
                            r && (r.style.webkitTransform = "translateZ(0)")
                        }
                        b.fixedBackground || c || (a.style.backgroundAttachment = "scroll", e.style.backgroundAttachment = "scroll")
                    }
                }

                function q(a, c, d, e) {
                    if (e || (e = 1e3), B(c, d), 1 != b.accelerationMax) {
                        var f = +new Date,
                            g = f - p;
                        if (g < b.accelerationDelta) {
                            var h = (1 + 30 / g) / 2;
                            h > 1 && (h = Math.min(h, b.accelerationMax), c *= h, d *= h)
                        }
                        p = +new Date
                    }
                    if (n.push({
                            x: c,
                            y: d,
                            lastX: 0 > c ? .99 : -.99,
                            lastY: 0 > d ? .99 : -.99,
                            start: +new Date
                        }), !o) {
                        var i = a === document.body,
                            j = function() {
                                for (var g = +new Date, h = 0, k = 0, l = 0; l < n.length; l++) {
                                    var m = n[l],
                                        p = g - m.start,
                                        q = p >= b.animationTime,
                                        r = q ? 1 : p / b.animationTime;
                                    b.pulseAlgorithm && (r = I(r));
                                    var s = m.x * r - m.lastX >> 0,
                                        t = m.y * r - m.lastY >> 0;
                                    h += s, k += t, m.lastX += s, m.lastY += t, q && (n.splice(l, 1), l--)
                                }
                                i ? window.scrollBy(h, k) : (h && (a.scrollLeft += h), k && (a.scrollTop += k)), c || d || (n = []), n.length ? F(j, a, e / b.frameRate + 1) : o = !1
                            };
                        F(j, a, 0), o = !0
                    }
                }

                function r(a) {
                    f || m();
                    var c = a.target,
                        d = x(c);
                    if (!d || a.defaultPrevented || A(h, "embed") || A(c, "embed") && /\.pdf/i.test(c.src)) return !0;
                    var e = a.wheelDeltaX || 0,
                        g = a.wheelDeltaY || 0;
                    return e || g || (g = a.wheelDelta || 0), !b.touchpadSupport && D(g) ? !0 : (Math.abs(e) > 1.2 && (e *= b.stepSize / 120), Math.abs(g) > 1.2 && (g *= b.stepSize / 120), q(d, -e, -g), a.preventDefault(), void 0)
                }

                function s(a) {
                    var c = a.target,
                        d = a.ctrlKey || a.altKey || a.metaKey || a.shiftKey && a.keyCode !== k.spacebar;
                    if (/input|textarea|select|embed/i.test(c.nodeName) || c.isContentEditable || a.defaultPrevented || d) return !0;
                    if (A(c, "button") && a.keyCode === k.spacebar) return !0;
                    var e, f = 0,
                        g = 0,
                        i = x(h),
                        j = i.clientHeight;
                    switch (i == document.body && (j = window.innerHeight), a.keyCode) {
                        case k.up:
                            g = -b.arrowScroll;
                            break;
                        case k.down:
                            g = b.arrowScroll;
                            break;
                        case k.spacebar:
                            e = a.shiftKey ? 1 : -1, g = .9 * -e * j;
                            break;
                        case k.pageup:
                            g = .9 * -j;
                            break;
                        case k.pagedown:
                            g = .9 * j;
                            break;
                        case k.home:
                            g = -i.scrollTop;
                            break;
                        case k.end:
                            var l = i.scrollHeight - i.scrollTop - j;
                            g = l > 0 ? l + 10 : 0;
                            break;
                        case k.left:
                            f = -b.arrowScroll;
                            break;
                        case k.right:
                            f = b.arrowScroll;
                            break;
                        default:
                            return !0
                    }
                    q(i, f, g), a.preventDefault()
                }

                function t(a) {
                    h = a.target
                }

                function w(a, b) {
                    for (var c = a.length; c--;) u[v(a[c])] = b;
                    return b
                }

                function x(a) {
                    var b = [],
                        c = g.scrollHeight;
                    do {
                        var e = u[v(a)];
                        if (e) return w(b, e);
                        if (b.push(a), c === a.scrollHeight) {
                            if (!d || g.clientHeight + 10 < c) return w(b, document.body)
                        } else if (a.clientHeight + 10 < a.scrollHeight && (overflow = getComputedStyle(a, "").getPropertyValue("overflow-y"), "scroll" === overflow || "auto" === overflow)) return w(b, a)
                    } while (a = a.parentNode)
                }

                function y(a, b, c) {
                    window.addEventListener(a, b, c || !1)
                }

                function z(a, b, c) {
                    window.removeEventListener(a, b, c || !1)
                }

                function A(a, b) {
                    return (a.nodeName || "").toLowerCase() === b.toLowerCase()
                }

                function B(a, b) {
                    a = a > 0 ? 1 : -1, b = b > 0 ? 1 : -1, (e.x !== a || e.y !== b) && (e.x = a, e.y = b, n = [], p = 0)
                }

                function D(a) {
                    if (a) {
                        a = Math.abs(a), j.push(a), j.shift(), clearTimeout(C);
                        var b = j[0] == j[1] && j[1] == j[2],
                            c = E(j[0], 120) && E(j[1], 120) && E(j[2], 120);
                        return !(b || c)
                    }
                }

                function E(a, b) {
                    return Math.floor(a / b) == a / b
                }

                function H(a) {
                    var c, d, e;
                    return a *= b.pulseScale, 1 > a ? c = a - (1 - Math.exp(-a)) : (d = Math.exp(-1), a -= 1, e = 1 - Math.exp(-a), c = d + e * (1 - d)), c * b.pulseNormalize
                }

                function I(a) {
                    return a >= 1 ? 1 : 0 >= a ? 0 : (1 == b.pulseNormalize && (b.pulseNormalize /= H(1)), H(a))
                }
                var h, i, a = {
                        frameRate: 60,
                        animationTime: 700,
                        stepSize: 120,
                        pulseAlgorithm: !0,
                        pulseScale: 10,
                        pulseNormalize: 1,
                        accelerationDelta: 20,
                        accelerationMax: 1,
                        keyboardSupport: !0,
                        arrowScroll: 50,
                        touchpadSupport: !0,
                        fixedBackground: !0,
                        excluded: ""
                    },
                    b = a,
                    c = !1,
                    d = !1,
                    e = {
                        x: 0,
                        y: 0
                    },
                    f = !1,
                    g = document.documentElement,
                    j = [120, 120, 120],
                    k = {
                        left: 37,
                        up: 38,
                        right: 39,
                        down: 40,
                        spacebar: 32,
                        pageup: 33,
                        pagedown: 34,
                        end: 35,
                        home: 36
                    },
                    n = [],
                    o = !1,
                    p = +new Date,
                    u = {};
                setInterval(function() {
                    u = {}
                }, 1e4);
                var C, v = function() {
                        var a = 0;
                        return function(b) {
                            return b.uniqueID || (b.uniqueID = a++)
                        }
                    }(),
                    F = function() {
                        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(a, b, c) {
                            window.setTimeout(a, c || 1e3 / 60)
                        }
                    }(),
                    G = window.MutationObserver || window.WebKitMutationObserver;
                y("mousedown", t), y("mousewheel", r), y("load", m)
            }
        })
    }(jQuery),
    function(a, b) {
        function d() {
            return new Date(Date.UTC.apply(Date, arguments))
        }

        function e() {
            var a = new Date;
            return d(a.getFullYear(), a.getMonth(), a.getDate())
        }

        function f(a) {
            return function() {
                return this[a].apply(this, arguments)
            }
        }

        function j(b, c) {
            function h(a, b) {
                return b.toLowerCase()
            }
            var f, d = a(b).data(),
                e = {},
                g = new RegExp("^" + c.toLowerCase() + "([A-Z])");
            c = new RegExp("^" + c.toLowerCase());
            for (var i in d) c.test(i) && (f = i.replace(g, h), e[f] = d[i]);
            return e
        }

        function k(b) {
            var c = {};
            if (o[b] || (b = b.split("-")[0], o[b])) {
                var d = o[b];
                return a.each(n, function(a, b) {
                    b in d && (c[b] = d[b])
                }), c
            }
        }
        var c = a(window),
            g = function() {
                var b = {
                    get: function(a) {
                        return this.slice(a)[0]
                    },
                    contains: function(a) {
                        for (var b = a && a.valueOf(), c = 0, d = this.length; d > c; c++)
                            if (this[c].valueOf() === b) return c;
                        return -1
                    },
                    remove: function(a) {
                        this.splice(a, 1)
                    },
                    replace: function(b) {
                        b && (a.isArray(b) || (b = [b]), this.clear(), this.push.apply(this, b))
                    },
                    clear: function() {
                        this.length = 0
                    },
                    copy: function() {
                        var a = new g;
                        return a.replace(this), a
                    }
                };
                return function() {
                    var c = [];
                    return c.push.apply(c, arguments), a.extend(c, b), c
                }
            }(),
            h = function(b, c) {
                this.dates = new g, this.viewDate = e(), this.focusDate = null, this._process_options(c), this.element = a(b), this.isInline = !1, this.isInput = this.element.is("input"), this.component = this.element.is(".date") ? this.element.find(".add-on, .input-group-addon, .btn") : !1, this.hasInput = this.component && this.element.find("input").length, this.component && 0 === this.component.length && (this.component = !1), this.picker = a(p.template), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && this.picker.addClass("datepicker-rtl"), this.viewMode = this.o.startView, this.o.calendarWeeks && this.picker.find("tfoot th.today").attr("colspan", function(a, b) {
                    return parseInt(b) + 1
                }), this._allow_update = !1, this.setStartDate(this._o.startDate), this.setEndDate(this._o.endDate), this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled), this.fillDow(), this.fillMonths(), this._allow_update = !0, this.update(), this.showMode(), this.isInline && this.show()
            };
        h.prototype = {
            constructor: h,
            _process_options: function(b) {
                this._o = a.extend({}, this._o, b);
                var c = this.o = a.extend({}, this._o),
                    d = c.language;
                switch (o[d] || (d = d.split("-")[0], o[d] || (d = m.language)), c.language = d, c.startView) {
                    case 2:
                    case "decade":
                        c.startView = 2;
                        break;
                    case 1:
                    case "year":
                        c.startView = 1;
                        break;
                    default:
                        c.startView = 0
                }
                switch (c.minViewMode) {
                    case 1:
                    case "months":
                        c.minViewMode = 1;
                        break;
                    case 2:
                    case "years":
                        c.minViewMode = 2;
                        break;
                    default:
                        c.minViewMode = 0
                }
                c.startView = Math.max(c.startView, c.minViewMode), c.multidate !== !0 && (c.multidate = Number(c.multidate) || !1, c.multidate = c.multidate !== !1 ? Math.max(0, c.multidate) : 1), c.multidateSeparator = String(c.multidateSeparator), c.weekStart %= 7, c.weekEnd = (c.weekStart + 6) % 7;
                var e = p.parseFormat(c.format);
                c.startDate !== -1 / 0 && (c.startDate = c.startDate ? c.startDate instanceof Date ? this._local_to_utc(this._zero_time(c.startDate)) : p.parseDate(c.startDate, e, c.language) : -1 / 0), 1 / 0 !== c.endDate && (c.endDate = c.endDate ? c.endDate instanceof Date ? this._local_to_utc(this._zero_time(c.endDate)) : p.parseDate(c.endDate, e, c.language) : 1 / 0), c.daysOfWeekDisabled = c.daysOfWeekDisabled || [], a.isArray(c.daysOfWeekDisabled) || (c.daysOfWeekDisabled = c.daysOfWeekDisabled.split(/[,\s]*/)), c.daysOfWeekDisabled = a.map(c.daysOfWeekDisabled, function(a) {
                    return parseInt(a, 10)
                });
                var f = String(c.orientation).toLowerCase().split(/\s+/g),
                    g = c.orientation.toLowerCase();
                if (f = a.grep(f, function(a) {
                        return /^auto|left|right|top|bottom$/.test(a)
                    }), c.orientation = {
                        x: "auto",
                        y: "auto"
                    }, g && "auto" !== g)
                    if (1 === f.length) switch (f[0]) {
                        case "top":
                        case "bottom":
                            c.orientation.y = f[0];
                            break;
                        case "left":
                        case "right":
                            c.orientation.x = f[0]
                    } else g = a.grep(f, function(a) {
                        return /^left|right$/.test(a)
                    }), c.orientation.x = g[0] || "auto", g = a.grep(f, function(a) {
                        return /^top|bottom$/.test(a)
                    }), c.orientation.y = g[0] || "auto";
                    else;
            },
            _events: [],
            _secondaryEvents: [],
            _applyEvents: function(a) {
                for (var d, e, f, c = 0; c < a.length; c++) d = a[c][0], 2 === a[c].length ? (e = b, f = a[c][1]) : 3 === a[c].length && (e = a[c][1], f = a[c][2]), d.on(f, e)
            },
            _unapplyEvents: function(a) {
                for (var d, e, f, c = 0; c < a.length; c++) d = a[c][0], 2 === a[c].length ? (f = b, e = a[c][1]) : 3 === a[c].length && (f = a[c][1], e = a[c][2]), d.off(e, f)
            },
            _buildEvents: function() {
                this.isInput ? this._events = [
                    [this.element, {
                        focus: a.proxy(this.show, this),
                        keyup: a.proxy(function(b) {
                            -1 === a.inArray(b.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update()
                        }, this),
                        keydown: a.proxy(this.keydown, this)
                    }]
                ] : this.component && this.hasInput ? this._events = [
                    [this.element.find("input"), {
                        focus: a.proxy(this.show, this),
                        keyup: a.proxy(function(b) {
                            -1 === a.inArray(b.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update()
                        }, this),
                        keydown: a.proxy(this.keydown, this)
                    }],
                    [this.component, {
                        click: a.proxy(this.show, this)
                    }]
                ] : this.element.is("div") ? this.isInline = !0 : this._events = [
                    [this.element, {
                        click: a.proxy(this.show, this)
                    }]
                ], this._events.push([this.element, "*", {
                    blur: a.proxy(function(a) {
                        this._focused_from = a.target
                    }, this)
                }], [this.element, {
                    blur: a.proxy(function(a) {
                        this._focused_from = a.target
                    }, this)
                }]), this._secondaryEvents = [
                    [this.picker, {
                        click: a.proxy(this.click, this)
                    }],
                    [a(window), {
                        resize: a.proxy(this.place, this)
                    }],
                    [a(document), {
                        "mousedown touchstart": a.proxy(function(a) {
                            this.element.is(a.target) || this.element.find(a.target).length || this.picker.is(a.target) || this.picker.find(a.target).length || this.hide()
                        }, this)
                    }]
                ]
            },
            _attachEvents: function() {
                this._detachEvents(), this._applyEvents(this._events)
            },
            _detachEvents: function() {
                this._unapplyEvents(this._events)
            },
            _attachSecondaryEvents: function() {
                this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents)
            },
            _detachSecondaryEvents: function() {
                this._unapplyEvents(this._secondaryEvents)
            },
            _trigger: function(b, c) {
                var d = c || this.dates.get(-1),
                    e = this._utc_to_local(d);
                this.element.trigger({
                    type: b,
                    date: e,
                    dates: a.map(this.dates, this._utc_to_local),
                    format: a.proxy(function(a, b) {
                        0 === arguments.length ? (a = this.dates.length - 1, b = this.o.format) : "string" == typeof a && (b = a, a = this.dates.length - 1), b = b || this.o.format;
                        var c = this.dates.get(a);
                        return p.formatDate(c, b, this.o.language)
                    }, this)
                })
            },
            show: function() {
                this.isInline || this.picker.appendTo("body"), this.picker.show(), this.place(), this._attachSecondaryEvents(), this._trigger("show")
            },
            hide: function() {
                this.isInline || this.picker.is(":visible") && (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.viewMode = this.o.startView, this.showMode(), this.o.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(), this._trigger("hide"))
            },
            remove: function() {
                this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date
            },
            _utc_to_local: function(a) {
                return a && new Date(a.getTime() + 6e4 * a.getTimezoneOffset())
            },
            _local_to_utc: function(a) {
                return a && new Date(a.getTime() - 6e4 * a.getTimezoneOffset())
            },
            _zero_time: function(a) {
                return a && new Date(a.getFullYear(), a.getMonth(), a.getDate())
            },
            _zero_utc_time: function(a) {
                return a && new Date(Date.UTC(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate()))
            },
            getDates: function() {
                return a.map(this.dates, this._utc_to_local)
            },
            getUTCDates: function() {
                return a.map(this.dates, function(a) {
                    return new Date(a)
                })
            },
            getDate: function() {
                return this._utc_to_local(this.getUTCDate())
            },
            getUTCDate: function() {
                return new Date(this.dates.get(-1))
            },
            setDates: function() {
                var b = a.isArray(arguments[0]) ? arguments[0] : arguments;
                this.update.apply(this, b), this._trigger("changeDate"), this.setValue()
            },
            setUTCDates: function() {
                var b = a.isArray(arguments[0]) ? arguments[0] : arguments;
                this.update.apply(this, a.map(b, this._utc_to_local)), this._trigger("changeDate"), this.setValue()
            },
            setDate: f("setDates"),
            setUTCDate: f("setUTCDates"),
            setValue: function() {
                var a = this.getFormattedDate();
                this.isInput ? this.element.val(a).change() : this.component && this.element.find("input").val(a).change()
            },
            getFormattedDate: function(c) {
                c === b && (c = this.o.format);
                var d = this.o.language;
                return a.map(this.dates, function(a) {
                    return p.formatDate(a, c, d)
                }).join(this.o.multidateSeparator)
            },
            setStartDate: function(a) {
                this._process_options({
                    startDate: a
                }), this.update(), this.updateNavArrows()
            },
            setEndDate: function(a) {
                this._process_options({
                    endDate: a
                }), this.update(), this.updateNavArrows()
            },
            setDaysOfWeekDisabled: function(a) {
                this._process_options({
                    daysOfWeekDisabled: a
                }), this.update(), this.updateNavArrows()
            },
            place: function() {
                if (!this.isInline) {
                    var b = this.picker.outerWidth(),
                        d = this.picker.outerHeight(),
                        e = 10,
                        f = c.width(),
                        g = c.height(),
                        h = c.scrollTop(),
                        i = parseInt(this.element.parents().filter(function() {
                            return "auto" !== a(this).css("z-index")
                        }).first().css("z-index")) + 10,
                        j = this.component ? this.component.parent().offset() : this.element.offset(),
                        k = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
                        l = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1),
                        m = j.left,
                        n = j.top;
                    this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (m -= b - l)) : (this.picker.addClass("datepicker-orient-left"), j.left < 0 ? m -= j.left - e : j.left + b > f && (m = f - b - e));
                    var p, q, o = this.o.orientation.y;
                    "auto" === o && (p = -h + j.top - d, q = h + g - (j.top + k + d), o = Math.max(p, q) === q ? "top" : "bottom"), this.picker.addClass("datepicker-orient-" + o), "top" === o ? n += k : n -= d + parseInt(this.picker.css("padding-top")), this.picker.css({
                        top: n,
                        left: m,
                        zIndex: i
                    })
                }
            },
            _allow_update: !0,
            update: function() {
                if (this._allow_update) {
                    var b = this.dates.copy(),
                        c = [],
                        d = !1;
                    arguments.length ? (a.each(arguments, a.proxy(function(a, b) {
                        b instanceof Date && (b = this._local_to_utc(b)), c.push(b)
                    }, this)), d = !0) : (c = this.isInput ? this.element.val() : this.element.data("date") || this.element.find("input").val(), c = c && this.o.multidate ? c.split(this.o.multidateSeparator) : [c], delete this.element.data().date), c = a.map(c, a.proxy(function(a) {
                        return p.parseDate(a, this.o.format, this.o.language)
                    }, this)), c = a.grep(c, a.proxy(function(a) {
                        return a < this.o.startDate || a > this.o.endDate || !a
                    }, this), !0), this.dates.replace(c), this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate && (this.viewDate = new Date(this.o.endDate)), d ? this.setValue() : c.length && String(b) !== String(this.dates) && this._trigger("changeDate"), !this.dates.length && b.length && this._trigger("clearDate"), this.fill()
                }
            },
            fillDow: function() {
                var a = this.o.weekStart,
                    b = "<tr>";
                if (this.o.calendarWeeks) {
                    var c = '<th class="cw">&nbsp;</th>';
                    b += c, this.picker.find(".datepicker-days thead tr:first-child").prepend(c)
                }
                for (; a < this.o.weekStart + 7;) b += '<th class="dow">' + o[this.o.language].daysMin[a++ % 7] + "</th>";
                b += "</tr>", this.picker.find(".datepicker-days thead").append(b)
            },
            fillMonths: function() {
                for (var a = "", b = 0; 12 > b;) a += '<span class="month">' + o[this.o.language].monthsShort[b++] + "</span>";
                this.picker.find(".datepicker-months td").html(a)
            },
            setRange: function(b) {
                b && b.length ? this.range = a.map(b, function(a) {
                    return a.valueOf()
                }) : delete this.range, this.fill()
            },
            getClassNames: function(b) {
                var c = [],
                    d = this.viewDate.getUTCFullYear(),
                    e = this.viewDate.getUTCMonth(),
                    f = new Date;
                return b.getUTCFullYear() < d || b.getUTCFullYear() === d && b.getUTCMonth() < e ? c.push("old") : (b.getUTCFullYear() > d || b.getUTCFullYear() === d && b.getUTCMonth() > e) && c.push("new"), this.focusDate && b.valueOf() === this.focusDate.valueOf() && c.push("focused"), this.o.todayHighlight && b.getUTCFullYear() === f.getFullYear() && b.getUTCMonth() === f.getMonth() && b.getUTCDate() === f.getDate() && c.push("today"), -1 !== this.dates.contains(b) && c.push("active"), (b.valueOf() < this.o.startDate || b.valueOf() > this.o.endDate || -1 !== a.inArray(b.getUTCDay(), this.o.daysOfWeekDisabled)) && c.push("disabled"), this.range && (b > this.range[0] && b < this.range[this.range.length - 1] && c.push("range"), -1 !== a.inArray(b.valueOf(), this.range) && c.push("selected")), c
            },
            fill: function() {
                var m, c = new Date(this.viewDate),
                    e = c.getUTCFullYear(),
                    f = c.getUTCMonth(),
                    g = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCFullYear() : -1 / 0,
                    h = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0,
                    i = 1 / 0 !== this.o.endDate ? this.o.endDate.getUTCFullYear() : 1 / 0,
                    j = 1 / 0 !== this.o.endDate ? this.o.endDate.getUTCMonth() : 1 / 0,
                    k = o[this.o.language].today || o.en.today || "",
                    l = o[this.o.language].clear || o.en.clear || "";
                this.picker.find(".datepicker-days thead th.datepicker-switch").text(o[this.o.language].months[f] + " " + e), this.picker.find("tfoot th.today").text(k).toggle(this.o.todayBtn !== !1), this.picker.find("tfoot th.clear").text(l).toggle(this.o.clearBtn !== !1), this.updateNavArrows(), this.fillMonths();
                var n = d(e, f - 1, 28),
                    q = p.getDaysInMonth(n.getUTCFullYear(), n.getUTCMonth());
                n.setUTCDate(q), n.setUTCDate(q - (n.getUTCDay() - this.o.weekStart + 7) % 7);
                var r = new Date(n);
                r.setUTCDate(r.getUTCDate() + 42), r = r.valueOf();
                for (var t, s = []; n.valueOf() < r;) {
                    if (n.getUTCDay() === this.o.weekStart && (s.push("<tr>"), this.o.calendarWeeks)) {
                        var u = new Date(+n + 864e5 * ((this.o.weekStart - n.getUTCDay() - 7) % 7)),
                            v = new Date(Number(u) + 864e5 * ((11 - u.getUTCDay()) % 7)),
                            w = new Date(Number(w = d(v.getUTCFullYear(), 0, 1)) + 864e5 * ((11 - w.getUTCDay()) % 7)),
                            x = (v - w) / 864e5 / 7 + 1;
                        s.push('<td class="cw">' + x + "</td>")
                    }
                    if (t = this.getClassNames(n), t.push("day"), this.o.beforeShowDay !== a.noop) {
                        var y = this.o.beforeShowDay(this._utc_to_local(n));
                        y === b ? y = {} : "boolean" == typeof y ? y = {
                            enabled: y
                        } : "string" == typeof y && (y = {
                            classes: y
                        }), y.enabled === !1 && t.push("disabled"), y.classes && (t = t.concat(y.classes.split(/\s+/))), y.tooltip && (m = y.tooltip)
                    }
                    t = a.unique(t), s.push('<td class="' + t.join(" ") + '"' + (m ? ' title="' + m + '"' : "") + ">" + n.getUTCDate() + "</td>"), n.getUTCDay() === this.o.weekEnd && s.push("</tr>"), n.setUTCDate(n.getUTCDate() + 1)
                }
                this.picker.find(".datepicker-days tbody").empty().append(s.join(""));
                var z = this.picker.find(".datepicker-months").find("th:eq(1)").text(e).end().find("span").removeClass("active");
                a.each(this.dates, function(a, b) {
                    b.getUTCFullYear() === e && z.eq(b.getUTCMonth()).addClass("active")
                }), (g > e || e > i) && z.addClass("disabled"), e === g && z.slice(0, h).addClass("disabled"), e === i && z.slice(j + 1).addClass("disabled"), s = "", e = 10 * parseInt(e / 10, 10);
                var A = this.picker.find(".datepicker-years").find("th:eq(1)").text(e + "-" + (e + 9)).end().find("td");
                e -= 1;
                for (var C, B = a.map(this.dates, function(a) {
                        return a.getUTCFullYear()
                    }), D = -1; 11 > D; D++) C = ["year"], -1 === D ? C.push("old") : 10 === D && C.push("new"), -1 !== a.inArray(e, B) && C.push("active"), (g > e || e > i) && C.push("disabled"), s += '<span class="' + C.join(" ") + '">' + e + "</span>", e += 1;
                A.html(s)
            },
            updateNavArrows: function() {
                if (this._allow_update) {
                    var a = new Date(this.viewDate),
                        b = a.getUTCFullYear(),
                        c = a.getUTCMonth();
                    switch (this.viewMode) {
                        case 0:
                            this.o.startDate !== -1 / 0 && b <= this.o.startDate.getUTCFullYear() && c <= this.o.startDate.getUTCMonth() ? this.picker.find(".prev").css({
                                visibility: "hidden"
                            }) : this.picker.find(".prev").css({
                                visibility: "visible"
                            }), 1 / 0 !== this.o.endDate && b >= this.o.endDate.getUTCFullYear() && c >= this.o.endDate.getUTCMonth() ? this.picker.find(".next").css({
                                visibility: "hidden"
                            }) : this.picker.find(".next").css({
                                visibility: "visible"
                            });
                            break;
                        case 1:
                        case 2:
                            this.o.startDate !== -1 / 0 && b <= this.o.startDate.getUTCFullYear() ? this.picker.find(".prev").css({
                                visibility: "hidden"
                            }) : this.picker.find(".prev").css({
                                visibility: "visible"
                            }), 1 / 0 !== this.o.endDate && b >= this.o.endDate.getUTCFullYear() ? this.picker.find(".next").css({
                                visibility: "hidden"
                            }) : this.picker.find(".next").css({
                                visibility: "visible"
                            })
                    }
                }
            },
            click: function(b) {
                b.preventDefault();
                var e, f, g, c = a(b.target).closest("span, td, th");
                if (1 === c.length) switch (c[0].nodeName.toLowerCase()) {
                    case "th":
                        switch (c[0].className) {
                            case "datepicker-switch":
                                this.showMode(1);
                                break;
                            case "prev":
                            case "next":
                                var h = p.modes[this.viewMode].navStep * ("prev" === c[0].className ? -1 : 1);
                                switch (this.viewMode) {
                                    case 0:
                                        this.viewDate = this.moveMonth(this.viewDate, h), this._trigger("changeMonth", this.viewDate);
                                        break;
                                    case 1:
                                    case 2:
                                        this.viewDate = this.moveYear(this.viewDate, h), 1 === this.viewMode && this._trigger("changeYear", this.viewDate)
                                }
                                this.fill();
                                break;
                            case "today":
                                var i = new Date;
                                i = d(i.getFullYear(), i.getMonth(), i.getDate(), 0, 0, 0), this.showMode(-2);
                                var j = "linked" === this.o.todayBtn ? null : "view";
                                this._setDate(i, j);
                                break;
                            case "clear":
                                var k;
                                this.isInput ? k = this.element : this.component && (k = this.element.find("input")), k && k.val("").change(), this.update(), this._trigger("changeDate"), this.o.autoclose && this.hide()
                        }
                        break;
                    case "span":
                        c.is(".disabled") || (this.viewDate.setUTCDate(1), c.is(".month") ? (g = 1, f = c.parent().find("span").index(c), e = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(f), this._trigger("changeMonth", this.viewDate), 1 === this.o.minViewMode && this._setDate(d(e, f, g))) : (g = 1, f = 0, e = parseInt(c.text(), 10) || 0, this.viewDate.setUTCFullYear(e), this._trigger("changeYear", this.viewDate), 2 === this.o.minViewMode && this._setDate(d(e, f, g))), this.showMode(-1), this.fill());
                        break;
                    case "td":
                        c.is(".day") && !c.is(".disabled") && (g = parseInt(c.text(), 10) || 1, e = this.viewDate.getUTCFullYear(), f = this.viewDate.getUTCMonth(), c.is(".old") ? 0 === f ? (f = 11, e -= 1) : f -= 1 : c.is(".new") && (11 === f ? (f = 0, e += 1) : f += 1), this._setDate(d(e, f, g)))
                }
                this.picker.is(":visible") && this._focused_from && a(this._focused_from).focus(), delete this._focused_from
            },
            _toggle_multidate: function(a) {
                var b = this.dates.contains(a);
                if (a ? -1 !== b ? this.dates.remove(b) : this.dates.push(a) : this.dates.clear(), "number" == typeof this.o.multidate)
                    for (; this.dates.length > this.o.multidate;) this.dates.remove(0)
            },
            _setDate: function(a, b) {
                b && "date" !== b || this._toggle_multidate(a && new Date(a)), b && "view" !== b || (this.viewDate = a && new Date(a)), this.fill(), this.setValue(), this._trigger("changeDate");
                var c;
                this.isInput ? c = this.element : this.component && (c = this.element.find("input")), c && c.change(), !this.o.autoclose || b && "date" !== b || this.hide()
            },
            moveMonth: function(a, c) {
                if (!a) return b;
                if (!c) return a;
                var h, i, d = new Date(a.valueOf()),
                    e = d.getUTCDate(),
                    f = d.getUTCMonth(),
                    g = Math.abs(c);
                if (c = c > 0 ? 1 : -1, 1 === g) i = -1 === c ? function() {
                    return d.getUTCMonth() === f
                } : function() {
                    return d.getUTCMonth() !== h
                }, h = f + c, d.setUTCMonth(h), (0 > h || h > 11) && (h = (h + 12) % 12);
                else {
                    for (var j = 0; g > j; j++) d = this.moveMonth(d, c);
                    h = d.getUTCMonth(), d.setUTCDate(e), i = function() {
                        return h !== d.getUTCMonth()
                    }
                }
                for (; i();) d.setUTCDate(--e), d.setUTCMonth(h);
                return d
            },
            moveYear: function(a, b) {
                return this.moveMonth(a, 12 * b)
            },
            dateWithinRange: function(a) {
                return a >= this.o.startDate && a <= this.o.endDate
            },
            keydown: function(a) {
                if (this.picker.is(":not(:visible)")) return 27 === a.keyCode && this.show(), void 0;
                var c, d, f, b = !1,
                    g = this.focusDate || this.viewDate;
                switch (a.keyCode) {
                    case 27:
                        this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill()) : this.hide(), a.preventDefault();
                        break;
                    case 37:
                    case 39:
                        if (!this.o.keyboardNavigation) break;
                        c = 37 === a.keyCode ? -1 : 1, a.ctrlKey ? (d = this.moveYear(this.dates.get(-1) || e(), c), f = this.moveYear(g, c), this._trigger("changeYear", this.viewDate)) : a.shiftKey ? (d = this.moveMonth(this.dates.get(-1) || e(), c), f = this.moveMonth(g, c), this._trigger("changeMonth", this.viewDate)) : (d = new Date(this.dates.get(-1) || e()), d.setUTCDate(d.getUTCDate() + c), f = new Date(g), f.setUTCDate(g.getUTCDate() + c)), this.dateWithinRange(d) && (this.focusDate = this.viewDate = f, this.setValue(), this.fill(), a.preventDefault());
                        break;
                    case 38:
                    case 40:
                        if (!this.o.keyboardNavigation) break;
                        c = 38 === a.keyCode ? -1 : 1, a.ctrlKey ? (d = this.moveYear(this.dates.get(-1) || e(), c), f = this.moveYear(g, c), this._trigger("changeYear", this.viewDate)) : a.shiftKey ? (d = this.moveMonth(this.dates.get(-1) || e(), c), f = this.moveMonth(g, c), this._trigger("changeMonth", this.viewDate)) : (d = new Date(this.dates.get(-1) || e()), d.setUTCDate(d.getUTCDate() + 7 * c), f = new Date(g), f.setUTCDate(g.getUTCDate() + 7 * c)), this.dateWithinRange(d) && (this.focusDate = this.viewDate = f, this.setValue(), this.fill(), a.preventDefault());
                        break;
                    case 32:
                        break;
                    case 13:
                        g = this.focusDate || this.dates.get(-1) || this.viewDate, this._toggle_multidate(g), b = !0, this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.setValue(), this.fill(), this.picker.is(":visible") && (a.preventDefault(), this.o.autoclose && this.hide());
                        break;
                    case 9:
                        this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill(), this.hide()
                }
                if (b) {
                    this.dates.length ? this._trigger("changeDate") : this._trigger("clearDate");
                    var h;
                    this.isInput ? h = this.element : this.component && (h = this.element.find("input")), h && h.change()
                }
            },
            showMode: function(a) {
                a && (this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + a))), this.picker.find(">div").hide().filter(".datepicker-" + p.modes[this.viewMode].clsName).css("display", "block"), this.updateNavArrows()
            }
        };
        var i = function(b, c) {
            this.element = a(b), this.inputs = a.map(c.inputs, function(a) {
                return a.jquery ? a[0] : a
            }), delete c.inputs, a(this.inputs).datepicker(c).bind("changeDate", a.proxy(this.dateUpdated, this)), this.pickers = a.map(this.inputs, function(b) {
                return a(b).data("datepicker")
            }), this.updateDates()
        };
        i.prototype = {
            updateDates: function() {
                this.dates = a.map(this.pickers, function(a) {
                    return a.getUTCDate()
                }), this.updateRanges()
            },
            updateRanges: function() {
                var b = a.map(this.dates, function(a) {
                    return a.valueOf()
                });
                a.each(this.pickers, function(a, c) {
                    c.setRange(b)
                })
            },
            dateUpdated: function(b) {
                if (!this.updating) {
                    this.updating = !0;
                    var c = a(b.target).data("datepicker"),
                        d = c.getUTCDate(),
                        e = a.inArray(b.target, this.inputs),
                        f = this.inputs.length;
                    if (-1 !== e) {
                        if (a.each(this.pickers, function(a, b) {
                                b.getUTCDate() || b.setUTCDate(d)
                            }), d < this.dates[e])
                            for (; e >= 0 && d < this.dates[e];) this.pickers[e--].setUTCDate(d);
                        else if (d > this.dates[e])
                            for (; f > e && d > this.dates[e];) this.pickers[e++].setUTCDate(d);
                        this.updateDates(), delete this.updating
                    }
                }
            },
            remove: function() {
                a.map(this.pickers, function(a) {
                    a.remove()
                }), delete this.element.data().datepicker
            }
        };
        var l = a.fn.datepicker;
        a.fn.datepicker = function(c) {
            var d = Array.apply(null, arguments);
            d.shift();
            var e;
            return this.each(function() {
                var f = a(this),
                    g = f.data("datepicker"),
                    l = "object" == typeof c && c;
                if (!g) {
                    var n = j(this, "date"),
                        o = a.extend({}, m, n, l),
                        p = k(o.language),
                        q = a.extend({}, m, p, n, l);
                    if (f.is(".input-daterange") || q.inputs) {
                        var r = {
                            inputs: q.inputs || f.find("input").toArray()
                        };
                        f.data("datepicker", g = new i(this, a.extend(q, r)))
                    } else f.data("datepicker", g = new h(this, q))
                }
                return "string" == typeof c && "function" == typeof g[c] && (e = g[c].apply(g, d), e !== b) ? !1 : void 0
            }), e !== b ? e : this
        };
        var m = a.fn.datepicker.defaults = {
                autoclose: !1,
                beforeShowDay: a.noop,
                calendarWeeks: !1,
                clearBtn: !1,
                daysOfWeekDisabled: [],
                endDate: 1 / 0,
                forceParse: !0,
                format: "mm/dd/yyyy",
                keyboardNavigation: !0,
                language: "en",
                minViewMode: 0,
                multidate: !1,
                multidateSeparator: ",",
                orientation: "auto",
                rtl: !1,
                startDate: -1 / 0,
                startView: 0,
                todayBtn: !1,
                todayHighlight: !1,
                weekStart: 0
            },
            n = a.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
        a.fn.datepicker.Constructor = h;
        var o = a.fn.datepicker.dates = {
                en: {
                    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                    daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    today: "Today",
                    clear: "Clear"
                }
            },
            p = {
                modes: [{
                    clsName: "days",
                    navFnc: "Month",
                    navStep: 1
                }, {
                    clsName: "months",
                    navFnc: "FullYear",
                    navStep: 1
                }, {
                    clsName: "years",
                    navFnc: "FullYear",
                    navStep: 10
                }],
                isLeapYear: function(a) {
                    return 0 === a % 4 && 0 !== a % 100 || 0 === a % 400
                },
                getDaysInMonth: function(a, b) {
                    return [31, p.isLeapYear(a) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][b]
                },
                validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
                nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
                parseFormat: function(a) {
                    var b = a.replace(this.validParts, "\0").split("\0"),
                        c = a.match(this.validParts);
                    if (!b || !b.length || !c || 0 === c.length) throw new Error("Invalid date format.");
                    return {
                        separators: b,
                        parts: c
                    }
                },
                parseDate: function(c, e, f) {
                    function u() {
                        var a = this.slice(0, i[l].length),
                            b = i[l].slice(0, a.length);
                        return a === b
                    }
                    if (!c) return b;
                    if (c instanceof Date) return c;
                    "string" == typeof e && (e = p.parseFormat(e));
                    var j, k, l, g = /([\-+]\d+)([dmwy])/,
                        i = c.match(/([\-+]\d+)([dmwy])/g);
                    if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(c)) {
                        for (c = new Date, l = 0; l < i.length; l++) switch (j = g.exec(i[l]), k = parseInt(j[1]), j[2]) {
                            case "d":
                                c.setUTCDate(c.getUTCDate() + k);
                                break;
                            case "m":
                                c = h.prototype.moveMonth.call(h.prototype, c, k);
                                break;
                            case "w":
                                c.setUTCDate(c.getUTCDate() + 7 * k);
                                break;
                            case "y":
                                c = h.prototype.moveYear.call(h.prototype, c, k)
                        }
                        return d(c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate(), 0, 0, 0)
                    }
                    i = c && c.match(this.nonpunctuation) || [], c = new Date;
                    var r, s, m = {},
                        n = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
                        q = {
                            yyyy: function(a, b) {
                                return a.setUTCFullYear(b)
                            },
                            yy: function(a, b) {
                                return a.setUTCFullYear(2e3 + b)
                            },
                            m: function(a, b) {
                                if (isNaN(a)) return a;
                                for (b -= 1; 0 > b;) b += 12;
                                for (b %= 12, a.setUTCMonth(b); a.getUTCMonth() !== b;) a.setUTCDate(a.getUTCDate() - 1);
                                return a
                            },
                            d: function(a, b) {
                                return a.setUTCDate(b)
                            }
                        };
                    q.M = q.MM = q.mm = q.m, q.dd = q.d, c = d(c.getFullYear(), c.getMonth(), c.getDate(), 0, 0, 0);
                    var t = e.parts.slice();
                    if (i.length !== t.length && (t = a(t).filter(function(b, c) {
                            return -1 !== a.inArray(c, n)
                        }).toArray()), i.length === t.length) {
                        var v;
                        for (l = 0, v = t.length; v > l; l++) {
                            if (r = parseInt(i[l], 10), j = t[l], isNaN(r)) switch (j) {
                                case "MM":
                                    s = a(o[f].months).filter(u), r = a.inArray(s[0], o[f].months) + 1;
                                    break;
                                case "M":
                                    s = a(o[f].monthsShort).filter(u), r = a.inArray(s[0], o[f].monthsShort) + 1
                            }
                            m[j] = r
                        }
                        var w, x;
                        for (l = 0; l < n.length; l++) x = n[l], x in m && !isNaN(m[x]) && (w = new Date(c), q[x](w, m[x]), isNaN(w) || (c = w))
                    }
                    return c
                },
                formatDate: function(b, c, d) {
                    if (!b) return "";
                    "string" == typeof c && (c = p.parseFormat(c));
                    var e = {
                        d: b.getUTCDate(),
                        D: o[d].daysShort[b.getUTCDay()],
                        DD: o[d].days[b.getUTCDay()],
                        m: b.getUTCMonth() + 1,
                        M: o[d].monthsShort[b.getUTCMonth()],
                        MM: o[d].months[b.getUTCMonth()],
                        yy: b.getUTCFullYear().toString().substring(2),
                        yyyy: b.getUTCFullYear()
                    };
                    e.dd = (e.d < 10 ? "0" : "") + e.d, e.mm = (e.m < 10 ? "0" : "") + e.m, b = [];
                    for (var f = a.extend([], c.separators), g = 0, h = c.parts.length; h >= g; g++) f.length && b.push(f.shift()), b.push(e[c.parts[g]]);
                    return b.join("")
                },
                headTemplate: '<thead><tr><th class="prev">&laquo;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&raquo;</th></tr></thead>',
                contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
                footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
            };
        p.template = '<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">' + p.headTemplate + "<tbody></tbody>" + p.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + p.headTemplate + p.contTemplate + p.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + p.headTemplate + p.contTemplate + p.footTemplate + "</table></div></div>", a.fn.datepicker.DPGlobal = p, a.fn.datepicker.noConflict = function() {
            return a.fn.datepicker = l, this
        }, a(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function(b) {
            var c = a(this);
            c.data("datepicker") || (b.preventDefault(), c.datepicker("show"))
        }), a(function() {
            a('[data-provide="datepicker-inline"]').datepicker()
        })
    }(window.jQuery),
    function(a) {
        function b() {
            return {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1
            }
        }

        function c(a, b) {
            return function(c) {
                return k(a.call(this, c), b)
            }
        }

        function d(a, b) {
            return function(c) {
                return this.lang().ordinal(a.call(this, c), b)
            }
        }

        function e() {}

        function f(a) {
            w(a), h(this, a)
        }

        function g(a) {
            var b = q(a),
                c = b.year || 0,
                d = b.month || 0,
                e = b.week || 0,
                f = b.day || 0,
                g = b.hour || 0,
                h = b.minute || 0,
                i = b.second || 0,
                j = b.millisecond || 0;
            this._milliseconds = +j + 1e3 * i + 6e4 * h + 36e5 * g, this._days = +f + 7 * e, this._months = +d + 12 * c, this._data = {}, this._bubble()
        }

        function h(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
            return b.hasOwnProperty("toString") && (a.toString = b.toString), b.hasOwnProperty("valueOf") && (a.valueOf = b.valueOf), a
        }

        function i(a) {
            var b, c = {};
            for (b in a) a.hasOwnProperty(b) && qb.hasOwnProperty(b) && (c[b] = a[b]);
            return c
        }

        function j(a) {
            return 0 > a ? Math.ceil(a) : Math.floor(a)
        }

        function k(a, b, c) {
            for (var d = "" + Math.abs(a), e = a >= 0; d.length < b;) d = "0" + d;
            return (e ? c ? "+" : "" : "-") + d
        }

        function l(a, b, c, d) {
            var e, f, g = b._milliseconds,
                h = b._days,
                i = b._months;
            g && a._d.setTime(+a._d + g * c), (h || i) && (e = a.minute(), f = a.hour()), h && a.date(a.date() + h * c), i && a.month(a.month() + i * c), g && !d && db.updateOffset(a), (h || i) && (a.minute(e), a.hour(f))
        }

        function m(a) {
            return "[object Array]" === Object.prototype.toString.call(a)
        }

        function n(a) {
            return "[object Date]" === Object.prototype.toString.call(a) || a instanceof Date
        }

        function o(a, b, c) {
            var d, e = Math.min(a.length, b.length),
                f = Math.abs(a.length - b.length),
                g = 0;
            for (d = 0; e > d; d++)(c && a[d] !== b[d] || !c && s(a[d]) !== s(b[d])) && g++;
            return g + f
        }

        function p(a) {
            if (a) {
                var b = a.toLowerCase().replace(/(.)s$/, "$1");
                a = Tb[a] || Ub[b] || b
            }
            return a
        }

        function q(a) {
            var b, c, d = {};
            for (c in a) a.hasOwnProperty(c) && (b = p(c), b && (d[b] = a[c]));
            return d
        }

        function r(b) {
            var c, d;
            if (0 === b.indexOf("week")) c = 7, d = "day";
            else {
                if (0 !== b.indexOf("month")) return;
                c = 12, d = "month"
            }
            db[b] = function(e, f) {
                var g, h, i = db.fn._lang[b],
                    j = [];
                if ("number" == typeof e && (f = e, e = a), h = function(a) {
                        var b = db().utc().set(d, a);
                        return i.call(db.fn._lang, b, e || "")
                    }, null != f) return h(f);
                for (g = 0; c > g; g++) j.push(h(g));
                return j
            }
        }

        function s(a) {
            var b = +a,
                c = 0;
            return 0 !== b && isFinite(b) && (c = b >= 0 ? Math.floor(b) : Math.ceil(b)), c
        }

        function t(a, b) {
            return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
        }

        function u(a) {
            return v(a) ? 366 : 365
        }

        function v(a) {
            return 0 === a % 4 && 0 !== a % 100 || 0 === a % 400
        }

        function w(a) {
            var b;
            a._a && -2 === a._pf.overflow && (b = a._a[jb] < 0 || a._a[jb] > 11 ? jb : a._a[kb] < 1 || a._a[kb] > t(a._a[ib], a._a[jb]) ? kb : a._a[lb] < 0 || a._a[lb] > 23 ? lb : a._a[mb] < 0 || a._a[mb] > 59 ? mb : a._a[nb] < 0 || a._a[nb] > 59 ? nb : a._a[ob] < 0 || a._a[ob] > 999 ? ob : -1, a._pf._overflowDayOfYear && (ib > b || b > kb) && (b = kb), a._pf.overflow = b)
        }

        function x(a) {
            return null == a._isValid && (a._isValid = !isNaN(a._d.getTime()) && a._pf.overflow < 0 && !a._pf.empty && !a._pf.invalidMonth && !a._pf.nullInput && !a._pf.invalidFormat && !a._pf.userInvalidated, a._strict && (a._isValid = a._isValid && 0 === a._pf.charsLeftOver && 0 === a._pf.unusedTokens.length)), a._isValid
        }

        function y(a) {
            return a ? a.toLowerCase().replace("_", "-") : a
        }

        function z(a, b) {
            return b._isUTC ? db(a).zone(b._offset || 0) : db(a).local()
        }

        function A(a, b) {
            return b.abbr = a, pb[a] || (pb[a] = new e), pb[a].set(b), pb[a]
        }

        function B(a) {
            delete pb[a]
        }

        function C(a) {
            var b, c, d, e, f = 0,
                g = function(a) {
                    if (!pb[a] && rb) try {
                        require("./lang/" + a)
                    } catch (b) {}
                    return pb[a]
                };
            if (!a) return db.fn._lang;
            if (!m(a)) {
                if (c = g(a)) return c;
                a = [a]
            }
            for (; f < a.length;) {
                for (e = y(a[f]).split("-"), b = e.length, d = y(a[f + 1]), d = d ? d.split("-") : null; b > 0;) {
                    if (c = g(e.slice(0, b).join("-"))) return c;
                    if (d && d.length >= b && o(e, d, !0) >= b - 1) break;
                    b--
                }
                f++
            }
            return db.fn._lang
        }

        function D(a) {
            return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
        }

        function E(a) {
            var b, c, d = a.match(vb);
            for (b = 0, c = d.length; c > b; b++) d[b] = Yb[d[b]] ? Yb[d[b]] : D(d[b]);
            return function(e) {
                var f = "";
                for (b = 0; c > b; b++) f += d[b] instanceof Function ? d[b].call(e, a) : d[b];
                return f
            }
        }

        function F(a, b) {
            return a.isValid() ? (b = G(b, a.lang()), Vb[b] || (Vb[b] = E(b)), Vb[b](a)) : a.lang().invalidDate()
        }

        function G(a, b) {
            function c(a) {
                return b.longDateFormat(a) || a
            }
            var d = 5;
            for (wb.lastIndex = 0; d >= 0 && wb.test(a);) a = a.replace(wb, c), wb.lastIndex = 0, d -= 1;
            return a
        }

        function H(a, b) {
            var c, d = b._strict;
            switch (a) {
                case "DDDD":
                    return Ib;
                case "YYYY":
                case "GGGG":
                case "gggg":
                    return d ? Jb : zb;
                case "Y":
                case "G":
                case "g":
                    return Lb;
                case "YYYYYY":
                case "YYYYY":
                case "GGGGG":
                case "ggggg":
                    return d ? Kb : Ab;
                case "S":
                    if (d) return Gb;
                case "SS":
                    if (d) return Hb;
                case "SSS":
                    if (d) return Ib;
                case "DDD":
                    return yb;
                case "MMM":
                case "MMMM":
                case "dd":
                case "ddd":
                case "dddd":
                    return Cb;
                case "a":
                case "A":
                    return C(b._l)._meridiemParse;
                case "X":
                    return Fb;
                case "Z":
                case "ZZ":
                    return Db;
                case "T":
                    return Eb;
                case "SSSS":
                    return Bb;
                case "MM":
                case "DD":
                case "YY":
                case "GG":
                case "gg":
                case "HH":
                case "hh":
                case "mm":
                case "ss":
                case "ww":
                case "WW":
                    return d ? Hb : xb;
                case "M":
                case "D":
                case "d":
                case "H":
                case "h":
                case "m":
                case "s":
                case "w":
                case "W":
                case "e":
                case "E":
                    return xb;
                default:
                    return c = new RegExp(P(O(a.replace("\\", "")), "i"))
            }
        }

        function I(a) {
            a = a || "";
            var b = a.match(Db) || [],
                c = b[b.length - 1] || [],
                d = (c + "").match(Qb) || ["-", 0, 0],
                e = +(60 * d[1]) + s(d[2]);
            return "+" === d[0] ? -e : e
        }

        function J(a, b, c) {
            var d, e = c._a;
            switch (a) {
                case "M":
                case "MM":
                    null != b && (e[jb] = s(b) - 1);
                    break;
                case "MMM":
                case "MMMM":
                    d = C(c._l).monthsParse(b), null != d ? e[jb] = d : c._pf.invalidMonth = b;
                    break;
                case "D":
                case "DD":
                    null != b && (e[kb] = s(b));
                    break;
                case "DDD":
                case "DDDD":
                    null != b && (c._dayOfYear = s(b));
                    break;
                case "YY":
                    e[ib] = s(b) + (s(b) > 68 ? 1900 : 2e3);
                    break;
                case "YYYY":
                case "YYYYY":
                case "YYYYYY":
                    e[ib] = s(b);
                    break;
                case "a":
                case "A":
                    c._isPm = C(c._l).isPM(b);
                    break;
                case "H":
                case "HH":
                case "h":
                case "hh":
                    e[lb] = s(b);
                    break;
                case "m":
                case "mm":
                    e[mb] = s(b);
                    break;
                case "s":
                case "ss":
                    e[nb] = s(b);
                    break;
                case "S":
                case "SS":
                case "SSS":
                case "SSSS":
                    e[ob] = s(1e3 * ("0." + b));
                    break;
                case "X":
                    c._d = new Date(1e3 * parseFloat(b));
                    break;
                case "Z":
                case "ZZ":
                    c._useUTC = !0, c._tzm = I(b);
                    break;
                case "w":
                case "ww":
                case "W":
                case "WW":
                case "d":
                case "dd":
                case "ddd":
                case "dddd":
                case "e":
                case "E":
                    a = a.substr(0, 1);
                case "gg":
                case "gggg":
                case "GG":
                case "GGGG":
                case "GGGGG":
                    a = a.substr(0, 2), b && (c._w = c._w || {}, c._w[a] = b)
            }
        }

        function K(a) {
            var b, c, d, e, f, g, h, i, j, k, l = [];
            if (!a._d) {
                for (d = M(a), a._w && null == a._a[kb] && null == a._a[jb] && (f = function(b) {
                        var c = parseInt(b, 10);
                        return b ? b.length < 3 ? c > 68 ? 1900 + c : 2e3 + c : c : null == a._a[ib] ? db().weekYear() : a._a[ib]
                    }, g = a._w, null != g.GG || null != g.W || null != g.E ? h = Z(f(g.GG), g.W || 1, g.E, 4, 1) : (i = C(a._l), j = null != g.d ? V(g.d, i) : null != g.e ? parseInt(g.e, 10) + i._week.dow : 0, k = parseInt(g.w, 10) || 1, null != g.d && j < i._week.dow && k++, h = Z(f(g.gg), k, j, i._week.doy, i._week.dow)), a._a[ib] = h.year, a._dayOfYear = h.dayOfYear), a._dayOfYear && (e = null == a._a[ib] ? d[ib] : a._a[ib], a._dayOfYear > u(e) && (a._pf._overflowDayOfYear = !0), c = U(e, 0, a._dayOfYear), a._a[jb] = c.getUTCMonth(), a._a[kb] = c.getUTCDate()), b = 0; 3 > b && null == a._a[b]; ++b) a._a[b] = l[b] = d[b];
                for (; 7 > b; b++) a._a[b] = l[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
                l[lb] += s((a._tzm || 0) / 60), l[mb] += s((a._tzm || 0) % 60), a._d = (a._useUTC ? U : T).apply(null, l)
            }
        }

        function L(a) {
            var b;
            a._d || (b = q(a._i), a._a = [b.year, b.month, b.day, b.hour, b.minute, b.second, b.millisecond], K(a))
        }

        function M(a) {
            var b = new Date;
            return a._useUTC ? [b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate()] : [b.getFullYear(), b.getMonth(), b.getDate()]
        }

        function N(a) {
            a._a = [], a._pf.empty = !0;
            var b, c, d, e, f, g = C(a._l),
                h = "" + a._i,
                i = h.length,
                j = 0;
            for (d = G(a._f, g).match(vb) || [], b = 0; b < d.length; b++) e = d[b], c = (h.match(H(e, a)) || [])[0], c && (f = h.substr(0, h.indexOf(c)), f.length > 0 && a._pf.unusedInput.push(f), h = h.slice(h.indexOf(c) + c.length), j += c.length), Yb[e] ? (c ? a._pf.empty = !1 : a._pf.unusedTokens.push(e), J(e, c, a)) : a._strict && !c && a._pf.unusedTokens.push(e);
            a._pf.charsLeftOver = i - j, h.length > 0 && a._pf.unusedInput.push(h), a._isPm && a._a[lb] < 12 && (a._a[lb] += 12), a._isPm === !1 && 12 === a._a[lb] && (a._a[lb] = 0), K(a), w(a)
        }

        function O(a) {
            return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(a, b, c, d, e) {
                return b || c || d || e
            })
        }

        function P(a) {
            return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }

        function Q(a) {
            var c, d, e, f, g;
            if (0 === a._f.length) return a._pf.invalidFormat = !0, a._d = new Date(0 / 0), void 0;
            for (f = 0; f < a._f.length; f++) g = 0, c = h({}, a), c._pf = b(), c._f = a._f[f], N(c), x(c) && (g += c._pf.charsLeftOver, g += 10 * c._pf.unusedTokens.length, c._pf.score = g, (null == e || e > g) && (e = g, d = c));
            h(a, d || c)
        }

        function R(a) {
            var b, c, d = a._i,
                e = Mb.exec(d);
            if (e) {
                for (a._pf.iso = !0, b = 0, c = Ob.length; c > b; b++)
                    if (Ob[b][1].exec(d)) {
                        a._f = Ob[b][0] + (e[6] || " ");
                        break
                    }
                for (b = 0, c = Pb.length; c > b; b++)
                    if (Pb[b][1].exec(d)) {
                        a._f += Pb[b][0];
                        break
                    }
                d.match(Db) && (a._f += "Z"), N(a)
            } else a._d = new Date(d)
        }

        function S(b) {
            var c = b._i,
                d = sb.exec(c);
            c === a ? b._d = new Date : d ? b._d = new Date(+d[1]) : "string" == typeof c ? R(b) : m(c) ? (b._a = c.slice(0), K(b)) : n(c) ? b._d = new Date(+c) : "object" == typeof c ? L(b) : b._d = new Date(c)
        }

        function T(a, b, c, d, e, f, g) {
            var h = new Date(a, b, c, d, e, f, g);
            return 1970 > a && h.setFullYear(a), h
        }

        function U(a) {
            var b = new Date(Date.UTC.apply(null, arguments));
            return 1970 > a && b.setUTCFullYear(a), b
        }

        function V(a, b) {
            if ("string" == typeof a)
                if (isNaN(a)) {
                    if (a = b.weekdaysParse(a), "number" != typeof a) return null
                } else a = parseInt(a, 10);
            return a
        }

        function W(a, b, c, d, e) {
            return e.relativeTime(b || 1, !!c, a, d)
        }

        function X(a, b, c) {
            var d = hb(Math.abs(a) / 1e3),
                e = hb(d / 60),
                f = hb(e / 60),
                g = hb(f / 24),
                h = hb(g / 365),
                i = 45 > d && ["s", d] || 1 === e && ["m"] || 45 > e && ["mm", e] || 1 === f && ["h"] || 22 > f && ["hh", f] || 1 === g && ["d"] || 25 >= g && ["dd", g] || 45 >= g && ["M"] || 345 > g && ["MM", hb(g / 30)] || 1 === h && ["y"] || ["yy", h];
            return i[2] = b, i[3] = a > 0, i[4] = c, W.apply({}, i)
        }

        function Y(a, b, c) {
            var d, e = c - b,
                f = c - a.day();
            return f > e && (f -= 7), e - 7 > f && (f += 7), d = db(a).add("d", f), {
                week: Math.ceil(d.dayOfYear() / 7),
                year: d.year()
            }
        }

        function Z(a, b, c, d, e) {
            var f, g, h = U(a, 0, 1).getUTCDay();
            return c = null != c ? c : e, f = e - h + (h > d ? 7 : 0) - (e > h ? 7 : 0), g = 7 * (b - 1) + (c - e) + f + 1, {
                year: g > 0 ? a : a - 1,
                dayOfYear: g > 0 ? g : u(a - 1) + g
            }
        }

        function $(a) {
            var b = a._i,
                c = a._f;
            return null === b ? db.invalid({
                nullInput: !0
            }) : ("string" == typeof b && (a._i = b = C().preparse(b)), db.isMoment(b) ? (a = i(b), a._d = new Date(+b._d)) : c ? m(c) ? Q(a) : N(a) : S(a), new f(a))
        }

        function _(a, b) {
            db.fn[a] = db.fn[a + "s"] = function(a) {
                var c = this._isUTC ? "UTC" : "";
                return null != a ? (this._d["set" + c + b](a), db.updateOffset(this), this) : this._d["get" + c + b]()
            }
        }

        function ab(a) {
            db.duration.fn[a] = function() {
                return this._data[a]
            }
        }

        function bb(a, b) {
            db.duration.fn["as" + a] = function() {
                return +this / b
            }
        }

        function cb(a) {
            var b = !1,
                c = db;
            "undefined" == typeof ender && (a ? (gb.moment = function() {
                return !b && console && console.warn && (b = !0, console.warn("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.")), c.apply(null, arguments)
            }, h(gb.moment, c)) : gb.moment = db)
        }
        for (var db, eb, fb = "2.5.1", gb = this, hb = Math.round, ib = 0, jb = 1, kb = 2, lb = 3, mb = 4, nb = 5, ob = 6, pb = {}, qb = {
                _isAMomentObject: null,
                _i: null,
                _f: null,
                _l: null,
                _strict: null,
                _isUTC: null,
                _offset: null,
                _pf: null,
                _lang: null
            }, rb = "undefined" != typeof module && module.exports && "undefined" != typeof require, sb = /^\/?Date\((\-?\d+)/i, tb = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, ub = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, vb = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g, wb = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, xb = /\d\d?/, yb = /\d{1,3}/, zb = /\d{1,4}/, Ab = /[+\-]?\d{1,6}/, Bb = /\d+/, Cb = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Db = /Z|[\+\-]\d\d:?\d\d/gi, Eb = /T/i, Fb = /[\+\-]?\d+(\.\d{1,3})?/, Gb = /\d/, Hb = /\d\d/, Ib = /\d{3}/, Jb = /\d{4}/, Kb = /[+-]?\d{6}/, Lb = /[+-]?\d+/, Mb = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Nb = "YYYY-MM-DDTHH:mm:ssZ", Ob = [
                ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
                ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
                ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
                ["GGGG-[W]WW", /\d{4}-W\d{2}/],
                ["YYYY-DDD", /\d{4}-\d{3}/]
            ], Pb = [
                ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d{1,3}/],
                ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
                ["HH:mm", /(T| )\d\d:\d\d/],
                ["HH", /(T| )\d\d/]
            ], Qb = /([\+\-]|\d\d)/gi, Rb = "Date|Hours|Minutes|Seconds|Milliseconds".split("|"), Sb = {
                Milliseconds: 1,
                Seconds: 1e3,
                Minutes: 6e4,
                Hours: 36e5,
                Days: 864e5,
                Months: 2592e6,
                Years: 31536e6
            }, Tb = {
                ms: "millisecond",
                s: "second",
                m: "minute",
                h: "hour",
                d: "day",
                D: "date",
                w: "week",
                W: "isoWeek",
                M: "month",
                y: "year",
                DDD: "dayOfYear",
                e: "weekday",
                E: "isoWeekday",
                gg: "weekYear",
                GG: "isoWeekYear"
            }, Ub = {
                dayofyear: "dayOfYear",
                isoweekday: "isoWeekday",
                isoweek: "isoWeek",
                weekyear: "weekYear",
                isoweekyear: "isoWeekYear"
            }, Vb = {}, Wb = "DDD w W M D d".split(" "), Xb = "M D H h m s w W".split(" "), Yb = {
                M: function() {
                    return this.month() + 1
                },
                MMM: function(a) {
                    return this.lang().monthsShort(this, a)
                },
                MMMM: function(a) {
                    return this.lang().months(this, a)
                },
                D: function() {
                    return this.date()
                },
                DDD: function() {
                    return this.dayOfYear()
                },
                d: function() {
                    return this.day()
                },
                dd: function(a) {
                    return this.lang().weekdaysMin(this, a)
                },
                ddd: function(a) {
                    return this.lang().weekdaysShort(this, a)
                },
                dddd: function(a) {
                    return this.lang().weekdays(this, a)
                },
                w: function() {
                    return this.week()
                },
                W: function() {
                    return this.isoWeek()
                },
                YY: function() {
                    return k(this.year() % 100, 2)
                },
                YYYY: function() {
                    return k(this.year(), 4)
                },
                YYYYY: function() {
                    return k(this.year(), 5)
                },
                YYYYYY: function() {
                    var a = this.year(),
                        b = a >= 0 ? "+" : "-";
                    return b + k(Math.abs(a), 6)
                },
                gg: function() {
                    return k(this.weekYear() % 100, 2)
                },
                gggg: function() {
                    return k(this.weekYear(), 4)
                },
                ggggg: function() {
                    return k(this.weekYear(), 5)
                },
                GG: function() {
                    return k(this.isoWeekYear() % 100, 2)
                },
                GGGG: function() {
                    return k(this.isoWeekYear(), 4)
                },
                GGGGG: function() {
                    return k(this.isoWeekYear(), 5)
                },
                e: function() {
                    return this.weekday()
                },
                E: function() {
                    return this.isoWeekday()
                },
                a: function() {
                    return this.lang().meridiem(this.hours(), this.minutes(), !0)
                },
                A: function() {
                    return this.lang().meridiem(this.hours(), this.minutes(), !1)
                },
                H: function() {
                    return this.hours()
                },
                h: function() {
                    return this.hours() % 12 || 12
                },
                m: function() {
                    return this.minutes()
                },
                s: function() {
                    return this.seconds()
                },
                S: function() {
                    return s(this.milliseconds() / 100)
                },
                SS: function() {
                    return k(s(this.milliseconds() / 10), 2)
                },
                SSS: function() {
                    return k(this.milliseconds(), 3)
                },
                SSSS: function() {
                    return k(this.milliseconds(), 3)
                },
                Z: function() {
                    var a = -this.zone(),
                        b = "+";
                    return 0 > a && (a = -a, b = "-"), b + k(s(a / 60), 2) + ":" + k(s(a) % 60, 2)
                },
                ZZ: function() {
                    var a = -this.zone(),
                        b = "+";
                    return 0 > a && (a = -a, b = "-"), b + k(s(a / 60), 2) + k(s(a) % 60, 2)
                },
                z: function() {
                    return this.zoneAbbr()
                },
                zz: function() {
                    return this.zoneName()
                },
                X: function() {
                    return this.unix()
                },
                Q: function() {
                    return this.quarter()
                }
            }, Zb = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"]; Wb.length;) eb = Wb.pop(), Yb[eb + "o"] = d(Yb[eb], eb);
        for (; Xb.length;) eb = Xb.pop(), Yb[eb + eb] = c(Yb[eb], 2);
        for (Yb.DDDD = c(Yb.DDD, 3), h(e.prototype, {
                set: function(a) {
                    var b, c;
                    for (c in a) b = a[c], "function" == typeof b ? this[c] = b : this["_" + c] = b
                },
                _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                months: function(a) {
                    return this._months[a.month()]
                },
                _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                monthsShort: function(a) {
                    return this._monthsShort[a.month()]
                },
                monthsParse: function(a) {
                    var b, c, d;
                    for (this._monthsParse || (this._monthsParse = []), b = 0; 12 > b; b++)
                        if (this._monthsParse[b] || (c = db.utc([2e3, b]), d = "^" + this.months(c, "") + "|^" + this.monthsShort(c, ""), this._monthsParse[b] = new RegExp(d.replace(".", ""), "i")), this._monthsParse[b].test(a)) return b
                },
                _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdays: function(a) {
                    return this._weekdays[a.day()]
                },
                _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysShort: function(a) {
                    return this._weekdaysShort[a.day()]
                },
                _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                weekdaysMin: function(a) {
                    return this._weekdaysMin[a.day()]
                },
                weekdaysParse: function(a) {
                    var b, c, d;
                    for (this._weekdaysParse || (this._weekdaysParse = []), b = 0; 7 > b; b++)
                        if (this._weekdaysParse[b] || (c = db([2e3, 1]).day(b), d = "^" + this.weekdays(c, "") + "|^" + this.weekdaysShort(c, "") + "|^" + this.weekdaysMin(c, ""), this._weekdaysParse[b] = new RegExp(d.replace(".", ""), "i")), this._weekdaysParse[b].test(a)) return b
                },
                _longDateFormat: {
                    LT: "h:mm A",
                    L: "MM/DD/YYYY",
                    LL: "MMMM D YYYY",
                    LLL: "MMMM D YYYY LT",
                    LLLL: "dddd, MMMM D YYYY LT"
                },
                longDateFormat: function(a) {
                    var b = this._longDateFormat[a];
                    return !b && this._longDateFormat[a.toUpperCase()] && (b = this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(a) {
                        return a.slice(1)
                    }), this._longDateFormat[a] = b), b
                },
                isPM: function(a) {
                    return "p" === (a + "").toLowerCase().charAt(0)
                },
                _meridiemParse: /[ap]\.?m?\.?/i,
                meridiem: function(a, b, c) {
                    return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
                },
                _calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                calendar: function(a, b) {
                    var c = this._calendar[a];
                    return "function" == typeof c ? c.apply(b) : c
                },
                _relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                relativeTime: function(a, b, c, d) {
                    var e = this._relativeTime[c];
                    return "function" == typeof e ? e(a, b, c, d) : e.replace(/%d/i, a)
                },
                pastFuture: function(a, b) {
                    var c = this._relativeTime[a > 0 ? "future" : "past"];
                    return "function" == typeof c ? c(b) : c.replace(/%s/i, b)
                },
                ordinal: function(a) {
                    return this._ordinal.replace("%d", a)
                },
                _ordinal: "%d",
                preparse: function(a) {
                    return a
                },
                postformat: function(a) {
                    return a
                },
                week: function(a) {
                    return Y(a, this._week.dow, this._week.doy).week
                },
                _week: {
                    dow: 0,
                    doy: 6
                },
                _invalidDate: "Invalid date",
                invalidDate: function() {
                    return this._invalidDate
                }
            }), db = function(c, d, e, f) {
                var g;
                return "boolean" == typeof e && (f = e, e = a), g = {}, g._isAMomentObject = !0, g._i = c, g._f = d, g._l = e, g._strict = f, g._isUTC = !1, g._pf = b(), $(g)
            }, db.utc = function(c, d, e, f) {
                var g;
                return "boolean" == typeof e && (f = e, e = a), g = {}, g._isAMomentObject = !0, g._useUTC = !0, g._isUTC = !0, g._l = e, g._i = c, g._f = d, g._strict = f, g._pf = b(), $(g).utc()
            }, db.unix = function(a) {
                return db(1e3 * a)
            }, db.duration = function(a, b) {
                var c, d, e, f = a,
                    h = null;
                return db.isDuration(a) ? f = {
                    ms: a._milliseconds,
                    d: a._days,
                    M: a._months
                } : "number" == typeof a ? (f = {}, b ? f[b] = a : f.milliseconds = a) : (h = tb.exec(a)) ? (c = "-" === h[1] ? -1 : 1, f = {
                    y: 0,
                    d: s(h[kb]) * c,
                    h: s(h[lb]) * c,
                    m: s(h[mb]) * c,
                    s: s(h[nb]) * c,
                    ms: s(h[ob]) * c
                }) : (h = ub.exec(a)) && (c = "-" === h[1] ? -1 : 1, e = function(a) {
                    var b = a && parseFloat(a.replace(",", "."));
                    return (isNaN(b) ? 0 : b) * c
                }, f = {
                    y: e(h[2]),
                    M: e(h[3]),
                    d: e(h[4]),
                    h: e(h[5]),
                    m: e(h[6]),
                    s: e(h[7]),
                    w: e(h[8])
                }), d = new g(f), db.isDuration(a) && a.hasOwnProperty("_lang") && (d._lang = a._lang), d
            }, db.version = fb, db.defaultFormat = Nb, db.updateOffset = function() {}, db.lang = function(a, b) {
                var c;
                return a ? (b ? A(y(a), b) : null === b ? (B(a), a = "en") : pb[a] || C(a), c = db.duration.fn._lang = db.fn._lang = C(a), c._abbr) : db.fn._lang._abbr
            }, db.langData = function(a) {
                return a && a._lang && a._lang._abbr && (a = a._lang._abbr), C(a)
            }, db.isMoment = function(a) {
                return a instanceof f || null != a && a.hasOwnProperty("_isAMomentObject")
            }, db.isDuration = function(a) {
                return a instanceof g
            }, eb = Zb.length - 1; eb >= 0; --eb) r(Zb[eb]);
        for (db.normalizeUnits = function(a) {
                return p(a)
            }, db.invalid = function(a) {
                var b = db.utc(0 / 0);
                return null != a ? h(b._pf, a) : b._pf.userInvalidated = !0, b
            }, db.parseZone = function(a) {
                return db(a).parseZone()
            }, h(db.fn = f.prototype, {
                clone: function() {
                    return db(this)
                },
                valueOf: function() {
                    return +this._d + 6e4 * (this._offset || 0)
                },
                unix: function() {
                    return Math.floor(+this / 1e3)
                },
                toString: function() {
                    return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
                },
                toDate: function() {
                    return this._offset ? new Date(+this) : this._d
                },
                toISOString: function() {
                    var a = db(this).utc();
                    return 0 < a.year() && a.year() <= 9999 ? F(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : F(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
                },
                toArray: function() {
                    var a = this;
                    return [a.year(), a.month(), a.date(), a.hours(), a.minutes(), a.seconds(), a.milliseconds()]
                },
                isValid: function() {
                    return x(this)
                },
                isDSTShifted: function() {
                    return this._a ? this.isValid() && o(this._a, (this._isUTC ? db.utc(this._a) : db(this._a)).toArray()) > 0 : !1
                },
                parsingFlags: function() {
                    return h({}, this._pf)
                },
                invalidAt: function() {
                    return this._pf.overflow
                },
                utc: function() {
                    return this.zone(0)
                },
                local: function() {
                    return this.zone(0), this._isUTC = !1, this
                },
                format: function(a) {
                    var b = F(this, a || db.defaultFormat);
                    return this.lang().postformat(b)
                },
                add: function(a, b) {
                    var c;
                    return c = "string" == typeof a ? db.duration(+b, a) : db.duration(a, b), l(this, c, 1), this
                },
                subtract: function(a, b) {
                    var c;
                    return c = "string" == typeof a ? db.duration(+b, a) : db.duration(a, b), l(this, c, -1), this
                },
                diff: function(a, b, c) {
                    var d, e, f = z(a, this),
                        g = 6e4 * (this.zone() - f.zone());
                    return b = p(b), "year" === b || "month" === b ? (d = 432e5 * (this.daysInMonth() + f.daysInMonth()), e = 12 * (this.year() - f.year()) + (this.month() - f.month()), e += (this - db(this).startOf("month") - (f - db(f).startOf("month"))) / d, e -= 6e4 * (this.zone() - db(this).startOf("month").zone() - (f.zone() - db(f).startOf("month").zone())) / d, "year" === b && (e /= 12)) : (d = this - f, e = "second" === b ? d / 1e3 : "minute" === b ? d / 6e4 : "hour" === b ? d / 36e5 : "day" === b ? (d - g) / 864e5 : "week" === b ? (d - g) / 6048e5 : d), c ? e : j(e)
                },
                from: function(a, b) {
                    return db.duration(this.diff(a)).lang(this.lang()._abbr).humanize(!b)
                },
                fromNow: function(a) {
                    return this.from(db(), a)
                },
                calendar: function() {
                    var a = z(db(), this).startOf("day"),
                        b = this.diff(a, "days", !0),
                        c = -6 > b ? "sameElse" : -1 > b ? "lastWeek" : 0 > b ? "lastDay" : 1 > b ? "sameDay" : 2 > b ? "nextDay" : 7 > b ? "nextWeek" : "sameElse";
                    return this.format(this.lang().calendar(c, this))
                },
                isLeapYear: function() {
                    return v(this.year())
                },
                isDST: function() {
                    return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
                },
                day: function(a) {
                    var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                    return null != a ? (a = V(a, this.lang()), this.add({
                        d: a - b
                    })) : b
                },
                month: function(a) {
                    var b, c = this._isUTC ? "UTC" : "";
                    return null != a ? "string" == typeof a && (a = this.lang().monthsParse(a), "number" != typeof a) ? this : (b = this.date(), this.date(1), this._d["set" + c + "Month"](a), this.date(Math.min(b, this.daysInMonth())), db.updateOffset(this), this) : this._d["get" + c + "Month"]()
                },
                startOf: function(a) {
                    switch (a = p(a)) {
                        case "year":
                            this.month(0);
                        case "month":
                            this.date(1);
                        case "week":
                        case "isoWeek":
                        case "day":
                            this.hours(0);
                        case "hour":
                            this.minutes(0);
                        case "minute":
                            this.seconds(0);
                        case "second":
                            this.milliseconds(0)
                    }
                    return "week" === a ? this.weekday(0) : "isoWeek" === a && this.isoWeekday(1), this
                },
                endOf: function(a) {
                    return a = p(a), this.startOf(a).add("isoWeek" === a ? "week" : a, 1).subtract("ms", 1)
                },
                isAfter: function(a, b) {
                    return b = "undefined" != typeof b ? b : "millisecond", +this.clone().startOf(b) > +db(a).startOf(b)
                },
                isBefore: function(a, b) {
                    return b = "undefined" != typeof b ? b : "millisecond", +this.clone().startOf(b) < +db(a).startOf(b)
                },
                isSame: function(a, b) {
                    return b = b || "ms", +this.clone().startOf(b) === +z(a, this).startOf(b)
                },
                min: function(a) {
                    return a = db.apply(null, arguments), this > a ? this : a
                },
                max: function(a) {
                    return a = db.apply(null, arguments), a > this ? this : a
                },
                zone: function(a) {
                    var b = this._offset || 0;
                    return null == a ? this._isUTC ? b : this._d.getTimezoneOffset() : ("string" == typeof a && (a = I(a)), Math.abs(a) < 16 && (a = 60 * a), this._offset = a, this._isUTC = !0, b !== a && l(this, db.duration(b - a, "m"), 1, !0), this)
                },
                zoneAbbr: function() {
                    return this._isUTC ? "UTC" : ""
                },
                zoneName: function() {
                    return this._isUTC ? "Coordinated Universal Time" : ""
                },
                parseZone: function() {
                    return this._tzm ? this.zone(this._tzm) : "string" == typeof this._i && this.zone(this._i), this
                },
                hasAlignedHourOffset: function(a) {
                    return a = a ? db(a).zone() : 0, 0 === (this.zone() - a) % 60
                },
                daysInMonth: function() {
                    return t(this.year(), this.month())
                },
                dayOfYear: function(a) {
                    var b = hb((db(this).startOf("day") - db(this).startOf("year")) / 864e5) + 1;
                    return null == a ? b : this.add("d", a - b)
                },
                quarter: function() {
                    return Math.ceil((this.month() + 1) / 3)
                },
                weekYear: function(a) {
                    var b = Y(this, this.lang()._week.dow, this.lang()._week.doy).year;
                    return null == a ? b : this.add("y", a - b)
                },
                isoWeekYear: function(a) {
                    var b = Y(this, 1, 4).year;
                    return null == a ? b : this.add("y", a - b)
                },
                week: function(a) {
                    var b = this.lang().week(this);
                    return null == a ? b : this.add("d", 7 * (a - b))
                },
                isoWeek: function(a) {
                    var b = Y(this, 1, 4).week;
                    return null == a ? b : this.add("d", 7 * (a - b))
                },
                weekday: function(a) {
                    var b = (this.day() + 7 - this.lang()._week.dow) % 7;
                    return null == a ? b : this.add("d", a - b)
                },
                isoWeekday: function(a) {
                    return null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7)
                },
                get: function(a) {
                    return a = p(a), this[a]()
                },
                set: function(a, b) {
                    return a = p(a), "function" == typeof this[a] && this[a](b), this
                },
                lang: function(b) {
                    return b === a ? this._lang : (this._lang = C(b), this)
                }
            }), eb = 0; eb < Rb.length; eb++) _(Rb[eb].toLowerCase().replace(/s$/, ""), Rb[eb]);
        _("year", "FullYear"), db.fn.days = db.fn.day, db.fn.months = db.fn.month, db.fn.weeks = db.fn.week, db.fn.isoWeeks = db.fn.isoWeek, db.fn.toJSON = db.fn.toISOString, h(db.duration.fn = g.prototype, {
            _bubble: function() {
                var a, b, c, d, e = this._milliseconds,
                    f = this._days,
                    g = this._months,
                    h = this._data;
                h.milliseconds = e % 1e3, a = j(e / 1e3), h.seconds = a % 60, b = j(a / 60), h.minutes = b % 60, c = j(b / 60), h.hours = c % 24, f += j(c / 24), h.days = f % 30, g += j(f / 30), h.months = g % 12, d = j(g / 12), h.years = d
            },
            weeks: function() {
                return j(this.days() / 7)
            },
            valueOf: function() {
                return this._milliseconds + 864e5 * this._days + 2592e6 * (this._months % 12) + 31536e6 * s(this._months / 12)
            },
            humanize: function(a) {
                var b = +this,
                    c = X(b, !a, this.lang());
                return a && (c = this.lang().pastFuture(b, c)), this.lang().postformat(c)
            },
            add: function(a, b) {
                var c = db.duration(a, b);
                return this._milliseconds += c._milliseconds, this._days += c._days, this._months += c._months, this._bubble(), this
            },
            subtract: function(a, b) {
                var c = db.duration(a, b);
                return this._milliseconds -= c._milliseconds, this._days -= c._days, this._months -= c._months, this._bubble(), this
            },
            get: function(a) {
                return a = p(a), this[a.toLowerCase() + "s"]()
            },
            as: function(a) {
                return a = p(a), this["as" + a.charAt(0).toUpperCase() + a.slice(1) + "s"]()
            },
            lang: db.fn.lang,
            toIsoString: function() {
                var a = Math.abs(this.years()),
                    b = Math.abs(this.months()),
                    c = Math.abs(this.days()),
                    d = Math.abs(this.hours()),
                    e = Math.abs(this.minutes()),
                    f = Math.abs(this.seconds() + this.milliseconds() / 1e3);
                return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (a ? a + "Y" : "") + (b ? b + "M" : "") + (c ? c + "D" : "") + (d || e || f ? "T" : "") + (d ? d + "H" : "") + (e ? e + "M" : "") + (f ? f + "S" : "") : "P0D"
            }
        });
        for (eb in Sb) Sb.hasOwnProperty(eb) && (bb(eb, Sb[eb]), ab(eb.toLowerCase()));
        bb("Weeks", 6048e5), db.duration.fn.asMonths = function() {
            return (+this - 31536e6 * this.years()) / 2592e6 + 12 * this.years()
        }, db.lang("en", {
            ordinal: function(a) {
                var b = a % 10,
                    c = 1 === s(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
                return a + c
            }
        }), rb ? (module.exports = db, cb(!0)) : "function" == typeof define && define.amd ? define("moment", function(b, c, d) {
            return d.config && d.config() && d.config().noGlobal !== !0 && cb(d.config().noGlobal === a), db
        }) : cb()
    }.call(this), ! function(a, b) {
        var c = function(b, c, d) {
            this.parentEl = "body", this.element = a(b);
            var e = '<div class="daterangepicker dropdown-menu"><div class="calendar left"></div><div class="calendar right"></div><div class="ranges"><div class="range_inputs"><div class="daterangepicker_start_input"><label for="daterangepicker_start"></label><input class="input-mini" type="text" name="daterangepicker_start" value="" disabled="disabled" /></div><div class="daterangepicker_end_input"><label for="daterangepicker_end"></label><input class="input-mini" type="text" name="daterangepicker_end" value="" disabled="disabled" /></div><button class="applyBtn" disabled="disabled"></button>&nbsp;<button class="cancelBtn"></button></div></div></div>';
            ("object" != typeof c || null === c) && (c = {}), this.parentEl = "object" == typeof c && c.parentEl && a(c.parentEl).length ? a(c.parentEl) : a(this.parentEl), this.container = a(e).appendTo(this.parentEl), this.setOptions(c, d);
            var f = this.container;
            a.each(this.buttonClasses, function(a, b) {
                f.find("button").addClass(b)
            }), this.container.find(".daterangepicker_start_input label").html(this.locale.fromLabel), this.container.find(".daterangepicker_end_input label").html(this.locale.toLabel), this.applyClass.length && this.container.find(".applyBtn").addClass(this.applyClass), this.cancelClass.length && this.container.find(".cancelBtn").addClass(this.cancelClass), this.container.find(".applyBtn").html(this.locale.applyLabel), this.container.find(".cancelBtn").html(this.locale.cancelLabel), this.container.find(".calendar").on("click.daterangepicker", ".prev", a.proxy(this.clickPrev, this)).on("click.daterangepicker", ".next", a.proxy(this.clickNext, this)).on("click.daterangepicker", "td.available", a.proxy(this.clickDate, this)).on("mouseenter.daterangepicker", "td.available", a.proxy(this.enterDate, this)).on("mouseleave.daterangepicker", "td.available", a.proxy(this.updateFormInputs, this)).on("change.daterangepicker", "select.yearselect", a.proxy(this.updateMonthYear, this)).on("change.daterangepicker", "select.monthselect", a.proxy(this.updateMonthYear, this)).on("change.daterangepicker", "select.hourselect,select.minuteselect,select.ampmselect", a.proxy(this.updateTime, this)), this.container.find(".ranges").on("click.daterangepicker", "button.applyBtn", a.proxy(this.clickApply, this)).on("click.daterangepicker", "button.cancelBtn", a.proxy(this.clickCancel, this)).on("click.daterangepicker", ".daterangepicker_start_input,.daterangepicker_end_input", a.proxy(this.showCalendars, this)).on("click.daterangepicker", "li", a.proxy(this.clickRange, this)).on("mouseenter.daterangepicker", "li", a.proxy(this.enterRange, this)).on("mouseleave.daterangepicker", "li", a.proxy(this.updateFormInputs, this)), this.element.is("input") ? this.element.on({
                "click.daterangepicker": a.proxy(this.show, this),
                "focus.daterangepicker": a.proxy(this.show, this),
                "keyup.daterangepicker": a.proxy(this.updateFromControl, this)
            }) : this.element.on("click.daterangepicker", a.proxy(this.toggle, this))
        };
        c.prototype = {
            constructor: c,
            setOptions: function(c, d) {
                if (this.startDate = b().startOf("day"), this.endDate = b().endOf("day"), this.minDate = !1, this.maxDate = !1, this.dateLimit = !1, this.showDropdowns = !1, this.showWeekNumbers = !1, this.timePicker = !1, this.timePickerIncrement = 30, this.timePicker12Hour = !0, this.singleDatePicker = !1, this.ranges = {}, this.opens = "right", this.element.hasClass("pull-right") && (this.opens = "left"), this.buttonClasses = ["btn", "btn-small"], this.applyClass = "btn-success", this.cancelClass = "btn-default", this.format = "MM/DD/YYYY", this.separator = " - ", this.locale = {
                        applyLabel: "Apply",
                        cancelLabel: "Cancel",
                        fromLabel: "From",
                        toLabel: "To",
                        weekLabel: "W",
                        customRangeLabel: "Custom Range",
                        daysOfWeek: b()._lang._weekdaysMin.slice(),
                        monthNames: b()._lang._monthsShort.slice(),
                        firstDay: 0
                    }, this.cb = function() {}, "string" == typeof c.format && (this.format = c.format), "string" == typeof c.separator && (this.separator = c.separator), "string" == typeof c.startDate && (this.startDate = b(c.startDate, this.format)), "string" == typeof c.endDate && (this.endDate = b(c.endDate, this.format)), "string" == typeof c.minDate && (this.minDate = b(c.minDate, this.format)), "string" == typeof c.maxDate && (this.maxDate = b(c.maxDate, this.format)), "object" == typeof c.startDate && (this.startDate = b(c.startDate)), "object" == typeof c.endDate && (this.endDate = b(c.endDate)), "object" == typeof c.minDate && (this.minDate = b(c.minDate)), "object" == typeof c.maxDate && (this.maxDate = b(c.maxDate)), "string" == typeof c.applyClass && (this.applyClass = c.applyClass), "string" == typeof c.cancelClass && (this.cancelClass = c.cancelClass), "object" == typeof c.dateLimit && (this.dateLimit = c.dateLimit), "object" == typeof c.locale) {
                    if ("object" == typeof c.locale.daysOfWeek && (this.locale.daysOfWeek = c.locale.daysOfWeek.slice()), "object" == typeof c.locale.monthNames && (this.locale.monthNames = c.locale.monthNames.slice()), "number" == typeof c.locale.firstDay) {
                        this.locale.firstDay = c.locale.firstDay;
                        for (var e = c.locale.firstDay; e > 0;) this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift()), e--
                    }
                    "string" == typeof c.locale.applyLabel && (this.locale.applyLabel = c.locale.applyLabel), "string" == typeof c.locale.cancelLabel && (this.locale.cancelLabel = c.locale.cancelLabel), "string" == typeof c.locale.fromLabel && (this.locale.fromLabel = c.locale.fromLabel), "string" == typeof c.locale.toLabel && (this.locale.toLabel = c.locale.toLabel), "string" == typeof c.locale.weekLabel && (this.locale.weekLabel = c.locale.weekLabel), "string" == typeof c.locale.customRangeLabel && (this.locale.customRangeLabel = c.locale.customRangeLabel)
                }
                "string" == typeof c.opens && (this.opens = c.opens), "boolean" == typeof c.showWeekNumbers && (this.showWeekNumbers = c.showWeekNumbers), "string" == typeof c.buttonClasses && (this.buttonClasses = [c.buttonClasses]), "object" == typeof c.buttonClasses && (this.buttonClasses = c.buttonClasses), "boolean" == typeof c.showDropdowns && (this.showDropdowns = c.showDropdowns), "boolean" == typeof c.singleDatePicker && (this.singleDatePicker = c.singleDatePicker), "boolean" == typeof c.timePicker && (this.timePicker = c.timePicker), "number" == typeof c.timePickerIncrement && (this.timePickerIncrement = c.timePickerIncrement), "boolean" == typeof c.timePicker12Hour && (this.timePicker12Hour = c.timePicker12Hour);
                var f, g, h;
                if ("undefined" == typeof c.startDate && "undefined" == typeof c.endDate && a(this.element).is("input[type=text]")) {
                    var i = a(this.element).val(),
                        j = i.split(this.separator);
                    f = g = null, 2 == j.length ? (f = b(j[0], this.format), g = b(j[1], this.format)) : this.singleDatePicker && (f = b(i, this.format), g = b(i, this.format)), null !== f && null !== g && (this.startDate = f, this.endDate = g)
                }
                if ("object" == typeof c.ranges) {
                    for (h in c.ranges) f = b(c.ranges[h][0]), g = b(c.ranges[h][1]), this.minDate && f.isBefore(this.minDate) && (f = b(this.minDate)), this.maxDate && g.isAfter(this.maxDate) && (g = b(this.maxDate)), this.minDate && g.isBefore(this.minDate) || this.maxDate && f.isAfter(this.maxDate) || (this.ranges[h] = [f, g]);
                    var k = "<ul>";
                    for (h in this.ranges) k += "<li>" + h + "</li>";
                    k += "<li>" + this.locale.customRangeLabel + "</li>", k += "</ul>", this.container.find(".ranges ul").remove(), this.container.find(".ranges").prepend(k)
                }
                if ("function" == typeof d && (this.cb = d), this.timePicker || (this.startDate = this.startDate.startOf("day"), this.endDate = this.endDate.endOf("day")), this.singleDatePicker ? (this.opens = "right", this.container.find(".calendar.right").show(), this.container.find(".calendar.left").hide(), this.container.find(".ranges").hide(), this.container.find(".calendar.right").hasClass("single") || this.container.find(".calendar.right").addClass("single")) : (this.container.find(".calendar.right").removeClass("single"), this.container.find(".ranges").show()), this.oldStartDate = this.startDate.clone(), this.oldEndDate = this.endDate.clone(), this.oldChosenLabel = this.chosenLabel, this.leftCalendar = {
                        month: b([this.startDate.year(), this.startDate.month(), 1, this.startDate.hour(), this.startDate.minute()]),
                        calendar: []
                    }, this.rightCalendar = {
                        month: b([this.endDate.year(), this.endDate.month(), 1, this.endDate.hour(), this.endDate.minute()]),
                        calendar: []
                    }, "right" == this.opens) {
                    var l = this.container.find(".calendar.left"),
                        m = this.container.find(".calendar.right");
                    l.removeClass("left").addClass("right"), m.removeClass("right").addClass("left")
                }
                "undefined" != typeof c.ranges || this.singleDatePicker || this.container.addClass("show-calendar"), this.container.addClass("opens" + this.opens), this.updateView(), this.updateCalendars()
            },
            setStartDate: function(a) {
                "string" == typeof a && (this.startDate = b(a, this.format)), "object" == typeof a && (this.startDate = b(a)), this.timePicker || (this.startDate = this.startDate.startOf("day")), this.oldStartDate = this.startDate.clone(), this.updateView(), this.updateCalendars()
            },
            setEndDate: function(a) {
                "string" == typeof a && (this.endDate = b(a, this.format)), "object" == typeof a && (this.endDate = b(a)), this.timePicker || (this.endDate = this.endDate.endOf("day")), this.oldEndDate = this.endDate.clone(), this.updateView(), this.updateCalendars()
            },
            updateView: function() {
                this.leftCalendar.month.month(this.startDate.month()).year(this.startDate.year()), this.rightCalendar.month.month(this.endDate.month()).year(this.endDate.year()), this.updateFormInputs()
            },
            updateFormInputs: function() {
                this.container.find("input[name=daterangepicker_start]").val(this.startDate.format(this.format)), this.container.find("input[name=daterangepicker_end]").val(this.endDate.format(this.format)), this.startDate.isSame(this.endDate) || this.startDate.isBefore(this.endDate) ? this.container.find("button.applyBtn").removeAttr("disabled") : this.container.find("button.applyBtn").attr("disabled", "disabled")
            },
            updateFromControl: function() {
                if (this.element.is("input") && this.element.val().length) {
                    var a = this.element.val().split(this.separator),
                        c = null,
                        d = null;
                    2 === a.length && (c = b(a[0], this.format), d = b(a[1], this.format)), (this.singleDatePicker || null === c || null === d) && (c = b(this.element.val(), this.format), d = c), d.isBefore(c) || (this.oldStartDate = this.startDate.clone(), this.oldEndDate = this.endDate.clone(), this.startDate = c, this.endDate = d, this.startDate.isSame(this.oldStartDate) && this.endDate.isSame(this.oldEndDate) || this.notify(), this.updateCalendars())
                }
            },
            notify: function() {
                this.updateView(), this.cb(this.startDate, this.endDate, this.chosenLabel)
            },
            move: function() {
                var b = {
                    top: 0,
                    left: 0
                };
                this.parentEl.is("body") || (b = {
                    top: this.parentEl.offset().top - this.parentEl.scrollTop(),
                    left: this.parentEl.offset().left - this.parentEl.scrollLeft()
                }), "left" == this.opens ? (this.container.css({
                    top: this.element.offset().top + this.element.outerHeight() - b.top,
                    right: a(window).width() - this.element.offset().left - this.element.outerWidth() - b.left,
                    left: "auto"
                }), this.container.offset().left < 0 && this.container.css({
                    right: "auto",
                    left: 9
                })) : (this.container.css({
                    top: this.element.offset().top + this.element.outerHeight() - b.top,
                    left: this.element.offset().left - b.left,
                    right: "auto"
                }), this.container.offset().left + this.container.outerWidth() > a(window).width() && this.container.css({
                    left: "auto",
                    right: 0
                }))
            },
            toggle: function() {
                this.element.hasClass("active") ? this.hide() : this.show()
            },
            show: function() {
                this.element.addClass("active"), this.container.show(), this.move(), this._outsideClickProxy = a.proxy(function(a) {
                    this.outsideClick(a)
                }, this), a(document).on("mousedown.daterangepicker", this._outsideClickProxy).on("click.daterangepicker", "[data-toggle=dropdown]", this._outsideClickProxy).on("focusin.daterangepicker", this._outsideClickProxy), this.element.trigger("show.daterangepicker", this)
            },
            outsideClick: function(b) {
                var c = a(b.target);
                c.closest(this.element).length || c.closest(this.container).length || c.closest(".calendar-date").length || this.hide()
            },
            hide: function() {
                a(document).off("mousedown.daterangepicker", this._outsideClickProxy).off("click.daterangepicker", this._outsideClickProxy).off("focusin.daterangepicker", this._outsideClickProxy), this.element.removeClass("active"), this.container.hide(), this.startDate.isSame(this.oldStartDate) && this.endDate.isSame(this.oldEndDate) || this.notify(), this.oldStartDate = this.startDate.clone(), this.oldEndDate = this.endDate.clone(), this.element.trigger("hide.daterangepicker", this)
            },
            enterRange: function(a) {
                var b = a.target.innerHTML;
                if (b == this.locale.customRangeLabel) this.updateView();
                else {
                    var c = this.ranges[b];
                    this.container.find("input[name=daterangepicker_start]").val(c[0].format(this.format)), this.container.find("input[name=daterangepicker_end]").val(c[1].format(this.format))
                }
            },
            showCalendars: function() {
                this.container.addClass("show-calendar"), this.move()
            },
            hideCalendars: function() {
                this.container.removeClass("show-calendar")
            },
            updateInputText: function() {
                this.element.is("input") && !this.singleDatePicker ? this.element.val(this.startDate.format(this.format) + this.separator + this.endDate.format(this.format)) : this.element.is("input") && this.element.val(this.startDate.format(this.format))
            },
            clickRange: function(a) {
                var b = a.target.innerHTML;
                if (this.chosenLabel = b, b == this.locale.customRangeLabel) this.showCalendars();
                else {
                    var c = this.ranges[b];
                    this.startDate = c[0], this.endDate = c[1], this.timePicker || (this.startDate.startOf("day"), this.endDate.endOf("day")), this.leftCalendar.month.month(this.startDate.month()).year(this.startDate.year()).hour(this.startDate.hour()).minute(this.startDate.minute()), this.rightCalendar.month.month(this.endDate.month()).year(this.endDate.year()).hour(this.endDate.hour()).minute(this.endDate.minute()), this.updateCalendars(), this.updateInputText(), this.hideCalendars(), this.hide(), this.element.trigger("apply.daterangepicker", this)
                }
            },
            clickPrev: function(b) {
                var c = a(b.target).parents(".calendar");
                c.hasClass("left") ? this.leftCalendar.month.subtract("month", 1) : this.rightCalendar.month.subtract("month", 1), this.updateCalendars()
            },
            clickNext: function(b) {
                var c = a(b.target).parents(".calendar");
                c.hasClass("left") ? this.leftCalendar.month.add("month", 1) : this.rightCalendar.month.add("month", 1), this.updateCalendars()
            },
            enterDate: function(b) {
                var c = a(b.target).attr("data-title"),
                    d = c.substr(1, 1),
                    e = c.substr(3, 1),
                    f = a(b.target).parents(".calendar");
                f.hasClass("left") ? this.container.find("input[name=daterangepicker_start]").val(this.leftCalendar.calendar[d][e].format(this.format)) : this.container.find("input[name=daterangepicker_end]").val(this.rightCalendar.calendar[d][e].format(this.format))
            },
            clickDate: function(c) {
                var h, i, d = a(c.target).attr("data-title"),
                    e = d.substr(1, 1),
                    f = d.substr(3, 1),
                    g = a(c.target).parents(".calendar");
                if (g.hasClass("left")) {
                    if (h = this.leftCalendar.calendar[e][f], i = this.endDate, "object" == typeof this.dateLimit) {
                        var j = b(h).add(this.dateLimit).startOf("day");
                        i.isAfter(j) && (i = j)
                    }
                } else if (h = this.startDate, i = this.rightCalendar.calendar[e][f], "object" == typeof this.dateLimit) {
                    var k = b(i).subtract(this.dateLimit).startOf("day");
                    h.isBefore(k) && (h = k)
                }
                if (this.singleDatePicker && g.hasClass("left") ? i = h.clone() : this.singleDatePicker && g.hasClass("right") && (h = i.clone()), g.find("td").removeClass("active"), h.isSame(i) || h.isBefore(i)) a(c.target).addClass("active"), this.startDate = h, this.endDate = i, this.chosenLabel = this.locale.customRangeLabel;
                else if (h.isAfter(i)) {
                    a(c.target).addClass("active");
                    var l = this.endDate.diff(this.startDate);
                    this.startDate = h, this.endDate = b(h).add("ms", l), this.chosenLabel = this.locale.customRangeLabel
                }
                this.leftCalendar.month.month(this.startDate.month()).year(this.startDate.year()), this.rightCalendar.month.month(this.endDate.month()).year(this.endDate.year()), this.updateCalendars(), this.timePicker || i.endOf("day"), this.singleDatePicker && this.clickApply()
            },
            clickApply: function() {
                this.updateInputText(), this.hide(), this.element.trigger("apply.daterangepicker", this)
            },
            clickCancel: function() {
                this.startDate = this.oldStartDate, this.endDate = this.oldEndDate, this.chosenLabel = this.oldChosenLabel, this.updateView(), this.updateCalendars(), this.hide(), this.element.trigger("cancel.daterangepicker", this)
            },
            updateMonthYear: function(b) {
                var c = a(b.target).closest(".calendar").hasClass("left"),
                    d = c ? "left" : "right",
                    e = this.container.find(".calendar." + d),
                    f = parseInt(e.find(".monthselect").val(), 10),
                    g = e.find(".yearselect").val();
                this[d + "Calendar"].month.month(f).year(g), this.updateCalendars()
            },
            updateTime: function(b) {
                var c = a(b.target).closest(".calendar"),
                    d = c.hasClass("left"),
                    e = parseInt(c.find(".hourselect").val(), 10),
                    f = parseInt(c.find(".minuteselect").val(), 10);
                if (this.timePicker12Hour) {
                    var g = c.find(".ampmselect").val();
                    "PM" === g && 12 > e && (e += 12), "AM" === g && 12 === e && (e = 0)
                }
                if (d) {
                    var h = this.startDate.clone();
                    h.hour(e), h.minute(f), this.startDate = h, this.leftCalendar.month.hour(e).minute(f)
                } else {
                    var i = this.endDate.clone();
                    i.hour(e), i.minute(f), this.endDate = i, this.rightCalendar.month.hour(e).minute(f)
                }
                this.updateCalendars()
            },
            updateCalendars: function() {
                this.leftCalendar.calendar = this.buildCalendar(this.leftCalendar.month.month(), this.leftCalendar.month.year(), this.leftCalendar.month.hour(), this.leftCalendar.month.minute(), "left"), this.rightCalendar.calendar = this.buildCalendar(this.rightCalendar.month.month(), this.rightCalendar.month.year(), this.rightCalendar.month.hour(), this.rightCalendar.month.minute(), "right"), this.container.find(".calendar.left").empty().html(this.renderCalendar(this.leftCalendar.calendar, this.startDate, this.minDate, this.maxDate)), this.container.find(".calendar.right").empty().html(this.renderCalendar(this.rightCalendar.calendar, this.endDate, this.startDate, this.maxDate)), this.container.find(".ranges li").removeClass("active");
                var a = !0,
                    b = 0;
                for (var c in this.ranges) this.timePicker ? this.startDate.isSame(this.ranges[c][0]) && this.endDate.isSame(this.ranges[c][1]) && (a = !1, this.chosenLabel = this.container.find(".ranges li:eq(" + b + ")").addClass("active").html()) : this.startDate.format("YYYY-MM-DD") == this.ranges[c][0].format("YYYY-MM-DD") && this.endDate.format("YYYY-MM-DD") == this.ranges[c][1].format("YYYY-MM-DD") && (a = !1, this.chosenLabel = this.container.find(".ranges li:eq(" + b + ")").addClass("active").html()), b++;
                a && (this.chosenLabel = this.container.find(".ranges li:last").addClass("active").html())
            },
            buildCalendar: function(a, c, d, e) {
                var l, g = b([c, a, 1]),
                    h = b(g).subtract("month", 1).month(),
                    i = b(g).subtract("month", 1).year(),
                    j = b([i, h]).daysInMonth(),
                    k = g.day(),
                    m = [];
                for (l = 0; 6 > l; l++) m[l] = [];
                var n = j - k + this.locale.firstDay + 1;
                n > j && (n -= 7), k == this.locale.firstDay && (n = j - 6);
                var p, q, o = b([i, h, n, 12, e]);
                for (l = 0, p = 0, q = 0; 42 > l; l++, p++, o = b(o).add("hour", 24)) l > 0 && 0 === p % 7 && (p = 0, q++), m[q][p] = o.clone().hour(d), o.hour(12);
                return m
            },
            renderDropdowns: function(a, b, c) {
                for (var d = a.month(), e = '<select class="monthselect">', f = !1, g = !1, h = 0; 12 > h; h++)(!f || h >= b.month()) && (!g || h <= c.month()) && (e += "<option value='" + h + "'" + (h === d ? " selected='selected'" : "") + ">" + this.locale.monthNames[h] + "</option>");
                e += "</select>";
                for (var i = a.year(), j = c && c.year() || i + 5, k = b && b.year() || i - 50, l = '<select class="yearselect">', m = k; j >= m; m++) l += '<option value="' + m + '"' + (m === i ? ' selected="selected"' : "") + ">" + m + "</option>";
                return l += "</select>", e + l
            },
            renderCalendar: function(b, c, d, e) {
                var f = '<div class="calendar-date">';
                f += '<table class="table-condensed">', f += "<thead>", f += "<tr>", this.showWeekNumbers && (f += "<th></th>"), f += !d || d.isBefore(b[1][1]) ? '<th class="prev available"><i class="fa fa-arrow-left icon-arrow-left glyphicon glyphicon-arrow-left"></i></th>' : "<th></th>";
                var g = this.locale.monthNames[b[1][1].month()] + b[1][1].format(" YYYY");
                this.showDropdowns && (g = this.renderDropdowns(b[1][1], d, e)), f += '<th colspan="5" class="month">' + g + "</th>", f += !e || e.isAfter(b[1][1]) ? '<th class="next available"><i class="fa fa-arrow-right icon-arrow-right glyphicon glyphicon-arrow-right"></i></th>' : "<th></th>", f += "</tr>", f += "<tr>", this.showWeekNumbers && (f += '<th class="week">' + this.locale.weekLabel + "</th>"), a.each(this.locale.daysOfWeek, function(a, b) {
                    f += "<th>" + b + "</th>"
                }), f += "</tr>", f += "</thead>", f += "<tbody>";
                for (var h = 0; 6 > h; h++) {
                    f += "<tr>", this.showWeekNumbers && (f += '<td class="week">' + b[h][0].week() + "</td>");
                    for (var i = 0; 7 > i; i++) {
                        var j = "available ";
                        j += b[h][i].month() == b[1][1].month() ? "" : "off", d && b[h][i].isBefore(d, "day") || e && b[h][i].isAfter(e, "day") ? j = " off disabled " : b[h][i].format("YYYY-MM-DD") == c.format("YYYY-MM-DD") ? (j += " active ", b[h][i].format("YYYY-MM-DD") == this.startDate.format("YYYY-MM-DD") && (j += " start-date "), b[h][i].format("YYYY-MM-DD") == this.endDate.format("YYYY-MM-DD") && (j += " end-date ")) : b[h][i] >= this.startDate && b[h][i] <= this.endDate && (j += " in-range ", b[h][i].isSame(this.startDate) && (j += " start-date "), b[h][i].isSame(this.endDate) && (j += " end-date "));
                        var k = "r" + h + "c" + i;
                        f += '<td class="' + j.replace(/\s+/g, " ").replace(/^\s?(.*?)\s?$/, "$1") + '" data-title="' + k + '">' + b[h][i].date() + "</td>"
                    }
                    f += "</tr>"
                }
                f += "</tbody>", f += "</table>", f += "</div>";
                var l;
                if (this.timePicker) {
                    f += '<div class="calendar-time">', f += '<select class="hourselect">';
                    var m = 0,
                        n = 23,
                        o = c.hour();
                    for (this.timePicker12Hour && (m = 1, n = 12, o >= 12 && (o -= 12), 0 === o && (o = 12)), l = m; n >= l; l++) f += l == o ? '<option value="' + l + '" selected="selected">' + l + "</option>" : '<option value="' + l + '">' + l + "</option>";
                    for (f += "</select> : ", f += '<select class="minuteselect">', l = 0; 60 > l; l += this.timePickerIncrement) {
                        var p = l;
                        10 > p && (p = "0" + p), f += l == c.minute() ? '<option value="' + l + '" selected="selected">' + p + "</option>" : '<option value="' + l + '">' + p + "</option>"
                    }
                    f += "</select> ", this.timePicker12Hour && (f += '<select class="ampmselect">', f += c.hour() >= 12 ? '<option value="AM">AM</option><option value="PM" selected="selected">PM</option>' : '<option value="AM" selected="selected">AM</option><option value="PM">PM</option>', f += "</select>"), f += "</div>"
                }
                return f
            },
            remove: function() {
                this.container.remove(), this.element.off(".daterangepicker"), this.element.removeData("daterangepicker")
            }
        }, a.fn.daterangepicker = function(b, d) {
            return this.each(function() {
                var e = a(this);
                e.data("daterangepicker") && e.data("daterangepicker").remove(), e.data("daterangepicker", new c(e, b, d))
            }), this
        }
    }(window.jQuery, window.moment), ! function(a) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], a) : window.jQuery && !window.jQuery.fn.colorpicker && a(window.jQuery)
    }(function(a) {
        "use strict";
        var b = function(a) {
            this.value = {
                h: 0,
                s: 0,
                b: 0,
                a: 1
            }, this.origFormat = null, a && (void 0 !== a.toLowerCase ? this.setColor(a) : void 0 !== a.h && (this.value = a))
        };
        b.prototype = {
            constructor: b,
            colors: {
                aliceblue: "#f0f8ff",
                antiquewhite: "#faebd7",
                aqua: "#00ffff",
                aquamarine: "#7fffd4",
                azure: "#f0ffff",
                beige: "#f5f5dc",
                bisque: "#ffe4c4",
                black: "#000000",
                blanchedalmond: "#ffebcd",
                blue: "#0000ff",
                blueviolet: "#8a2be2",
                brown: "#a52a2a",
                burlywood: "#deb887",
                cadetblue: "#5f9ea0",
                chartreuse: "#7fff00",
                chocolate: "#d2691e",
                coral: "#ff7f50",
                cornflowerblue: "#6495ed",
                cornsilk: "#fff8dc",
                crimson: "#dc143c",
                cyan: "#00ffff",
                darkblue: "#00008b",
                darkcyan: "#008b8b",
                darkgoldenrod: "#b8860b",
                darkgray: "#a9a9a9",
                darkgreen: "#006400",
                darkkhaki: "#bdb76b",
                darkmagenta: "#8b008b",
                darkolivegreen: "#556b2f",
                darkorange: "#ff8c00",
                darkorchid: "#9932cc",
                darkred: "#8b0000",
                darksalmon: "#e9967a",
                darkseagreen: "#8fbc8f",
                darkslateblue: "#483d8b",
                darkslategray: "#2f4f4f",
                darkturquoise: "#00ced1",
                darkviolet: "#9400d3",
                deeppink: "#ff1493",
                deepskyblue: "#00bfff",
                dimgray: "#696969",
                dodgerblue: "#1e90ff",
                firebrick: "#b22222",
                floralwhite: "#fffaf0",
                forestgreen: "#228b22",
                fuchsia: "#ff00ff",
                gainsboro: "#dcdcdc",
                ghostwhite: "#f8f8ff",
                gold: "#ffd700",
                goldenrod: "#daa520",
                gray: "#808080",
                green: "#008000",
                greenyellow: "#adff2f",
                honeydew: "#f0fff0",
                hotpink: "#ff69b4",
                "indianred ": "#cd5c5c",
                "indigo ": "#4b0082",
                ivory: "#fffff0",
                khaki: "#f0e68c",
                lavender: "#e6e6fa",
                lavenderblush: "#fff0f5",
                lawngreen: "#7cfc00",
                lemonchiffon: "#fffacd",
                lightblue: "#add8e6",
                lightcoral: "#f08080",
                lightcyan: "#e0ffff",
                lightgoldenrodyellow: "#fafad2",
                lightgrey: "#d3d3d3",
                lightgreen: "#90ee90",
                lightpink: "#ffb6c1",
                lightsalmon: "#ffa07a",
                lightseagreen: "#20b2aa",
                lightskyblue: "#87cefa",
                lightslategray: "#778899",
                lightsteelblue: "#b0c4de",
                lightyellow: "#ffffe0",
                lime: "#00ff00",
                limegreen: "#32cd32",
                linen: "#faf0e6",
                magenta: "#ff00ff",
                maroon: "#800000",
                mediumaquamarine: "#66cdaa",
                mediumblue: "#0000cd",
                mediumorchid: "#ba55d3",
                mediumpurple: "#9370d8",
                mediumseagreen: "#3cb371",
                mediumslateblue: "#7b68ee",
                mediumspringgreen: "#00fa9a",
                mediumturquoise: "#48d1cc",
                mediumvioletred: "#c71585",
                midnightblue: "#191970",
                mintcream: "#f5fffa",
                mistyrose: "#ffe4e1",
                moccasin: "#ffe4b5",
                navajowhite: "#ffdead",
                navy: "#000080",
                oldlace: "#fdf5e6",
                olive: "#808000",
                olivedrab: "#6b8e23",
                orange: "#ffa500",
                orangered: "#ff4500",
                orchid: "#da70d6",
                palegoldenrod: "#eee8aa",
                palegreen: "#98fb98",
                paleturquoise: "#afeeee",
                palevioletred: "#d87093",
                papayawhip: "#ffefd5",
                peachpuff: "#ffdab9",
                peru: "#cd853f",
                pink: "#ffc0cb",
                plum: "#dda0dd",
                powderblue: "#b0e0e6",
                purple: "#800080",
                red: "#ff0000",
                rosybrown: "#bc8f8f",
                royalblue: "#4169e1",
                saddlebrown: "#8b4513",
                salmon: "#fa8072",
                sandybrown: "#f4a460",
                seagreen: "#2e8b57",
                seashell: "#fff5ee",
                sienna: "#a0522d",
                silver: "#c0c0c0",
                skyblue: "#87ceeb",
                slateblue: "#6a5acd",
                slategray: "#708090",
                snow: "#fffafa",
                springgreen: "#00ff7f",
                steelblue: "#4682b4",
                tan: "#d2b48c",
                teal: "#008080",
                thistle: "#d8bfd8",
                tomato: "#ff6347",
                turquoise: "#40e0d0",
                violet: "#ee82ee",
                wheat: "#f5deb3",
                white: "#ffffff",
                whitesmoke: "#f5f5f5",
                yellow: "#ffff00",
                yellowgreen: "#9acd32"
            },
            _sanitizeNumber: function(a) {
                return "number" == typeof a ? a : isNaN(a) || null === a || "" === a || void 0 === a ? 1 : void 0 !== a.toLowerCase ? parseFloat(a) : 1
            },
            setColor: function(a) {
                a = a.toLowerCase(), this.value = this.stringToHSB(a) || {
                    h: 0,
                    s: 0,
                    b: 0,
                    a: 1
                }
            },
            stringToHSB: function(b) {
                b = b.toLowerCase();
                var c = this,
                    d = !1;
                return a.each(this.stringParsers, function(a, e) {
                    var f = e.re.exec(b),
                        g = f && e.parse.apply(c, [f]),
                        h = e.format || "rgba";
                    return g ? (d = h.match(/hsla?/) ? c.RGBtoHSB.apply(c, c.HSLtoRGB.apply(c, g)) : c.RGBtoHSB.apply(c, g), c.origFormat = h, !1) : !0
                }), d
            },
            setHue: function(a) {
                this.value.h = 1 - a
            },
            setSaturation: function(a) {
                this.value.s = a
            },
            setBrightness: function(a) {
                this.value.b = 1 - a
            },
            setAlpha: function(a) {
                this.value.a = parseInt(100 * (1 - a), 10) / 100
            },
            toRGB: function(a, b, c, d) {
                a || (a = this.value.h, b = this.value.s, c = this.value.b), a *= 360;
                var e, f, g, h, i;
                return a = a % 360 / 60, i = c * b, h = i * (1 - Math.abs(a % 2 - 1)), e = f = g = c - i, a = ~~a, e += [i, h, 0, 0, h, i][a], f += [h, i, i, h, 0, 0][a], g += [0, 0, h, i, i, h][a], {
                    r: Math.round(255 * e),
                    g: Math.round(255 * f),
                    b: Math.round(255 * g),
                    a: d || this.value.a
                }
            },
            toHex: function(a, b, c, d) {
                var e = this.toRGB(a, b, c, d);
                return "#" + (1 << 24 | parseInt(e.r) << 16 | parseInt(e.g) << 8 | parseInt(e.b)).toString(16).substr(1)
            },
            toHSL: function(a, b, c, d) {
                a = a || this.value.h, b = b || this.value.s, c = c || this.value.b, d = d || this.value.a;
                var e = a,
                    f = (2 - b) * c,
                    g = b * c;
                return g /= f > 0 && 1 >= f ? f : 2 - f, f /= 2, g > 1 && (g = 1), {
                    h: isNaN(e) ? 0 : e,
                    s: isNaN(g) ? 0 : g,
                    l: isNaN(f) ? 0 : f,
                    a: isNaN(d) ? 0 : d
                }
            },
            toAlias: function(a, b, c, d) {
                var e = this.toHex(a, b, c, d);
                for (var f in this.colors)
                    if (this.colors[f] == e) return f;
                return !1
            },
            RGBtoHSB: function(a, b, c, d) {
                a /= 255, b /= 255, c /= 255;
                var e, f, g, h;
                return g = Math.max(a, b, c), h = g - Math.min(a, b, c), e = 0 === h ? null : g === a ? (b - c) / h : g === b ? (c - a) / h + 2 : (a - b) / h + 4, e = 60 * ((e + 360) % 6) / 360, f = 0 === h ? 0 : h / g, {
                    h: this._sanitizeNumber(e),
                    s: f,
                    b: g,
                    a: this._sanitizeNumber(d)
                }
            },
            HueToRGB: function(a, b, c) {
                return 0 > c ? c += 1 : c > 1 && (c -= 1), 1 > 6 * c ? a + 6 * (b - a) * c : 1 > 2 * c ? b : 2 > 3 * c ? a + 6 * (b - a) * (2 / 3 - c) : a
            },
            HSLtoRGB: function(a, b, c, d) {
                0 > b && (b = 0);
                var e;
                e = .5 >= c ? c * (1 + b) : c + b - c * b;
                var f = 2 * c - e,
                    g = a + 1 / 3,
                    h = a,
                    i = a - 1 / 3,
                    j = Math.round(255 * this.HueToRGB(f, e, g)),
                    k = Math.round(255 * this.HueToRGB(f, e, h)),
                    l = Math.round(255 * this.HueToRGB(f, e, i));
                return [j, k, l, this._sanitizeNumber(d)]
            },
            toString: function(a) {
                switch (a = a || "rgba") {
                    case "rgb":
                        var b = this.toRGB();
                        return "rgb(" + b.r + "," + b.g + "," + b.b + ")";
                    case "rgba":
                        var b = this.toRGB();
                        return "rgba(" + b.r + "," + b.g + "," + b.b + "," + b.a + ")";
                    case "hsl":
                        var c = this.toHSL();
                        return "hsl(" + Math.round(360 * c.h) + "," + Math.round(100 * c.s) + "%," + Math.round(100 * c.l) + "%)";
                    case "hsla":
                        var c = this.toHSL();
                        return "hsla(" + Math.round(360 * c.h) + "," + Math.round(100 * c.s) + "%," + Math.round(100 * c.l) + "%," + c.a + ")";
                    case "hex":
                        return this.toHex();
                    case "alias":
                        return this.toAlias() || this.toHex();
                    default:
                        return !1
                }
            },
            stringParsers: [{
                re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
                format: "hex",
                parse: function(a) {
                    return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16), 1]
                }
            }, {
                re: /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/,
                format: "hex",
                parse: function(a) {
                    return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16), 1]
                }
            }, {
                re: /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*?\)/,
                format: "rgb",
                parse: function(a) {
                    return [a[1], a[2], a[3], 1]
                }
            }, {
                re: /rgb\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*?\)/,
                format: "rgb",
                parse: function(a) {
                    return [2.55 * a[1], 2.55 * a[2], 2.55 * a[3], 1]
                }
            }, {
                re: /rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                format: "rgba",
                parse: function(a) {
                    return [a[1], a[2], a[3], a[4]]
                }
            }, {
                re: /rgba\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                format: "rgba",
                parse: function(a) {
                    return [2.55 * a[1], 2.55 * a[2], 2.55 * a[3], a[4]]
                }
            }, {
                re: /hsl\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*?\)/,
                format: "hsl",
                parse: function(a) {
                    return [a[1] / 360, a[2] / 100, a[3] / 100, a[4]]
                }
            }, {
                re: /hsla\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                format: "hsla",
                parse: function(a) {
                    return [a[1] / 360, a[2] / 100, a[3] / 100, a[4]]
                }
            }, {
                re: /^([a-z]{3,})$/,
                format: "alias",
                parse: function(a) {
                    var b = this.colorNameToHex(a[0]) || "#000000",
                        c = this.stringParsers[0].re.exec(b),
                        d = c && this.stringParsers[0].parse.apply(this, [c]);
                    return d
                }
            }],
            colorNameToHex: function(a) {
                return "undefined" != typeof this.colors[a.toLowerCase()] ? this.colors[a.toLowerCase()] : !1
            }
        };
        var c = {
                horizontal: !1,
                inline: !1,
                color: !1,
                format: !1,
                input: "input",
                container: !1,
                component: ".add-on, .input-group-addon",
                sliders: {
                    saturation: {
                        maxLeft: 100,
                        maxTop: 100,
                        callLeft: "setSaturation",
                        callTop: "setBrightness"
                    },
                    hue: {
                        maxLeft: 0,
                        maxTop: 100,
                        callLeft: !1,
                        callTop: "setHue"
                    },
                    alpha: {
                        maxLeft: 0,
                        maxTop: 100,
                        callLeft: !1,
                        callTop: "setAlpha"
                    }
                },
                slidersHorz: {
                    saturation: {
                        maxLeft: 100,
                        maxTop: 100,
                        callLeft: "setSaturation",
                        callTop: "setBrightness"
                    },
                    hue: {
                        maxLeft: 100,
                        maxTop: 0,
                        callLeft: "setHue",
                        callTop: !1
                    },
                    alpha: {
                        maxLeft: 100,
                        maxTop: 0,
                        callLeft: "setAlpha",
                        callTop: !1
                    }
                },
                template: '<div class="colorpicker dropdown-menu"><div class="colorpicker-saturation"><i><b></b></i></div><div class="colorpicker-hue"><i></i></div><div class="colorpicker-alpha"><i></i></div><div class="colorpicker-color"><div /></div></div>'
            },
            d = function(d, e) {
                this.element = a(d).addClass("colorpicker-element"), this.options = a.extend({}, c, this.element.data(), e), this.component = this.options.component, this.component = this.component !== !1 ? this.element.find(this.component) : !1, this.component && 0 === this.component.length && (this.component = !1), this.container = this.options.container === !0 ? this.element : this.options.container, this.container = this.container !== !1 ? a(this.container) : !1, this.input = this.element.is("input") ? this.element : this.options.input ? this.element.find(this.options.input) : !1, this.input && 0 === this.input.length && (this.input = !1), this.color = new b(this.options.color !== !1 ? this.options.color : this.getValue()), this.format = this.options.format !== !1 ? this.options.format : this.color.origFormat, this.picker = a(this.options.template), this.picker.addClass(this.options.inline ? "colorpicker-inline colorpicker-visible" : "colorpicker-hidden"), this.options.horizontal && this.picker.addClass("colorpicker-horizontal"), ("rgba" === this.format || "hsla" === this.format) && this.picker.addClass("colorpicker-with-alpha"), this.picker.on("mousedown.colorpicker", a.proxy(this.mousedown, this)), this.picker.appendTo(this.container ? this.container : a("body")), this.input !== !1 && (this.input.on({
                    "keyup.colorpicker": a.proxy(this.keyup, this)
                }), this.component === !1 && this.element.on({
                    "focus.colorpicker": a.proxy(this.show, this)
                }), this.options.inline === !1 && this.element.on({
                    "focusout.colorpicker": a.proxy(this.hide, this)
                })), this.component !== !1 && this.component.on({
                    "click.colorpicker": a.proxy(this.show, this)
                }), this.input === !1 && this.component === !1 && this.element.on({
                    "click.colorpicker": a.proxy(this.show, this)
                }), this.update(), a(a.proxy(function() {
                    this.element.trigger("create")
                }, this))
            };
        d.version = "2.0.0-beta", d.Color = b, d.prototype = {
            constructor: d,
            destroy: function() {
                this.picker.remove(), this.element.removeData("colorpicker").off(".colorpicker"), this.input !== !1 && this.input.off(".colorpicker"), this.component !== !1 && this.component.off(".colorpicker"), this.element.removeClass("colorpicker-element"), this.element.trigger({
                    type: "destroy"
                })
            },
            reposition: function() {
                if (this.options.inline !== !1) return !1;
                var a = this.container && this.container[0] !== document.body ? "position" : "offset",
                    b = this.component ? this.component[a]() : this.element[a]();
                this.picker.css({
                    top: b.top + (this.component ? this.component.outerHeight() : this.element.outerHeight()),
                    left: b.left
                })
            },
            show: function(b) {
                return this.isDisabled() ? !1 : (this.picker.addClass("colorpicker-visible").removeClass("colorpicker-hidden"), this.reposition(), a(window).on("resize.colorpicker", a.proxy(this.reposition, this)), !this.hasInput() && b && b.stopPropagation && b.preventDefault && (b.stopPropagation(), b.preventDefault()), this.options.inline === !1 && a(window.document).on({
                    "mousedown.colorpicker": a.proxy(this.hide, this)
                }), void this.element.trigger({
                    type: "showPicker",
                    color: this.color
                }))
            },
            hide: function() {
                this.picker.addClass("colorpicker-hidden").removeClass("colorpicker-visible"), a(window).off("resize.colorpicker", this.reposition), a(document).off({
                    "mousedown.colorpicker": this.hide
                }), this.update(), this.element.trigger({
                    type: "hidePicker",
                    color: this.color
                })
            },
            updateData: function(a) {
                return a = a || this.color.toString(this.format), this.element.data("color", a), a
            },
            updateInput: function(a) {
                return a = a || this.color.toString(this.format), this.input !== !1 && this.input.prop("value", a), a
            },
            updatePicker: function(a) {
                void 0 !== a && (this.color = new b(a));
                var c = this.options.horizontal === !1 ? this.options.sliders : this.options.slidersHorz,
                    d = this.picker.find("i");
                return 0 !== d.length ? (this.options.horizontal === !1 ? (c = this.options.sliders, d.eq(1).css("top", c.hue.maxTop * (1 - this.color.value.h)).end().eq(2).css("top", c.alpha.maxTop * (1 - this.color.value.a))) : (c = this.options.slidersHorz, d.eq(1).css("left", c.hue.maxLeft * (1 - this.color.value.h)).end().eq(2).css("left", c.alpha.maxLeft * (1 - this.color.value.a))), d.eq(0).css({
                    top: c.saturation.maxTop - this.color.value.b * c.saturation.maxTop,
                    left: this.color.value.s * c.saturation.maxLeft
                }), this.picker.find(".colorpicker-saturation").css("backgroundColor", this.color.toHex(this.color.value.h, 1, 1, 1)), this.picker.find(".colorpicker-alpha").css("backgroundColor", this.color.toHex()), this.picker.find(".colorpicker-color, .colorpicker-color div").css("backgroundColor", this.color.toString(this.format)), a) : void 0
            },
            updateComponent: function(a) {
                if (a = a || this.color.toString(this.format), this.component !== !1) {
                    var b = this.component.find("i").eq(0);
                    b.length > 0 ? b.css({
                        backgroundColor: a
                    }) : this.component.css({
                        backgroundColor: a
                    })
                }
                return a
            },
            update: function(a) {
                var b = this.updateComponent();
                return (this.getValue(!1) !== !1 || a === !0) && (this.updateInput(b), this.updateData(b)), this.updatePicker(), b
            },
            setValue: function(a) {
                this.color = new b(a), this.update(), this.element.trigger({
                    type: "changeColor",
                    color: this.color,
                    value: a
                })
            },
            getValue: function(a) {
                a = void 0 === a ? "#000000" : a;
                var b;
                return b = this.hasInput() ? this.input.val() : this.element.data("color"), (void 0 === b || "" === b || null === b) && (b = a), b
            },
            hasInput: function() {
                return this.input !== !1
            },
            isDisabled: function() {
                return this.hasInput() ? this.input.prop("disabled") === !0 : !1
            },
            disable: function() {
                return this.hasInput() ? (this.input.prop("disabled", !0), !0) : !1
            },
            enable: function() {
                return this.hasInput() ? (this.input.prop("disabled", !1), !0) : !1
            },
            currentSlider: null,
            mousePointer: {
                left: 0,
                top: 0
            },
            mousedown: function(b) {
                b.stopPropagation(), b.preventDefault();
                var c = a(b.target),
                    d = c.closest("div"),
                    e = this.options.horizontal ? this.options.slidersHorz : this.options.sliders;
                if (!d.is(".colorpicker")) {
                    if (d.is(".colorpicker-saturation")) this.currentSlider = a.extend({}, e.saturation);
                    else if (d.is(".colorpicker-hue")) this.currentSlider = a.extend({}, e.hue);
                    else {
                        if (!d.is(".colorpicker-alpha")) return !1;
                        this.currentSlider = a.extend({}, e.alpha)
                    }
                    var f = d.offset();
                    this.currentSlider.guide = d.find("i")[0].style, this.currentSlider.left = b.pageX - f.left, this.currentSlider.top = b.pageY - f.top, this.mousePointer = {
                        left: b.pageX,
                        top: b.pageY
                    }, a(document).on({
                        "mousemove.colorpicker": a.proxy(this.mousemove, this),
                        "mouseup.colorpicker": a.proxy(this.mouseup, this)
                    }).trigger("mousemove")
                }
                return !1
            },
            mousemove: function(a) {
                a.stopPropagation(), a.preventDefault();
                var b = Math.max(0, Math.min(this.currentSlider.maxLeft, this.currentSlider.left + ((a.pageX || this.mousePointer.left) - this.mousePointer.left))),
                    c = Math.max(0, Math.min(this.currentSlider.maxTop, this.currentSlider.top + ((a.pageY || this.mousePointer.top) - this.mousePointer.top)));
                return this.currentSlider.guide.left = b + "px", this.currentSlider.guide.top = c + "px", this.currentSlider.callLeft && this.color[this.currentSlider.callLeft].call(this.color, b / 100), this.currentSlider.callTop && this.color[this.currentSlider.callTop].call(this.color, c / 100), this.update(!0), this.element.trigger({
                    type: "changeColor",
                    color: this.color
                }), !1
            },
            mouseup: function(b) {
                return b.stopPropagation(), b.preventDefault(), a(document).off({
                    "mousemove.colorpicker": this.mousemove,
                    "mouseup.colorpicker": this.mouseup
                }), !1
            },
            keyup: function(a) {
                if (38 === a.keyCode) this.color.value.a < 1 && (this.color.value.a = Math.round(100 * (this.color.value.a + .01)) / 100), this.update(!0);
                else if (40 === a.keyCode) this.color.value.a > 0 && (this.color.value.a = Math.round(100 * (this.color.value.a - .01)) / 100), this.update(!0);
                else {
                    var c = this.input.val();
                    this.color = new b(c), this.getValue(!1) !== !1 && (this.updateData(), this.updateComponent(), this.updatePicker())
                }
                this.element.trigger({
                    type: "changeColor",
                    color: this.color,
                    value: c
                })
            }
        }, a.colorpicker = d, a.fn.colorpicker = function(b) {
            var c = arguments;
            return this.each(function() {
                var e = a(this),
                    f = e.data("colorpicker"),
                    g = "object" == typeof b ? b : {};
                f || "string" == typeof b ? "string" == typeof b && f[b].apply(f, Array.prototype.slice.call(c, 1)) : e.data("colorpicker", new d(this, g))
            })
        }, a.fn.colorpicker.constructor = d
    }),
    function(a) {
        a.fn.appear = function(b, c) {
            var d = a.extend({
                data: void 0,
                one: !0,
                accX: 0,
                accY: 0
            }, c);
            return this.each(function() {
                var c = a(this);
                if (c.appeared = !1, !b) return c.trigger("appear", d.data), void 0;
                var e = a(window),
                    f = function() {
                        if (!c.is(":visible")) return c.appeared = !1, void 0;
                        var a = e.scrollLeft(),
                            b = e.scrollTop(),
                            f = c.offset(),
                            g = f.left,
                            h = f.top,
                            i = d.accX,
                            j = d.accY,
                            k = c.height(),
                            l = e.height(),
                            m = c.width(),
                            n = e.width();
                        h + k + j >= b && b + l + j >= h && g + m + i >= a && a + n + i >= g ? c.appeared || c.trigger("appear", d.data) : c.appeared = !1
                    },
                    g = function() {
                        if (c.appeared = !0, d.one) {
                            e.unbind("scroll", f);
                            var g = a.inArray(f, a.fn.appear.checks);
                            g >= 0 && a.fn.appear.checks.splice(g, 1)
                        }
                        b.apply(this, arguments)
                    };
                d.one ? c.one("appear", d.data, g) : c.bind("appear", d.data, g), e.scroll(f), a.fn.appear.checks.push(f), f()
            })
        }, a.extend(a.fn.appear, {
            checks: [],
            timeout: null,
            checkAll: function() {
                var b = a.fn.appear.checks.length;
                if (b > 0)
                    for (; b--;) a.fn.appear.checks[b]()
            },
            run: function() {
                a.fn.appear.timeout && clearTimeout(a.fn.appear.timeout), a.fn.appear.timeout = setTimeout(a.fn.appear.checkAll, 20)
            }
        }), a.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function(b, c) {
            var d = a.fn[c];
            d && (a.fn[c] = function() {
                var b = d.apply(this, arguments);
                return a.fn.appear.run(), b
            })
        })
    }(jQuery),
    function(a) {
        var b = a(window),
            c = b.height();
        b.resize(function() {
            c = b.height()
        }), a.fn.parallax = function(d, e, f) {
            function k() {
                g.each(function() {
                    i = g.offset().top
                }), h = f ? function(a) {
                    return a.outerHeight(!0)
                } : function(a) {
                    return a.height()
                }, (arguments.length < 1 || null === d) && (d = "50%"), (arguments.length < 2 || null === e) && (e = .5), (arguments.length < 3 || null === f) && (f = !0);
                var j = b.scrollTop();
                g.each(function() {
                    var b = a(this),
                        f = b.offset().top,
                        k = h(b);
                    j > f + k || f > j + c || g.css("backgroundPosition", d + " " + Math.round((i - j) * e) + "px")
                })
            }
            var h, i, g = a(this);
            b.bind("scroll", k).resize(k), k()
        }
    }(jQuery), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(a, b, c, d, e) {
            return jQuery.easing[jQuery.easing.def](a, b, c, d, e)
        },
        easeInQuad: function(a, b, c, d, e) {
            return d * (b /= e) * b + c
        },
        easeOutQuad: function(a, b, c, d, e) {
            return -d * (b /= e) * (b - 2) + c
        },
        easeInOutQuad: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
        },
        easeInCubic: function(a, b, c, d, e) {
            return d * (b /= e) * b * b + c
        },
        easeOutCubic: function(a, b, c, d, e) {
            return d * ((b = b / e - 1) * b * b + 1) + c
        },
        easeInOutCubic: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c
        },
        easeInQuart: function(a, b, c, d, e) {
            return d * (b /= e) * b * b * b + c
        },
        easeOutQuart: function(a, b, c, d, e) {
            return -d * ((b = b / e - 1) * b * b * b - 1) + c
        },
        easeInOutQuart: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c
        },
        easeInQuint: function(a, b, c, d, e) {
            return d * (b /= e) * b * b * b * b + c
        },
        easeOutQuint: function(a, b, c, d, e) {
            return d * ((b = b / e - 1) * b * b * b * b + 1) + c
        },
        easeInOutQuint: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c
        },
        easeInSine: function(a, b, c, d, e) {
            return -d * Math.cos(b / e * (Math.PI / 2)) + d + c
        },
        easeOutSine: function(a, b, c, d, e) {
            return d * Math.sin(b / e * (Math.PI / 2)) + c
        },
        easeInOutSine: function(a, b, c, d, e) {
            return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
        },
        easeInExpo: function(a, b, c, d, e) {
            return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
        },
        easeOutExpo: function(a, b, c, d, e) {
            return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
        },
        easeInOutExpo: function(a, b, c, d, e) {
            return 0 == b ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c
        },
        easeInCirc: function(a, b, c, d, e) {
            return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
        },
        easeOutCirc: function(a, b, c, d, e) {
            return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
        },
        easeInOutCirc: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
        },
        easeInElastic: function(a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (0 == b) return c;
            if (1 == (b /= e)) return c + d;
            if (g || (g = .3 * e), h < Math.abs(d)) {
                h = d;
                var f = g / 4
            } else var f = g / (2 * Math.PI) * Math.asin(d / h);
            return -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g)) + c
        },
        easeOutElastic: function(a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (0 == b) return c;
            if (1 == (b /= e)) return c + d;
            if (g || (g = .3 * e), h < Math.abs(d)) {
                h = d;
                var f = g / 4
            } else var f = g / (2 * Math.PI) * Math.asin(d / h);
            return h * Math.pow(2, -10 * b) * Math.sin((b * e - f) * 2 * Math.PI / g) + d + c
        },
        easeInOutElastic: function(a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (0 == b) return c;
            if (2 == (b /= e / 2)) return c + d;
            if (g || (g = e * .3 * 1.5), h < Math.abs(d)) {
                h = d;
                var f = g / 4
            } else var f = g / (2 * Math.PI) * Math.asin(d / h);
            return 1 > b ? -.5 * h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g) + c : .5 * h * Math.pow(2, -10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g) + d + c
        },
        easeInBack: function(a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), d * (b /= e) * b * ((f + 1) * b - f) + c
        },
        easeOutBack: function(a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c
        },
        easeInOutBack: function(a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), (b /= e / 2) < 1 ? d / 2 * b * b * (((f *= 1.525) + 1) * b - f) + c : d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c
        },
        easeInBounce: function(a, b, c, d, e) {
            return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c
        },
        easeOutBounce: function(a, b, c, d, e) {
            return (b /= e) < 1 / 2.75 ? d * 7.5625 * b * b + c : 2 / 2.75 > b ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : 2.5 / 2.75 > b ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
        },
        easeInOutBounce: function(a, b, c, d, e) {
            return e / 2 > b ? .5 * jQuery.easing.easeInBounce(a, 2 * b, 0, d, e) + c : .5 * jQuery.easing.easeOutBounce(a, 2 * b - e, 0, d, e) + .5 * d + c
        }
    }),
    function(a, b, c) {
        a.fn.backstretch = function(d, e) {
            return (d === c || 0 === d.length) && a.error("No images were supplied for Backstretch"), 0 === a(b).scrollTop() && b.scrollTo(0, 0), this.each(function() {
                var b = a(this),
                    c = b.data("backstretch");
                if (c) {
                    if ("string" == typeof d && "function" == typeof c[d]) return c[d](e), void 0;
                    e = a.extend(c.options, e), c.destroy(!0)
                }
                c = new f(this, d, e), b.data("backstretch", c)
            })
        }, a.backstretch = function(b, c) {
            return a("body").backstretch(b, c).data("backstretch")
        }, a.expr[":"].backstretch = function(b) {
            return a(b).data("backstretch") !== c
        }, a.fn.backstretch.defaults = {
            centeredX: !0,
            centeredY: !0,
            duration: 5e3,
            fade: 0
        };
        var d = {
                left: 0,
                top: 0,
                overflow: "hidden",
                margin: 0,
                padding: 0,
                height: "100%",
                width: "100%",
                zIndex: -999999
            },
            e = {
                position: "absolute",
                display: "none",
                margin: 0,
                padding: 0,
                border: "none",
                width: "auto",
                height: "auto",
                maxHeight: "none",
                maxWidth: "none",
                zIndex: -999999
            },
            f = function(c, e, f) {
                this.options = a.extend({}, a.fn.backstretch.defaults, f || {}), this.images = a.isArray(e) ? e : [e], a.each(this.images, function() {
                    a("<img />")[0].src = this
                }), this.isBody = c === document.body, this.$container = a(c), this.$root = this.isBody ? g ? a(b) : a(document) : this.$container, c = this.$container.children(".backstretch").first(), this.$wrap = c.length ? c : a('<div class="backstretch"></div>').css(d).appendTo(this.$container), this.isBody || (c = this.$container.css("position"), e = this.$container.css("zIndex"), this.$container.css({
                    position: "static" === c ? "relative" : c,
                    zIndex: "auto" === e ? 0 : e,
                    background: "none"
                }), this.$wrap.css({
                    zIndex: -999998
                })), this.$wrap.css({
                    position: this.isBody && g ? "fixed" : "absolute"
                }), this.index = 0, this.show(this.index), a(b).on("resize.backstretch", a.proxy(this.resize, this)).on("orientationchange.backstretch", a.proxy(function() {
                    this.isBody && 0 === b.pageYOffset && (b.scrollTo(0, 1), this.resize())
                }, this))
            };
        f.prototype = {
            resize: function() {
                try {
                    var g, a = {
                            left: 0,
                            top: 0
                        },
                        c = this.isBody ? this.$root.width() : this.$root.innerWidth(),
                        d = c,
                        e = this.isBody ? b.innerHeight ? b.innerHeight : this.$root.height() : this.$root.innerHeight(),
                        f = d / this.$img.data("ratio");
                    f >= e ? (g = (f - e) / 2, this.options.centeredY && (a.top = "-" + g + "px")) : (f = e, d = f * this.$img.data("ratio"), g = (d - c) / 2, this.options.centeredX && (a.left = "-" + g + "px")), this.$wrap.css({
                        width: c,
                        height: e
                    }).find("img:not(.deleteable)").css({
                        width: d,
                        height: f
                    }).css(a)
                } catch (h) {}
                return this
            },
            show: function(b) {
                if (!(Math.abs(b) > this.images.length - 1)) {
                    var c = this,
                        d = c.$wrap.find("img").addClass("deleteable"),
                        f = {
                            relatedTarget: c.$container[0]
                        };
                    return c.$container.trigger(a.Event("backstretch.before", f), [c, b]), this.index = b, clearInterval(c.interval), c.$img = a("<img />").css(e).bind("load", function(e) {
                        var g = this.width || a(e.target).width();
                        e = this.height || a(e.target).height(), a(this).data("ratio", g / e), a(this).fadeIn(c.options.speed || c.options.fade, function() {
                            d.remove(), c.paused || c.cycle(), a(["after", "show"]).each(function() {
                                c.$container.trigger(a.Event("backstretch." + this, f), [c, b])
                            })
                        }), c.resize()
                    }).appendTo(c.$wrap), c.$img.attr("src", c.images[b]), c
                }
            },
            next: function() {
                return this.show(this.index < this.images.length - 1 ? this.index + 1 : 0)
            },
            prev: function() {
                return this.show(0 === this.index ? this.images.length - 1 : this.index - 1)
            },
            pause: function() {
                return this.paused = !0, this
            },
            resume: function() {
                return this.paused = !1, this.next(), this
            },
            cycle: function() {
                return 1 < this.images.length && (clearInterval(this.interval), this.interval = setInterval(a.proxy(function() {
                    this.paused || this.next()
                }, this), this.options.duration)), this
            },
            destroy: function(c) {
                a(b).off("resize.backstretch orientationchange.backstretch"), clearInterval(this.interval), c || this.$wrap.remove(), this.$container.removeData("backstretch")
            }
        };
        var g, h = navigator.userAgent,
            i = navigator.platform,
            j = h.match(/AppleWebKit\/([0-9]+)/),
            j = !!j && j[1],
            k = h.match(/Fennec\/([0-9]+)/),
            k = !!k && k[1],
            l = h.match(/Opera Mobi\/([0-9]+)/),
            m = !!l && l[1],
            n = h.match(/MSIE ([0-9]+)/),
            n = !!n && n[1];
        g = !((-1 < i.indexOf("iPhone") || -1 < i.indexOf("iPad") || -1 < i.indexOf("iPod")) && j && 534 > j || b.operamini && "[object OperaMini]" === {}.toString.call(b.operamini) || l && 7458 > m || -1 < h.indexOf("Android") && j && 533 > j || k && 6 > k || "palmGetResource" in b && j && 534 > j || -1 < h.indexOf("MeeGo") && -1 < h.indexOf("NokiaBrowser/8.5.0") || n && 6 >= n)
    }(jQuery, window);