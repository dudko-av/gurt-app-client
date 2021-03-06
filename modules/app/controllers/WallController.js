(function () {
	'use strict';

	angular
		.module('app')
		.controller('WallController', WallController);

	WallController.$inject = ['$scope', 'BaseNews', 'categoryId'];

	function WallController ($scope, BaseNews, categoryId) {
		var vm = this;

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
			'news/informator/'
		];

		var filter = {
			filter: {
				limit: 10,
				order: 'id DESC',
				where: {
					isProcessed: true
				},
				//include: ['AuthUser', 'BaseNewstypes']
			}
		};
console.log(categoryId);
		if (categoryId) {
			filter.filter.where.articleTypeId = categoryId;
		}

		function loadNews() {
			BaseNews.find(filter).$promise.then(function success(baseNews) {
				if (vm.baseNews == undefined) {
					vm.baseNews = baseNews;
				} else {
					vm.baseNews = vm.baseNews.concat(baseNews);
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
				filter.filter.where.id.lt = vm.baseNews[vm.baseNews.length - 1].id;
				loadNews();
			}
		});

		vm.generateHref = function (item) {
			return '/' + hrefCategories[item.articleTypeId] + item.id;
		};

		$scope.$on('$destroy', function() {
			//debugger;
			angular.element(window).off('scroll.wall');
		});
	}

})();
