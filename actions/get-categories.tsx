import { Category } from "@/types";
import { get } from "http";

const URL = `${process.env.NEXT_PUBLIC_API_URL}`;

const getCategories = async (): Promise<Category[]> => {
	const res = await fetch(`${URL}/categories`);
	
	return res.json();
}

export default getCategories;
