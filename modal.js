/*
 * SimpleModal Basic Modal Dialog
 * http://www.ericmmartin.com/projects/simplemodal/
 * http://code.google.com/p/simplemodal/
 *
 * Copyright (c) 2010 Eric Martin - http://ericmmartin.com
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Revision: $Id: basic.js 243 2010-03-15 14:23:14Z emartin24 $
 *
 */
 
// Questions

jQuery(function ($) {
	$('#title .basic').click(function (e) {
		$('#questions').modal();
		  return false;
		});
});

// Info

jQuery(function ($) {
	$('#nav #about').click(function (e) {
		$('#info').modal();
		
		  return false;
		});
});

jQuery(function ($) {
	$('#nav #email').click(function (e) {
		$('#emailer').modal();
		
		  return false;
		});
});