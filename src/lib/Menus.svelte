<script lang="ts">
	import { fly } from "svelte/transition";
	import { haptic } from "./feedback";

    export let menuOpen = false
	export let experimental: {x: number, y: number} = {x: 0, y: 0}
</script>
{#if menuOpen == true}
	<div class="menu">
		<button
			class="project nobutton hoverbutton"
			on:click={() => {window.location = "/projects";haptic()}}
			in:fly={{ x: -300, duration: 1000 }}
			out:fly={{ x: 300, duration: 1000 }}
		>
			Project<img
				src="https://em-content.zobj.net/source/apple/354/grinning-face_1f600.png"
				alt="spinningA"
				class="spinningImageA"
			/>
		</button>
		<button
			class="about reverse nobutton hoverbutton"
			on:click={() => {window.location = "/about",haptic()}}
			in:fly={{ x: 300, duration: 1000 }}
			out:fly={{ x: -300, duration: 1000 }}
			><img
				src="https://em-content.zobj.net/source/apple/354/smiling-face_263a-fe0f.png"
				alt="spinning"
				class="spinningImage"
			/>About & Skill</button
		>
		<button
			class="project nobutton hoverbutton"
			on:click={() => {window.location = "/contacts";haptic()}}
			in:fly={{ x: -300, duration: 1000 }}
			out:fly={{ x: 300, duration: 1000 }}>Contact
			<img
				src="https://em-content.zobj.net/source/apple/354/star-struck_1f929.png"
				alt="spinningA"
				class="spinningImageA"
			/></button
		>
	</div>
{/if}
<style lang="scss">
	.project {
		font-family: "Days One", sans-serif;
		font-size: 8vw;
		margin-top: 0px;
		margin-bottom: 0px;
		text-align: left;
		@media (max-width: 600px) {
		font-size: 15vw;
		}
		transition: transform 500ms;
		transform: scale(100%) translateX(0px);
	}
	.project:hover {
		transition: transform 500ms;
		transform: scale(120%) translateX(100px);
	}

	.spinningImage {
		animation: spin 4s infinite linear;
		width: 5vw;
		height: 5vw;
		@media (max-width: 600px) {
		width: 10vw;
		height: 10vw;
		}
	}
	.spinningImageA{
		animation: spin 4s infinite reverse linear;
		width: 5vw;
		height: 5vw;
		@media (max-width: 600px) {
		width: 10vw;
		height: 10vw;
		}
	}
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(364deg);
		}
	}
	.about {
		font-family: "Days One", sans-serif;
		font-size: 8vw;
		margin-top: 0px;
		margin-bottom: 0px;
		width: 100%;
		text-align: left;
		@media (max-width: 600px) {
		font-size: 15vw;
		}
		transition: transform 500ms;
		transform: scale(100%) translateX(0);
	}
	.about:hover{
		transform: scale(120%) translateX(-100px);
		transition: transform 500ms;
	}


	.reverse {
		text-align: right;
	}

	.menu {
		width: 100vw;
		height: 80vh;
		top: 0px;
		position: absolute;
		display: flex;
		flex-direction: column;
		z-index: 1000;
		padding-top: 20vh;
	}

	.nobutton {
		border: transparent;
		background-color: transparent;
		border-style: none;
		cursor: grab;
	}
</style>