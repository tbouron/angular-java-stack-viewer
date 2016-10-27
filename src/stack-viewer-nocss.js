import template from './stack-viewer.html';
import angular from 'angular';
import {Stack} from 'java-stack-parser';

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

    function link(scope, element) {
        scope.stack = new Stack(scope.vendors);
        scope.$watch('vendors', ()=> {
            scope.stack = new Stack(scope.vendors);
            parse(scope, element);
        }, true);
        scope.$watch('trace', ()=> {
            parse(scope, element);
        });
    }

    function parse(scope, element) {
        if (scope.trace) {
            scope.stack.parse(scope.trace);
            $timeout(()=> {
                angular.element(element[0].querySelector('.app')).addClass('main-error');
            });
        }
    }
}
