import Layout from './../components/Layout';
import SearchPage from './../components/SearchPage';
import ImagesComponent from './../components/Images';
import NewsPage from './../components/NewsPage';
import VideosComponent from './../components/VideosPage';
import Footer from './../components/Footer';
import { withRouter, useRouter } from 'next/router';
import Router from 'next/router';
import { useEffect } from 'react';

const Type = withRouter((props) => {
    const router = useRouter();
    const query = router.query.q;
    const type = router.query.type;

    useEffect(() => {
        if (query===undefined){
            Router.push('/');
        }
    });

    let PageType = null;
    let highlight = 'all';
    if (type === 'search'){
        PageType = <SearchPage query={query}></SearchPage>
        highlight = 'all';
    }else if(type === 'images'){
        PageType = <ImagesComponent query={query}></ImagesComponent>
        highlight = 'images';
    }else if(type === 'news'){
        PageType = <NewsPage query={query}></NewsPage>
        highlight = 'news';
    }else if(type === 'videos'){
        PageType = <VideosComponent query={query}></VideosComponent>
        highlight = 'videos';
    }

    return (
    <Layout title="Searchello | web results" nav="search" subNav="true" highlight={highlight} query={query} type={type}>
        {/* <p>{props.router.query.q}</p> */}
        {PageType}
        <Footer></Footer>
    </Layout>
    );
});

export default Type;