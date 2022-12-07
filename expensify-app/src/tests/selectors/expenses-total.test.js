import getExpensesTotal from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

test("should return 0 for no items", () => {
	const totalAmount = getExpensesTotal([]);
	expect(totalAmount).toBe(0);
});

test("should add up for single expense", () => {
	const totalAmount = getExpensesTotal([{ id: 4, amount: 300 }]);
	expect(totalAmount).toBe(300);
});

test("should add up for multiple expenses", () => {
	const totalAmount = getExpensesTotal(expenses);
	expect(totalAmount).toBe(114195);
});
