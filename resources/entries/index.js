function queryStringToJSON(qs) {
  qs = qs || location.search.slice(1);

  var pairs = qs.split('&');
  var result = {};
  pairs.forEach(function(p) {
      var pair = p.split('=');
      var key = pair[0];
      var value = decodeURIComponent(pair[1] || '');

      if( result[key] ) {
          if( Object.prototype.toString.call( result[key] ) === '[object Array]' ) {
              result[key].push( value );
          } else {
              result[key] = [ result[key], value ];
          }
      } else {
          result[key] = value;
      }
  });

  return JSON.parse(JSON.stringify(result));
};

page.base('/');

page('', index);
page('about', about);
page('contact', contact);
page('contact/:contactName', contact);
page('*', notfound)
page();

function index(ctx, next) {
  document.querySelector('p')
    .textContent = 'viewing index';
  alert('index');
}

function about(ctx, next) {
  document.querySelector('p')
    .textContent = 'viewing about';
}

function contact(ctx) {
  var queryParams = queryStringToJSON(ctx.querystring);
  console.log(queryParams)
  document.querySelector('p')
    .textContent = 'viewing contact ' + (ctx.params.contactName || '');
}

function notfound(ctx, next) {
  window.location = BASE_URL + 'error/access/404';
}
