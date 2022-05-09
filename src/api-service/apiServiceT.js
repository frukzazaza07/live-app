import axios from 'axios';


class ApiServiceT {
    stickerHeader = {
        'Accept': 'application/json',
        'apiKey': `fb9db3dbde3ccfe9dd643c1617a8202b`,
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
    };

    axiosConfig = {
        method: "",
        url: "",
        headers: {
            // Authorization: "Bearer "
        },
        data: "",
    };

    memberId = "";

    rootUrl = "http://127.0.0.1/sinoT/";

    constructor() {
        this.axiosConfig.url = this.rootUrl;
        // this.axiosConfig.headers.Authorization = 'Polygon';
    }

    login(dataSend) {
        this.axiosConfig.method = "post";
        this.axiosConfig.url += `login.php`;
        this.axiosConfig.data = dataSend;
        return new Promise((resolve, reject) => {
            axios(this.axiosConfig)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    console.log(error)
                    reject(error);
                });
        })
    }
}
export default ApiServiceT;