import axios from "axios";

const uploadImg = async(filedata) => {

    let imageData = new FormData();
    imageData.append('file', filedata);
    imageData.append('upload_preset', 'magamart');
    imageData.append('cloud_name', 'dapqkvrrm');

    let res = await axios.post('https://api.cloudinary.com/v1_1/dapqkvrrm/image/upload', imageData);
    return res.data.secure_url;
}
export default uploadImg;