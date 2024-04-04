import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import Cakes from "./components/Cakes";
import ContactSection from "./components/ContactSection";
import { createTheme, ThemeProvider} from "@mui/material";


const App = ()=>{
const theme = createTheme({
  palette: {
    primary : {
      main : "#864313"
    }
  }
});

  return (
    <ThemeProvider theme={theme}>
   <Nav />
   <HeroSection />
   <Cakes />
   <ContactSection />
   </ThemeProvider>
   
  )
};

export default App;
