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

page.base('/admin');

page('', index);
page('/student', student);
page('/teacher', teacher);
page('*', notfound)
page();

function index(ctx, next) {
  document.querySelector('p')
    .textContent = 'viewing index admin';
  alert('index');
}

function student(ctx, next) {
  document.querySelector('p')
    .textContent = 'viewing student admin';
}

function teacher(ctx, next) {
  document.querySelector('p')
    .textContent = 'viewing teacher admin';
}

function notfound(ctx, next) {
  window.location = BASE_URL + 'error/access/404';
}
