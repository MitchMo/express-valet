$('.menu-link').click(function() {

  $('#content-to-change').removeClass('fadeIn animated').addClass('fadeOut animated');

  var message = '';

  switch($(this).attr('id')) {
    case 'customer-service':
      message = 'is unwaveringly committed to providing exceptional customer service. We make certain that all guests doors are opened upon entry and exit. Respectful and proper communication while making eye contact is the norm. It\'s about more than parking cars, we genuinely welcome and engage our customers, wanting to enhance their time with us.';
      break;
    case 'appearance':
      message = 'realizes that first impressions are often the most important part of making a memorable experience for your guests. Knowing that a valet parking attendant is often seen first, the highest level of service is always provided. Our valet attendants are professionally uniformed, polite and fully trained.';
      break;
    case 'events':
      message = 'provides valet service to businesses such as restaurants, hotels, hospitals, casinos, airports, office buildings, country clubs and night clubs. Other parking services such as traffic control and traffic direction are also available for larger events such as concerts, sporting events and festivals. We\'ve managed event sizes that range from the Detroit International Auto Show to residential events for 40 people.';
      break;
    case 'equipment':
      message = 'has all of the equipment needed for your event or location. From locking key boxes, to custom created digital four color signage, we realize that all aspects must be presentable.';
      break;
    default:
      message = 'offers professional, uniformed parking attendants for special events such as weddings, home gatherings, corporate events and charity events. With over 15 years of experience, trust us to provide the best quality parking service around.';
      break;
  }

  setTimeout(function() {
    $('#content-to-change').html(message).removeClass('fadeOut animated');

    $('#content-to-change').addClass('fadeIn animated');
  }, 1000);
});
