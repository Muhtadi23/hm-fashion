import { request } from "@/Utils/Axios";

const get_categories_url = "/api/v1/public/get-categories";

export const getCategories = async () => {
    const url = get_categories_url;
    return await request(
        {
            url,
            method: "GET",
        }
    );
};

