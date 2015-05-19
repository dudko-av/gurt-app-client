(function () {
	'use strict';

	angular
		.module('app')
		.controller('WallController', WallController);

	WallController.$inject = ['$scope', 'BaseNews', 'categoryId'];

	function WallController ($scope, BaseNews, categoryId) {
		//debugger;
		var hrefCategories = [
			'',
			'news/grants/',
			'news/trainings/',
			'news/events/',
			'news/competitions/',
			'news/conferences/',
			'news/resent/',
			'articles/',
			'vacancies/',
			'partnership/',
			'interviews/',
			'news/recipes_success/',
			'news/informator/',
		];

		var filter = {
			filter: {
				limit: 10,
				order: 'id DESC',
				where: {
					isProcessed: true
				},
				include: ['authUser', 'baseNewstypes']
			}
		};

		if (categoryId) {
			filter.filter.where.articleTypeId = categoryId;
		}

		function loadNews() {
			BaseNews.find(filter).$promise.then(function success(baseNews) {
				if ($scope.baseNews == undefined) {
					$scope.baseNews = baseNews;
				} else {
					$scope.baseNews = $scope.baseNews.concat(baseNews);
				}

			});
		}

		loadNews();

		angular.element(window).on('scroll.wall', function (e) {
			var windowHeight = angular.element(window).height();
			var scrollTop = angular.element(window).scrollTop();
			var pageHeight = angular.element('body').height();

			if ((scrollTop + windowHeight) == pageHeight) {
				filter.filter.where.id = {};
				filter.filter.where.id.lt = $scope.baseNews[$scope.baseNews.length - 1].id;
				loadNews();
			}
		});

		$scope.generateHref = function (item) {
			return '/' + hrefCategories[item.articleTypeId] + item.id;
		};

		$scope.$on('$destroy', function() {
			//debugger;
			angular.element(window).off('scroll.wall');
		});
	}

})();