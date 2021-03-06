// 259e1d175e104c1d102dd38ebce571fc
// Compiled from components/movie_viewer/content/modules/MovieViewer.es6.js
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactDOM = require('react-dom');

var F8ReactComponent = require('react-core/F8ReactComponent');
var WrapperTitle = require('react-core/components/WrapperTitle');
var WrapperBody = require('react-core/components/WrapperBody');

var MovieViewer = function (_F8ReactComponent) {
				_inherits(MovieViewer, _F8ReactComponent);

				function MovieViewer(props) {
								_classCallCheck(this, MovieViewer);

								return _possibleConstructorReturn(this, (MovieViewer.__proto__ || Object.getPrototypeOf(MovieViewer)).call(this, props));

								/**
         * refreshInterval is the time in between refreshes of the list data
         *
         * Interval is measured in seconds
         * @type {Number}
         */
								//this.state.refreshInterval = this.props.attributes.refresh_interval || 0;
								//this.state.userRefreshEnabled = true;

								//this.listState = new ListState(this.state.data);
								//this.listActions = new ListActions(this.props.attributes.id);
				}

				_createClass(MovieViewer, [{
								key: 'render',
								value: function render() {
												return React.createElement('div', { id: 'movieViewer' });
								}
				}, {
								key: 'componentDidMount',
								value: function componentDidMount() {
												/////////////////
												/// COMPONENTS //
												/////////////////

												// Container
												var App = React.createClass({
																displayName: 'App',

																apiKey: '87dfa1c669eea853da609d4968d294be',
																getInitialState: function getInitialState() {
																				return { data: [] };
																},
																performSearch: function performSearch(e) {
																				// stop form from submitting
																				e.preventDefault();

																				// get the value
																				var val = $('.Search input').val();

																				// Do the thing
																				var requestUrl = 'https://api.themoviedb.org/3/search/multi?query=' + val + '&api_key=' + this.apiKey;

																				$.ajax({
																								url: requestUrl,
																								dataType: 'json',
																								cache: false,
																								success: function (data) {
																												this.setState({ data: data });
																								}.bind(this),
																								error: function (xhr, status, err) {
																												console.error(this.props.url, status, err.toString());
																								}.bind(this)
																				});
																},
																componentDidUpdate: function componentDidUpdate() {},
																render: function render() {

																				if (this.state.data.results) {
																								console.log(this.state.data);
																				}

																				return React.createElement(
																								'div',
																								null,
																								React.createElement(Header, { onSubmit: this.performSearch }),
																								React.createElement(Hero, null),
																								React.createElement(TitleList, { title: 'Top TV picks for Jerrod', url: 'discover/tv?sort_by=popularity.desc&page=1' }),
																								React.createElement(TitleList, { title: 'Trending now', url: 'discover/movie?sort_by=popularity.desc&page=1' }),
																								React.createElement(TitleList, { title: 'Most watched in Horror', url: 'genre/27/movies?sort_by=popularity.desc&page=1' }),
																								React.createElement(TitleList, { title: 'Sci-Fi greats', url: 'genre/878/movies?sort_by=popularity.desc&page=1' }),
																								React.createElement(TitleList, { title: 'Comedy magic', url: 'genre/35/movies?sort_by=popularity.desc&page=1' })
																				);
																}
												});

												////////////
												// Header //
												////////////

												var Header = React.createClass({
																displayName: 'Header',

																render: function render() {
																				return React.createElement(
																								'header',
																								{ className: 'Header' },
																								React.createElement(Logo, null),
																								React.createElement(Navigation, null),
																								React.createElement(Search, { onSubmit: this.props.onSubmit }),
																								React.createElement(UserProfile, null)
																				);
																}
												});

												// Logo
												var Logo = React.createClass({
																displayName: 'Logo',

																render: function render() {
																				return React.createElement(
																								'div',
																								{ id: 'logo', className: 'Logo' },
																								React.createElement(
																												'svg',
																												{ version: '1.1', width: '300', height: '81.386726', id: 'svg3262' },
																												React.createElement(
																																'g',
																																{ transform: 'translate(-384.28572,-428.81172)', id: 'layer1' },
																																React.createElement(
																																				'g',
																																				{ transform: 'matrix(2.5445375,0,0,2.5445375,1157.1714,-1457.8678)', id: 'g3235' },
																																				React.createElement('path', { d: 'm -203.09972,771.41415 c 1.6425,0.15875 3.2825,0.33 4.92,0.5075 l 3.615,-8.92625 3.43625,9.74875 c 1.76375,0.22125 3.525,0.4525 5.2825,0.695 l -6.02375,-17.09625 6.02625,-14.88 -5.10375,0 -0.0525,0.0725 -3.255,8.03875 -2.8575,-8.11125 -5.03875,0 5.2025,14.7625 -6.15125,15.18875 z', id: 'path3015', style: { fill: '#b81d24', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' } }),
																																				React.createElement('path', { d: 'm -206.91147,771.06478 0,-29.60125 -5.0375,0 0,29.18625 c 1.68125,0.12875 3.36125,0.26875 5.0375,0.415', id: 'path3019', style: { fill: '#b81d24', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' } }),
																																				React.createElement('path', { d: 'm -244.7486,769.4089 c 1.36,0 2.7175,0.01 4.07375,0.0213 l 0,-10.875 6.05125,0 0,-4.63125 -6.05125,0 0,-7.825 6.96875,0 0,-4.63625 -12.02625,0 0,27.95 c 0.3275,0 0.655,-0.004 0.98375,-0.004', id: 'path3023', style: { fill: '#b81d24', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' } }),
																																				React.createElement('path', { d: 'm -260.3881,769.69191 c 1.6775,-0.06 3.3575,-0.11 5.04,-0.15125 l 0,-23.44125 4.7075,0 0,-4.63625 -14.45625,0 0,4.63625 4.70875,0 0,23.5925 z', id: 'path3035', style: { fill: '#b81d24', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' } }),
																																				React.createElement('path', { d: 'm -298.91059,772.81378 0,-17.63625 5.96375,16.92375 c 1.83375,-0.20625 3.67125,-0.4 5.5125,-0.5825 l 0,-30.055 -4.8325,0 0,18.2675 -6.43625,-18.2675 -0.2075,0 -4.8325,0 0,31.98375 0.03,0 c 1.5975,-0.22125 3.19875,-0.43125 4.8025,-0.63375', id: 'path3039', style: { fill: '#b81d24', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' } }),
																																				React.createElement('path', { d: 'm -269.95297,746.09903 0,-4.63625 -12.0275,0 0,24.9125 0,4.6375 0,0.004 c 3.99125,-0.345 7.99625,-0.63375 12.0175,-0.86875 l 0,-0.004 0,-1.33625 0,-3.3 c -2.325,0.135 -4.645,0.29125 -6.96,0.46375 l 0,-7.415 6.05125,0 0,-4.63375 -6.05125,0 0,-7.82375 6.97,0 z', id: 'path3051', style: { fill: '#b81d24', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' } }),
																																				React.createElement('path', { d: 'm -223.72272,765.2864 0,-23.82375 -5.05875,0 0,23.605 0,4.63625 0,0.005 c 4.02375,0.1475 8.0325,0.35375 12.0275,0.6125 l 0,-0.006 0,-1.4975 0,-3.13875 c -2.31875,-0.15 -4.64125,-0.28 -6.96875,-0.3925', id: 'path3055', style: { fill: '#b81d24', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' } })
																																)
																												)
																								)
																				);
																}
												});

												// Navigation
												var Navigation = React.createClass({
																displayName: 'Navigation',

																render: function render() {
																				return React.createElement(
																								'div',
																								{ id: 'navigation', className: 'Navigation' },
																								React.createElement(
																												'nav',
																												null,
																												React.createElement(
																																'ul',
																																null,
																																React.createElement(
																																				'li',
																																				null,
																																				'Browse'
																																),
																																React.createElement(
																																				'li',
																																				null,
																																				'My list'
																																),
																																React.createElement(
																																				'li',
																																				null,
																																				'Top picks'
																																),
																																React.createElement(
																																				'li',
																																				null,
																																				'Recent'
																																)
																												)
																								)
																				);
																}
												});

												// Search
												var Search = React.createClass({
																displayName: 'Search',

																render: function render() {
																				return React.createElement(
																								'form',
																								{ onSubmit: this.props.onSubmit, id: 'search', className: 'Search' },
																								React.createElement('input', { type: 'search', placeholder: 'Search for a title...' })
																				);
																}
												});

												// User Profile
												var UserProfile = React.createClass({
																displayName: 'UserProfile',

																render: function render() {
																				return React.createElement(
																								'div',
																								{ className: 'UserProfile' },
																								React.createElement(
																												'div',
																												{ className: 'User' },
																												React.createElement(
																																'div',
																																{ className: 'name' },
																																'Jerrod Bennett'
																												),
																												React.createElement(
																																'div',
																																{ className: 'image' },
																																React.createElement('img', { src: 'https://psyc2301.wikispaces.com/file/view/south_park_cartman-1045.jpg/134221761/south_park_cartman-1045.jpg' })
																												)
																								),
																								React.createElement(
																												'div',
																												{ className: 'UserProfile-menu' },
																												React.createElement(
																																'div',
																																{ className: 'UserProfileSwitch' },
																																React.createElement(
																																				'ul',
																																				null,
																																				React.createElement(
																																								'li',
																																								null,
																																								React.createElement(
																																												'div',
																																												{ className: 'UserProfile-image' },
																																												React.createElement('img', { src: 'http://lorempixel.com/96/96' })
																																								),
																																								React.createElement(
																																												'div',
																																												{ className: 'UserProfile-name' },
																																												'Alexander'
																																								)
																																				),
																																				React.createElement(
																																								'li',
																																								null,
																																								React.createElement(
																																												'div',
																																												{ className: 'UserProfile-image' },
																																												React.createElement('img', { src: 'http://lorempixel.com/96/96' })
																																								),
																																								React.createElement(
																																												'div',
																																												{ className: 'UserProfile-name' },
																																												'Mattias'
																																								)
																																				)
																																)
																												),
																												React.createElement(
																																'div',
																																{ className: 'UserNavigation' },
																																React.createElement(
																																				'ul',
																																				null,
																																				React.createElement(
																																								'li',
																																								null,
																																								'Your Account'
																																				),
																																				React.createElement(
																																								'li',
																																								null,
																																								'Help Center'
																																				),
																																				React.createElement(
																																								'li',
																																								null,
																																								'Sign out of Netflix'
																																				)
																																)
																												)
																								)
																				);
																}
												});

												//////////
												// Hero //
												//////////

												var Hero = React.createClass({
																displayName: 'Hero',

																render: function render() {
																				return React.createElement(
																								'div',
																								{ id: 'hero', className: 'Hero', style: { backgroundImage: 'url(https://images.alphacoders.com/633/633643.jpg)' } },
																								React.createElement(
																												'div',
																												{ className: 'content' },
																												React.createElement('img', { className: 'logo', src: 'http://www.returndates.com/backgrounds/narcos.logo.png', alt: '' }),
																												React.createElement(
																																'h2',
																																null,
																																'Season 2 now available'
																												),
																												React.createElement(
																																'p',
																																null,
																																'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id quam sapiente unde voluptatum alias vero debitis, magnam quis quod.'
																												),
																												React.createElement(
																																'div',
																																{ className: 'button-wrapper' },
																																React.createElement(HeroButton, { primary: true, text: 'Watch now' }),
																																React.createElement(HeroButton, { primary: false, text: '+ My list' })
																												)
																								),
																								React.createElement('div', { className: 'overlay' })
																				);
																}
												});

												// Hero Button
												var HeroButton = React.createClass({
																displayName: 'HeroButton',

																render: function render() {
																				return React.createElement(
																								'a',
																								{ href: '#', className: 'Button', 'data-primary': this.props.primary },
																								this.props.text
																				);
																}
												});

												////////////////
												// Title List //
												////////////////

												// Title List Container

												var TitleList = React.createClass({
																displayName: 'TitleList',

																apiKey: '87dfa1c669eea853da609d4968d294be',
																getInitialState: function getInitialState() {
																				return { data: [], mounted: false };
																},
																loadContent: function loadContent() {
																				var requestUrl = 'https://api.themoviedb.org/3/' + this.props.url + '&api_key=' + this.apiKey;

																				$.ajax({
																								url: requestUrl,
																								dataType: 'json',
																								cache: false,
																								success: function (data) {
																												this.setState({ data: data });
																												// console.log(data);
																								}.bind(this),
																								error: function (xhr, status, err) {
																												console.error(this.props.url, status, err.toString());
																								}.bind(this)
																				});
																},
																componentDidMount: function componentDidMount() {
																				this.loadContent();
																				this.setState({ mounted: true });
																},
																componentWillUnmount: function componentWillUnmount() {
																				this.setState({ mounted: false });
																},
																render: function render() {
																				if (this.state.data.results) {
																								var titles = this.state.data.results.map(function (title, i) {
																												if (i < 5) {

																																var backDrop = 'http://image.tmdb.org/t/p/original' + title.backdrop_path;
																																if (!title.name) {
																																				var name = title.original_title;
																																} else {
																																				var name = title.name;
																																}

																																return React.createElement(Item, { key: title.id, title: name, score: title.vote_average, overview: title.overview, backdrop: backDrop });
																												}
																								});
																				} else {
																								var titles = '';
																				}

																				return React.createElement(
																								'div',
																								{ ref: 'titlecategory', className: 'TitleList', 'data-loaded': this.state.mounted },
																								React.createElement(
																												'div',
																												{ className: 'Title' },
																												React.createElement(
																																'h1',
																																null,
																																this.props.title
																												),
																												React.createElement(
																																'div',
																																{ className: 'titles-wrapper' },
																																titles
																												)
																								)
																				);
																}
												});

												// Title List Item
												var Item = React.createClass({
																displayName: 'Item',

																render: function render() {
																				return React.createElement(
																								'div',
																								{ className: 'Item', style: { backgroundImage: 'url(' + this.props.backdrop + ')' } },
																								React.createElement(
																												'div',
																												{ className: 'overlay' },
																												React.createElement(
																																'div',
																																{ className: 'title' },
																																this.props.title
																												),
																												React.createElement(
																																'div',
																																{ className: 'rating' },
																																this.props.score,
																																' / 10'
																												),
																												React.createElement(
																																'div',
																																{ className: 'plot' },
																																this.props.overview
																												),
																												React.createElement(ListToggle, null)
																								)
																				);
																}
												});

												// ListToggle
												var ListToggle = React.createClass({
																displayName: 'ListToggle',

																getInitialState: function getInitialState() {
																				return { toggled: false };
																},
																handleClick: function handleClick() {
																				if (this.state.toggled === true) {
																								this.setState({ toggled: false });
																				} else {
																								this.setState({ toggled: true });
																				}
																},
																render: function render() {
																				return React.createElement(
																								'div',
																								{ onClick: this.handleClick, 'data-toggled': this.state.toggled, className: 'ListToggle' },
																								React.createElement(
																												'div',
																												null,
																												React.createElement('i', { className: 'fa fa-fw fa-plus' }),
																												React.createElement('i', { className: 'fa fa-fw fa-check' })
																								)
																				);
																}
												});

												ReactDOM.render(React.createElement(App, null), document.getElementById('movieViewer'));
								}
				}, {
								key: 'componentWillUnmount',
								value: function componentWillUnmount() {

												_get(MovieViewer.prototype.__proto__ || Object.getPrototypeOf(MovieViewer.prototype), 'componentWillUnmount', this).call(this);
								}
				}, {
								key: 'componentWillUpdate',
								value: function componentWillUpdate(nextProps, nextState) {}
				}, {
								key: 'componentDidUpdate',
								value: function componentDidUpdate() {}
				}]);

				return MovieViewer;
}(F8ReactComponent);

module.exports = MovieViewer;
