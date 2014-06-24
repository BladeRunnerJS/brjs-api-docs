$(function() {
	"use strict";

	var BRJS_ORG_NAME = "BladeRunnerJS";
	var BRJS_REPO_NAME = "brjs";

	var tagsWithoutDocs = [ "v0.1", "v0.2", "v0.3", "v0.4", "v0.5", "v0.6", "v0.7", "v0.8"]

	var versionListElement = $("#version-list");

	var gitHubReleasesUrl = "https://api.github.com/repos/"+BRJS_ORG_NAME+"/"+BRJS_REPO_NAME+"/releases";

	$(document).ready(function() {
		$("#github-api-error").remove();
		$.getJSON(gitHubReleasesUrl, {}, populateVersionList);
	});

	var populateVersionList = function(data) {
		$(versionListElement).empty();
		for (var i = 0; i < data.length; i++) {
			var release = data[i];
			var releaseVersion = release.tag_name;
			if (tagsWithoutDocs.indexOf(releaseVersion) === -1) {
				$(versionListElement).append( getVersionListItem(releaseVersion) );
			}
		}
	};

	function getVersionListItem(version) {
		var jsLink = getJsLinkForVersion(version);
		var jsLinkText = '<a href="'+jsLink+'">JavaScript API Documentation</a>';
		var javaLink = getJavaLinkForVersion(version);
		var javaLinkText = '<a href="'+javaLink+'">Java Model API Documentation</a>';
		return '<li class="version version_'+version+'"><b>'+version+':</b> '+jsLinkText+', '+javaLinkText+'</li>';
	}

	function getJsLinkForVersion(version) {
		return "/"+version+"/js/index.html";
	}
	function getJavaLinkForVersion(version) {
		return "/"+version+"/java/index.html";
	}

});
