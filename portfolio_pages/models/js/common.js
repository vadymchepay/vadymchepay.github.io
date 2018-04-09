$(document).ready(function () {
    /* Placeholders.js v4.0.1 */
    ! function (a) {
        "use strict";

        function b() {}

        function c() {
            try {
                return document.activeElement
            } catch (a) {}
        }

        function d(a, b) {
            for (var c = 0, d = a.length; d > c; c++)
                if (a[c] === b) return !0;
            return !1
        }

        function e(a, b, c) {
            return a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent ? a.attachEvent("on" + b, c) : void 0
        }

        function f(a, b) {
            var c;
            a.createTextRange ? (c = a.createTextRange(), c.move("character", b), c.select()) : a.selectionStart && (a.focus(), a.setSelectionRange(b, b))
        }

        function g(a, b) {
            try {
                return a.type = b, !0
            } catch (c) {
                return !1
            }
        }

        function h(a, b) {
            if (a && a.getAttribute(B)) b(a);
            else
                for (var c, d = a ? a.getElementsByTagName("input") : N, e = a ? a.getElementsByTagName("textarea") : O, f = d ? d.length : 0, g = e ? e.length : 0, h = f + g, i = 0; h > i; i++) c = f > i ? d[i] : e[i - f], b(c)
        }

        function i(a) {
            h(a, k)
        }

        function j(a) {
            h(a, l)
        }

        function k(a, b) {
            var c = !!b && a.value !== b,
                d = a.value === a.getAttribute(B);
            if ((c || d) && "true" === a.getAttribute(C)) {
                a.removeAttribute(C), a.value = a.value.replace(a.getAttribute(B), ""), a.className = a.className.replace(A, "");
                var e = a.getAttribute(I);
                parseInt(e, 10) >= 0 && (a.setAttribute("maxLength", e), a.removeAttribute(I));
                var f = a.getAttribute(D);
                return f && (a.type = f), !0
            }
            return !1
        }

        function l(a) {
            var b = a.getAttribute(B);
            if ("" === a.value && b) {
                a.setAttribute(C, "true"), a.value = b, a.className += " " + z;
                var c = a.getAttribute(I);
                c || (a.setAttribute(I, a.maxLength), a.removeAttribute("maxLength"));
                var d = a.getAttribute(D);
                return d ? a.type = "text" : "password" === a.type && g(a, "text") && a.setAttribute(D, "password"), !0
            }
            return !1
        }

        function m(a) {
            return function () {
                P && a.value === a.getAttribute(B) && "true" === a.getAttribute(C) ? f(a, 0) : k(a)
            }
        }

        function n(a) {
            return function () {
                l(a)
            }
        }

        function o(a) {
            return function () {
                i(a)
            }
        }

        function p(a) {
            return function (b) {
                return v = a.value, "true" === a.getAttribute(C) && v === a.getAttribute(B) && d(x, b.keyCode) ? (b.preventDefault && b.preventDefault(), !1) : void 0
            }
        }

        function q(a) {
            return function () {
                k(a, v), "" === a.value && (a.blur(), f(a, 0))
            }
        }

        function r(a) {
            return function () {
                a === c() && a.value === a.getAttribute(B) && "true" === a.getAttribute(C) && f(a, 0)
            }
        }

        function s(a) {
            var b = a.form;
            b && "string" == typeof b && (b = document.getElementById(b), b.getAttribute(E) || (e(b, "submit", o(b)), b.setAttribute(E, "true"))), e(a, "focus", m(a)), e(a, "blur", n(a)), P && (e(a, "keydown", p(a)), e(a, "keyup", q(a)), e(a, "click", r(a))), a.setAttribute(F, "true"), a.setAttribute(B, T), (P || a !== c()) && l(a)
        }
        var t = document.createElement("input"),
            u = void 0 !== t.placeholder;
        if (a.Placeholders = {
                nativeSupport: u,
                disable: u ? b : i,
                enable: u ? b : j
            }, !u) {
            var v, w = ["text", "search", "url", "tel", "email", "password", "number", "textarea"],
                x = [27, 33, 34, 35, 36, 37, 38, 39, 40, 8, 46],
                y = "#ccc",
                z = "placeholdersjs",
                A = new RegExp("(?:^|\\s)" + z + "(?!\\S)"),
                B = "data-placeholder-value",
                C = "data-placeholder-active",
                D = "data-placeholder-type",
                E = "data-placeholder-submit",
                F = "data-placeholder-bound",
                G = "data-placeholder-focus",
                H = "data-placeholder-live",
                I = "data-placeholder-maxlength",
                J = 100,
                K = document.getElementsByTagName("head")[0],
                L = document.documentElement,
                M = a.Placeholders,
                N = document.getElementsByTagName("input"),
                O = document.getElementsByTagName("textarea"),
                P = "false" === L.getAttribute(G),
                Q = "false" !== L.getAttribute(H),
                R = document.createElement("style");
            R.type = "text/css";
            var S = document.createTextNode("." + z + " {color:" + y + ";}");
            R.styleSheet ? R.styleSheet.cssText = S.nodeValue : R.appendChild(S), K.insertBefore(R, K.firstChild);
            for (var T, U, V = 0, W = N.length + O.length; W > V; V++) U = V < N.length ? N[V] : O[V - N.length], T = U.attributes.placeholder, T && (T = T.nodeValue, T && d(w, U.type) && s(U));
            var X = setInterval(function () {
                for (var a = 0, b = N.length + O.length; b > a; a++) U = a < N.length ? N[a] : O[a - N.length], T = U.attributes.placeholder, T ? (T = T.nodeValue, T && d(w, U.type) && (U.getAttribute(F) || s(U), (T !== U.getAttribute(B) || "password" === U.type && !U.getAttribute(D)) && ("password" === U.type && !U.getAttribute(D) && g(U, "text") && U.setAttribute(D, "password"), U.value === U.getAttribute(B) && (U.value = T), U.setAttribute(B, T)))) : U.getAttribute(C) && (k(U), U.removeAttribute(B));
                Q || clearInterval(X)
            }, J);
            e(a, "beforeunload", function () {
                M.disable()
            })
        }
    }(this);

    // Activate Tabs



    $(function () {
        $("#gallery-tabs").tabs();
    });

    // Smooth scrolling

    $(function () {
        $('a[href*="#a-"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1200);
                    return false;
                }
            }
        });
    });


    $('.page-header__title').addClass('scale');
    $('.page-header__subtitle').addClass('scale');
    $('.page-header__skills').addClass('scale');
    $('.about__title').addClass('translateX_left');
    $('.about__subtitle').addClass('translateX_right');
    $('.about__descr:even').addClass('translateX_left');
    $('.about__descr:odd').addClass('translateX_right');
    $('.portfolio__title').addClass('translateX_left');
    $('.portfolio__gallery').addClass('scale');
    $('.services__title').addClass('translateX_left');
    $('.services__subtitle').addClass('translateX_right');
    $('.services__item:even').addClass('translateX_left');
    $('.services__item:odd').addClass('translateX_right');
    $('.blog__title').addClass('translateX_left');
    $('.blog__subtitle').addClass('translateX_right');
    $('.about__member').each(function (i, el) {
        $(el).addClass('scale')
    });
    $('.blog__item').each(function (i, el) {
        $(el).addClass('scale')
    });
    $('.map').addClass('scale');
    $('.contact-us').addClass('scale');
    $('.page-footer__item').each(function (i, el) {
        $(el).addClass('scale')
    });
    $('.social-item').each(function (i, el) {
        $(el).addClass('scale')
    });



    var scroll_to_about = $('#a-about').offset().top - 200;
    var scroll_to_galery = $('#a-gallery').offset().top - 200;
    var scroll_to_services = $('#a-services').offset().top - 700;
    var scroll_to_blog = $('#a-blog').offset().top - 700;
    var scroll_to_map = $('.map').offset().top - 1000;
    var scroll_to_contact = $('#a-contact').offset().top - 1000;



    $('.page-header__title').transition({
        scale: (1, 1)
    }, 1500, "easeOutQuart");
    $('.page-header__subtitle').transition({
        scale: (1, 1)
    }, 1500, "easeOutQuart");
    $('.page-header__skills').transition({
        scale: (1, 1)
    }, 1500, "easeOutQuart");
    $(window).scroll(function () {
        if ($(window).scrollTop() >= scroll_to_about) {
            $('.about__title').transition({
                x: 0
            }, 1500, "easeOutQuart");
            $('.about__subtitle').transition({
                x: 0
            }, 1500, "easeOutQuart");
            $('.about__descr').each(function (i, el) {
                $(el).transition({
                    x: 0
                }, 1500, "easeOutQuart")
            });
            $('.about__member').each(function (i, el) {
                $(el).transition({
                    scale: (1, 1)
                }, 1500, "easeOutQuart")
            });

        };
        if ($(window).scrollTop() >= scroll_to_galery) {
            $('.portfolio__title').transition({
                x: 0
            }, 1500, "easeOutQuart");
            $('.portfolio__gallery').transition({
                scale: (1, 1)
            }, 1500, "easeOutQuart");
        };
        if ($(window).scrollTop() >= scroll_to_services) {
            $('.services__title').transition({
                x: 0
            }, 1500, "easeOutQuart");
            $('.services__subtitle').transition({
                x: 0
            }, 1500, "easeOutQuart");
            $('.services__item').each(function (i, el) {
                $(el).transition({
                    x: 0
                }, 1500, "easeOutQuart")
            });

        };
        if ($(window).scrollTop() >= scroll_to_blog) {
            $('.blog__title').transition({
                x: 0
            }, 1500, "easeOutQuart");
            $('.blog__subtitle').transition({
                x: 0
            }, 1500, "easeOutQuart");
            $('.blog__item').each(function (i, el) {
                setTimeout(function () {
                    $(el).transition({
                        scale: (1, 1)
                    }, 700, "easeOutQuart")
                }, 300 * i)
            });

        };
        if ($(window).scrollTop() >= scroll_to_map) {
            $('.map').transition({
                scale: (1, 1)
            }, 1500, "easeOutQuart");

        };
        if ($(window).scrollTop() >= scroll_to_contact) {
            $('.contact-us').transition({
                scale: (1, 1)
            }, 1500, "easeOutQuart");
            $('.page-footer__item').each(function (i, el) {
                setTimeout(function () {
                    $(el).transition({
                        scale: (1, 1)
                    }, 700, "easeOutQuart")
                }, 300 * i)
            });            
            $('.social-item').each(function (i, el) {
                setTimeout(function () {
                    $(el).transition({
                        scale: (1, 1)
                    }, 700, "easeOutQuart")
                }, 300 * i)
            });


        };

    });


});
