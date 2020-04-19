import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer N80JJkxB_Qt51izVje3qcPmgsWNowEQKAINEn0r3LsRH5n4Hv3xFTdY5s_MzoubE7MjnSIZR053aT1GnMHa7psrJs8W0EhubpsN_XuGewK1kfd5o9HR2qGg3MF2UXnYx'
    }
})