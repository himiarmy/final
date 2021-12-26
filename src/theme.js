import {createGlobalStyle} from "styled-components"
export const darkTheme = {
    body: "#666666",
    textColor: "#fff",
    headingColor: "lightblue"
  }
  
  export const lightTheme = {
    body: "#fff",
    textColor: "#000",
    headingColor: "#d23669"
  }
  
  export const GlobalStyles = createGlobalStyle`
   body {
    background: ${props => props.theme.body};
    color: ${props => props.theme.textColor};
    transition: .3s ease;
   }
   a{
       color: ${props => props.theme.textColor}
   }
   h3{
     color: ${props => props.theme.headingColor};
   }`