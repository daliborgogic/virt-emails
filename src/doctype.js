module.exports.doctype = async (title, body) => {
   return `<!doctype html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <!-- Use the latest (edge) version of IE rendering engine -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Disable auto-scale in iOS 10 Mail entirely -->
    <meta name="x-apple-disable-message-reformatting">
    <title>${title}</title>
    <!-- Desktop Outlook chokes on web font references and defaults to Times New Roman, so we force a safe fallback font. -->
    <!--[if mso]>
      <style>
        * { font-family: sans-serif !important; }
      </style>
    <![endif]-->
    <style>
      html,
      body {
        margin: 0 auto !important;
        padding: 0 !important;
        height: 100% !important;
        width: 100% !important;
      }
      /* Stops email clients resizing small text. */
      * {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }
      /* Centers email on Android 4.4 */
      div[style*="margin: 16px 0"] {
        margin: 0 !important;
      }
      /* Stops Outlook from adding extra spacing to tables. */
      table,
      td {
        mso-table-lspace: 0pt !important;
        mso-table-rspace: 0pt !important;
      }
      /* Fixes webkit padding issue. Fix for Yahoo mail table alignment bug. Applies table-layout to the first 2 tables then removes for anything nested deeper. */
      table {
        border-spacing: 0 !important;
        border-collapse: collapse !important;
        table-layout: fixed !important;
        margin: 0 auto !important;
      }
      table table table { table-layout: auto; }
      /* Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links should be inline. */
      a { text-decoration: none;  }
      /* What it does: Uses a better rendering method when resizing images in IE. */
      img {
          -ms-interpolation-mode:bicubic;
      }
      /* A work-around for email clients meddling in triggered links. */
      *[x-apple-data-detectors],  /* iOS */
      .unstyle-auto-detected-links *,
      .aBn {
        border-bottom: 0 !important;
        cursor: default !important;
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      /* Prevents Gmail from displaying a download button on large, non-linked images. */
      .a6S {
        display: none !important;
        opacity: 0.01 !important;
     }
     /* If the above doesn't work, add a .g-img class to any image in question. */
     img.g-img + div {
         display: none !important;
     }
      /* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */
      /* Create one of these media queries for each additional viewport size you'd like to fix */
      /* iPhone 4, 4S, 5, 5S, 5C, and 5SE */
      @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
          .email-container {
              min-width: 320px !important;
          }
      }
      /* iPhone 6, 6S, 7, 8, and X */
      @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
        .email-container {
          min-width: 375px !important;
        }
      }
      /* iPhone 6+, 7+, and 8+ */
      @media only screen and (min-device-width: 414px) {
        .email-container {
          min-width: 414px !important;
        }
      }
      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
      }
    </style>
  </head>
  <body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #222222;">
    ${body}
  </body>
</html>`
}
