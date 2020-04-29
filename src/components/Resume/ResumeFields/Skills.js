import React from "react";
import { Grid } from "@material-ui/core";

function Skills(props) {
	return (
		<Grid container>
			<Grid item xs={4}>
				<ul>
					{props.skills.map((skill) => {
						return <li>{skill}</li>;
					})}
				</ul>
			</Grid>
		</Grid>
	);
}

export default Skills;
