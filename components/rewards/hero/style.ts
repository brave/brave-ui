import styled from 'styled-components'

export const StyledHero = styled.div`
  text-align: center;
  padding: 60px 0px 0px 0px;
  background: linear-gradient(#392DD1, #8C41DE);
  &::after {
    content:'';
    display: block;
    width: 110%;
    margin-left:-5%;
    padding-bottom:3%;
    background:url('data:image/svg+xml;utf8,<svg width="1440" height="40" viewBox="0 0 1440 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Canvas" transform="translate(-2039 -1355)"><g><use xlink:href="#path0_fill" transform="translate(2039 1355)" fill="#FFFFFF"/></g></g><defs><path id="path0_fill" fill-rule="evenodd" d="M 0 0C 0 0 285.906 33.9869 718.453 32.987C 1151 31.9871 1440 0 1440 0L 1440 39.987L 0 39.987L 0 0Z"/></defs></svg>');
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center bottom;
  }
` as any