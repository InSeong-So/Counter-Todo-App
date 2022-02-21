import styled from '@emotion/styled';
import { css } from '@emotion/react';
import palette from './palette';

export const reset = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    background-color: ${palette.gray[0]};

    #root {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
    }
  }

  input,
  button {
    font-family: inherit;
    color: inherit;
  }

  * {
    box-sizing: border-box;
  }
`;

export const Counter = styled.div`
  height: 50%;
  width: 300px;
  text-align: center;
  margin: auto;
  padding: 1em;
  border-radius: 5px;
`;

export const CounterDisplay = styled.p`
  height: 150px;
  width: 150px;
  color: #efefef;
  margin: auto;
  font-size: calc(150px / 1.5);
  line-height: 140px;
  border-radius: 5px;
  box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%);
  background: #333333;
`;

export const CounterTypeTitle = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-top: 1em;
`;

export const CounterButtons = styled.div`
  padding: 1em;

  #increment-button {
    background: rgba(26, 188, 156, 1);
    text-shadow: 2px 2px 0 #148f77, 2px 2px 0 #149178, 3px 3px 0 #149279, 4px 4px 0 #14937a,
      5px 5px 0 #14947b, 6px 6px 0 #15957b, 7px 7px 0 #15957c, 8px 8px 0 #15967d, 9px 9px 0 #15977e,
      10px 10px 0 #15987e, 11px 11px 0 #15997f, 12px 12px 0 #159a80, 13px 13px 0 #159b80,
      14px 14px 0 #169c81, 15px 15px 0 #169d82, 16px 16px 0 #169e83, 17px 17px 0 #169e83,
      18px 18px 0 #169f84, 19px 19px 0 #16a085, 20px 20px 0 #16a186, 21px 21px 0 #16a286,
      22px 22px 0 #17a387, 23px 23px 0 #17a488, 24px 24px 0 #17a589, 25px 25px 0 #17a689,
      26px 26px 0 #17a68a, 27px 27px 0 #17a78b, 28px 28px 0 #17a88c, 29px 29px 0 #17a98c,
      30px 30px 0 #18aa8d, 31px 31px 0 #18ab8e, 32px 32px 0 #18ac8f, 33px 33px 0 #18ad8f,
      34px 34px 0 #18ae90, 35px 35px 0 #18af91, 36px 36px 0 #18af92, 37px 37px 0 #18b092,
      38px 38px 0 #19b193, 39px 39px 0 #19b294, 40px 40px 0 #19b395, 41px 41px 0 #19b495,
      42px 42px 0 #19b596, 43px 43px 0 #19b697, 44px 44px 0 #19b798, 45px 45px 0 #19b898,
      46px 46px 0 #1ab899, 47px 47px 0 #1ab99a, 48px 48px 0 #1aba9b, 49px 49px 0 #1abb9b,
      50px 50px 0 #1abc9c, 51px 51px 0 #1abd9d, 52px 52px 0 #1abe9d, 53px 53px 0 #1abf9e,
      54px 54px 0 #1ac09f, 55px 55px 0 #1bc0a0, 56px 56px 0 #1bc1a0, 57px 57px 0 #1bc2a1,
      58px 58px 0 #1bc3a2, 59px 59px 0 #1bc4a3, 60px 60px 0 #1bc5a3, 61px 61px 0 #1bc6a4,
      62px 62px 0 #1bc7a5, 63px 63px 0 #1cc8a6, 64px 64px 0 #1cc9a6, 65px 65px 0 #1cc9a7,
      66px 66px 0 #1ccaa8, 67px 67px 0 #1ccba9, 68px 68px 0 #1ccca9, 69px 69px 0 #1ccdaa,
      70px 70px 0 #1cceab, 71px 71px 0 #1dcfac, 72px 72px 0 #1dd0ac, 73px 73px 0 #1dd1ad,
      74px 74px 0 #1dd2ae, 75px 75px 0 #1dd2af;
  }

  #increment-button-async {
    background: rgb(0, 110, 255);
    text-shadow: 2px 2px 0 #0058cc, 2px 2px 0 #0059ce, 3px 3px 0 #0059cf, 4px 4px 0 #005ad0,
      5px 5px 0 #005ad1, 6px 6px 0 #005bd2, 7px 7px 0 #005bd3, 8px 8px 0 #005cd4, 9px 9px 0 #005cd5,
      10px 10px 0 #005cd6, 11px 11px 0 #005dd7, 12px 12px 0 #005dd8, 13px 13px 0 #005ed9,
      14px 14px 0 #005eda, 15px 15px 0 #005fdb, 16px 16px 0 #005fdc, 17px 17px 0 #005fdd,
      18px 18px 0 #0060de, 19px 19px 0 #0060df, 20px 20px 0 #0061e0, 21px 21px 0 #0061e1,
      22px 22px 0 #0062e2, 23px 23px 0 #0062e3, 24px 24px 0 #0063e4, 25px 25px 0 #0063e6,
      26px 26px 0 #0063e7, 27px 27px 0 #0064e8, 28px 28px 0 #0064e9, 29px 29px 0 #0065ea,
      30px 30px 0 #0065eb, 31px 31px 0 #0066ec, 32px 32px 0 #0066ed, 33px 33px 0 #0067ee,
      34px 34px 0 #0067ef, 35px 35px 0 #0067f0, 36px 36px 0 #0068f1, 37px 37px 0 #0068f2,
      38px 38px 0 #0069f3, 39px 39px 0 #0069f4, 40px 40px 0 #006af5, 41px 41px 0 #006af6,
      42px 42px 0 #006af7, 43px 43px 0 #006bf8, 44px 44px 0 #006bf9, 45px 45px 0 #006cfa,
      46px 46px 0 #006cfb, 47px 47px 0 #006dfc, 48px 48px 0 #006dfd, 49px 49px 0 #006efe,
      50px 50px 0 #006eff, 51px 51px 0 #016fff, 52px 52px 0 #026fff, 53px 53px 0 #0370ff,
      54px 54px 0 #0470ff, 55px 55px 0 #0571ff, 56px 56px 0 #0671ff, 57px 57px 0 #0772ff,
      58px 58px 0 #0873ff, 59px 59px 0 #0973ff, 60px 60px 0 #0a74ff, 61px 61px 0 #0b74ff,
      62px 62px 0 #0c75ff, 63px 63px 0 #0d76ff, 64px 64px 0 #0e76ff, 65px 65px 0 #0f77ff,
      66px 66px 0 #1077ff, 67px 67px 0 #1178ff, 68px 68px 0 #1278ff, 69px 69px 0 #1379ff,
      70px 70px 0 #147aff, 71px 71px 0 #157aff, 72px 72px 0 #167bff, 73px 73px 0 #177bff,
      74px 74px 0 #187cff, 75px 75px 0 #1a7dff;
  }

  #decrement-button {
    background: rgba(255, 174, 35, 1);
    text-shadow: 2px 2px 0 #ef9700, 2px 2px 0 #f19800, 3px 3px 0 #f29900, 4px 4px 0 #f39a00,
      5px 5px 0 #f49a00, 6px 6px 0 #f59b00, 7px 7px 0 #f69c00, 8px 8px 0 #f79c00, 9px 9px 0 #f89d00,
      10px 10px 0 #f99d00, 11px 11px 0 #fa9e00, 12px 12px 0 #fb9f00, 13px 13px 0 #fc9f00,
      14px 14px 0 #fda000, 15px 15px 0 #fea100, 16px 16px 0 #ffa100, 17px 17px 0 #ffa201,
      18px 18px 0 #ffa202, 19px 19px 0 #ffa203, 20px 20px 0 #ffa304, 21px 21px 0 #ffa305,
      22px 22px 0 #ffa306, 23px 23px 0 #ffa407, 24px 24px 0 #ffa408, 25px 25px 0 #ffa50a,
      26px 26px 0 #ffa50b, 27px 27px 0 #ffa50c, 28px 28px 0 #ffa60d, 29px 29px 0 #ffa60e,
      30px 30px 0 #ffa60f, 31px 31px 0 #ffa710, 32px 32px 0 #ffa711, 33px 33px 0 #ffa812,
      34px 34px 0 #ffa813, 35px 35px 0 #ffa814, 36px 36px 0 #ffa915, 37px 37px 0 #ffa916,
      38px 38px 0 #ffa917, 39px 39px 0 #ffaa18, 40px 40px 0 #ffaa19, 41px 41px 0 #ffab1a,
      42px 42px 0 #ffab1b, 43px 43px 0 #ffab1c, 44px 44px 0 #ffac1d, 45px 45px 0 #ffac1e,
      46px 46px 0 #ffac1f, 47px 47px 0 #ffad20, 48px 48px 0 #ffad21, 49px 49px 0 #ffae22,
      50px 50px 0 #ffae23, 51px 51px 0 #ffae24, 52px 52px 0 #ffaf25, 53px 53px 0 #ffaf26,
      54px 54px 0 #ffb027, 55px 55px 0 #ffb028, 56px 56px 0 #ffb029, 57px 57px 0 #ffb12a,
      58px 58px 0 #ffb12b, 59px 59px 0 #ffb12c, 60px 60px 0 #ffb22d, 61px 61px 0 #ffb22e,
      62px 62px 0 #ffb32f, 63px 63px 0 #ffb330, 64px 64px 0 #ffb331, 65px 65px 0 #ffb432,
      66px 66px 0 #ffb433, 67px 67px 0 #ffb434, 68px 68px 0 #ffb535, 69px 69px 0 #ffb536,
      70px 70px 0 #ffb637, 71px 71px 0 #ffb638, 72px 72px 0 #ffb639, 73px 73px 0 #ffb73a,
      74px 74px 0 #ffb73b, 75px 75px 0 #ffb73d;
  }

  #decrement-button-async {
    background: rgb(255, 251, 0);
    text-shadow: 2px 2px 0 #ccc900, 2px 2px 0 #cecb00, 3px 3px 0 #cfcc00, 4px 4px 0 #d0cd00,
      5px 5px 0 #d1ce00, 6px 6px 0 #d2cf00, 7px 7px 0 #d3d000, 8px 8px 0 #d4d100, 9px 9px 0 #d5d200,
      10px 10px 0 #d6d300, 11px 11px 0 #d7d400, 12px 12px 0 #d8d500, 13px 13px 0 #d9d600,
      14px 14px 0 #dad700, 15px 15px 0 #dbd800, 16px 16px 0 #dcd900, 17px 17px 0 #ddda00,
      18px 18px 0 #dedb00, 19px 19px 0 #dfdc00, 20px 20px 0 #e0dd00, 21px 21px 0 #e1de00,
      22px 22px 0 #e2df00, 23px 23px 0 #e3e000, 24px 24px 0 #e4e100, 25px 25px 0 #e6e200,
      26px 26px 0 #e7e300, 27px 27px 0 #e8e400, 28px 28px 0 #e9e500, 29px 29px 0 #eae600,
      30px 30px 0 #ebe700, 31px 31px 0 #ece800, 32px 32px 0 #ede900, 33px 33px 0 #eeea00,
      34px 34px 0 #efeb00, 35px 35px 0 #f0ec00, 36px 36px 0 #f1ed00, 37px 37px 0 #f2ee00,
      38px 38px 0 #f3ef00, 39px 39px 0 #f4f000, 40px 40px 0 #f5f100, 41px 41px 0 #f6f200,
      42px 42px 0 #f7f300, 43px 43px 0 #f8f400, 44px 44px 0 #f9f500, 45px 45px 0 #faf600,
      46px 46px 0 #fbf700, 47px 47px 0 #fcf800, 48px 48px 0 #fdf900, 49px 49px 0 #fefa00,
      50px 50px 0 #fffb00, 51px 51px 0 #fffb01, 52px 52px 0 #fffb02, 53px 53px 0 #fffb03,
      54px 54px 0 #fffb04, 55px 55px 0 #fffb05, 56px 56px 0 #fffb06, 57px 57px 0 #fffb07,
      58px 58px 0 #fffb08, 59px 59px 0 #fffb09, 60px 60px 0 #fffb0a, 61px 61px 0 #fffb0b,
      62px 62px 0 #fffb0c, 63px 63px 0 #fffb0d, 64px 64px 0 #fffb0e, 65px 65px 0 #fffb0f,
      66px 66px 0 #fffb10, 67px 67px 0 #fffb11, 68px 68px 0 #fffb12, 69px 69px 0 #fffb13,
      70px 70px 0 #fffb14, 71px 71px 0 #fffb15, 72px 72px 0 #fffb16, 73px 73px 0 #fffb17,
      74px 74px 0 #fffb18, 75px 75px 0 #fffb1a;
  }

  #reset-button {
    background: rgba(246, 34, 63, 1);
    text-shadow: 2px 2px 0 #dc0926, 2px 2px 0 #de0926, 3px 3px 0 #df0926, 4px 4px 0 #e00927,
      5px 5px 0 #e10927, 6px 6px 0 #e20927, 7px 7px 0 #e30927, 8px 8px 0 #e40927, 9px 9px 0 #e50927,
      10px 10px 0 #e60928, 11px 11px 0 #e70928, 12px 12px 0 #e80928, 13px 13px 0 #e90928,
      14px 14px 0 #ea0a28, 15px 15px 0 #eb0a28, 16px 16px 0 #ec0a29, 17px 17px 0 #ed0a29,
      18px 18px 0 #ee0a29, 19px 19px 0 #ef0a29, 20px 20px 0 #f00a29, 21px 21px 0 #f10a29,
      22px 22px 0 #f20a2a, 23px 23px 0 #f30a2a, 24px 24px 0 #f40a2a, 25px 25px 0 #f50a2a,
      26px 26px 0 #f50a2b, 27px 27px 0 #f50b2b, 28px 28px 0 #f50c2c, 29px 29px 0 #f50d2d,
      30px 30px 0 #f50e2e, 31px 31px 0 #f50f2f, 32px 32px 0 #f51030, 33px 33px 0 #f51131,
      34px 34px 0 #f51231, 35px 35px 0 #f51332, 36px 36px 0 #f51433, 37px 37px 0 #f51534,
      38px 38px 0 #f61635, 39px 39px 0 #f61736, 40px 40px 0 #f61836, 41px 41px 0 #f61937,
      42px 42px 0 #f61a38, 43px 43px 0 #f61b39, 44px 44px 0 #f61c3a, 45px 45px 0 #f61d3b,
      46px 46px 0 #f61e3c, 47px 47px 0 #f61f3c, 48px 48px 0 #f6203d, 49px 49px 0 #f6213e,
      50px 50px 0 #f6223f, 51px 51px 0 #f62340, 52px 52px 0 #f62441, 53px 53px 0 #f62542,
      54px 54px 0 #f62642, 55px 55px 0 #f62743, 56px 56px 0 #f62844, 57px 57px 0 #f62945,
      58px 58px 0 #f62a46, 59px 59px 0 #f62b47, 60px 60px 0 #f62c48, 61px 61px 0 #f62d48,
      62px 62px 0 #f62e49, 63px 63px 0 #f72f4a, 64px 64px 0 #f7304b, 65px 65px 0 #f7314c,
      66px 66px 0 #f7324d, 67px 67px 0 #f7334d, 68px 68px 0 #f7344e, 69px 69px 0 #f7354f,
      70px 70px 0 #f73650, 71px 71px 0 #f73751, 72px 72px 0 #f73852, 73px 73px 0 #f73953,
      74px 74px 0 #f73a53, 75px 75px 0 #f73b54;
  }

  #reset-button-async {
    background: rgb(255, 0, 179);
    text-shadow: 2px 2px 0 #cc008f, 2px 2px 0 #ce0091, 3px 3px 0 #cf0091, 4px 4px 0 #d00092,
      5px 5px 0 #d10093, 6px 6px 0 #d20093, 7px 7px 0 #d30094, 8px 8px 0 #d40095, 9px 9px 0 #d50096,
      10px 10px 0 #d60096, 11px 11px 0 #d70097, 12px 12px 0 #d80098, 13px 13px 0 #d90099,
      14px 14px 0 #da0099, 15px 15px 0 #db009a, 16px 16px 0 #dc009b, 17px 17px 0 #dd009b,
      18px 18px 0 #de009c, 19px 19px 0 #df009d, 20px 20px 0 #e0009e, 21px 21px 0 #e1009e,
      22px 22px 0 #e2009f, 23px 23px 0 #e300a0, 24px 24px 0 #e400a0, 25px 25px 0 #e600a1,
      26px 26px 0 #e700a2, 27px 27px 0 #e800a3, 28px 28px 0 #e900a3, 29px 29px 0 #ea00a4,
      30px 30px 0 #eb00a5, 31px 31px 0 #ec00a5, 32px 32px 0 #ed00a6, 33px 33px 0 #ee00a7,
      34px 34px 0 #ef00a8, 35px 35px 0 #f000a8, 36px 36px 0 #f100a9, 37px 37px 0 #f200aa,
      38px 38px 0 #f300aa, 39px 39px 0 #f400ab, 40px 40px 0 #f500ac, 41px 41px 0 #f600ad,
      42px 42px 0 #f700ad, 43px 43px 0 #f800ae, 44px 44px 0 #f900af, 45px 45px 0 #fa00af,
      46px 46px 0 #fb00b0, 47px 47px 0 #fc00b1, 48px 48px 0 #fd00b2, 49px 49px 0 #fe00b2,
      50px 50px 0 #ff00b3, 51px 51px 0 #ff01b3, 52px 52px 0 #ff02b4, 53px 53px 0 #ff03b4,
      54px 54px 0 #ff04b4, 55px 55px 0 #ff05b5, 56px 56px 0 #ff06b5, 57px 57px 0 #ff07b5,
      58px 58px 0 #ff08b5, 59px 59px 0 #ff09b6, 60px 60px 0 #ff0ab6, 61px 61px 0 #ff0bb6,
      62px 62px 0 #ff0cb7, 63px 63px 0 #ff0db7, 64px 64px 0 #ff0eb7, 65px 65px 0 #ff0fb8,
      66px 66px 0 #ff10b8, 67px 67px 0 #ff11b8, 68px 68px 0 #ff12b8, 69px 69px 0 #ff13b9,
      70px 70px 0 #ff14b9, 71px 71px 0 #ff15b9, 72px 72px 0 #ff16ba, 73px 73px 0 #ff17ba,
      74px 74px 0 #ff18ba, 75px 75px 0 #ff1abb;
  }
`;

export const Button = styled.button`
  width: 50px;
  height: 50px;
  position: relative;
  z-index: 100;
  margin: 0 5px;
  overflow: hidden;
  line-height: 50px;
  font-size: 30px;
  cursor: pointer;
  color: rgba(239, 239, 239, 1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 5px;
  border: none;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export const CounterHr = styled.hr`
  height: 3px;
  border: 1px solid #333333;
  background-color: #333333;
  border-radius: 15px;
`;
