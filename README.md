# Styled-components 5.3.3

## DEMO
連結：

<br>


## 筆記：Styled-components 5.3.3

官網：https://styled-components.com/docs/basics
## 目錄
安裝

基本\
0.[開始](#開始)\
1.[根據props調整](#根據props調整)\
2.[擴展屬性](#擴展屬性)\
3.[適用於任何組件 如函數組件](#適用於任何組件-如函數組件)\
4.[適用於cssModules 如原生方式引入](#適用於cssModules-如原生方式引入)\
5.[定義位置](#定義位置)\
6.[偽類 選擇器使用](#偽類-選擇器使用)\
7.[createGlobalStyle使用](#createGlobalStyle使用)\
8.[attrs使用](#attrs使用)\
9.[動畫使用](#動畫使用)\
10.[React Native 使用](#React-Native-使用)

進階\
1.[主題](#主題)

參考\
1.[CreateGlobalStyle 消除默認樣式與全局設定](#CreateGlobalStyle-消除默認樣式與全局設定)

## 安装
```
npm install --save styled-components
或
yarn add styled-components
```
## 基本
## 開始
```js
//引入
import styled from 'styled-components'

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

// Use Title and Wrapper like any other React component – except they're styled!
render(
  <Wrapper>
    <Title>
      Hello World!
    </Title>
  </Wrapper>
);
```
## 根據props調整
```js
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

render(
  <div>
    <Button>Normal</Button>
    <Button primary>Primary</Button>
  </div>
);
```
↑ Button 是否有添加 primary 屬性，若有，背景設置成palevioletred

## 擴展屬性
```js
// The Button from the last section without the interpolations
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)` 
  color: tomato;
  border-color: tomato;
`;

render(
  <div>
    <Button>Normal Button</Button>
    <TomatoButton>Tomato Button</TomatoButton>
  </div>
);
```
↑ 從基礎按鈕上，擴展成番茄風格按鈕
```js
const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

render(
  <div>
    <Button>Normal Button</Button>  
    <Button as="a" href="#">Link with Button styles</Button>
    <TomatoButton as="a" href="#">Link with Tomato Button styles</TomatoButton>
  </div>
);
```
↑ 使用 `as` 屬性為css組件添加另種 html 標籤特性

```js
const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

const ReversedButton = props => <Button {...props} children={props.children.split('').reverse()} />

render(
  <div>
    <Button>Normal Button</Button>
    <Button as={ReversedButton}>Custom Button with Normal Button styles</Button>
  </div>
);
//注意：v4以下的版本可以用 .withComponent 或 .extend 達到和 as 一樣效果，但不鼓勵這麼做，因為v4中 .extend 已經刪除，並且 .withComponent 未來也將被棄用。
//補充：children 是內容，這裡可以用js來更改
```
↑  `as` 屬性也能添加另一種css組件特性\
## 適用於任何組件 如函數組件
```js
// This could be react-router-dom's Link for example
const Link = ({ className, children }) => (
  <a className={className}>
    {children}
  </a>
);

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

render(
  <div>
    <Link>Unstyled, boring Link</Link>
    <br />
    <StyledLink>Styled, exciting Link</StyledLink>
  </div>
);
//補充，html標籤名也可以這樣使用 styled("div") 
```
↑ 函數造出來的組件，也能用 styled 函數包裹賦予 css組件特性
## 適用於cssModules 如原生方式引入
```js
import React from 'react'
import styles from './styles.css'

export default class Counter extends React.Component {
  state = { count: 0 }

  increment = () => this.setState({ count: this.state.count + 1 })
  decrement = () => this.setState({ count: this.state.count - 1 })

  render() {
    return (
      <div className={styles.counter}>
        <p className={styles.paragraph}>{this.state.count}</p>
        <button className={styles.button} onClick={this.increment}>
          +
        </button>
        <button className={styles.button} onClick={this.decrement}>
          -
        </button>
      </div>
    )
  }
}
```
↑ className裡，加入 styles. 調用原生css
## 定義位置
```js
const StyledWrapper = styled.div`
  /* ... */
`

const Wrapper = ({ message }) => {
  return <StyledWrapper>{message}</StyledWrapper>
}
```
↑ 優
```js
const Wrapper = ({ message }) => {
  // WARNING: THIS IS VERY VERY BAD AND SLOW, DO NOT DO THIS!!!
  const StyledWrapper = styled.div`
    /* ... */
  `

  return <StyledWrapper>{message}</StyledWrapper>
}
```
↑ 劣

## 偽類 選擇器使用
```js
const Thing = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
  color: blue;

  &:hover {
    color: red; // <Thing> when hovered
  }

  & ~ & {
    background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
  }

  & + & {
    background: lime; // <Thing> next to <Thing>
  }

  &.something {
    background: orange; // <Thing> tagged with an additional CSS class ".something"
  }

  .something-else & {
    border: 1px solid; // <Thing> inside another element labeled ".something-else"
  }
`

render(
  <React.Fragment>
    <Thing>Hello world!</Thing>
    <Thing>How ya doing?</Thing>
    <Thing className="something">The sun is shining...</Thing>
    <div>Pretty nice day today.</div>
    <Thing>Don't you think?</Thing>
    <div className="something-else">
      <Thing>Splendid.</Thing>
    </div>
  </React.Fragment>
)
```
```
↑ 
&:hover {} 移入後更改
& ~ &  {} 相同組件，第一個以外的所有
& + & {} 相同組件，第二個
&.something {} className名是 something 
.something-else & {} 父組件名是 something-else 
```
```js
const Thing = styled.div`
  color: blue;

  .something {
    border: 1px solid; // an element labeled ".something" inside <Thing>
    display: block;
  }
`

render(
  <Thing>
    <label htmlFor="foo-button" className="something">Mystery button</label>
    <button id="foo-button">What do I do?</button>
  </Thing>
)
```
↑ className 定義於子組件
## createGlobalStyle使用

```js
//引入
import {createGlobalStyle} from 'styled-components'

//使用
const Thing = styled.div`
  && {
    color: blue;
  }
`

const GlobalStyle = createGlobalStyle`
  div${Thing} {
    color: red;
  }
`

render(
  <React.Fragment>
    <GlobalStyle />
    <Thing>
      I'm blue, da ba dee da ba daa
    </Thing>
  </React.Fragment>
)
```
↑ createGlobalStyle 定義全局樣式，影響範圍為全局，包含非 styled-components 的 html 標籤。
## attrs使用
```js
const Input = styled.input.attrs(props => ({
  // we can define static props
  type: "text",

  // or we can define dynamic ones
  size: props.size || "1em",
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  /* here we use the dynamically computed prop */
  margin: ${props => props.size};
  padding: ${props => props.size};
`;

render(
  <div>
    <Input placeholder="A small text input" />
    <br />
    <Input placeholder="A bigger text input" size="2em" />
  </div>
);
//attrs()裡定義基本參數，後加 ` ` 寫入樣式
```
↑ attrs() 可以為組件多添加一種樣式設定，包括靜態或動態。使用場景如為組件添加 activeClassName
```js
const Input = styled.input.attrs(props => ({
  type: "text",
  size: props.size || "1em",
}))`
  border: 2px solid palevioletred;
  margin: ${props => props.size};
  padding: ${props => props.size};
`;

// Input's attrs will be applied first, and then this attrs obj
const PasswordInput = styled(Input).attrs({
  type: "password",
})`
  // similarly, border will override Input's border
  border: 2px solid aqua;
`;

render(
  <div>
    <Input placeholder="A bigger text input" size="2em" />
    <br />
    {/* Notice we can still use the size attr from Input */}
    <PasswordInput placeholder="A bigger password input" size="2em" />
  </div>
);
```
↑ attrs 傳值方式，由底層傳至上層。先加載 Input 再加載 PasswordInput。
## 動畫使用
```js
// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

render(
  <Rotate>&lt; 💅🏾 &gt;</Rotate>
);

//注意：RN不使用上述方式，而是使用 ReactNative.Animated API
```
↑ 基本
```js
const rotate = keyframes``

// ❌ This will throw an error!
const styles = `
  animation: ${rotate} 2s linear infinite;
`

// ✅ This will work as intended
const styles = css`
  animation: ${rotate} 2s linear infinite;
`
//注意：v3(含)以下版本，升級v4時請以模板字符串方式引入動畫
```
↑ 補充
## React Native 使用
```js
import React from 'react'
import styled from 'styled-components/native'

const StyledView = styled.View`
  background-color: papayawhip;
`

const StyledText = styled.Text`
  color: palevioletred;
`

class MyReactNativeComponent extends React.Component {
  render() {
    return (
      <StyledView>
        <StyledText>Hello World!</StyledText>
      </StyledView>
    )
  }
}
//注意：flex 屬性屬於原生css屬性，而不是 RN 默認的 flex。
//Setting flex: 1 sets flexShrink to 1 in addition to setting flexGrow to 1 and flexBasis to 0.

```
↑ 範例\
補充：RN 一樣可以使用style-components。並且支持更多種寫法，例如 transform(數組形式) 、 margin(簡寫形式)。
```js
const RotatedBox = styled.View`
  transform: rotate(90deg);
  text-shadow-offset: 10px 5px;
  font-variant: small-caps;
  margin: 5px 7px 2px;
`
```
↑在RN裡使用\
與 web 不同之處，不能使用 keyframes 和 createGlobalStyle，並且使用 media 和 Nesting Module 也會警告。\
補充：v1 升級到 v2 請參考 https://github.com/styled-components/styled-components-native-code-mod

## 進階
## 主題
```js
// Define our button, but with the use of props.theme this time
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button.defaultProps = {
  theme: {
    main: "red"
  }
}

// Define what props.theme will look like
const theme = {
  main: "mediumseagreen"
};

render(
  <div>
    <Button>Normal</Button>

    <ThemeProvider theme={theme}>
      <Button>Themed</Button>
    </ThemeProvider>
  </div>
);
```
↑ 主題色彩定義。
```js
import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from `style-components`
import App from './App';
import reportWebVitals from './reportWebVitals';

const theme = {
  primary:'red'
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

//App.js
const Button = styled.div`
  background:${props => props.theme.primary }
`;
```
↑ 舉例


## 參考
## CreateGlobalStyle 消除默認樣式與全局設定
```js
//globalStyle.js

//消除默認樣式
export const ResetStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
}
address, caption, cite, code, dfn, em, strong, th, var, b {
  font-weight: normal;
  font-style: normal;
}
abbr, acronym {
  border: 0;
}
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
  display: block;
}
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
html {
  text-size-adjust: 100%;
  box-sizing: border-box;
}
body {
    line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote {
  &:before,   &:after {
    content: '';
    content: none;
  }
}
q {
  &:before,   &:after {
    content: '';
    content: none;
  }
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
caption, th {
  text-align: left;
}
textarea {
  resize: none;
}
a {
  text-decoration: none;
  cursor: pointer;
}
button {
  padding: 0;
  border: none;
  background: none;
}
`;

//自訂全局樣式
export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  font-size: 62.5%; 
  font-family: 'HelveticaNeue', Helvetica, Arial, 'Lucida Grande', sans-serif;
}
`;
```
↑ 準備
```js
//App.js
import React, { Component } from 'react';
import {ResetStyle, GlobalStyle} from './components/globalStyle'
class App extends Component {
  render() {
    return (
      <div className="App">
        <ResetStyle />
        <GlobalStyle />
        <ol> 
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
        </ol>
      </div>
    );
  }
}
```
↑ 引入。實際的cra項目中，全局樣式不應該寫在App.js裡，而應該寫在index.js裡

參考：https://medium.com/itsoktomakemistakes/%E4%BD%BF%E7%94%A8-createglobalstyle-%E5%9C%A8-react-styled-components-%E5%8F%96%E4%BB%A3-css-reset-%E8%88%87-css-normalize-fc8faa8059f1