import axios from "axios";
const base_url = "http://ee4bd2380562.ngrok.io/";
function handleUploadProgress(ev:any) {
    console.log(ev);
    // do your thing here
}
export const generateImage = async (category: string) => {
    let response = await axios({
        method: "get",
        url: base_url + "generate_image",
        params: {
            category: category,
        },
        onDownloadProgress: handleUploadProgress,
    });
    console.log(response);
    return response.data;
};

export const generateStyle = async (category: string) => {
    let response = await axios({
        method: "get",
        url: base_url + "generate_style",
        params: {
            category: category,
        },
        onDownloadProgress: handleUploadProgress,
    });
    console.log(response);
    return response.data;
};




