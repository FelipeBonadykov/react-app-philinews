import React, { Component, useState } from "react";
import './Sections.css';

const ListItem = ({ name, index }) => {
	const [showDropdown, setShowDropdown] = useState("none");

	const openWindow = (query) => {
		window.open(`https://www.google.com/search?q=${query}`, "_blank");
	}

	return (<div className="dropdown_container">
		<li className="section" onClick={() => openWindow(name)}
			value={name} key={index}
			onMouseEnter={() => setShowDropdown("flex")}
			onMouseLeave={() => setShowDropdown("none")}>
			{name}
		</li>
		<div className="dropdown" style={{ display: showDropdown }} key={index}>
			We are still developing {name} section
		</div>
	</div>);
}

export class Sections extends Component {
	state = {
		sections: ['Economy', 'Home', 'Politics','Celebrities','IT'],
	};

	render() {
		return (<>
			<hr />
			<ul className="sections">
				{this.state.sections.map((name, index) =>
					<ListItem name={name} key={index} index={index} />)}
			</ul>
			<hr/>
		</>);
	}
}