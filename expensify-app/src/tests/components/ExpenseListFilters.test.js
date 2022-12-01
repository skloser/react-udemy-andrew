import React from "react";
import { shallow } from "enzyme";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { filters, altFilters } from "../fixtures/filters";

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
	setTextFilter = jest.fn();
	sortByDate = jest.fn();
	sortByAmount = jest.fn();
	setStartDate = jest.fn();
	setEndDate = jest.fn();
	wrapper = shallow(
		<ExpenseListFilters
			filters={filters}
			setTextFilter={setTextFilter}
			sortByDate={sortByDate}
			sortByAmount={sortByAmount}
			setStartDate={setStartDate}
			setEndDate={setEndDate}
		/>
	);
});

test("should render ExpenseListFilters correctly", () => {
	expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseListFilters correctly with alt data", () => {
	wrapper.setProps({
		filters: altFilters,
	});
	expect(wrapper).toMatchSnapshot();
});

test("should handle text change", () => {
	wrapper.find("input").simulate("change", { target: { value: "pesho" } });
	expect(setTextFilter).toHaveBeenCalledWith("pesho");
});

test("should handle sort by date", () => {
	wrapper.find("select").simulate("change", { target: { value: "date" } });
	expect(sortByDate).toBeCalled();
});

test("should handle sort by amount", () => {
	wrapper.find("select").simulate("change", { target: { value: "amount" } });
	expect(sortByAmount).toBeCalled();
});

test("should handle date changes", () => {
	wrapper.find("DateRangePicker").prop("onDatesChange")({
		startDate: altFilters.startDate,
		endDate: altFilters.endDate,
	});
	expect(setStartDate).toBeCalled();
	expect(setEndDate).toBeCalled();
});

test("should handle date focus changes", () => {
	wrapper.find("DateRangePicker").prop("onFocusChange")(true);
	expect(wrapper.state("calendarFocused")).toBe(true);
});
