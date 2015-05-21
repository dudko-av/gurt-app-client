(function() {
	'use strict';

	angular
		.module('app')
		.controller('ArticleController', ArticleController);

	ArticleController.$inject = ['$scope', 'BaseNews', 'articleId'];

	function ArticleController ($scope, BaseNews, articleId) {
		var filter = {
			filter: {
				limit: 10,
				order: 'id DESC',
				where: {
					id: articleId,
					isProcessed: true
				},
				include: ['authUser', 'baseNewstypes']
			}
		};

		BaseNews.find(filter).$promise.then(function success(feed) {
			$scope.feed = feed[0];
			$scope.isShown = true;
			//debugger;
		});

	}

})();