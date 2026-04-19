import { error } from '@sveltejs/kit';
import { items } from '@/types/app.js';

export const load = ({ params }) => {
	const item = items.find((i) => i.name.toLocaleLowerCase() === params.slug);

	if (!item) {
		throw error(404, 'Item not found');
	}

	return { item };
};
