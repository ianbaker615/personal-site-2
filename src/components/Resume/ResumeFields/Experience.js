import React from "react";
import { Grid } from "@material-ui/core";

function Experience(props) {
	return (
		<Grid container>
			<Grid item xs={2}>
				{props.startYear && props.endYear && (
					<p>
						{props.startYear} - {props.endYear}
					</p>
				)}
			</Grid>
			<Grid item xs={10}>
				<h4 style={{ marginTop: "0px" }}>{props.jobName}</h4>
				<ul>
					{props.bullets.map((bullet) => {
						return <li>{bullet}</li>;
					})}
				</ul>
			</Grid>
		</Grid>
	);
}

export default Experience;