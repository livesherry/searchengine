import Layout from '../components/Layout';
import OopsComponent from '../components/Oops';
import Footer from '../components/Footer';

const Oops = () => (
    <Layout title="Searchello | Not Found" nav="search" subNav="false">
        <OopsComponent></OopsComponent>
        <Footer></Footer>
    </Layout>
);

export default Oops;