app.config(['$stateProvider','$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/login'); //if URL not defined, redirect user to '/'

        $stateProvider


 		.state('example-state', {
            url: '/lettings/process-account-view/:processAccountID',
            views : {
                '' : {
                    templateUrl: 'views/notes/notes.html',
                    data: { auth: "LoggedIn", type: "Lettings" }
                },
                'notesTemplate' : {
                    templateUrl: 'views/notes/notes.html',
                    controller: 'notesCtrl',
                    data: { auth: "LoggedIn", type: "Lettings" }

                },
                'paymentTransactionAddEdit' : {
                    templateUrl: 'views/financials/payment-transaction-add-edit.html',
                    controller: 'paymentTransactionAddEditCtrl',
                    data: { auth: "LoggedIn", type: "Lettings" }

                },
				'finalView' : {
					templateUrl: 'views/financials/finalView.html',
					controller: 'finalViewCtrl',
					data: { auth: "LoggedIn", type: "Lettings" }

                }
            }

    }

])