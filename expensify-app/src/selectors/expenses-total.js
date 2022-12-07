export default (expenses) => {
	const initialValue = 0;
	return expenses
		.map((e) => e.amount)
		.reduce((acc, curr) => acc + curr, initialValue);
};
