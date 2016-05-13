/*
	This file is intentionally empty, the file is written to by the build when apps are created to be hosted on apidocs.bladerunnerjs.org.
*/

function addVersion() {
	var dashboardLinkEl = document.querySelector('.dashboard-link');
	var versionEl = document.createElement('li');
	versionEl.innerHTML = '<a href="https://github.com/BladeRunnerJS/brjs/releases/v1.4.3" target="_blank">BRJS v1.4.3-0.g4fad107</a>';
	dashboardLinkEl.parentNode.insertBefore(versionEl, dashboardLinkEl.nextSibling);
};
if (window.addEventListener) window.addEventListener('load', addVersion, false);
else if (window.attachEvent) window.attachEvent('onload', addVersion);
