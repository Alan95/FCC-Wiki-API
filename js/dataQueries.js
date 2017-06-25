//AJAX REQUEST
  function ajaxe(inputData) {

      const wikiAPI = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=10&format=json&srsearch=' + inputData;

      $.ajax({
          url: wikiAPI,
          type: 'GET',
          dataType: 'jsonp',
          jsonp: "callback",
          headers: {
              'Api-User-Agent': 'Example/1.0'
          },

      }).done(function(data) {

          $("#list-object").empty();

          var values = data.query.search;
          var titles = [];
          var snippets = [];

          for (var key in values) {

              titles.push(values[key].title);
              snippets.push(values[key].snippet);

          }

          console.log(titles);
          console.log(snippets);


          for (var i = 0; i < values.length; i++) {
              var link = "https://en.wikipedia.org/wiki/" + titles[i].replace(/\s/g, '_');
              $("#list-object").append("<li><a target='_blank' href='" + link + "'><h3> " + titles[i] + "</h3>" + snippets[i] + "</a></li>");




          }



      });

  }
