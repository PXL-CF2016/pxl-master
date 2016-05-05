require('express')().use(require('express')
.static('build')).listen(8080, ()=> console.log('Running on 8080'));
