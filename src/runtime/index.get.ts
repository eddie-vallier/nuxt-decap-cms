import { defineEventHandler, setResponseHeaders } from 'h3'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler((event) => {
  setResponseHeaders(event, {
    'Content-Type': 'text/html',
  })

  const { decapCms: options } = useRuntimeConfig()

  return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Content Manager</title>
    <!-- Include the script that enables Netlify Identity on this page. -->
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
  </head>
  <body>
    <!-- Include the script that builds the page and powers Decap CMS -->
    <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
    <!--<script src="${options.route}/components.js"></script>-->
    <script>
      var PagePreview = createClass({
        componentDidMount() {
          setTimeout(() => this.sendMarkdownToIframe(), 1000)
        },
        componentDidUpdate() {
          this.sendMarkdownToIframe();
        },
        sendMarkdownToIframe() {
          const parentIframe = document.getElementById('preview-pane')
          const iframeDocument = parentIframe.contentDocument || parentIframe.contentWindow.document;
          const iframe = iframeDocument.getElementById('post-preview-iframe');
          const markdown = this.props.entry.getIn(['data', 'body']);
          const title = this.props.entry.getIn(['data', 'title']);
          const payload = {
            type: 'preview-content',
            title,
            markdown
          };
          iframe?.contentWindow?.postMessage(payload, '*');
        },
        render() {
          return h('div', { style: { height: '100vh' } },
            h('iframe', {
              id: 'post-preview-iframe',
              src: '/decap/preview',
              style: {
                width: '100%',
                height: '100%',
                border: 'none'
              }
            })
          );
        }
      });
    
      CMS.registerPreviewTemplate("page", PagePreview);
    </script>
    <script src="${options.route}/components.js" defer></script>
  </body>
</html>
  `
})
