import { View } from "react-native"
import Header from "../components/StylesPage/Header"
import Body from "../components/StylesPage/Body"
import Footer from "../components/StylesPage/Footer"
export default function Home() {
  return (
    <View style={{margin: 10}}>
        <Header />
        <Body />
        <Footer />
    </View>
  )
}
