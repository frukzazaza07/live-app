import axios from 'axios';
import useToken from '../login-register/useToken';

class ApiService {
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
            Authorization: "Bearer "
        },
        data: "",
    };

    memberId = "";

    constructor() {
        const userToken = JSON.parse(localStorage.getItem('token'));
        const userData = JSON.parse(localStorage.getItem('userData'));
        this.axiosConfig.headers.Authorization += (userToken !== null && userToken.token !== undefined ? userToken.token : "");
        this.memberId = (userData !== null && userData.userId !== undefined ? userData.userId : "");
        // this.axiosConfig.headers.Authorization = 'Polygon';
    }

    stickerUserId = "570315c6-548e-42b7-a3e6-7de30f89795d"
    fetchStickerPackageApi() {
        const stickerUserId = ""
        this.axiosConfig.method = "get";
        this.axiosConfig.url = `https://messenger.stipop.io/v1/package?userId=${this.stickerUserId}`;
        this.axiosConfig.headers = this.stickerHeader;
        return new Promise((resolve, reject) => {
            axios(this.axiosConfig)
                .then((response) => {

                    // console.log(response.data);
                    resolve(response.data);
                })
                .catch((error) => {
                    console.log(error)
                    reject(error);
                });
        })
    }
    fetchStickerPackageInfoApi(packageId) {
        const stickerUserId = ""
        this.axiosConfig.method = "get";
        this.axiosConfig.url = `https://messenger.stipop.io/v1/package/${packageId}?userId=${this.stickerUserId}`;
        this.axiosConfig.headers = this.stickerHeader;
        return new Promise((resolve, reject) => {
            axios(this.axiosConfig)
                .then((response) => {
                    // console.log(response.data);
                    resolve(response.data);
                })
                .catch((error) => {
                    console.log(error)
                    reject(error);
                });
        })
    }

    fetchLoginUser(dataSend) {

        this.axiosConfig.method = "post";
        this.axiosConfig.url = `http://wave-sport.com/live-app/api/login`;
        // this.axiosConfig.headers = this.stickerHeader;
        this.axiosConfig.data = dataSend;
        return new Promise((resolve, reject) => {
            axios(this.axiosConfig)
                .then((response) => {
                    // console.log(response);
                    resolve(response.data);
                })
                .catch((error) => {
                    console.log(error)
                    reject(error);
                });
        })
    }

    registerUser(dataSend) {

        this.axiosConfig.method = "post";
        this.axiosConfig.url = `http://wave-sport.com/live-app/api/register`;
        // this.axiosConfig.headers = this.stickerHeader;
        this.axiosConfig.data = dataSend;
        return new Promise((resolve, reject) => {
            axios(this.axiosConfig)
                .then((response) => {
                    // console.log(response);
                    resolve(response.data);
                })
                .catch((error) => {
                    console.log(error)
                    reject(error);
                });
        })
    }

    fetchAccessToken(dataSend) {

        this.axiosConfig.method = "post";
        this.axiosConfig.url = `http://wave-sport.com/live-app/api/accessToken`;
        this.axiosConfig.headers = this.stickerHeader;
        this.axiosConfig.data = dataSend;
        return new Promise((resolve, reject) => {
            axios(this.axiosConfig)
                .then((response) => {
                    // console.log(response);
                    resolve(response.data);
                })
                .catch((error) => {
                    console.log(error)
                    reject(error);
                });
        })
    }
    createPost(dataSend) {
        this.axiosConfig.method = "post";
        this.axiosConfig.url = `http://wave-sport.com/live-app/api/create-post`;
        this.axiosConfig.data = dataSend;
        return new Promise((resolve, reject) => {
            axios(this.axiosConfig)
                .then((response) => {
                    // console.log(response);
                    resolve(response.data);
                })
                .catch((error) => {
                    console.log(error)
                    reject(error);
                });
        })
    }
    fetchLoadDailyPost(page, pageSize) {
        this.axiosConfig.method = "get";
        this.axiosConfig.url = `http://wave-sport.com/live-app/api/load-daily-post/${page}/${pageSize}/${this.memberId}`;
        return new Promise((resolve, reject) => {
            axios(this.axiosConfig)
                .then((response) => {
                    // console.log(response);
                    resolve(response.data);
                })
                .catch((error) => {
                    console.log(error)
                    reject(error);
                });
        })
    }
    fetchLoadFollowPost(page, pageSize, memberId) {
        this.axiosConfig.method = "get";
        this.axiosConfig.url = `http://wave-sport.com/live-app/api/load-follow-post/${page}/${pageSize}/${this.memberId}`;
        return new Promise((resolve, reject) => {
            axios(this.axiosConfig)
                .then((response) => {
                    // console.log(response);
                    resolve(response.data);
                })
                .catch((error) => {
                    console.log(error)
                    reject(error);
                });
        })
    }
    follow(dataSend) {
        this.axiosConfig.method = "post";
        this.axiosConfig.url = `http://wave-sport.com/live-app/api/follow`;
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
    unFollow(dataSend) {
        this.axiosConfig.method = "post";
        this.axiosConfig.url = `http://wave-sport.com/live-app/api/un-follow`;
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
    fetchNewAlert(memberId) {
        this.axiosConfig.method = "get";
        this.axiosConfig.url = `http://wave-sport.com/live-app/api/new-alert/${this.memberId}`;
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

    fetchLoadPostByPostId(postId) {
        this.axiosConfig.method = "get";
        this.axiosConfig.url = `http://wave-sport.com/live-app/api/load-daily-post/${postId}/${this.memberId}`;
        return new Promise((resolve, reject) => {
            axios(this.axiosConfig)
                .then((response) => {
                    // console.log(response);
                    resolve(response.data);
                })
                .catch((error) => {
                    console.log(error)
                    reject(error);
                });
        })
    }
    fetchloadNotificationDetail() {
        this.axiosConfig.method = "get";
        this.axiosConfig.url = `http://wave-sport.com/live-app/api/load-notification-detail/${this.memberId}`;
        return new Promise((resolve, reject) => {
            axios(this.axiosConfig)
                .then((response) => {
                    // console.log(response);
                    resolve(response.data);
                })
                .catch((error) => {
                    console.log(error)
                    reject(error);
                });
        })
    }
    updateKnowNotification() {
        this.axiosConfig.method = "get";
        this.axiosConfig.url = `http://wave-sport.com/live-app/api/update-notification/${this.memberId}`;
        return new Promise((resolve, reject) => {
            axios(this.axiosConfig)
                .then((response) => {
                    // console.log(response);
                    resolve(response.data);
                })
                .catch((error) => {
                    console.log(error)
                    reject(error);
                });
        })
    }
}
export default ApiService;