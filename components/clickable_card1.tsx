import Image from "next/image";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CardContent, Card } from "@/components/ui/card";

export default function ClickableCard1() {
	return (
		<Card className="bg-white shadow-md rounded-lg overflow-hidden transition-all ease-in-out duration-300 hover:shadow-xl ">
			<a
				href="/help"
				rel="noopener noreferrer"
				className="flex justify-center items-center h-full">
				<CardContent className="flex flex-col items-center gap-4 py-16 px-60">
					<Image
						src={"/image1.png"}
						width={250}
						height={250}
						alt={""}></Image>

					<div className="flex flex-col items-center">
						<h2 className="text-2xl font-semibold text-center">
							I need help! <br className="items-center justify-center" /> My
							account get{" "}
							<span className="text-red-500 font-semibold">hacked</span>.
						</h2>
					</div>
				</CardContent>
			</a>
		</Card>
	);
}
