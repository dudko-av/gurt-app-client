(function () {
	'use strict';

	angular
		.module('app')
		.config(configure);

	configure.$inject = ['$stateProvider'];

	function configure($stateProvider) {
		$stateProvider
			.state('index', {
				url: '',
				views: {
					header: {
						templateUrl: '/modules/app/views/layout/header.html'
					},
					content: {
						controller: 'ContentController',
						controllerAs: 'vm',
						templateUrl: '/modules/app/views/layout/content.html'
					},
					footer: {
						templateUrl: '/modules/app/views/layout/footer.html'
					}
				}
			})
			.state('index.category', {
				url: '{categoryName:[a-zA-Z/]{1,1000}}',
				views: {
					wall: {
						controller: 'WallController',
						controllerAs: 'vm',
						templateUrl: '/modules/app/views/wall.html'
					}
				},
				resolve: {
					categoryId: ['$stateParams', function ($stateParams) { //debugger;
						var categoryId;
						var hrefCategories = [
							'',
							'/news/grants',
							'/news/trainings',
							'/news/events',
							'/news/competitions',
							'/news/conferences',
							'/news/resent',
							'/articles',
							'/vacancies',
							'/partnership',
							'/interviews',
							'/news/recipes_success',
							'/news/informator'
						];
						angular.forEach(hrefCategories, function (val, key) { //debugger;
							if (val == $stateParams.categoryName) {
								categoryId = key;
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
						controllerAs: 'vm',
						templateUrl: '/modules/app/views/article.html'
					}
				},
				resolve: {
					articleId: ['$stateParams', function ($stateParams) { //debugger;
						return $stateParams.articleId;
					}]
				}
			});

	}

})();

