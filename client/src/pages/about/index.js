import Columns from "../../components/Columns";
import Column from "../../components/Colunm";
import Icon from "../../components/Icon";
import Section from "../../components/Section";
import "./style.sass"

const About = () => {
     
    return (
		<Section
			cName={`pb-6 ${
				window.location.pathname === "/About" ? "fadeIn" : "fadeOut"
			}`}
			id="aboutme">
			<Columns columnsName="is-tablet about-me-div">
				<Column columnStyles="">
					<div className="is-flex is-justify-content-center">
						<img alt="Me" src="./images/portFolioPic.jpg" />
					</div>
				</Column>

				<Column columnStyles="is-two-thirds-desktop has-text-black has-text-centered-mobile is-flex is-flex-direction-column is-justify-content-center">
					<h1 className="is-size-2">About Me</h1>
					<p className="is-size-5 pb-5">
						I'm a recent Computer Science graduate at the University of Washington, with 
						internship experience, eager to learn new skills and
						demonstrate my problem solving skills. Feel free to Contact me
						at{" "}
						<span className="has-text-centered">
							soled25@gmail.com,{" "}
						</span>
						or on any of the contact options below!
					</p>

					
				</Column>
			</Columns>
		</Section>
	);
}

export default About   