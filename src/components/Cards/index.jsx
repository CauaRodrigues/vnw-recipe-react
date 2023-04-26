import React from "react";

import { cards } from "./cards.styled";
import repipes from "../../assets/recipes";

export default function Cards() {
	return (
		<div className="cards">
			<S.Wrapper>
				<h2>latest recipes</h2>

				{cards.map(({ name, img }) => (
					<div className="card">
						<img src={img} alt={name} />

						<h3>{name}</h3>
					</div>
				))}
			</S.Wrapper>
		</div>
	);
}
