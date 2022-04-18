import React, { useState, useEffect } from "react";
import './LatestStory.css';

export default function LatestStory(props) {

	const [selectedNewsObject, selectNews] = useState(props.news);

	useEffect(() => {
		selectNews(props.news);
	}, [props.news]);

	return (
		<div className="breaking_news">
			<div className="main_photo_div">
				<span className="label">Hello</span>
				<img alt="main photo of main news" src={selectedNewsObject.image} className="main_photo" />
			</div>
			<h3 title="Click to open the article" onClick={() => window.open(selectedNewsObject.url)}>
				{selectedNewsObject.title}
			</h3>
			<div className="bottom_part">
				<div className="author">
					<div className="author_credentials">
						<img className="author_image" alt="my photo"
							src="https://media-exp1.licdn.com/dms/image/C4D03AQF91V32uk2pHQ/profile-displayphoto-shrink_100_100/0/1616173449461?e=2147483647&v=beta&t=qzgP4pTcpRNwlekLHgRI137FDTk2GWdN1w6MNbRXGMc" />
						<h4 className="author_name">Philip Bonadykov</h4>
						<p className="news_time">{selectedNewsObject.date}</p>
					</div>
				</div>

				<h4>{selectedNewsObject.text}</h4>
			</div>
		</div>
	);
}