import * as ko from 'knockout';
require('knockout.validation');

import App from './components/App';
import PersonReadOnly from './components/PersonReadOnly';
import PersonEditable from './components/PersonEditable';
import ProductDetails from './components/ProductDetails';

import filmsBinding from './bindings/filmsBinding';

ko.components.register('app', App);
ko.components.register('person-read-only', PersonReadOnly);
ko.components.register('person-editable', PersonEditable);
ko.components.register('product-details', ProductDetails);

ko.bindingHandlers.films = filmsBinding;

ko.validation.init({
  errorElementClass: 'is-invalid',
  errorMessageClass: 'invalid-feedback',
  decorateInputElement: true
});

// Bind Knockout to the "app" element in "public/index.html"
ko.applyBindings({}, document.getElementById('app'));
