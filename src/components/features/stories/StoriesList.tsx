import React from "react";
import StoryCard from "./StoryCard";
import { stories } from "@/data/stories";
import CreateStoryCard from "./CreateStoryCard";

export default function StoriesList() {
	return (
		<div>
			<section className="flex gap-4">
                <CreateStoryCard/>
				{stories.map((story) => (
					<StoryCard story={story} />
				))}
			</section>
		</div>
	);
}
