const test = require('tape')
    , isGoogle = require('./')

test('main domain', function (t) {
  ;['google.com', 'google.com.TR'].forEach(function (origin) {
    t.is(isGoogle(origin), true, `yes: ${origin}`)
  })

  ;['example.com', 'example.com.tr'].forEach(function (origin) {
    t.is(isGoogle(origin), false, `no: ${origin}`)
  })

  t.end()
})

test('main domain with subdomains option', function (t) {
  ;['google.COM', 'google.com.tr'].forEach(function (origin) {
    t.is(isGoogle(origin, false), true, `yes: ${origin}`)
  })

  ;['example.com', 'example.com.tr'].forEach(function (origin) {
    t.is(isGoogle(origin, false), false, `no: ${origin}`)
  })

  t.end()
})

test('subdomain', function (t) {
  ;['mail.google.com', 'beeps.maps.GOOGLE.com.tr'].forEach(function (origin) {
    t.is(isGoogle(origin), true, `yes: ${origin}`)
  })

  ;['mail.example.com', 'maps.example.com.tr'].forEach(function (origin) {
    t.is(isGoogle(origin), false, `no: ${origin}`)
  })

  t.end()
})

test('subdomain with explicit subdomains: true', function (t) {
  ;['mail.google.com', 'beeps.maps.GOOGLE.com.tr'].forEach(function (origin) {
    t.is(isGoogle(origin, true), true, `yes: ${origin}`)
  })

  ;['mail.example.com', 'maps.example.com.tr'].forEach(function (origin) {
    t.is(isGoogle(origin, true), false, `no: ${origin}`)
  })

  t.end()
})

test('subdomain with subdomains: false', function (t) {
  ;['mail.GOOGLE.com', 'maps.google.com.tr'].forEach(function (origin) {
    t.is(isGoogle(origin, false), false, `no: ${origin}`)
  })

  ;['mail.example.com', 'maps.example.com.tr'].forEach(function (origin) {
    t.is(isGoogle(origin, false), false, `no: ${origin}`)
  })

  t.end()
})
