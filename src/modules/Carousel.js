import React, { useState } from "react";
import './Carousel.css';

export function Carousel() {
	const news = ["Cool sunset yesterday",
		"How to make good photos",
		"Are seaguls to become exntinct?",
		"Best travel destinations 2022",
	];

	return (
		<div className="carousel">
			{news.map((text, index) =>
				<div className="carousel_news" key={index}>
					<div className="image"
						style={{ backgroundImage: `url(https://picsum.photos/200/300?random=${index})` }} />
					<div className="carousel_news_text">
						<p className="title_carousel">{text}</p>
						<p className="news_time">{new Date().toLocaleDateString()}</p>
					</div>
				</div>
			)}
		</div>
	);
}