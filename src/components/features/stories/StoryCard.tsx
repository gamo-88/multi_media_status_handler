import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import type { StoryType } from "@/data/stories";



export default function StoryCard( {story} : {story: StoryType}) {
	return (
		// <Card className="relative w-xs h-[400px] flex flex-col items-center bg-linear-to-t from-black/25 to-indigo-500/0">
		<Card className="relative w-xs h-[400px] flex flex-col justify-end bg-white rounded-md overflow-hidden shadow-lg">
			<div className="storyThumbnail absolute inset-0 w-full h-full z-0 ">
				<img
					// src="storiesImage/s1.png"
					src={story.mediaSrc}
					className="w-full h-full object-cover rounded-md"
					alt={story.userName}
				/>
			</div>
			<Avatar className="absolute z-20 left-4 top-4 ring-2 ring-purple-500 size-[50px]">
				<AvatarImage
					// src="user/userAvatar.png"
					src={story.userPic}
					alt={story.userName}
				/>
				<AvatarFallback>{story.userName}</AvatarFallback>
			</Avatar>
			<div className="filterLayer  absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10 rounded-md " />
			<div className="storyuserName relative z-20 mt-auto w-full px-4 pb-4">
				<p className="text-white text-sm font-semibold drop-shadow-md">
{story.userName}				</p>
			</div>
		</Card>
	);
}
