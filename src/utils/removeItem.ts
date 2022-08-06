export const removeItem = (id: number, arry: []) => {
	const newProjects = arry.filter((_, i) => i !== id);
    // dispatch(setProjects(newProjects));
    // dispatch()
    return newProjects
};
