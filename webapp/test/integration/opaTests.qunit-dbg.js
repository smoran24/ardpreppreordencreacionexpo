/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"AR_DP_REP_CONVERSIONPREAPEDIDO_EX/AR_DP_REP_CONVERSIONPREAPEDIDO_EX/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});