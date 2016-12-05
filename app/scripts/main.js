/*!
 *
 *  Web Starter Kit
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
/* eslint-env browser */
(function() {
  'use strict';

  // Check to make sure service workers are supported in the current browser,
  // and that the current page is accessed from a secure origin. Using a
  // service worker from an insecure origin will trigger JS console errors. See
  // http://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features
  var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === '[::1]' ||
      // 127.0.0.1/8 is considered localhost for IPv4.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
    );

  if ('serviceWorker' in navigator &&
      (window.location.protocol === 'https:' || isLocalhost)) {
    navigator.serviceWorker.register('service-worker.js')
    .then(function(registration) {
      // Check to see if there's an updated version of service-worker.js with
      // new files to cache:
      // https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#service-worker-registration-update-method
      if (typeof registration.update === 'function') {
        registration.update();
      }

      // updatefound is fired if service-worker.js changes.
      registration.onupdatefound = function() {
        // updatefound is also fired the very first time the SW is installed,
        // and there's no need to prompt for a reload at that point.
        // So check here to see if the page is already controlled,
        // i.e. whether there's an existing service worker.
        if (navigator.serviceWorker.controller) {
          // The updatefound event implies that registration.installing is set:
          // https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#service-worker-container-updatefound-event
          var installingWorker = registration.installing;

          installingWorker.onstatechange = function() {
            switch (installingWorker.state) {
              case 'installed':
                // At this point, the old content will have been purged and the
                // fresh content will have been added to the cache.
                // It's the perfect time to display a "New content is
                // available; please refresh." message in the page's interface.
                break;

              case 'redundant':
                throw new Error('The installing ' +
                                'service worker became redundant.');

              default:
                // Ignore
            }
          };
        }
      };
    }).catch(function(e) {
      console.error('Error during service worker registration:', e);
    });
  }

// more bacon function - 3rd task

  function bacon(){

    var button = document.querySelector('main section button');
    var img = document.querySelector('main section img');
    var section = document.querySelectorAll('main section');

    button.addEventListener('click', function(){

      var clone = document.createElement('img');
      clone.src = img.src;
      clone.style.width = '100px';
      clone.style.height = '100px';
      section[1].appendChild(clone);

    })
  }

// contact form validate function - 5th task

  function formValidate(){

// variables for input holders

    var firstName = document.getElementById('firstName'),
        lastName = document.getElementById('lastName'),
        email = document.getElementById('email'),
        postalCode = document.getElementById('postalCode'),
        phone = document.getElementById('phone'),
        card = document.getElementById('card'),
        pass = document.getElementById('pass'),
        button = document.getElementById('button');

// check whenever submit button is clicked

    button.addEventListener('click', function(e){

// page reload is impossible in case of form fill error

      e.preventDefault();

// getting values from form inputs

      var firstNameVal = firstName.value,
          lastNameVal = lastName.value,
          emailVal = email.value,
          postalCodeVal = postalCode.value,
          phoneVal = phone.value,
          cardVal = card.value,
          passVal = pass.value;

// checking if email adress has '.' and '@'

      var emailHasDot = emailVal.split('.'),
          emailHasAt = emailVal.split('@');

// i know that this is not the best practice to use so many IFs, but this time it just has to work:)

      if ( firstNameVal.length <= 1 ) {
        alert('Name has to contain at least 2 letters');
      } else if ( lastNameVal <= 1 ) {
        alert('Surname has to contain at least 2 letters');
      } else if ( emailHasAt[1] == undefined ) {
        alert('Your email address is inproperly');
      } else if ( emailHasDot[1] == undefined ) {
        alert('Your email address is inproperly');
      } else if ( postalCodeVal.length < 5 ) {
        alert('Your postal code has to contain 5 characters');
      } else if ( phoneVal.length < 10 ) {
        alert('Your phone number has to contain 10 characters');
      } else if ( cardVal.length < 16 ) {
        alert('Your card number has to contain 16 digits');
      } else if ( passVal.length < 3 ) {
        alert('Enter your 3 digit card security code');
      } else ( alert('Your submission is completed'))
    })
  }

  formValidate();

  bacon();

  // Your custom JavaScript goes here
})();
