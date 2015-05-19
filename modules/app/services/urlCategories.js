/**
 * Created by dudko-av on 07.05.15.
 */
(function () {
	'use strict';

	angular
		.module('app')
		.provider('urlCategories', urlCategories);

	function urlCategories () {
		this.$get = function() {
			return categoriesList;
		};

		var categories = [
			'',
			'news/grants',
			'news/trainings',
			'news/events',
			'news/competitions',
			'news/conferences',
			'news/resent',
			'articles',
			'vacancies',
			'partnership',
			'interviews',
			'news/recipes_success',
			'news/informator',
		];

		this.getCategories = function () {
			return categories;
		};
	}

	function categoriesList () {
		var categories = [
			'',
			'news/grants',
			'news/trainings',
			'news/events',
			'news/competitions',
			'news/conferences',
			'news/resent',
			'articles',
			'vacancies',
			'partnership',
			'interviews',
			'news/recipes_success',
			'news/informator',
		];

		this.getCategories = function () {
			return categories;
		};
	}

})();