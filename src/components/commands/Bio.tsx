import { GoVerified } from "react-icons/go";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Bio() {
	const links = [
		{
			title: "github",
			Icon: SiGithub,
			href: "https://github.com/ch33nchan",
			text: "@ch33nchan",
		},
		{
			title: "huggingface",
			Icon: () => <span role="img" aria-label="hugging face">🤗</span>,
			href: "https://huggingface.co/cheenchan",
			text: "@cheenchan",
		},
		{
			title: "linkedIn",
			Icon: SiLinkedin,
			href: "https://www.linkedin.com/in/srinivastb",
			text: "@srinivastb",
		},
	];
	return (
		<div className="mt-2 mb-2 w-11/12 mx-auto">
			<div className="flex items-center gap-3 mb-3 ">
				<img
					src={`${process.env.PUBLIC_URL}/cheen.jpeg`}
					alt="srinivas"
					className="w-40 h-40 rounded-full border-2 border-yellow-200 object-cover"
				/>
				<div>
					<div className="flex items-center gap-1">
						<h1 className="text-2xl">Srinivas T B</h1>
						<GoVerified className="text-blue-500 text-2xl" />
					</div>
					<p className="text-lg text-white-400">21 laps around the sun as a leo.</p>
				</div>
			</div>
			<p>
			🤖 hello, world! a wanna be llm engineer venturing into autonomous agents and large language models. 
			research enthusiast maybe an innovation seeker? idk. 
			</p>
			<div className="grid grid-cols-2">
				{links.map(({ Icon, text, href, title }, index) => {
					return (
						<div className="flex items-center gap-1 mt-3" key={index}>
							<div className="text-lg flex items-center gap-1 text-yellow-200">
								<Icon />
								<h1>{title}</h1>
							</div>
							<a
								href={href}
								target="_blank"
								rel="noreferrer"
								className="flex-1 underline text-blue-300 "
							>
								{text}
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
}
