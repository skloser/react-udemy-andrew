import filtersReducer from "../../reducers/filters";
import moment from "moment";

test("should filter reducer set text filter", () => {
	const action = {
		type: "SET_TEXT_FILTER",
		text: "pesho",
	};

	const result = filtersReducer(undefined, action);

	expect(result).toEqual({
		text: "pesho",
		sortBy: "amount", //date or amount
		startDate: moment().startOf("month"),
		endDate: moment().endOf("month"),
		type: "SET_TEXT_FILTER",
	});
});

test("should filder reducer sort by date", () => {
	const action = {
		type: "SORT_BY_DATE",
	};

	const result = filtersReducer(undefined, action);

	expect(result).toEqual({
		text: "rent",
		sortBy: "date", //date or amount
		startDate: moment().startOf("month"),
		endDate: moment().endOf("month"),
	});
});

test("should filter reducer sort by amount", () => {
	const action = {
		type: "SORT_BY_AMOUNT",
	};

	const result = filtersReducer(undefined, action);

	expect(result).toEqual({
		text: "rent",
		sortBy: "amount", //date or amount
		startDate: moment().startOf("month"),
		endDate: moment().endOf("month"),
	});
});

test("should filter reducer set start date", () => {
	const action = {
		type: "SET_START_DATE",
		startDate: moment(0).add(2, "days"),
	};

	const result = filtersReducer(undefined, action);

	expect(result).toEqual({
		text: "rent",
		sortBy: "amount", //date or amount
		startDate: action.startDate,
		endDate: moment().endOf("month"),
	});
});

test("should filter reducer set end date", () => {
	const action = {
		type: "SET_END_DATE",
		endDate: moment(0).add(2, "days"),
	};

	const result = filtersReducer(undefined, action);

	expect(result).toEqual({
		text: "rent",
		sortBy: "amount", //date or amount
		startDate: moment().startOf("month"),
		endDate: action.endDate,
	});
});
