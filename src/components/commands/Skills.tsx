
import {
	SiPython,
	SiTensorflow,
	SiKeras,
	SiPytorch,
	SiOpenaigym,
	SiAmazonaws,
	SiFacebook
} from "react-icons/si";
import { ImDatabase,ImEqualizer } from "react-icons/im";


export default function Skills() {
	const listOfSkills = [
		{
			Icon: SiPython,
			text: "python",
		},
		{
			Icon: SiTensorflow,
			text: "tensorflow",
		},
		{
			Icon: SiKeras,
			text: "keras",
		},
		{
			Icon: SiPytorch,
			text: "pytorch",
		},
		{
			Icon: SiOpenaigym,
			text: "openai-gym",
		},
		{
			Icon: SiAmazonaws,
			text: "aws sagemaker",
		},
		{
			Icon: ImEqualizer,
			text: "finetuning techniques",
		},
		{
			Icon: SiFacebook,
			text: "facebook reagent",
		},
		{
			Icon: ImDatabase,
			text: "sql & databases",
		},
		


	];

	return (
		<div className="skills-grid">
			{listOfSkills.map(({ Icon, text }, index) => (
				<div key={index} className="skill-item">
					<Icon /> <span>{text}</span>
				</div>
			))}
		</div>
		);
			}
