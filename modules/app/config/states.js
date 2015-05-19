(function () {
	'use strict';

	angular
		.module('app')
		.config(configure);

	configure.$inject = ['$stateProvider', 'urlCategoriesProvider'];

	function configure($stateProvider, urlCategoriesProvider) {
		$stateProvider
			.state('index', {
				url: '',
				views: {
					header: {
						templateUrl: '/modules/app/views/layout/header.html'
					},
					content: {
						controller: 'ContentController',
						templateUrl: '/modules/app/views/layout/content.html'
					},
					footer: {
						templateUrl: '/modules/app/views/layout/footer.html'
					}
				}
			})
			//.state('index.home', {
			//	url: '/',
			//	views: {
			//		wall: {
			//			controller: 'WallController',
			//			templateUrl: '/modules/app/views/layout/wall.html'
			//		}
			//	},
			//	resolve: {
			//		categoryId: ['$stateParams', function () {
			//			return null;
			//		}]
			//	}
			//})
			.state('index.category', {
				url: '{categoryName:[a-zA-Z/]{1,1000}}',
				views: {
					wall: {
						controller: 'WallController',
						templateUrl: '/modules/app/views/layout/wall.html'
					}
				},
				resolve: {
					categoryId: ['$stateParams', function ($stateParams) { //debugger;
						var categoryId;
						urlCategoriesProvider.getCategories().forEach(function(val, key) {
							if (val == $stateParams.categoryName) {
								return categoryId = key;
							}
						});
						return categoryId;
					}]
				}
			})
			.state('index.articleDetails', {
				url: '/{categoryName:[a-zA-Z/]{1,1000}}{articleId:[0-9]{1,20}}',
				views: {
					wall: {
						controller: 'ArticleController',
						templateUrl: '/modules/app/views/layout/article.html'
					}
				},
				resolve: {
					articleId: ['$stateParams', function ($stateParams) { //debugger;
						return $stateParams.articleId;
					}]
				}
			})
		;

	}

})();

