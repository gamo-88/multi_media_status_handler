import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";
import React from "react";

export default function CreateStoryCard() {
	return (
		<Card className="relative w-xs h-[400px] p-2 flex flex-col  bg-white rounded-md overflow-hidden shadow-lg">
			<img src="user/userAvatar.png" alt="desc" className="h-[70%] w-full  object-cover rounded-md" />
			<div className="h-[30%] flex flex-col items-center">
				<Avatar className="-mt-13 cursor-pointer ring-4 ring-purple-500 bg-background flex items-center justify-center size-15">
                    <Plus size={40}/>
					<AvatarFallback>kgm</AvatarFallback>
				</Avatar>
                <p className="text-center">
                    Ajouter une story
                </p>
			</div>
		</Card>
	);
}
