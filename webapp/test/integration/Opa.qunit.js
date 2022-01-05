sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ztodocf/test/integration/pages/MainListReport' ,
        'ztodocf/test/integration/pages/MainObjectPage',
        'ztodocf/test/integration/OpaJourney'
    ],
    function(JourneyRunner, MainListReport, MainObjectPage, Journey) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ztodocf') + '/index.html'
        });

        
        JourneyRunner.run(
            {
                pages: { onTheMainPage: MainListReport, onTheDetailPage: MainObjectPage }
            },
            Journey.run
        );
        
    }
);