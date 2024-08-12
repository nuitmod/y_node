const createHomepageTemplate = () => /*html*/`
  <!DOCTYPE html>
  <html>
    <head>
      <title>v_mod</title>
      <script src="https://unpkg.com/htmx.org@1.9.12"></script>
      <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <meta name="description" content="v-mod">
    <meta name="google-site-verification" content="lu0ezzTuvs3DZa0Zx7k3T0_Izfrwd7ovQT2jz88VbkQ" />
    <link rel="preload" as="script" href="https://cdn.ampproject.org/v0.js">
    <link rel="preload" as="script" href="https://cdn.ampproject.org/v0/amp-experiment-0.1.js">
    <link rel="preload" as="script" href="https://cdn.ampproject.org/v0/amp-dynamic-css-classes-0.1.js">
    <meta name="amp-script-src" content="sha384-N6BElfyffSMG1DQQfBqfLirHallr2hb6MN8xbSaETbPzrdXBRV-89GOJNH7xMbPY">
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <script async custom-element="amp-experiment" src="https://cdn.ampproject.org/v0/amp-experiment-0.1.js"></script>
    <script async custom-element="amp-dynamic-css-classes" src="https://cdn.ampproject.org/v0/amp-dynamic-css-classes-0.1.js"></script>
    <!-- Import other AMP Extensions here -->
    <script async custom-element="amp-install-serviceworker" src="https://cdn.ampproject.org/v0/amp-install-serviceworker-0.1.js"></script>
    <!-- <script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script> -->
    <!-- <script async custom-element="amp-list" src="https://cdn.ampproject.org/v0/amp-list-0.1.js"></script>
    <script async custom-template="amp-mustache" src="https://cdn.ampproject.org/v0/amp-mustache-0.2.js"></script> -->
    <script async custom-element="amp-accordion" src="https://cdn.ampproject.org/v0/amp-accordion-0.1.js"></script>
    <!-- <script async custom-element="amp-bind" src="https://cdn.ampproject.org/v0/amp-bind-0.1.js"></script>
    <script async custom-element="amp-youtube" src="https://cdn.ampproject.org/v0/amp-youtube-0.1.js"></script> -->
    <script async custom-element="amp-audio" src="https://cdn.ampproject.org/v0/amp-audio-0.1.js"></script>
    <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
    <script async custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"></script>
    <script async custom-element="amp-video" src="https://cdn.ampproject.org/v0/amp-video-0.1.js"></script>
    <!-- <script async custom-element="amp-script" src="https://cdn.ampproject.org/v0/amp-script-0.1.js"></script> -->
    <!-- <script async custom-element="amp-vimeo" src="https://cdn.ampproject.org/v0/amp-vimeo-1.0.js"></script> -->
<style amp-custom>
  :root{
    --bg-main: #684f67;
    --bg-menu: black;
    --bg-hov: ghostwhite;
  }
  *{
    margin: 0;
    padding: 0;
  }
  body{
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    background: var(--bg-menu);
    color: var(--bg-hov);
    font-size: 9px;
  }
  a{ 
    margin: 0 2px; 
  }
  amp-accordion {
    background: var(--bg-menu);
    width: 99%;
    margin-bottom: 5px;
    opacity: 0.7;
  }
  amp-accordion a{
    background: var(--bg-menu);
    color: var(--bg-main);
    font-size: 8px;
    text-decoration: none;
    padding: 5px 10px;
  }
  amp-accordion .amp_a{
    background: var(--bg-menu);
    width: auto;
  }
  #sidebar{
    background-color: rgba(0,0,0,0.9);
    width: 399px;
  }
  #sidebar div{
    text-align: center;
  }
  #sidebar button{
    margin: 9px;
  }
  #sidebar a{
    margin: 5px;
    display: block;
  }
  audio{
    height: 10px;
    width: 250px;
    color: black;
    background: black;
    background-color: black;
    z-index: 12;
  }
</style>
    <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
    <link rel="canonical" href="https://v-mod.vercel.app">
    <title>v-mod</title>
    <link rel="manifest" href="./manifest.webmanifest">
    <script type="application/ld+json">
      {
        "@context": "http://schema.org",
        "@type": "Webpage",
        "url": "https://v-mod.vercel.app",
        "name": "v-mod",
        "headline": "v-mod",
        "description": "Here is the description",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://v-mod.vercel.app"
        },
        "publisher": {
          "@type": "Organization",
          "name": "The Publisher",
          "logo": {
            "url": "https://www.example.com/logo-blue.svg",
            "width": 175,
            "height": 60,
            "@type": "ImageObject"
          }
        },
        "image": {
          "@type": "ImageObject",
          "url": "https://www.example.com/leader.png",
          "width": 1200,
          "height": 630
        }
      }
    </script>
    </head>
    <body>
    <amp-accordion class="main" disable-session-states>
        <section class="">
          <h6 class="amp_a">.</h6>
          <div>
            <ul>
              <li>
                <a href="https://vi-mod.vercel.app/">vi-mod</a>
                <a href="https://vii-mod.vercel.app/">vii-mod</a>
                <a href="https://w-mod.vercel.app/">w-mod</a>
              </li>
            </ul>
          </div>  
        </section>
      </amp-accordion>
      <amp-img height="59" width="38" src="../img/mod.jpg" style="opacity:0.9"></amp-img>
      <amp-accordion class="main" disable-session-states>
        <section class="">
            <h6 class="amp_a">.</h6>
            <div>
            <!-- <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" height="175" style="width:100%;max-width:660px;overflow:hidden;border-radius:10px;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/ru/album/model%E8%AF%B4%E5%94%B1/1625024577?i=1625024580&theme=light"></iframe>-->
            <p>darkzone</p>
            <amp-audio preload="none" controls>
            <source src="https://ice5.somafm.com/darkzone-128-mp3" type="audio/mpeg">
            </amp-audio>
            <p>doomed</p>
            <amp-audio preload="none" controls>
            <source src="https://ice5.somafm.com/doomed-128-mp3" type="audio/mpeg">
            </amp-audio>
            <p>fluid</p>
            <amp-audio preload="none" controls>
            <source src="https://ice5.somafm.com/fluid-128-mp3" type="audio/mpeg">
            </amp-audio>
            <p>Пикник</p>
            <amp-audio preload="none" controls>
            <source src="https://pub0201.101.ru/stream/pro/aac/64/157?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpcCI6IjMxLjE2Mi40LjIyNCIsInVzZXJhZ2VudCI6Ik1vemlsbGFcLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXaW42NDsgeDY0KSBBcHBsZVdlYktpdFwvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lXC84Ny4wLjQyODAuODggU2FmYXJpXC81MzcuMzYiLCJ1aWRfY2hhbm5lbCI6IjE1NyIsInR5cGVfY2hhbm5lbCI6ImNoYW5uZWwiLCJleHAiOjE2MDczNDkwMDh9.rWMD4tWmvVsNiZDACGBPwQRIYaKiryQPmLG8bNxGLJ0" type="audio/mpeg">
            </amp-audio>
            </div>  
        </section>
      </amp-accordion>
      <main>
        <div class="book-list">
          <!-- book list here later -->
        </div>

        <div class="add-book-form">
         
          <!-- form template here later -->
        </div>
      </main>
    </body>
  </html>
`;

export default createHomepageTemplate;