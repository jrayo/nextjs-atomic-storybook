import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'intro-rust';
        font-style: normal;
        src: url('/fonts/IntroRust-Base.otf');
    }
    @font-face {
        font-family: 'intro-rust-book';
        font-style: normal;
        src: url('/fonts/IntroRustBook-Base.otf');
    }
    @font-face {
        font-family: 'intro-rust-h1';
        font-style: normal;
        src: url('/fonts/IntroRustH1-Base.otf');
    }
    @font-face {
        font-family: 'intro-rust-h2';
        font-style: normal;
        src: url('/fonts/IntroRustH2-Base.otf');
    }

    @font-face {
    font-family:"myriad-pro";
    src:url("https://use.typekit.net/af/d32e26/00000000000000000001709b/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff2"),url("https://use.typekit.net/af/d32e26/00000000000000000001709b/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff"),url("https://use.typekit.net/af/d32e26/00000000000000000001709b/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("opentype");
    font-display:auto;font-style:italic;font-weight:400;
    }

    @font-face {
    font-family:"myriad-pro";
    src:url("https://use.typekit.net/af/cafa63/00000000000000000001709a/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/cafa63/00000000000000000001709a/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/cafa63/00000000000000000001709a/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
    font-display:auto;font-style:normal;font-weight:400;
    }

    @font-face {
    font-family:"myriad-pro";
    src:url("https://use.typekit.net/af/80c5d0/00000000000000000001709c/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("woff2"),url("https://use.typekit.net/af/80c5d0/00000000000000000001709c/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("woff"),url("https://use.typekit.net/af/80c5d0/00000000000000000001709c/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("opentype");
    font-display:auto;font-style:normal;font-weight:600;
    }
    
    @font-face {
    font-family:"myriad-pro";
    src:url("https://use.typekit.net/af/1b1b1e/00000000000000000001709e/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/1b1b1e/00000000000000000001709e/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/1b1b1e/00000000000000000001709e/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
    font-display:auto;font-style:normal;font-weight:700;
    }
    
    body {
        margin: 0;
        padding: 0;
        background: ${(props) => props.theme.colors.grayishBlueLightest};
        font-family:myriad-pro, intro-rust;
    }

    html {
        box-sizing: border-box;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
`

export default GlobalStyle
