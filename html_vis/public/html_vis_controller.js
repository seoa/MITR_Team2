import marked from '../../../src/forked/marked';
import { uiModules } from 'ui/modules';
import 'angular-sanitize';

marked.setOptions({
  gfm: true, // Github-flavored markdown
  sanitize: true // Sanitize HTML tags
});


const module = uiModules.get('kibana/html_vis', ['kibana', 'ngSanitize']);
module.controller('KbnHTMLVisController', function ($scope, $sce) {
  $scope.$watch('vis.params.html', function (html) {
    if (!html) return;
    $scope.html = $sce.trustAsHtml(html);
  });
});
