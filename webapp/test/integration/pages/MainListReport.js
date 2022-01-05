sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var AdditionalCustomListReportDefinition = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'ztodocf',
            componentId: 'ZC_TODOSList',
            entitySet: 'ZC_TODOS'
        },
        AdditionalCustomListReportDefinition
    );
});