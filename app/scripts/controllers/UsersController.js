define(function(require) {
    'use strict';

    var $          = require('jquery');
    var _          = require('underscore');
    var Backbone   = require('backbone');
    var Bootstrap  = require('bootstrap');
    var Marionette = require('marionette');
    var async      = require('async');

    return Backbone.Marionette.Controller.extend({

        initialize: function(options) {
            _.bindAll(this);
            _.extend(this, options);

            return this;
        },

        'showSignIn' : function() {
			console.log('This is to sign in.');
        },

        // ## Region management methods
        '_setContent': function(View, options) {
            var view;
            if (typeof View === 'function') {
                options = options || {};
                view = new View(options);
            } else {
                view = View;
            }
            this.regions.content.show(view);

            return view;
        },
    });

});