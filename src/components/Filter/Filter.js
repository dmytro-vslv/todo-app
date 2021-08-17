import { useSelector } from "react-redux";
import "./Filter.css";

const Filter = ({ className, selectedStatus, setSelectedStatus }) => {
	const darkMode = useSelector(state => state.darkMode.darkMode);

	return (
		<div className={`${className} filter ${darkMode ? "filter--dark" : ""}`}>
			<label
				className={`filter__label ${selectedStatus === "all" ? "filter__label--selected" : ""}`}
				htmlFor="all"
			>
				All
				<input
					className="filter__radio"
					type="radio"
					name="status"
					id="all"
					value="all"
					onChange={e => setSelectedStatus(e.target.value)}
				/>
			</label>

			<label
				className={`filter__label ${selectedStatus === "active" ? "filter__label--selected" : ""}`}
				htmlFor="active"
			>
				Active
				<input
					className="filter__radio"
					type="radio"
					name="status"
					id="active"
					value="active"
					onChange={e => setSelectedStatus(e.target.value)}
				/>
			</label>

			<label
				className={`filter__label ${selectedStatus === "completed" ? "filter__label--selected" : ""}`}
				htmlFor="completed"
			>
				Completed
				<input
					className="filter__radio"
					type="radio"
					name="status"
					id="completed"
					value="completed"
					onChange={e => setSelectedStatus(e.target.value)}
				/>
			</label>
		</div>
	);
};

export default Filter;
