Flowtab.framework = (function () {
    var self = {};

    self.service = {
        getCurrentUser: function Flowtab_framework_service_getCurrentUser(callback) {
            var data = {
                    error: null
                  , user: {
                        firstName: 'Flow'
                      , lastName: 'Tab'
                      , phoneNumber: '0000000000'
                      , emailAddress: 'flowtab@flowtab.com'
                      , hasCreditCard: true
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
                      , hasCreditCard: false
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
                      , hasCreditCard: false
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
                };

            for (var i = 5; i >= 0; i--) {
                data.venues[i] = {
                    id: i,
                    fullName: 'Full Bar Name ' + i,
                    shortName: 'Bar ' + i,
                    address: {
                        streetNumber: (i * 100),
                        streetName: 'Flowtab St.',
                        cityName: 'San Francisco',
                        hoodName: 'Mission',
                        stateName: 'California',
                        stateCode: 'CA',
                        postalCode: '9410' + i
                    }
                };
            };

            setTimeout(function () {
                if (callback)
                    callback(data);
            }, 1000);
        }
      , getMenus: function Flowtab_framework_service_getMenus(venueId) {
            var data = {
                error: null
              , menus: [
                    {
                        id: ''
                      , name: 'Catgegory 1'
                      , kind: ''
                      , description: ''
                      , products: [
                            {
                                id: ''
                              , name: ''
                              , price: 7.0
                              , salePrice: 5.0
                              , description: ''
                            }
                          , {
                                id: ''
                              , name: ''
                              , price: 7.0
                              , salePrice: 5.0
                              , description: ''
                            }
                        ]
                    }
                  , {
                        id: ''
                      , name: 'Catgegory 2'
                      , kind: ''
                      , description: ''
                      , products: [
                            {
                                id: ''
                              , name: ''
                              , price: 7.0
                              , salePrice: 5.0
                              , description: ''
                            }
                          , {
                                id: ''
                              , name: ''
                              , price: 7.0
                              , salePrice: 5.0
                              , description: ''
                            }
                        ]
                    }
                  , {
                        id: ''
                      , name: 'Catgegory 3'
                      , kind: ''
                      , description: ''
                      , categories: [
                            {
                                id: ''
                              , name: 'Catgegory 3-1'
                              , kind: ''
                              , description: ''
                              , categories: [
                                    {
                                        id: ''
                                      , name: 'Catgegory 3-1-1'
                                      , kind: ''
                                      , description: ''
                                      , products: [
                                            {
                                                id: ''
                                              , name: ''
                                              , price: 7.0
                                              , salePrice: 5.0
                                              , description: ''
                                            }
                                          , {
                                                id: ''
                                              , name: ''
                                              , price: 7.0
                                              , salePrice: 5.0
                                              , description: ''
                                            }
                                        ]
                                    }
                                  , {
                                        id: ''
                                      , name: 'Catgegory 3-1-2'
                                      , kind: ''
                                      , description: ''
                                      , products: [
                                            {
                                                id: ''
                                              , name: ''
                                              , price: 7.0
                                              , salePrice: 5.0
                                              , description: ''
                                            }
                                          , {
                                                id: ''
                                              , name: ''
                                              , price: 7.0
                                              , salePrice: 5.0
                                              , description: ''
                                            }
                                        ]
                                    }
                                ]
                            }
                          , {
                                id: ''
                              , name: 'Catgegory 3-2'
                              , kind: ''
                              , description: ''
                              , categories: [
                                    {
                                        id: ''
                                      , name: 'Catgegory 3-2-1'
                                      , kind: ''
                                      , description: ''
                                      , products: [
                                            {
                                                id: ''
                                              , name: ''
                                              , price: 7.0
                                              , salePrice: 5.0
                                              , description: ''
                                            }
                                          , {
                                                id: ''
                                              , name: ''
                                              , price: 7.0
                                              , salePrice: 5.0
                                              , description: ''
                                            }
                                        ]
                                    }
                                  , {
                                        id: ''
                                      , name: 'Catgegory 3-2-2'
                                      , kind: ''
                                      , description: ''
                                      , products: [
                                            {
                                                id: ''
                                              , name: ''
                                              , price: 7.0
                                              , salePrice: 5.0
                                              , description: ''
                                            }
                                          , {
                                                id: ''
                                              , name: ''
                                              , price: 7.0
                                              , salePrice: 5.0
                                              , description: ''
                                            }
                                        ]
                                    }
                                  , {
                                        id: ''
                                      , name: 'Catgegory 3-2-3'
                                      , kind: ''
                                      , description: ''
                                      , products: [
                                            {
                                                id: ''
                                              , name: ''
                                              , price: 7.0
                                              , salePrice: 5.0
                                              , description: ''
                                            }
                                          , {
                                                id: ''
                                              , name: ''
                                              , price: 7.0
                                              , salePrice: 5.0
                                              , description: ''
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                  , {
                        id: ''
                      , name: 'Catgegory 4'
                      , kind: ''
                      , description: ''
                      , categories: [
                            {
                                id: ''
                              , name: 'Catgegory 4-1'
                              , kind: ''
                              , description: ''
                              , products: [
                                    {
                                        id: ''
                                      , name: ''
                                      , price: 7.0
                                      , salePrice: 5.0
                                      , description: ''
                                    }
                                  , {
                                        id: ''
                                      , name: ''
                                      , price: 7.0
                                      , salePrice: 5.0
                                      , description: ''
                                    }
                                ]
                            }
                          , {
                                id: ''
                              , name: 'Catgegory 4-2'
                              , kind: ''
                              , description: ''
                              , products: [
                                    {
                                        id: ''
                                      , name: ''
                                      , price: 7.0
                                      , salePrice: 5.0
                                      , description: ''
                                    }
                                  , {
                                        id: ''
                                      , name: ''
                                      , price: 7.0
                                      , salePrice: 5.0
                                      , description: ''
                                    }
                                ]
                            }
                        ]
                    }
                  , {
                        id: ''
                      , name: 'Catgegory 5'
                      , kind: ''
                      , description: ''
                      , categories: [
                            {
                                id: ''
                              , name: 'Catgegory 5-1'
                              , kind: ''
                              , description: ''
                              , products: [
                                    {
                                        id: ''
                                      , name: ''
                                      , price: 7.0
                                      , salePrice: 5.0
                                      , description: ''
                                    }
                                  , {
                                        id: ''
                                      , name: ''
                                      , price: 7.0
                                      , salePrice: 5.0
                                      , description: ''
                                    }
                                ]
                            }
                          , {
                                id: ''
                              , name: 'Catgegory 5-2'
                              , kind: ''
                              , description: ''
                              , products: [
                                    {
                                        id: ''
                                      , name: ''
                                      , price: 7.0
                                      , salePrice: 5.0
                                      , description: ''
                                    }
                                  , {
                                        id: ''
                                      , name: ''
                                      , price: 7.0
                                      , salePrice: 5.0
                                      , description: ''
                                    }
                                ]
                            }
                        ]
                    }
                ]
            };

            setTimeout(function () {
                if (callback)
                    callback(data);
            }, 1000);   
        }
    };

    return self;
})();