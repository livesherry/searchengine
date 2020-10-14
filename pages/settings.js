import Layout from '../components/Layout';
import Footer from '../components/Footer';
import SettingsComponent from '../components/SettingsPage';

const Settings = () => (
    <Layout title="Searchello | Settings" nav="search" subNav="false" highlight="settings">
        <SettingsComponent></SettingsComponent>
        <Footer></Footer>
    </Layout>
);

export default Settings;