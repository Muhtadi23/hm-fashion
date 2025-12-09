import { request } from "@/Utils/Axios";

const get_Products_url = "/api/v1/public/get-products";

export const getProducts = async () => {
    const url = get_Products_url;
    return await request(
        {
            url,
            method: "GET",
        }
    );
};

