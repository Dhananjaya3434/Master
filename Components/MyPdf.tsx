import { Document, Page, Text, Font,StyleSheet } from '@react-pdf/renderer';
import MyfontReg from '../Fonts/PTSerif-Regular.ttf'
import MyfontBold from '../Fonts/PTSerif-Bold.ttf'
import MyItalic from '../Fonts/PTSerif-Italic.ttf'
Font.register({
    family: 'PTSerif-Regular',
    src: MyfontReg
})
Font.register({
    family: 'PTSerif-Bold',
    src: MyfontBold
})
Font.register({
    family: 'PTSerif-Italic',
    src: MyItalic
})

const styles = StyleSheet.create({
    text: {
        textAlign:"center",
        fontFamily: "PTSerif-Italic"
    },
    header: {
        textAlign: "center",
        fontFamily: "PTSerif-Bold",
        fontWeight:500
    }
})
const MyPdf = () => (
  <Document>
        <Page>
        <Text style={styles.header}>I am Header!</Text>
      <Text style={styles.text}>Hello, world!</Text>
    </Page>
  </Document>
);

export default MyPdf;
