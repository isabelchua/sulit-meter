import React from "react";

function SearchBar() {
	// const onChange = e => {
	// 	//value of input of filter
	// 	if (text.current.value !== "") {
	// 		filterContacts(e.target.value);
	// 	} else {
	// 		clearFilter();
	// 	}
	// };

	return (
		<form>
			<input
				type="text"
				//ref={text}
				placeholder="Filter Users..."
				//onChange={onChange}
				name=""
				id=""
				className="search"
			/>
		</form>
	);
}

export default SearchBar;
