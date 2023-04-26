import React from "react";
import * as S from "./header.styled";

function Header() {
	return (
		<S.Header>
			<S.Content>
				<S.Logo>
					<img src="/RC.svg" alt="logo" />
				</S.Logo>

				<S.Menu>
					<ul>
						<li>About</li>
						<li>Recipes</li>
						<li className="button">Subscribe</li>
					</ul>
				</S.Menu>
			</S.Content>

			<S.Banner>
				<h1>Recipes</h1>
			</S.Banner>
		</S.Header>
	);
}

export default Header;
