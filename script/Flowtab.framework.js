Flowtab.framework = (function () {
    var self = {};

    self.util = {
        createUuid: function Flowtab_framework_util_createUuid() { //gist.github.com/1308368
            var a, b;

            for (b = a = ''; a++ < 36; b += a * 51 & 52 ? (a ^ 15 ? 8 ^ Math.random() * (a ^ 20 ? 16 : 4) : 4).toString(16) : '-');

            return b;
        }
    };

    self.service = {
        getCurrentUser: function Flowtab_framework_service_getCurrentUser(callback) {
            var data = {
                    error: null
                  , user: {
                        firstName: 'Flow'
                      , lastName: 'Tab'
                      , phoneNumber: '0000000000'
                      , emailAddress: 'flowtab@flowtab.com'
                      , creditCard: {
                            lastGroup: '1234'
                          , type: 'AMEX'
                        }
                    }
                };

            setTimeout(function () {
                if (callback)
                    callback(data);
            }, 1000);
        }
      , createUser: function Flowtab_framework_service_createUser(firstName, lastName, phoneNumber, password, emailAddress, callback) {
            var data = {
                    error: null
                  , user: {
                        firstName: firstName
                      , lastName: lastName
                      , phoneNumber: phoneNumber
                      , emailAddress: emailAddress
                      , creditCard: null
                    }
                };

            setTimeout(function () {
                if (callback)
                    callback(data);
            }, 1000);
        }
      , saveUserCreditCard: function Flowtab_framework_service_saveUserCreditCard(token, callback) {
            var data = {
                    error: null
                  , creditCard: {
                        lastGroup: '1234'
                      , type: 'AMEX'
                    }
                };

            setTimeout(function () {
                if (callback)
                    callback(data);
            }, 1000);
        }
      , authenticateUser: function Flowtab_framework_service_authenticateUser(phoneNumber, password, callback) {
            var data = {
                    error: null
                  , user: {
                        firstName: 'Flow'
                      , lastName: 'Tab'
                      , phoneNumber: phoneNumber
                      , emailAddress: 'flowtab@flowtab.com'
                      , creditCard: null
                    }
                };

            setTimeout(function () {
                if (callback)
                    callback(data);
            }, 1000);
        }
      , getVenues: function Flowtab_framework_service_getVenues(callback) {
      
            var data = {
				  error: null
              , venues: []
            }    
            
	      	$.getJSON("/sdk/wallet.php?ajax=venues", function(venues){		      	
		    	$.each(venues, function(i,value){
	                data.venues[i] = {
	                    id: value.id,
	                    fullName: value.first,
	                    shortName: value.short,
	                    address: {
	                        streetNumber: value.address,
	                        streetName: value.street,
	                        cityName: value.city,
	                        hoodName: value.hood,
	                        stateCode: value.state,
	                        postalCode: value.zip
	                    }
	                };
	                callback(data);
	            });
	         });
	         
        }
      , getMenu: function Flowtab_framework_service_getMenus(venueId, callback) {

            var data = {
				  error: null
              , menus: []
            }    

	      	$.getJSON("/sdk/wallet.php?ajax=menus&id="+venueId, function(menus){
		    	$.each(menus, function(i,value){
	                data.menus[i] = {
    	                id: self.util.createUuid()
    	              , category: value.category
    	              , subCategory: value.subCategory
    	              , type: value.type
    	              , products: [
    	                   {
    	                       id: self.util.createUuid()
    	                     , name: value.products.name
    	                     , description: value.products.description
    	                     , price: value.products.price
    	                     , salePrice: value.products.salePrice
    	                   }
    	               ]
    	            }
    	            callback(data);
	            });
	         });

	   }
	       
    };
    return self;
})();