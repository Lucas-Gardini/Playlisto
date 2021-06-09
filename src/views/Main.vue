<template>
	<div class="container">
		<div class="side-bar" style="background-color: purple">
			deserunt nam maxime. Ipsam ipsum, perferendis soluta similique accusantium consequuntur
		</div>
		<div class="content">
			<div v-for="(video, i) in ytSearchResults" :key="i">
				<ul>
					<li>{{ video.title }}</li>
					<li>{{ video.author.name }}</li>
					<li><img :src="video.bestThumbnail.url" width="32" height="32" /></li>
					<li>{{ video.description }}</li>
					<li>{{ video.duration }}</li>
					<li><a :href="video.url" target="_blank">ass</a></li>
					<li>{{ video.views }}</li>
					<li><button @click="changeCurrentMusic(i)">play</button></li>
				</ul>
			</div>
		</div>
		<div class="player" style="background-color: whitesmoke">
			<player-bar
				:name="music.name"
				:channel="music.channel"
				:musicThumb="music.musicThumb"
				:link="music.link"
			/>
		</div>
	</div>
</template>

<script>
import PlayerBar from "../components/PlayerBar.vue";
import { youtubeSearcher } from "../utils/ytsr";
export default {
	components: {
		PlayerBar,
	},
	data() {
		return {
			ytSearcher: new youtubeSearcher(),
			ytSearchResults: [
				{
					type: "video",
					title: "Nicki Minaj - Lookin Ass (Explicit)",
					id: "2mwNbTL3pOs",
					url: "https://www.youtube.com/watch?v=2mwNbTL3pOs",
					bestThumbnail: {
						url:
							"https://i.ytimg.com/vi/2mwNbTL3pOs/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDacg5f4B6sRkzHNmYafnNeIz-k9A",
						width: 720,
						height: 404,
					},
					thumbnails: [
						{
							url:
								"https://i.ytimg.com/vi/2mwNbTL3pOs/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDacg5f4B6sRkzHNmYafnNeIz-k9A",
							width: 720,
							height: 404,
						},
						{
							url:
								"https://i.ytimg.com/vi/2mwNbTL3pOs/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLALlz5DdPcK9L6dFGisrrbV_2vsOg",
							width: 360,
							height: 202,
						},
					],
					isUpcoming: false,
					upcoming: null,
					isLive: false,
					badges: [],
					author: {
						name: "Nicki Minaj",
						channelID: "UC3jOd7GUMhpgJRBhiLzuLsg",
						url: "https://www.youtube.com/channel/UC3jOd7GUMhpgJRBhiLzuLsg",
						bestAvatar: {
							url:
								"https://yt3.ggpht.com/ytc/AAUvwngXW3IRBNrMdmOCE-XxiGINywAjt0Lvgeis1hS5WQ=s88-c-k-c0x00ffffff-no-rj",
							width: 68,
							height: 68,
						},
						avatars: [
							{
								url:
									"https://yt3.ggpht.com/ytc/AAUvwngXW3IRBNrMdmOCE-XxiGINywAjt0Lvgeis1hS5WQ=s88-c-k-c0x00ffffff-no-rj",
								width: 68,
								height: 68,
							},
						],
						ownerBadges: ["Official Artist Channel"],
						verified: true,
					},
					description:
						"Music video by Nicki Minaj performing Lookin Ass (Explicit). © 2014 Cash Money Records Inc. Subscribe here: ...",
					views: 49151302,
					duration: "2:49",
					uploadedAt: "7 years ago",
				},
				{
					type: "video",
					title: "Big Sean - Dance (A$$) Remix ft. Nicki Minaj (Official Music Video)",
					id: "pn1VGytzXus",
					url: "https://www.youtube.com/watch?v=pn1VGytzXus",
					bestThumbnail: {
						url:
							"https://i.ytimg.com/vi/pn1VGytzXus/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAgL-fuHxqRjaighBjLc_UDVwYuVQ",
						width: 720,
						height: 404,
					},
					thumbnails: [
						{
							url:
								"https://i.ytimg.com/vi/pn1VGytzXus/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAgL-fuHxqRjaighBjLc_UDVwYuVQ",
							width: 720,
							height: 404,
						},
						{
							url:
								"https://i.ytimg.com/vi/pn1VGytzXus/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAvfadaU6Dy5_hC78rv3bSemcmtvg",
							width: 360,
							height: 202,
						},
					],
					isUpcoming: false,
					upcoming: null,
					isLive: false,
					badges: [],
					author: {
						name: "Big Sean",
						channelID: "UCYFyHJMMKd7C8M0_TsleUQA",
						url: "https://www.youtube.com/channel/UCYFyHJMMKd7C8M0_TsleUQA",
						bestAvatar: {
							url:
								"https://yt3.ggpht.com/ytc/AAUvwngIjTDCHQiKHCax5D-Lz5F4E1jNN1GZgAhh8-_7jw=s88-c-k-c0x00ffffff-no-rj",
							width: 68,
							height: 68,
						},
						avatars: [
							{
								url:
									"https://yt3.ggpht.com/ytc/AAUvwngIjTDCHQiKHCax5D-Lz5F4E1jNN1GZgAhh8-_7jw=s88-c-k-c0x00ffffff-no-rj",
								width: 68,
								height: 68,
							},
						],
						ownerBadges: ["Official Artist Channel"],
						verified: true,
					},
					description:
						"Music video by Big Sean performing Dance (A$$) Remix. ©: Getting Out Our Dreams, Inc./The Island Def Jam Music Group ...",
					views: 108156227,
					duration: "3:51",
					uploadedAt: "9 years ago",
				},
				{
					type: "video",
					title: "Eminem - A** Like That (Super Clean Version, Closed Captioned)",
					id: "um4-d7VzZiE",
					url: "https://www.youtube.com/watch?v=um4-d7VzZiE",
					bestThumbnail: {
						url:
							"https://i.ytimg.com/vi/um4-d7VzZiE/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBdgTiOeQ162sp_YAfeutlvGhXEVQ",
						width: 720,
						height: 404,
					},
					thumbnails: [
						{
							url:
								"https://i.ytimg.com/vi/um4-d7VzZiE/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBdgTiOeQ162sp_YAfeutlvGhXEVQ",
							width: 720,
							height: 404,
						},
						{
							url:
								"https://i.ytimg.com/vi/um4-d7VzZiE/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLD-zEncTvHlIcaoYZRRjuppBdOQnw",
							width: 360,
							height: 202,
						},
					],
					isUpcoming: false,
					upcoming: null,
					isLive: false,
					badges: ["CC"],
					author: {
						name: "EminemMusic",
						channelID: "UCfM3zsQsOnfWNUppiycmBuw",
						url: "https://www.youtube.com/channel/UCfM3zsQsOnfWNUppiycmBuw",
						bestAvatar: {
							url:
								"https://yt3.ggpht.com/ytc/AAUvwnh3-vLogBP_MUtS0FeQxzUxqh63BWywwwLRT2zg9A=s88-c-k-c0x00ffffff-no-rj",
							width: 68,
							height: 68,
						},
						avatars: [
							{
								url:
									"https://yt3.ggpht.com/ytc/AAUvwnh3-vLogBP_MUtS0FeQxzUxqh63BWywwwLRT2zg9A=s88-c-k-c0x00ffffff-no-rj",
								width: 68,
								height: 68,
							},
						],
						ownerBadges: ["Official Artist Channel"],
						verified: true,
					},
					description:
						"REMASTERED IN HD! Music video by Eminem performing A** Like That. (C) 2005 Aftermath Entertainment/Interscope Records ...",
					views: 128163828,
					duration: "5:15",
					uploadedAt: "11 years ago",
				},
				{
					type: "video",
					title: "Scooter - Move Your Ass (Official Video HQ)",
					id: "2RneoccuJwY",
					url: "https://www.youtube.com/watch?v=2RneoccuJwY",
					bestThumbnail: {
						url:
							"https://i.ytimg.com/vi/2RneoccuJwY/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDJ1XzwXmgsRMURwK_wjyRwYHObxQ",
						width: 480,
						height: 270,
					},
					thumbnails: [
						{
							url:
								"https://i.ytimg.com/vi/2RneoccuJwY/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDJ1XzwXmgsRMURwK_wjyRwYHObxQ",
							width: 480,
							height: 270,
						},
					],
					isUpcoming: false,
					upcoming: null,
					isLive: false,
					badges: [],
					author: {
						name: "Kontor.TV",
						channelID: "UCb3tJ5NKw7mDxyaQ73mwbRg",
						url: "https://www.youtube.com/user/kontor",
						bestAvatar: {
							url:
								"https://yt3.ggpht.com/ytc/AAUvwniKnDUWkhC9_5VzNceuJPwSObOJHt8FIMi600Gxtqk=s68-c-k-c0x00ffffff-no-rj",
							width: 68,
							height: 68,
						},
						avatars: [
							{
								url:
									"https://yt3.ggpht.com/ytc/AAUvwniKnDUWkhC9_5VzNceuJPwSObOJHt8FIMi600Gxtqk=s68-c-k-c0x00ffffff-no-rj",
								width: 68,
								height: 68,
							},
						],
						ownerBadges: ["Verified"],
						verified: true,
					},
					description:
						"▻SCOOTER LIVE 2021 08.05.21 DE - Dresden //Junge Garde (Nachholshow) 12.06.21 HU - Budapest Park // Budapest 19.06.21 ...",
					views: 8285722,
					duration: "3:28",
					uploadedAt: "12 years ago",
				},
				{
					type: "video",
					title: "45-Minute Abs, Ass, and Attitude Workout",
					id: "P9WnxhLbsE4",
					url: "https://www.youtube.com/watch?v=P9WnxhLbsE4",
					bestThumbnail: {
						url:
							"https://i.ytimg.com/vi/P9WnxhLbsE4/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDzfVxHOELWTaK4fAT8rsUlaIBADg",
						width: 480,
						height: 270,
					},
					thumbnails: [
						{
							url:
								"https://i.ytimg.com/vi/P9WnxhLbsE4/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDzfVxHOELWTaK4fAT8rsUlaIBADg",
							width: 480,
							height: 270,
						},
					],
					isUpcoming: false,
					upcoming: null,
					isLive: false,
					badges: [],
					author: {
						name: "POPSUGAR Fitness",
						channelID: "UCBINFWq52ShSgUFEoynfSwg",
						url: "https://www.youtube.com/user/popsugartvfit",
						bestAvatar: {
							url:
								"https://yt3.ggpht.com/5vCMfgUrHYMdNQbQSHkVFKoHbQ5d7Vh-cWqnpyM5GTt_90d4U636VmCbz3yPBu3_n8uH9UWz=s68-c-k-c0x00ffffff-no-rj",
							width: 68,
							height: 68,
						},
						avatars: [
							{
								url:
									"https://yt3.ggpht.com/5vCMfgUrHYMdNQbQSHkVFKoHbQ5d7Vh-cWqnpyM5GTt_90d4U636VmCbz3yPBu3_n8uH9UWz=s68-c-k-c0x00ffffff-no-rj",
								width: 68,
								height: 68,
							},
						],
						ownerBadges: ["Verified"],
						verified: true,
					},
					description:
						"This 45-minute workout from celebrity trainer Astrid Swan will tone your abs and booty, but also leave you feeling extra sassy.",
					views: 1290366,
					duration: "45:08",
					uploadedAt: "3 years ago",
				},
				{
					type: "video",
					title: "Key & Peele - Slap-Ass",
					id: "9Mlp_Gcc_5Q",
					url: "https://www.youtube.com/watch?v=9Mlp_Gcc_5Q",
					bestThumbnail: {
						url:
							"https://i.ytimg.com/vi/9Mlp_Gcc_5Q/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAo-dQ0Biv9_5PrjpxzBkzb8eV-rg",
						width: 720,
						height: 404,
					},
					thumbnails: [
						{
							url:
								"https://i.ytimg.com/vi/9Mlp_Gcc_5Q/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAo-dQ0Biv9_5PrjpxzBkzb8eV-rg",
							width: 720,
							height: 404,
						},
						{
							url:
								"https://i.ytimg.com/vi/9Mlp_Gcc_5Q/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLChwkefZpvHD1XccC4hkEHBbb3gYw",
							width: 360,
							height: 202,
						},
					],
					isUpcoming: false,
					upcoming: null,
					isLive: false,
					badges: ["CC"],
					author: {
						name: "Comedy Central",
						channelID: "UCUsN5ZwHx2kILm84-jPDeXw",
						url: "https://www.youtube.com/user/comedycentral",
						bestAvatar: {
							url:
								"https://yt3.ggpht.com/ytc/AAUvwngbXOjQ4WkgQ2hANiKIwUkuti_KyIqbkblmoBQsSA=s68-c-k-c0x00ffffff-no-rj",
							width: 68,
							height: 68,
						},
						avatars: [
							{
								url:
									"https://yt3.ggpht.com/ytc/AAUvwngbXOjQ4WkgQ2hANiKIwUkuti_KyIqbkblmoBQsSA=s68-c-k-c0x00ffffff-no-rj",
								width: 68,
								height: 68,
							},
						],
						ownerBadges: ["Verified"],
						verified: true,
					},
					description:
						"A baseball team stages an intervention when a player goes too far with his congratulatory ass-slapping. About Key & Peele: Key ...",
					views: 23341896,
					duration: "6:08",
					uploadedAt: "7 years ago",
				},
				{
					type: "video",
					title:
						"Dimitri Vegas and Like Mike vs. Paris Hilton - Best Friend's Ass (Official Music Video)",
					id: "yuzQaR4Rmr8",
					url: "https://www.youtube.com/watch?v=yuzQaR4Rmr8",
					bestThumbnail: {
						url:
							"https://i.ytimg.com/vi/yuzQaR4Rmr8/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCiKJ-2gsGTD0n4Z6O_NJtmfXzxAw",
						width: 480,
						height: 270,
					},
					thumbnails: [
						{
							url:
								"https://i.ytimg.com/vi/yuzQaR4Rmr8/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCiKJ-2gsGTD0n4Z6O_NJtmfXzxAw",
							width: 480,
							height: 270,
						},
					],
					isUpcoming: false,
					upcoming: null,
					isLive: false,
					badges: [],
					author: {
						name: "Dimitri Vegas & Like Mike",
						channelID: "UCxmNWF8fQ4miqfGs84dFVrg",
						url: "https://www.youtube.com/channel/UCxmNWF8fQ4miqfGs84dFVrg",
						bestAvatar: {
							url:
								"https://yt3.ggpht.com/ytc/AAUvwnjjx_2-UkAyUD-pj0LFJIUUJQ4WY9wE1lkpRycTZQ=s88-c-k-c0x00ffffff-no-rj",
							width: 68,
							height: 68,
						},
						avatars: [
							{
								url:
									"https://yt3.ggpht.com/ytc/AAUvwnjjx_2-UkAyUD-pj0LFJIUUJQ4WY9wE1lkpRycTZQ=s88-c-k-c0x00ffffff-no-rj",
								width: 68,
								height: 68,
							},
						],
						ownerBadges: ["Official Artist Channel"],
						verified: true,
					},
					description:
						"Probably one of the most anticipated music videos of the year, having fans and media speculating after Paris Hilton and Kim ...",
					views: 5561435,
					duration: "2:54",
					uploadedAt: "2 years ago",
				},
				{
					type: "video",
					title: "Slap-Ass - Key & Peele",
					id: "5-uIwpo0dCU",
					url: "https://www.youtube.com/watch?v=5-uIwpo0dCU",
					bestThumbnail: {
						url:
							"https://i.ytimg.com/vi/5-uIwpo0dCU/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCEKQrZ2wi0T6870n8CQ1-zaoxRGQ",
						width: 720,
						height: 404,
					},
					thumbnails: [
						{
							url:
								"https://i.ytimg.com/vi/5-uIwpo0dCU/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCEKQrZ2wi0T6870n8CQ1-zaoxRGQ",
							width: 720,
							height: 404,
						},
						{
							url:
								"https://i.ytimg.com/vi/5-uIwpo0dCU/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLArjkb5BDR0vGjgxcp966g95s9Cdg",
							width: 360,
							height: 202,
						},
					],
					isUpcoming: false,
					upcoming: null,
					isLive: false,
					badges: [],
					author: {
						name: "Key & Peele",
						channelID: "UCdN4aXTrHAtfgbVG9HjBmxQ",
						url: "https://www.youtube.com/channel/UCdN4aXTrHAtfgbVG9HjBmxQ",
						bestAvatar: {
							url:
								"https://yt3.ggpht.com/ytc/AAUvwniYbLT87mGwiyzmKM29Wq6-bkr7CD97CIdXuzTe=s68-c-k-c0x00ffffff-no-rj",
							width: 68,
							height: 68,
						},
						avatars: [
							{
								url:
									"https://yt3.ggpht.com/ytc/AAUvwniYbLT87mGwiyzmKM29Wq6-bkr7CD97CIdXuzTe=s68-c-k-c0x00ffffff-no-rj",
								width: 68,
								height: 68,
							},
						],
						ownerBadges: [],
						verified: false,
					},
					description:
						"A baseball team stages an intervention when a player goes too far with his congratulatory ass-slapping. About Key & Peele: Key ...",
					views: 4010417,
					duration: "4:46",
					uploadedAt: "2 years ago",
				},
				{
					type: "video",
					title: "KICK-ASS (2010) - Official Trailer #1",
					id: "2rpXHqnGDXo",
					url: "https://www.youtube.com/watch?v=2rpXHqnGDXo",
					bestThumbnail: {
						url:
							"https://i.ytimg.com/vi/2rpXHqnGDXo/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCH6ZFeIhoE07pnOeO922Uq8Si_9Q",
						width: 720,
						height: 404,
					},
					thumbnails: [
						{
							url:
								"https://i.ytimg.com/vi/2rpXHqnGDXo/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCH6ZFeIhoE07pnOeO922Uq8Si_9Q",
							width: 720,
							height: 404,
						},
						{
							url:
								"https://i.ytimg.com/vi/2rpXHqnGDXo/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCdIpOd_k05z9VrCGzXbcaP6pUjlw",
							width: 360,
							height: 202,
						},
					],
					isUpcoming: false,
					upcoming: null,
					isLive: false,
					badges: [],
					author: {
						name: "Lionsgate Movies",
						channelID: "UCJ6nMHaJPZvsJ-HmUmj1SeA",
						url: "https://www.youtube.com/user/LionsgateLIVE",
						bestAvatar: {
							url:
								"https://yt3.ggpht.com/ytc/AAUvwnhCF5_1IJ9dkuF51Wa094V5YXnbnwAXkfJlsWjFKRg=s68-c-k-c0x00ffffff-no-rj",
							width: 68,
							height: 68,
						},
						avatars: [
							{
								url:
									"https://yt3.ggpht.com/ytc/AAUvwnhCF5_1IJ9dkuF51Wa094V5YXnbnwAXkfJlsWjFKRg=s68-c-k-c0x00ffffff-no-rj",
								width: 68,
								height: 68,
							},
						],
						ownerBadges: ["Verified"],
						verified: true,
					},
					description:
						"How come nobodys ever tried to be a superhero? When Dave Lizewski ordinary New York teenager and rabid comic-book geek ...",
					views: 1610682,
					duration: "2:30",
					uploadedAt: "11 years ago",
				},
				{
					type: "video",
					title: "Busta Rhymes - Light Your Ass On Fire ft. Pharrell",
					id: "pyLuh2wRBuM",
					url: "https://www.youtube.com/watch?v=pyLuh2wRBuM",
					bestThumbnail: {
						url:
							"https://i.ytimg.com/vi/pyLuh2wRBuM/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBYdXhA2wWnG6TLTY7zrMzz8k9qoQ",
						width: 720,
						height: 404,
					},
					thumbnails: [
						{
							url:
								"https://i.ytimg.com/vi/pyLuh2wRBuM/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBYdXhA2wWnG6TLTY7zrMzz8k9qoQ",
							width: 720,
							height: 404,
						},
						{
							url:
								"https://i.ytimg.com/vi/pyLuh2wRBuM/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCyOlWFBu9prB6VF2eVTd53uKmySA",
							width: 360,
							height: 202,
						},
					],
					isUpcoming: false,
					upcoming: null,
					isLive: false,
					badges: [],
					author: {
						name: "Busta Rhymes",
						channelID: "UCCWKLP04ZkaVpxb6l5BKZOw",
						url: "https://www.youtube.com/channel/UCCWKLP04ZkaVpxb6l5BKZOw",
						bestAvatar: {
							url:
								"https://yt3.ggpht.com/ytc/AAUvwnjK7UJjEBOx0eNdlWoxLVbox2Yf9wjlKKZ-ZQOg=s88-c-k-c0x00ffffff-no-rj",
							width: 68,
							height: 68,
						},
						avatars: [
							{
								url:
									"https://yt3.ggpht.com/ytc/AAUvwnjK7UJjEBOx0eNdlWoxLVbox2Yf9wjlKKZ-ZQOg=s88-c-k-c0x00ffffff-no-rj",
								width: 68,
								height: 68,
							},
						],
						ownerBadges: ["Official Artist Channel"],
						verified: true,
					},
					description:
						"Music video by Busta Rhymes performing Light Your Ass On Fire. (C) 2003 J Records, a unit of BMG.",
					views: 3323495,
					duration: "4:02",
					uploadedAt: "6 years ago",
				},
				{
					type: "video",
					title: "Key & Peele - Slap-Ass: In Recovery - Uncensored",
					id: "AQM2joP4fsQ",
					url: "https://www.youtube.com/watch?v=AQM2joP4fsQ",
					bestThumbnail: {
						url:
							"https://i.ytimg.com/vi/AQM2joP4fsQ/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLABTrPD0wJCsms3nn84OPdq7FYWuQ",
						width: 720,
						height: 404,
					},
					thumbnails: [
						{
							url:
								"https://i.ytimg.com/vi/AQM2joP4fsQ/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLABTrPD0wJCsms3nn84OPdq7FYWuQ",
							width: 720,
							height: 404,
						},
						{
							url:
								"https://i.ytimg.com/vi/AQM2joP4fsQ/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAM8Ttv0pT92W-ki5j6gxBFedxPpw",
							width: 360,
							height: 202,
						},
					],
					isUpcoming: false,
					upcoming: null,
					isLive: false,
					badges: ["CC"],
					author: {
						name: "Comedy Central",
						channelID: "UCUsN5ZwHx2kILm84-jPDeXw",
						url: "https://www.youtube.com/user/comedycentral",
						bestAvatar: {
							url:
								"https://yt3.ggpht.com/ytc/AAUvwngbXOjQ4WkgQ2hANiKIwUkuti_KyIqbkblmoBQsSA=s68-c-k-c0x00ffffff-no-rj",
							width: 68,
							height: 68,
						},
						avatars: [
							{
								url:
									"https://yt3.ggpht.com/ytc/AAUvwngbXOjQ4WkgQ2hANiKIwUkuti_KyIqbkblmoBQsSA=s68-c-k-c0x00ffffff-no-rj",
								width: 68,
								height: 68,
							},
						],
						ownerBadges: ["Verified"],
						verified: true,
					},
					description:
						"After returning from treatment, Rafi tries to avoid the temptation of slapping asses in the Rhinos locker room. About Key & Peele: ...",
					views: 23181387,
					duration: "6:34",
					uploadedAt: "6 years ago",
				},
				{
					type: "video",
					title: "Gym Class Heroes: Ass Back Home ft. Neon Hitch [OFFICIAL VIDEO]",
					id: "ltOR2VzDZFM",
					url: "https://www.youtube.com/watch?v=ltOR2VzDZFM",
					bestThumbnail: {
						url:
							"https://i.ytimg.com/vi/ltOR2VzDZFM/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBdBlli1xEf7dkFE1924vjBOFYboQ",
						width: 720,
						height: 404,
					},
					thumbnails: [
						{
							url:
								"https://i.ytimg.com/vi/ltOR2VzDZFM/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBdBlli1xEf7dkFE1924vjBOFYboQ",
							width: 720,
							height: 404,
						},
						{
							url:
								"https://i.ytimg.com/vi/ltOR2VzDZFM/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBbDFTOiHDEl0g_yWX7ORbNOuCR2g",
							width: 360,
							height: 202,
						},
					],
					isUpcoming: false,
					upcoming: null,
					isLive: false,
					badges: [],
					author: {
						name: "Fueled By Ramen",
						channelID: "UClVrJwcIy7saPcGc1nct80A",
						url: "https://www.youtube.com/user/FueledByRamen",
						bestAvatar: {
							url:
								"https://yt3.ggpht.com/ytc/AAUvwng7cR8-RZw7I4ggiHg1D_RzhwhPCqB94Cz4hLDeTw=s68-c-k-c0x00ffffff-no-rj",
							width: 68,
							height: 68,
						},
						avatars: [
							{
								url:
									"https://yt3.ggpht.com/ytc/AAUvwng7cR8-RZw7I4ggiHg1D_RzhwhPCqB94Cz4hLDeTw=s68-c-k-c0x00ffffff-no-rj",
								width: 68,
								height: 68,
							},
						],
						ownerBadges: ["Verified"],
						verified: true,
					},
					description:
						"Directed by Dugan O'Neal LYRICS Oh, it's so sexy y'all I don't know where you're going Or when you're coming home I left the ...",
					views: 82958184,
					duration: "4:01",
					uploadedAt: "9 years ago",
				},
				{
					type: "video",
					title: 'AVENGERS INFINITY WAR "Kick Names, Take Ass" Clip',
					id: "Xy1zUN9ooM8",
					url: "https://www.youtube.com/watch?v=Xy1zUN9ooM8",
					bestThumbnail: {
						url:
							"https://i.ytimg.com/vi/Xy1zUN9ooM8/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBCzW50NjHGw02uJg6qW6vj4ueyLw",
						width: 480,
						height: 270,
					},
					thumbnails: [
						{
							url:
								"https://i.ytimg.com/vi/Xy1zUN9ooM8/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBCzW50NjHGw02uJg6qW6vj4ueyLw",
							width: 480,
							height: 270,
						},
					],
					isUpcoming: false,
					upcoming: null,
					isLive: false,
					badges: [],
					author: {
						name: "Flicks And The City Clips",
						channelID: "UCnIup-Jnwr6emLxO8McEhSw",
						url: "https://www.youtube.com/user/FlicksMovieTrailers",
						bestAvatar: {
							url:
								"https://yt3.ggpht.com/ytc/AAUvwnidsI5pg_9B-ttzsUeYrkFIiAHbewIOeU4gwWSgNg=s68-c-k-c0x00ffffff-no-rj",
							width: 68,
							height: 68,
						},
						avatars: [
							{
								url:
									"https://yt3.ggpht.com/ytc/AAUvwnidsI5pg_9B-ttzsUeYrkFIiAHbewIOeU4gwWSgNg=s68-c-k-c0x00ffffff-no-rj",
								width: 68,
								height: 68,
							},
						],
						ownerBadges: [],
						verified: false,
					},
					description:
						'Avengers Infinity War "Kick Names, Take Ass" movie clip + official Blu-ray, DVD & digital trailer. Subscribe to our main channel ...',
					views: 247432,
					duration: "2:34",
					uploadedAt: "2 years ago",
				},
				{
					type: "video",
					title:
						"Ismo: Ass Is The Most Complicated Word In The English Language  - CONAN on TBS",
					id: "RAGcDi0DRtU",
					url: "https://www.youtube.com/watch?v=RAGcDi0DRtU",
					bestThumbnail: {
						url:
							"https://i.ytimg.com/vi/RAGcDi0DRtU/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBF15HfNesaktIV6BEXnpAfCc2kdw",
						width: 480,
						height: 270,
					},
					thumbnails: [
						{
							url:
								"https://i.ytimg.com/vi/RAGcDi0DRtU/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBF15HfNesaktIV6BEXnpAfCc2kdw",
							width: 480,
							height: 270,
						},
					],
					isUpcoming: false,
					upcoming: null,
					isLive: false,
					badges: ["CC"],
					author: {
						name: "Team Coco",
						channelID: "UCi7GJNg51C3jgmYTUwqoUXA",
						url: "https://www.youtube.com/user/teamcoco",
						bestAvatar: {
							url:
								"https://yt3.ggpht.com/ytc/AAUvwnjUBfSWiTx09SVKiqkrLWwCVIrU7lhYNeVLFs4oJE0=s68-c-k-c0x00ffffff-no-rj",
							width: 68,
							height: 68,
						},
						avatars: [
							{
								url:
									"https://yt3.ggpht.com/ytc/AAUvwnjUBfSWiTx09SVKiqkrLWwCVIrU7lhYNeVLFs4oJE0=s68-c-k-c0x00ffffff-no-rj",
								width: 68,
								height: 68,
							},
						],
						ownerBadges: ["Verified"],
						verified: true,
					},
					description:
						'Finnish comedian Ismo thought "ass" just meant "butt." But that\'s just the tip of assberg. More CONAN @ http://teamcoco.com/video ...',
					views: 5722107,
					duration: "6:03",
					uploadedAt: "3 years ago",
				},
				{
					type: "video",
					title: "Ass Pennies - Upright Citizens Brigade",
					id: "f9aM_dT5VMI",
					url: "https://www.youtube.com/watch?v=f9aM_dT5VMI",
					bestThumbnail: {
						url:
							"https://i.ytimg.com/vi/f9aM_dT5VMI/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCItrbxSXrmKUcTgLaWRx1OLzr6tA",
						width: 720,
						height: 404,
					},
					thumbnails: [
						{
							url:
								"https://i.ytimg.com/vi/f9aM_dT5VMI/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCItrbxSXrmKUcTgLaWRx1OLzr6tA",
							width: 720,
							height: 404,
						},
						{
							url:
								"https://i.ytimg.com/vi/f9aM_dT5VMI/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCGl76XoTM3cuOn67uaLVLoTXn7xw",
							width: 360,
							height: 202,
						},
					],
					isUpcoming: false,
					upcoming: null,
					isLive: false,
					badges: ["CC"],
					author: {
						name: "Comedy Central",
						channelID: "UCUsN5ZwHx2kILm84-jPDeXw",
						url: "https://www.youtube.com/user/comedycentral",
						bestAvatar: {
							url:
								"https://yt3.ggpht.com/ytc/AAUvwngbXOjQ4WkgQ2hANiKIwUkuti_KyIqbkblmoBQsSA=s68-c-k-c0x00ffffff-no-rj",
							width: 68,
							height: 68,
						},
						avatars: [
							{
								url:
									"https://yt3.ggpht.com/ytc/AAUvwngbXOjQ4WkgQ2hANiKIwUkuti_KyIqbkblmoBQsSA=s68-c-k-c0x00ffffff-no-rj",
								width: 68,
								height: 68,
							},
						],
						ownerBadges: ["Verified"],
						verified: true,
					},
					description:
						"A man asks his older brother for the secret to his success in business, but he's not ready for the answer. Subscribe to Comedy ...",
					views: 443951,
					duration: "4:09",
					uploadedAt: "2 years ago",
				},
				{
					type: "video",
					title: "Migos - All Ass [Audio Only]",
					id: "34P_EZ0n7eY",
					url: "https://www.youtube.com/watch?v=34P_EZ0n7eY",
					bestThumbnail: {
						url:
							"https://i.ytimg.com/vi/34P_EZ0n7eY/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBwQFqEQx2mAEKr3LS7VGcf7krpSQ",
						width: 720,
						height: 404,
					},
					thumbnails: [
						{
							url:
								"https://i.ytimg.com/vi/34P_EZ0n7eY/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBwQFqEQx2mAEKr3LS7VGcf7krpSQ",
							width: 720,
							height: 404,
						},
						{
							url:
								"https://i.ytimg.com/vi/34P_EZ0n7eY/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAplo1kNY7zPPrrYxQzfXpSCIsvsQ",
							width: 360,
							height: 202,
						},
					],
					isUpcoming: false,
					upcoming: null,
					isLive: false,
					badges: [],
					author: {
						name: "Migos ATL",
						channelID: "UC9YcTIQuhwgoOQqYMKYqW9A",
						url: "https://www.youtube.com/channel/UC9YcTIQuhwgoOQqYMKYqW9A",
						bestAvatar: {
							url:
								"https://yt3.ggpht.com/ytc/AAUvwngub-kgQyAPavfEekZb90vtpbFpzWQJqc5l97cQWA=s88-c-k-c0x00ffffff-no-rj",
							width: 68,
							height: 68,
						},
						avatars: [
							{
								url:
									"https://yt3.ggpht.com/ytc/AAUvwngub-kgQyAPavfEekZb90vtpbFpzWQJqc5l97cQWA=s88-c-k-c0x00ffffff-no-rj",
								width: 68,
								height: 68,
							},
						],
						ownerBadges: ["Official Artist Channel"],
						verified: true,
					},
					description:
						"C U L T U R E - AVAILABLE NOW ▻Merch: http://flyt.it/CULTUREmerchstore ▻Spotify: http://flyt.it/CULTUREsp ▻iTunes: ...",
					views: 20136521,
					duration: "4:56",
					uploadedAt: "4 years ago",
				},
				{
					type: "video",
					title: "Kick-Ass 2 (6/10) Movie CLIP - The Sick Stick (2013) HD",
					id: "rny3UdYPDn0",
					url: "https://www.youtube.com/watch?v=rny3UdYPDn0",
					bestThumbnail: {
						url:
							"https://i.ytimg.com/vi/rny3UdYPDn0/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCMh7vPH4qwkaqJx5s0O8uI4ufOSQ",
						width: 720,
						height: 404,
					},
					thumbnails: [
						{
							url:
								"https://i.ytimg.com/vi/rny3UdYPDn0/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCMh7vPH4qwkaqJx5s0O8uI4ufOSQ",
							width: 720,
							height: 404,
						},
						{
							url:
								"https://i.ytimg.com/vi/rny3UdYPDn0/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLARtFqPa6NM5NpVBFMbauyGlA0xcw",
							width: 360,
							height: 202,
						},
					],
					isUpcoming: false,
					upcoming: null,
					isLive: false,
					badges: [],
					author: {
						name: "Movieclips",
						channelID: "UC3gNmTGu-TTbFPpfSs5kNkg",
						url: "https://www.youtube.com/user/movieclips",
						bestAvatar: {
							url:
								"https://yt3.ggpht.com/ytc/AAUvwnh1dYmG2lDRVXRZnoXr4bK98WIzbo8Okdsz5yXFxA=s68-c-k-c0x00ffffff-no-rj",
							width: 68,
							height: 68,
						},
						avatars: [
							{
								url:
									"https://yt3.ggpht.com/ytc/AAUvwnh1dYmG2lDRVXRZnoXr4bK98WIzbo8Okdsz5yXFxA=s68-c-k-c0x00ffffff-no-rj",
								width: 68,
								height: 68,
							},
						],
						ownerBadges: ["Verified"],
						verified: true,
					},
					description:
						"CLIP DESCRIPTION: After getting humiliated by the popular girls at school, Mindy (Chole Moretz) realizes she doesn't need to fit ...",
					views: 23877882,
					duration: "3:00",
					uploadedAt: "6 years ago",
				},
				{
					type: "video",
					title: 'Major Payne | "What Are You Lookin\' At, Ass Eyes?"',
					id: "tU8b5pvnXtE",
					url: "https://www.youtube.com/watch?v=tU8b5pvnXtE",
					bestThumbnail: {
						url:
							"https://i.ytimg.com/vi/tU8b5pvnXtE/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCjCJTZf777LJ-yT7nD13qPNtUpGg",
						width: 720,
						height: 404,
					},
					thumbnails: [
						{
							url:
								"https://i.ytimg.com/vi/tU8b5pvnXtE/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCjCJTZf777LJ-yT7nD13qPNtUpGg",
							width: 720,
							height: 404,
						},
						{
							url:
								"https://i.ytimg.com/vi/tU8b5pvnXtE/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLA8BfcHY-CRs7t4BWufhKIRiguksw",
							width: 360,
							height: 202,
						},
					],
					isUpcoming: false,
					upcoming: null,
					isLive: false,
					badges: ["CC"],
					author: {
						name: "Universal Pictures",
						channelID: "UCq0OueAsdxH6b8nyAspwViw",
						url: "https://www.youtube.com/user/UniversalPictures",
						bestAvatar: {
							url:
								"https://yt3.ggpht.com/ytc/AAUvwng5Aw1qAfEoq8ua2IPC9FUP6OYO7zE7ehrl3a3ssw=s68-c-k-c0x00ffffff-no-rj",
							width: 68,
							height: 68,
						},
						avatars: [
							{
								url:
									"https://yt3.ggpht.com/ytc/AAUvwng5Aw1qAfEoq8ua2IPC9FUP6OYO7zE7ehrl3a3ssw=s68-c-k-c0x00ffffff-no-rj",
								width: 68,
								height: 68,
							},
						],
						ownerBadges: ["Verified"],
						verified: true,
					},
					description:
						"Do NOT attempt to challenge Major Payne's authority! Watch as he meets his new cadets and breaks them in to boot camp.",
					views: 2603670,
					duration: "7:58",
					uploadedAt: "10 months ago",
				},
				{
					type: "video",
					title: "Sheppard - Kiss My Fat Ass",
					id: "TjqjvD8He70",
					url: "https://www.youtube.com/watch?v=TjqjvD8He70",
					bestThumbnail: {
						url:
							"https://i.ytimg.com/vi/TjqjvD8He70/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB_MaEGjk9Fx2eOsn7sIfmMQohqOQ",
						width: 720,
						height: 404,
					},
					thumbnails: [
						{
							url:
								"https://i.ytimg.com/vi/TjqjvD8He70/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB_MaEGjk9Fx2eOsn7sIfmMQohqOQ",
							width: 720,
							height: 404,
						},
						{
							url:
								"https://i.ytimg.com/vi/TjqjvD8He70/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAl9NU-4uS7jH8Vv2fIK_Pni0Q75A",
							width: 360,
							height: 202,
						},
					],
					isUpcoming: false,
					upcoming: null,
					isLive: false,
					badges: [],
					author: {
						name: "wearesheppard",
						channelID: "UCui-yIjO0AsrbjYXjeaP0EA",
						url: "https://www.youtube.com/channel/UCui-yIjO0AsrbjYXjeaP0EA",
						bestAvatar: {
							url:
								"https://yt3.ggpht.com/ytc/AAUvwnhMhZQXn-qXnYy332paIIArXGHlBW0P_UgTxF1Seg=s88-c-k-c0x00ffffff-no-rj",
							width: 68,
							height: 68,
						},
						avatars: [
							{
								url:
									"https://yt3.ggpht.com/ytc/AAUvwnhMhZQXn-qXnYy332paIIArXGHlBW0P_UgTxF1Seg=s88-c-k-c0x00ffffff-no-rj",
								width: 68,
								height: 68,
							},
						],
						ownerBadges: ["Official Artist Channel"],
						verified: true,
					},
					description:
						"New Single 'Kiss My Fat Ass' Out Now! Stream it here: https://lnk.to/SheppardKMFAVD Join our mailing list: ...",
					views: 835232,
					duration: "2:57",
					uploadedAt: "1 year ago",
				},
				{
					type: "video",
					title:
						"''I Will Beat Your Ass Like A Cherokee Drum'' | The Fate Of The Furious | SceneScreen",
					id: "EBU3zJemX8A",
					url: "https://www.youtube.com/watch?v=EBU3zJemX8A",
					bestThumbnail: {
						url:
							"https://i.ytimg.com/vi/EBU3zJemX8A/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCzMnZAGz_VszP3l0yyda08l07JJA",
						width: 720,
						height: 404,
					},
					thumbnails: [
						{
							url:
								"https://i.ytimg.com/vi/EBU3zJemX8A/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCzMnZAGz_VszP3l0yyda08l07JJA",
							width: 720,
							height: 404,
						},
						{
							url:
								"https://i.ytimg.com/vi/EBU3zJemX8A/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBjsYkQ3uggvaweea-rXM4LksRU2Q",
							width: 360,
							height: 202,
						},
					],
					isUpcoming: false,
					upcoming: null,
					isLive: false,
					badges: [],
					author: {
						name: "SceneScreen",
						channelID: "UCB4VaK5rjEZb5rfU-nptTvw",
						url: "https://www.youtube.com/user/PBMovieLounge",
						bestAvatar: {
							url:
								"https://yt3.ggpht.com/ytc/AAUvwnhWcXMc4oBTnXqxQJv5Y7nTOYFmmeEvTbDvH1Mtxw=s68-c-k-c0x00ffffff-no-rj",
							width: 68,
							height: 68,
						},
						avatars: [
							{
								url:
									"https://yt3.ggpht.com/ytc/AAUvwnhWcXMc4oBTnXqxQJv5Y7nTOYFmmeEvTbDvH1Mtxw=s68-c-k-c0x00ffffff-no-rj",
								width: 68,
								height: 68,
							},
						],
						ownerBadges: ["Verified"],
						verified: true,
					},
					description:
						"Agent Hobbs (Dwayne Johnson) enters prison for the first time in The Fate Of The Furious, where immediately he confronts ...",
					views: 23359654,
					duration: "4:23",
					uploadedAt: "11 months ago",
				},
				{
					type: "video",
					title: "The Haunting (ft. Mary Beth Barone and Mia Khalifa) - Drag His Ass",
					id: "HHgciX0xtW8",
					url: "https://www.youtube.com/watch?v=HHgciX0xtW8",
					bestThumbnail: {
						url:
							"https://i.ytimg.com/vi/HHgciX0xtW8/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBmneY8_RMlAGuQz9LmYET_Bd3BeA",
						width: 720,
						height: 404,
					},
					thumbnails: [
						{
							url:
								"https://i.ytimg.com/vi/HHgciX0xtW8/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBmneY8_RMlAGuQz9LmYET_Bd3BeA",
							width: 720,
							height: 404,
						},
						{
							url:
								"https://i.ytimg.com/vi/HHgciX0xtW8/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLC1hFM5DPEXFolfiAG0vFv7xUywMw",
							width: 360,
							height: 202,
						},
					],
					isUpcoming: false,
					upcoming: null,
					isLive: false,
					badges: ["CC"],
					author: {
						name: "Comedy Central",
						channelID: "UCUsN5ZwHx2kILm84-jPDeXw",
						url: "https://www.youtube.com/user/comedycentral",
						bestAvatar: {
							url:
								"https://yt3.ggpht.com/ytc/AAUvwngbXOjQ4WkgQ2hANiKIwUkuti_KyIqbkblmoBQsSA=s68-c-k-c0x00ffffff-no-rj",
							width: 68,
							height: 68,
						},
						avatars: [
							{
								url:
									"https://yt3.ggpht.com/ytc/AAUvwngbXOjQ4WkgQ2hANiKIwUkuti_KyIqbkblmoBQsSA=s68-c-k-c0x00ffffff-no-rj",
								width: 68,
								height: 68,
							},
						],
						ownerBadges: ["Verified"],
						verified: true,
					},
					description: null,
					views: 105113,
					duration: "10:31",
					uploadedAt: "3 weeks ago",
				},
				{
					type: "video",
					title: "The Flirt - Drag His Ass (ft. Mary Beth Barone)",
					id: "VKSnJhUdueM",
					url: "https://www.youtube.com/watch?v=VKSnJhUdueM",
					bestThumbnail: {
						url:
							"https://i.ytimg.com/vi/VKSnJhUdueM/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDBKVTXVLoixBike03kW4hz-jDb0A",
						width: 720,
						height: 404,
					},
					thumbnails: [
						{
							url:
								"https://i.ytimg.com/vi/VKSnJhUdueM/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDBKVTXVLoixBike03kW4hz-jDb0A",
							width: 720,
							height: 404,
						},
						{
							url:
								"https://i.ytimg.com/vi/VKSnJhUdueM/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLA5SRYX48jHpCB1KRWkgL4tiuOM9w",
							width: 360,
							height: 202,
						},
					],
					isUpcoming: false,
					upcoming: null,
					isLive: false,
					badges: ["CC"],
					author: {
						name: "Comedy Central",
						channelID: "UCUsN5ZwHx2kILm84-jPDeXw",
						url: "https://www.youtube.com/user/comedycentral",
						bestAvatar: {
							url:
								"https://yt3.ggpht.com/ytc/AAUvwngbXOjQ4WkgQ2hANiKIwUkuti_KyIqbkblmoBQsSA=s68-c-k-c0x00ffffff-no-rj",
							width: 68,
							height: 68,
						},
						avatars: [
							{
								url:
									"https://yt3.ggpht.com/ytc/AAUvwngbXOjQ4WkgQ2hANiKIwUkuti_KyIqbkblmoBQsSA=s68-c-k-c0x00ffffff-no-rj",
								width: 68,
								height: 68,
							},
						],
						ownerBadges: ["Verified"],
						verified: true,
					},
					description: null,
					views: 42788,
					duration: "9:10",
					uploadedAt: "1 month ago",
				},
				{
					type: "video",
					title: "Scooter – Move Your Ass! (Noisecontrollers Remix) (Tour Recap)",
					id: "QU2KuyP6H-E",
					url: "https://www.youtube.com/watch?v=QU2KuyP6H-E",
					bestThumbnail: {
						url:
							"https://i.ytimg.com/vi/QU2KuyP6H-E/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCqPOEv0ImImf2Q77DXV4OCjFaoAQ",
						width: 720,
						height: 404,
					},
					thumbnails: [
						{
							url:
								"https://i.ytimg.com/vi/QU2KuyP6H-E/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCqPOEv0ImImf2Q77DXV4OCjFaoAQ",
							width: 720,
							height: 404,
						},
						{
							url:
								"https://i.ytimg.com/vi/QU2KuyP6H-E/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDay5luEbNXJIvl85PkpoFH7JUZkw",
							width: 360,
							height: 202,
						},
					],
					isUpcoming: false,
					upcoming: null,
					isLive: false,
					badges: ["4K"],
					author: {
						name: "Scooter",
						channelID: "UCZuJMSiCDWGaYmKAvt990ng",
						url: "https://www.youtube.com/channel/UCZuJMSiCDWGaYmKAvt990ng",
						bestAvatar: {
							url:
								"https://yt3.ggpht.com/ytc/AAUvwnhhnl7E1tzVFecaLekKVwIzl-0v56Hn0K4IChc30g=s88-c-k-c0x00ffffff-no-rj",
							width: 68,
							height: 68,
						},
						avatars: [
							{
								url:
									"https://yt3.ggpht.com/ytc/AAUvwnhhnl7E1tzVFecaLekKVwIzl-0v56Hn0K4IChc30g=s88-c-k-c0x00ffffff-no-rj",
								width: 68,
								height: 68,
							},
						],
						ownerBadges: ["Official Artist Channel"],
						verified: true,
					},
					description: null,
					views: 2249316,
					duration: "3:23",
					uploadedAt: "2 years ago",
				},
				{
					type: "video",
					title: "Kick-Ass (2010) - 'Bedroom'",
					id: "i8ZhNe1G_H8",
					url: "https://www.youtube.com/watch?v=i8ZhNe1G_H8",
					bestThumbnail: {
						url:
							"https://i.ytimg.com/vi/i8ZhNe1G_H8/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA7ew8jW5QslDdSY59V6GySkK4-YA",
						width: 720,
						height: 404,
					},
					thumbnails: [
						{
							url:
								"https://i.ytimg.com/vi/i8ZhNe1G_H8/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA7ew8jW5QslDdSY59V6GySkK4-YA",
							width: 720,
							height: 404,
						},
						{
							url:
								"https://i.ytimg.com/vi/i8ZhNe1G_H8/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLC25A-OyOifNTLJZ9pVBVsGDcYV1w",
							width: 360,
							height: 202,
						},
					],
					isUpcoming: false,
					upcoming: null,
					isLive: false,
					badges: [],
					author: {
						name: "Lionsgate Movies",
						channelID: "UCJ6nMHaJPZvsJ-HmUmj1SeA",
						url: "https://www.youtube.com/user/LionsgateLIVE",
						bestAvatar: {
							url:
								"https://yt3.ggpht.com/ytc/AAUvwnhCF5_1IJ9dkuF51Wa094V5YXnbnwAXkfJlsWjFKRg=s68-c-k-c0x00ffffff-no-rj",
							width: 68,
							height: 68,
						},
						avatars: [
							{
								url:
									"https://yt3.ggpht.com/ytc/AAUvwnhCF5_1IJ9dkuF51Wa094V5YXnbnwAXkfJlsWjFKRg=s68-c-k-c0x00ffffff-no-rj",
								width: 68,
								height: 68,
							},
						],
						ownerBadges: ["Verified"],
						verified: true,
					},
					description: null,
					views: 2955057,
					duration: "0:43",
					uploadedAt: "11 years ago",
				},
				{
					type: "video",
					title:
						"Kick-Ass 2 Official Theatrical Trailer #2 (2013) - Chloe Moretz Movie HD",
					id: "Td921lYSBIA",
					url: "https://www.youtube.com/watch?v=Td921lYSBIA",
					bestThumbnail: {
						url:
							"https://i.ytimg.com/vi/Td921lYSBIA/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBuSQkQBHLnlayQUmWTM8gQiakiNQ",
						width: 720,
						height: 404,
					},
					thumbnails: [
						{
							url:
								"https://i.ytimg.com/vi/Td921lYSBIA/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBuSQkQBHLnlayQUmWTM8gQiakiNQ",
							width: 720,
							height: 404,
						},
						{
							url:
								"https://i.ytimg.com/vi/Td921lYSBIA/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDdGtyboHTKsKReXJG9LsC8hZ30kw",
							width: 360,
							height: 202,
						},
					],
					isUpcoming: false,
					upcoming: null,
					isLive: false,
					badges: ["CC"],
					author: {
						name: "Movieclips Trailers",
						channelID: "UCi8e0iOVk1fEOogdfu4YgfA",
						url: "https://www.youtube.com/user/movieclipsTRAILERS",
						bestAvatar: {
							url:
								"https://yt3.ggpht.com/ytc/AAUvwnglPlebFP126U5Gh71HgZDp-fjSI_JgZhF5wjqF=s68-c-k-c0x00ffffff-no-rj",
							width: 68,
							height: 68,
						},
						avatars: [
							{
								url:
									"https://yt3.ggpht.com/ytc/AAUvwnglPlebFP126U5Gh71HgZDp-fjSI_JgZhF5wjqF=s68-c-k-c0x00ffffff-no-rj",
								width: 68,
								height: 68,
							},
						],
						ownerBadges: ["Verified"],
						verified: true,
					},
					description: null,
					views: 3505417,
					duration: "2:13",
					uploadedAt: "7 years ago",
				},
				{
					type: "video",
					title: "Static and Ben El – Broke Ass Millionaire (Official Music Video)",
					id: "XefS9XGkH5s",
					url: "https://www.youtube.com/watch?v=XefS9XGkH5s",
					bestThumbnail: {
						url:
							"https://i.ytimg.com/vi/XefS9XGkH5s/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-0p7jCIXwJdKXiLtBNXgFuuPb0w",
						width: 720,
						height: 404,
					},
					thumbnails: [
						{
							url:
								"https://i.ytimg.com/vi/XefS9XGkH5s/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-0p7jCIXwJdKXiLtBNXgFuuPb0w",
							width: 720,
							height: 404,
						},
						{
							url:
								"https://i.ytimg.com/vi/XefS9XGkH5s/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAD-ksu2RBgd2VAQqg3wviP7IGZ6g",
							width: 360,
							height: 202,
						},
					],
					isUpcoming: false,
					upcoming: null,
					isLive: false,
					badges: ["4K"],
					author: {
						name: "Static and Ben El - סטטיק ובן אל",
						channelID: "UCvLswWFz2WGhdJ9cBftmhcA",
						url: "https://www.youtube.com/channel/UCvLswWFz2WGhdJ9cBftmhcA",
						bestAvatar: {
							url:
								"https://yt3.ggpht.com/ytc/AAUvwng-k2hd65krOHujVruunlvIcvEWq5S3psmwPIt8Yw=s88-c-k-c0x00ffffff-no-rj",
							width: 68,
							height: 68,
						},
						avatars: [
							{
								url:
									"https://yt3.ggpht.com/ytc/AAUvwng-k2hd65krOHujVruunlvIcvEWq5S3psmwPIt8Yw=s88-c-k-c0x00ffffff-no-rj",
								width: 68,
								height: 68,
							},
						],
						ownerBadges: ["Official Artist Channel"],
						verified: true,
					},
					description: null,
					views: 2876565,
					duration: "3:48",
					uploadedAt: "2 years ago",
				},
				{
					type: "video",
					title: "Diddy - Dirty Money - Ass On The Floor ft. Swizz Beatz",
					id: "90-SWwtpdZU",
					url: "https://www.youtube.com/watch?v=90-SWwtpdZU",
					bestThumbnail: {
						url:
							"https://i.ytimg.com/vi/90-SWwtpdZU/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCM1hmb-FKJv1yB5wbQRnJmB7ldOw",
						width: 720,
						height: 404,
					},
					thumbnails: [
						{
							url:
								"https://i.ytimg.com/vi/90-SWwtpdZU/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCM1hmb-FKJv1yB5wbQRnJmB7ldOw",
							width: 720,
							height: 404,
						},
						{
							url:
								"https://i.ytimg.com/vi/90-SWwtpdZU/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBg8nNui4PA7DVX0VXv4XrhHQPuAQ",
							width: 360,
							height: 202,
						},
					],
					isUpcoming: false,
					upcoming: null,
					isLive: false,
					badges: [],
					author: {
						name: "DirtyMoneyVEVO",
						channelID: "UC9TTmXB2B26v_o4Znk0SURQ",
						url: "https://www.youtube.com/user/DirtyMoneyVEVO",
						bestAvatar: {
							url:
								"https://yt3.ggpht.com/ytc/AAUvwni0lf0g9JsLYGPi4MNwELYdtpNnQ5Gl9DJdgik=s68-c-k-c0x00ffffff-no-rj",
							width: 68,
							height: 68,
						},
						avatars: [
							{
								url:
									"https://yt3.ggpht.com/ytc/AAUvwni0lf0g9JsLYGPi4MNwELYdtpNnQ5Gl9DJdgik=s68-c-k-c0x00ffffff-no-rj",
								width: 68,
								height: 68,
							},
						],
						ownerBadges: ["Verified"],
						verified: true,
					},
					description: null,
					views: 10746431,
					duration: "4:08",
					uploadedAt: "10 years ago",
				},
				{
					type: "video",
					title: "Eminem - Ass Like That (Maga Remix)",
					id: "-EhyZOp73Xw",
					url: "https://www.youtube.com/watch?v=-EhyZOp73Xw",
					bestThumbnail: {
						url:
							"https://i.ytimg.com/vi/-EhyZOp73Xw/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCeUJYbOI3l5LMKDlsdYen1ztFG-w",
						width: 720,
						height: 404,
					},
					thumbnails: [
						{
							url:
								"https://i.ytimg.com/vi/-EhyZOp73Xw/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCeUJYbOI3l5LMKDlsdYen1ztFG-w",
							width: 720,
							height: 404,
						},
						{
							url:
								"https://i.ytimg.com/vi/-EhyZOp73Xw/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB_T47xdcOOKbQMgGcckLFQ-1tigw",
							width: 360,
							height: 202,
						},
					],
					isUpcoming: false,
					upcoming: null,
					isLive: false,
					badges: [],
					author: {
						name: "HouseMusicHD",
						channelID: "UCBvRF5oX4a2ncCOOn1IhoNw",
						url: "https://www.youtube.com/channel/UCBvRF5oX4a2ncCOOn1IhoNw",
						bestAvatar: {
							url:
								"https://yt3.ggpht.com/ytc/AAUvwnjuQ0HthonxSDByM6zqj32ZDhQ1oMFX1DkdOtSE=s68-c-k-c0x00ffffff-no-rj",
							width: 68,
							height: 68,
						},
						avatars: [
							{
								url:
									"https://yt3.ggpht.com/ytc/AAUvwnjuQ0HthonxSDByM6zqj32ZDhQ1oMFX1DkdOtSE=s68-c-k-c0x00ffffff-no-rj",
								width: 68,
								height: 68,
							},
						],
						ownerBadges: ["Verified"],
						verified: true,
					},
					description: null,
					views: 12403957,
					duration: "3:14",
					uploadedAt: "2 years ago",
				},
				{
					type: "video",
					title: "Ass Like That",
					id: "R_XFVAwqi78",
					url: "https://www.youtube.com/watch?v=R_XFVAwqi78",
					bestThumbnail: {
						url:
							"https://i.ytimg.com/vi/R_XFVAwqi78/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBuTym_xu0nSv6RLUBFfLpVa6lOHg",
						width: 720,
						height: 404,
					},
					thumbnails: [
						{
							url:
								"https://i.ytimg.com/vi/R_XFVAwqi78/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBuTym_xu0nSv6RLUBFfLpVa6lOHg",
							width: 720,
							height: 404,
						},
						{
							url:
								"https://i.ytimg.com/vi/R_XFVAwqi78/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCwkkvWXN8p-QE7wTh4vB3SdJl28w",
							width: 360,
							height: 202,
						},
					],
					isUpcoming: false,
					upcoming: null,
					isLive: false,
					badges: [],
					author: {
						name: "EminemMusic",
						channelID: "UCfM3zsQsOnfWNUppiycmBuw",
						url: "https://www.youtube.com/channel/UCfM3zsQsOnfWNUppiycmBuw",
						bestAvatar: {
							url:
								"https://yt3.ggpht.com/ytc/AAUvwnh3-vLogBP_MUtS0FeQxzUxqh63BWywwwLRT2zg9A=s88-c-k-c0x00ffffff-no-rj",
							width: 68,
							height: 68,
						},
						avatars: [
							{
								url:
									"https://yt3.ggpht.com/ytc/AAUvwnh3-vLogBP_MUtS0FeQxzUxqh63BWywwwLRT2zg9A=s88-c-k-c0x00ffffff-no-rj",
								width: 68,
								height: 68,
							},
						],
						ownerBadges: ["Official Artist Channel"],
						verified: true,
					},
					description: null,
					views: 986337,
					duration: "4:26",
					uploadedAt: null,
				},
				{
					type: "video",
					title: "Drag His Ass: The Cheater (ft. Mary Beth Barone)",
					id: "niyXAH2X4kI",
					url: "https://www.youtube.com/watch?v=niyXAH2X4kI",
					bestThumbnail: {
						url:
							"https://i.ytimg.com/vi/niyXAH2X4kI/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDeRvj05bTC8_pk81tgPHYFM85O7w",
						width: 720,
						height: 404,
					},
					thumbnails: [
						{
							url:
								"https://i.ytimg.com/vi/niyXAH2X4kI/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDeRvj05bTC8_pk81tgPHYFM85O7w",
							width: 720,
							height: 404,
						},
						{
							url:
								"https://i.ytimg.com/vi/niyXAH2X4kI/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAqiR4NyWfrBx6LXA-WWGeeW6DR4Q",
							width: 360,
							height: 202,
						},
					],
					isUpcoming: false,
					upcoming: null,
					isLive: false,
					badges: ["CC"],
					author: {
						name: "Comedy Central",
						channelID: "UCUsN5ZwHx2kILm84-jPDeXw",
						url: "https://www.youtube.com/user/comedycentral",
						bestAvatar: {
							url:
								"https://yt3.ggpht.com/ytc/AAUvwngbXOjQ4WkgQ2hANiKIwUkuti_KyIqbkblmoBQsSA=s68-c-k-c0x00ffffff-no-rj",
							width: 68,
							height: 68,
						},
						avatars: [
							{
								url:
									"https://yt3.ggpht.com/ytc/AAUvwngbXOjQ4WkgQ2hANiKIwUkuti_KyIqbkblmoBQsSA=s68-c-k-c0x00ffffff-no-rj",
								width: 68,
								height: 68,
							},
						],
						ownerBadges: ["Verified"],
						verified: true,
					},
					description: null,
					views: 85312,
					duration: "9:50",
					uploadedAt: "2 weeks ago",
				},
			],
			args: "",
			music: {
				name: "",
				channel: "",
				musicThumb: "",
				link: "",
			},
		};
	},
	async mounted() {
		await this.ytSearcher.start();
	},
	methods: {
		async search() {
			this.ytSearchResults = (await this.ytSearcher.search(this.args)).items;
			console.log(this.ytSearchResults);
		},
		changeCurrentMusic(videoIndex) {
			const chosenVideo = this.ytSearchResults[videoIndex];
			this.music = {
				name: chosenVideo.title,
				channel: chosenVideo.author.name,
				musicThumb: chosenVideo.bestThumbnail.url,
				link: chosenVideo.url,
			};
		},
	},
	name: "Home",
};
</script>

<style>
.container {
	display: grid;
	grid-template-areas:
		"sidebar content"
		"player player";

	grid-template-rows: auto auto;
	grid-template-columns: 20% auto;

	height: calc(100vh - 30px);
}

.side-bar {
	grid-area: sidebar;
	padding: 10px;
}

.content {
	grid-area: content;
	overflow-y: auto;
	max-height: 620px;
}

.player {
	grid-area: player;
	min-height: 100px;
}
</style>
