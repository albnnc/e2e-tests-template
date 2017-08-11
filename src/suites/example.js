casper.test.begin('example (google.com)', 4, function (test) {
  casper.start(config.baseUrl, function () {
    test.assertTitle('Google', 'title is correct')
    test.assertExists('form[action="/search"]', 'search form was found')
    this.fill('form[action="/search"]', {
      q: 'delta'
    }, true)
  })

  casper.then(function () {
    test.assertUrlMatch(/q=delta/, 'url contains needed query')
    test.assertEval(function () {
      return document.querySelectorAll('h3.r').length >= 10
    }, 'atleast 10 results were found')
  })

  casper.run(function () {
    test.done()
  })
})
