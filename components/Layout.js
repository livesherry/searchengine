import Navbar from './Navbar'
import Head from 'next/head'
import NavbarSearch from './NavbarSearch';
import Footer from './Footer';
import React from "react";
import { withRedux } from "../redux/withStore";

class Layout extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
        <Head>
            <meta charSet="utf-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
            <meta name="description" content=""></meta>
            <meta name="author" content=""></meta>
            <title>{this.props.title}</title>
            <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"></link>
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/multiple-select/1.2.2/multiple-select.min.css"></link>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="" crossorigin="anonymous"></link>
            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            {/* <script src="/js/google-gallery.js"></script> */}
            {/* <script src="/js/all.js"></script> */}
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
            <script src='https://s.yimg.com/uv/dm/scripts/syndication.js'></script>
            <script type="text/javascript" src="/static/ads.js"></script>
            {/* <script src='https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.3.5/js/swiper.min.js'></script> */}
            
        </Head>
        {this.props.nav === 'search' ? <NavbarSearch type={this.props.type} query={this.props.query} subNav={this.props.subNav} highlight={this.props.highlight}/> : <Navbar/>}
        {this.props.children}
        {/* <Footer></Footer> */}
    </div>
        );
    }
}

export default withRedux(Layout);
