import React from "react";
import { Game } from "../hooks/useGames";
import {
	Card,
	CardBody,
	HStack,
	Heading,
	Image,
	Text,
	VStack,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<Card height={"100%"}>
			<Image src={getCroppedImageUrl(game.background_image)} />
			<CardBody>
				<HStack marginBottom={3} justifyContent={"space-between"}>
					<PlatformIconList
						platforms={game.parent_platforms.map((p) => p.platform)}
					/>
					<CriticScore score={game.metacritic} />
				</HStack>
				<VStack align={"left"} alignContent={"space-between"}>
					<Heading fontSize="2xl">{game.name}</Heading>
					<Emoji rating={game.rating_top} />
				</VStack>
			</CardBody>
		</Card>
	);
};

export default GameCard;
