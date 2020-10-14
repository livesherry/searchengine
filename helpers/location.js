import axios from 'axios';

export const getLocation = async (setLoc) => {
    try{
        delete axios.defaults.headers.common['x-access-token'];
        await axios("https://api.ipdata.co?api-key=83e4b6e60ca707d19eaf723b50a17b5d6fdcf98916fef5c78e3c7c87").then(data => {
            console.log(`location.jsdata     ${JSON.stringify(data)}`);
            if (typeof window !== 'undefined') {
                localStorage.setItem('lukallLocation', data.data.country_name)
                localStorage.setItem('lukallLocationCode', data.data.country_code)
              }
        });
    }catch{}

}