$('.menu-link').click(function() {

  $('#content-to-change').removeClass('fadeIn animated').addClass('fadeOut animated');

  var message = '';

  switch($(this).attr('id')) {
    case 'customer-service':
      message = 'has over 15 years of experience in the valeting industry. you can trust us to provide the best quality parking service around.';
      break;
    case 'appearance':
      message = 'employees stay clean and professional while on the job. Everyone stays in uniform to clearly show who is associated with Express Valet.';
      break;
    case 'events':
      message = 'provides valet service to businesses such as restaurants, hotels, hospitals, casinos, airports, office buildings, country clubs, and night clubs.';
      break;
    case 'equipment':
      message = 'will keep your customer\'s keys organized in our hand crafted key displays taylored specifically for valeting.';
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
