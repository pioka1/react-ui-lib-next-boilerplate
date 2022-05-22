import emotionReset from "emotion-reset";
import React from "react";
import { Global, css, useTheme } from "@emotion/react";

export const GlobalStyles = () => {
  const theme = useTheme();

  const styles = css`
    ${emotionReset}
  
    html {
      // Modern browsers have a base font-size of 16px. With this trick, 1rem == 10px
      font-size: 62.5%;
    }
    h1, h2, h3, h4, h5, h6, span, p, a, b, strong, i, em, li, pre, code, q, blockquote, button {
      font-family: ${theme.typography.fontFamily}, sans-serif;
    }
    h1 { font-size: 2.6rem; } // 26px
    h2 { font-size: 2.4rem; } // 24px
    h3 { font-size: 2.2rem; } // 22px
    h4 { font-size: 2.0rem; } // 20px
    h5 { font-size: 1.8rem; } // 18px
    h6 { font-size: 1.6rem; } // 16px
    span, p, a, b, strong, i, em, li, pre, code, q, blockquote, button {
      font-size: 1.4rem;
    }
  `;

  return <Global styles={styles} />;
};
