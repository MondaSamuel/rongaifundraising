$(document).ready(function() {
  // Function to animate count
  function animateCount(elementId, targetValue) {
    $({ count: 0 }).animate(
      { count: targetValue },
      {
        duration: 2000,
        easing: "linear",
        step: function() {
          $(elementId).text(Math.floor(this.count));
        }
      }
    );
  }

  // Animate count for campaigns
  animateCount("#campaignsCount", 200);

  // Animate count for alumni supporters
  animateCount("#supportersCount", 500);

  function wrapCharacters(element) {
    var text = $(element).text();
    var wrappedText = "";

    for (var i = 0; i < text.length; i++) {
      wrappedText += '<span class="character">' + text[i] + '</span>';
    }

    $(element).html(wrappedText);
  }

  // Add highlight class to text-container h2
  $(".text-container h2").addClass("highlight");

  // Wrap characters in spans and apply border color
  $(".text-container h2").each(function() {
    wrapCharacters(this);
    $(this).find('.character').css('border-color', '#6ce4e8');
  });

  // Toggle responsive class on nav-menu
  $('.menu-icon').click(function() {
    $('#nav-menu').toggleClass('responsive');
  });
});

