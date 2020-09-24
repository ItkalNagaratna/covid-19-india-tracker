import axios from 'axios'

const url = 'https://api.covidindiatracker.com/state_data.json'

export const fetchData = async () => {
    try {

        const res = await axios.get(url);
        return res.data;

    } catch (error) {
        console.log(error)
    }
}
