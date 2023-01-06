import { Result } from "@customTypes/Reviews";

export default function getLink(review: Result) {
	if (review.movie) {
		return review.movie?.type === "tv"
			? `/tv-shows/${review.movie.id}`
			: review.movie?.type === "movie"
			? `/movies/${review.movie.id}`
			: "#";
	} else if (review.thought_on) {
		return review.thought_on?.type === "tv"
			? `/tv-shows/${review.thought_on.id}`
			: review.thought_on?.type === "movie"
			? `/movies/${review.thought_on.id}`
			: "#";
	} else {
		return "#";
	}
}
