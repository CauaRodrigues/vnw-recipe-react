import React from "react";

import * as S from "./cards.styled";

export default function Cards() {
	return (
		<S.Container>
			<h2>latest recipes</h2>

			<S.Content>
				<S.Card>
					<img src="cake.png" alt="cake" />

					<div className="card--info">
						<figcaption>Red Velvet Cake</figcaption>
					</div>
				</S.Card>

				<S.Card>
					<img src="pizza.png" alt="pizza" />

					<div className="card--info">
						<figcaption>Red Velvet Cake</figcaption>
					</div>
				</S.Card>

				<S.Card>
					<img src="butter.png" alt="butter" />

					<div className="card--info">
						<figcaption>Red Velvet Cake</figcaption>
					</div>
				</S.Card>
			</S.Content>
		</S.Container>
	);
}
