$('.contact_link').on('click', { target: $('.contact_link').attr('local') }, function(event) {
                                $('body').scrollTo(event.data.target, 1000);
                                });

$('.trailer_link').on('click', { target: $('.trailer_link').attr('local') }, function(event) {
                                $('body').scrollTo(event.data.target, 1000);
                                });
