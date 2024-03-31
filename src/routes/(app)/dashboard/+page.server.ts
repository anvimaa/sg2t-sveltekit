
import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    const response = await prisma.task.findMany({
        include: { author: true },
    })

    return { tasks: response };
}) satisfies PageServerLoad; 