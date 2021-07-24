import axios from "axios";
const base_url = "http://127.0.0.1:5000/";
function handleUploadProgress(ev: any) {
    console.log(ev);
    // do your thing here
}
export const generateImage = async (category: string) => {
    let response = await axios({
        method: "get",
        url: base_url + "generate_image?category=" + category,
        // params: {
        //     category: category,
        // },
        onDownloadProgress: handleUploadProgress,
    });
    console.log(response);
    return response.data;
};

export const generateTexture = async () => {
    let response = await axios({
        method: "get",
        url: base_url + "generate_texture?category=" + "texture",
        onDownloadProgress: handleUploadProgress,
    });
    console.log(response);
    return response.data;
};

export const generateStyle = async (
    isFirst: boolean,
    category: string,
    foldername: string,
    filename: string,
    style_name: string
) => {
    if (isFirst) {
        let response = await axios({
            method: "get",
            url:
                base_url +
                "generate_style?category=" +
                category +
                "&filename=" +
                filename +
                ".npy&name=" +
                style_name,
            onDownloadProgress: handleUploadProgress,
        });
        return response.data;
    } else {
        let response = await axios({
            method: "get",
            url:
                base_url +
                "generate_style?category=" +
                category +
                "&filename=" +
                foldername +
                "/" +
                filename +
                ".npy&name=" +
                style_name,
            onDownloadProgress: handleUploadProgress,
        });
        return response.data;
    }
};
