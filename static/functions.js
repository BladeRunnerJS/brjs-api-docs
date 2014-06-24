$(function() {
	"use strict";

	var BRJS_ORG_NAME = "BladeRunnerJS";
	var BRJS_REPO_NAME = "brjs";

	var versionListElement = $("#version-list");

	var gitHubReleasesUrl = "https://api.github.com/repos/"+BRJS_ORG_NAME+"/"+BRJS_REPO_NAME+"/releases";

	$(document).ready(function() {
		$.getJSON(gitHubReleasesUrl, {}, populateVersionList);
	});

	var populateVersionList = function(data) {
		console.log(data);
	};

});
