import template from './stack-viewer.html';
import {angular} from 'angular';
import {parser} from 'java-stack-parser';

let MODULE_NAME = 'tb.stack-viewer';

angular.module(MODULE_NAME, [])
    .directive('tbStackViewer', ['$timeout', stackViewerDirective]);

export default MODULE_NAME;

export function stackViewerDirective($timeout) {
    return {
        restrict: 'EA',
        templateUrl: template,
        scope: {
            trace: '=',
            vendors: '='
        },
        link: link
    };

    function link(scope) {
        scope.stack = new parser.Stack(scope.vendors);
        scope.$watch('vendors', ()=> {
            scope.stack = new parser.Stack(scope.vendors);
            scope.stack.parse(scope.trace);
            $timeout(()=> {
                angular.element(document.querySelector('.app')).addClass('main-error');
            });
        }, true);
        scope.$watch('trace', ()=> {
            scope.stack.parse(scope.trace);
            $timeout(()=> {
                angular.element(document.querySelector('.app')).addClass('main-error');
            });
        });
    }
}
