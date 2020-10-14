import '../vendor/bootstrap/css/bootstrap.min.css'
import '../css/full.css'
import '../css/google-gallery.css'
import '../public/font-homepage/flaticon.css'
// import Layout from "../components/Layout";
import App from "next/app";
import { getLocation } from '../helpers/location';

// export default function LukallApp({ Component, pageProps }) {
//     return <Component {...pageProps} />
//   }

class LukallApp extends App {
  static async getInitialProps(ctx) {
    return {};
  }
  componentDidMount(){
    if (typeof window !== 'undefined') {
      if(localStorage.getItem('lukallAutoSuggest') === null){
        localStorage.setItem('lukallAutoSuggest', 'true')
      }
      if(localStorage.getItem('lukallManualLocation') === null){
        localStorage.setItem('lukallManualLocation', 'false')
      }
      if(localStorage.getItem('lukallManualLocation') === 'false'){
        getLocation();
      }
      
    }
  }
  render() {
    const { Component, pageProps } = this.props;
    
    return (
      // <Layout>
        <Component {...pageProps} />
      // </Layout>
    );
  }
}

export default LukallApp;