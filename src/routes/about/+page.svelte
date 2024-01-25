<script>
	import { onMount } from "svelte";
	import { fade, fly } from "svelte/transition";
	import Menus from "$lib/Menus.svelte"
	let menuOpen = false;
	let delayFinish = false;
    let Mounted = false
	function menu() {
		menuOpen = menuOpen ? false : true;
	}
    onMount(()=> {
        Mounted = true
    })
	let Cwidth = 1000
</script>
<svelte:window bind:innerWidth={Cwidth}/>
{#if Mounted == false || menuOpen == true}
	<div
		class="backgroundcolor"
		in:fade={{ duration: 1000, delay: 100 }}
		out:fade={{ duration: 1000, delay: 100 }}
		class:laytotop={menuOpen}
	></div>
{/if}

<Menus {menuOpen}/>
<div class="topnav">
	{#if Mounted}
		<button class="Chover HoverTitle link" in:fly={{ duration: 1000, y: -70 }} on:click={() => {window.location = "/"}} >
			C
		</button>
		<button
			class="Chover link"
			in:fly={{ duration: 1000, y: -70 }}
			on:click={menu}
		>
			{#if menuOpen}
				close
			{:else}
				menu
			{/if}
		</button>
	{/if}
</div>
<div class="bottom">
	<div class="bigdiv">
		<div class="subtitle">
			My passion is in the field of software development. I am willing to leverage my skill to improve my ability to be better. 
<div class="wavehand">👋</div>
		</div>
		<p class="subtitle">
			Programming languages:
			<br />
			<img
				src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
				alt=""
			/><img
				src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
				alt=""
			/><img
				src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
				alt=""
			/><img
				src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
				alt=""
			/><img
				src="https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white"
				alt=""
			/><img
				src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white"
				alt=""
			/><img
				src="https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00"
				alt=""
			/>
		</p>
		<p class="subtitle">
			Used editor/platform:<br />
			<img
				src="https://img.shields.io/badge/NeoVim-%2357A143.svg?&style=for-the-badge&logo=neovim&logoColor=white
"
				alt=""
			/><img
				src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black"
				alt=""
			/><img
				src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white"
				alt=""
			/><img
				src="https://img.shields.io/badge/Raspberry%20Pi-A22846?style=for-the-badge&logo=Raspberry%20Pi&logoColor=white"
				alt=""
			/><img
				src="https://img.shields.io/badge/tmux-1BB91F?style=for-the-badge&logo=tmux&logoColor=white"
				alt=""
			/><img
				src="https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white"
				alt=""
			/><img
				src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"
				alt=""
			/><img
				src="https://img.shields.io/badge/gitlab-black?style=for-the-badge&logo=gitlab"
				alt=""
			/>
		</p>
	</div>
</div>
<style lang="scss">

	.topnav {
		position: absolute;
		display: flex;
		top: 0px;
		width: 100vw;
		flex: 0 0 100%;
		justify-content: space-between;
		max-width: 100%;
		z-index: 9999;
	}

	.Chover {
		margin: 2vw;
		font-family: "Days One", sans-serif;
		font-size: 34px;
	}

	.HoverTitle:hover{
		transform: scale(1.2);
		transition: transform 1s;
	}
	.link {
		color: black;
		text-decoration: none;
		border: none;
		background-color: transparent;
		cursor: pointer;
	}

.bottom {
    display: grid;
    align-items: center;
    justify-items: center;
    margin-top: 10vh;
}

	.backgroundcolor {
		background-color: aquamarine;
		top: 0px;
		position: absolute;
		width: 100vw;
		height: 100vh;
		z-index: 100;
	}
	.bigdiv{
		margin-left: 10px;
font-family: 'IBM Plex Sans', sans-serif;
	}
	.subtitle {
		font-size: 3vw;
		@media (max-width: 600px) {
		font-size: 7vw;
		}
	}
	.wavehand {
		animation: infinite wavehand 5000ms;
        width: fit-content;
	}
	@keyframes wavehand {
		0% {
			transform: rotate(0deg);
		}
		5% {
			transform: rotate(20deg);
		}
		10% {
			transform: rotate(0deg);
		}
		15% {
			transform: rotate(20deg);
		}
		20% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>