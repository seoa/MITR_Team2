import 'plugins/html_vis/html_vis.less';
import 'plugins/html_vis/html_vis_controller';
import { VisVisTypeProvider } from 'ui/vis/vis_type';
import { TemplateVisTypeProvider } from 'ui/template_vis_type/template_vis_type';
import htmlVisTemplate from 'plugins/html_vis/html_vis.html';
import htmlVisParamsTemplate from 'plugins/html_vis/html_vis_params.html';
import { VisTypesRegistryProvider } from 'ui/registry/vis_types';
import image from './images/icon-markdown.svg';
// we need to load the css ourselves

// we also need to load the controller and used by the template

// register the provider with the visTypes registry so that other know it exists
VisTypesRegistryProvider.register(HTMLVisProvider);

function HTMLVisProvider(Private) {
  const VisType = Private(VisVisTypeProvider);
  const TemplateVisType = Private(TemplateVisTypeProvider);

  // return the visType object, which kibana will use to display and configure new
  // Vis object of this type.
  return new TemplateVisType({
    name: 'HTML',
    title: 'HTML',
    image,
    description: 'Create a document using HTML syntax',
    category: VisType.CATEGORY.OTHER,
    template: htmlVisTemplate,
    params: {
      editor: htmlVisParamsTemplate
    },
    requiresSearch: false,
    implementsRenderComplete: true,
  });
}

// export the provider so that the visType can be required with Private()
export default HTMLVisProvider;
