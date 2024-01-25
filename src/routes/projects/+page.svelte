<script>
	import { onMount } from "svelte";
	import { fade, fly } from "svelte/transition";
	import Menus from "$lib/Menus.svelte"
	import { projectlist } from "$lib/projects";
	let menuOpen = false;
	let delayFinish = false;
    let Mounted = false
    let projectOn = 0
	function menu() {
		menuOpen = menuOpen ? false : true;
	}
    function nextProject(){
        if((projectlist.length - 1) == (projectOn)){
            projectOn = 0
        }else{
            projectOn += 1
        }
    }
    function backProject(){
        if(projectOn == 0){
            projectOn = projectlist.length - 1
        }else{
            projectOn -= 1
        }
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
	   {#if Cwidth >= 600}
    <button class="stretchButton left" on:click={backProject}></button>
		{/if}
	   <div class="middle">
		 {#key projectOn}
			<img src={projectlist[projectOn].src} alt="" class="image" >
		{/key}
		 <div class="row">
			<div class="col">
				<h2 class="des"> <span class="material-symbols-outlined"> info </span> Description: </h2>
				<span class="desc">{projectlist[projectOn].description}</span>
			</div>
			<div class="col">
				
				<a class="desc" href={projectlist[projectOn].link}><h2 class="des"> <span class="material-symbols-outlined"> link</span> link: </h2></a>
			</div>
		 </div>
	   </div>
	   {#if Cwidth >= 600}
    <button class="stretchButton right" on:click={nextProject}></button>
	 {:else}
	 <button on:click={backProject} class="smallphone"><img src="/lefts.png" alt="" ></button>
	 <button on:click={nextProject} class="smallphone"><img src="/rights.png" alt=""></button>
		{/if}

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
		@media (max-width: 600px) {
    grid-template-columns: auto 
		}
    grid-template-columns: 35% auto 35%;
}

	.backgroundcolor {
		background-color: aquamarine;
		top: 0px;
		position: absolute;
		width: 100vw;
		height: 100vh;
		z-index: 100;
	}
    .stretchButton {
        width: 100%;
        height: 100%;
        background-color: transparent;
        border-style: none;
    }
    .stretchButton:hover{
        background-color: transparent;
        border-style: none;
    }
    .image{
        width: 100%;
		transition: transform 0.5s;
		transform: scale(100%);
		@media (max-width: 600px) {
			width: 80%;
		}
    }
	.image:hover {
		transition: transform 0.5s;
		transform: scale(120%);
	}
	.middle {
		display: grid;
		align-content: center;
		justify-items: center;
	}
	.des, .desc{
font-family: 'IBM Plex Sans', sans-serif;
	}
	.left {
		cursor: url("/lefts.png"), auto;
	}
	.right {
		cursor: url("/rights.png"), auto;
	}
	.row {
		display: grid;
		grid-template-columns: auto auto;
		gap: 10px;
	}
	.smallphone {
		border-style: none;
		border-color: transparent;
		background-color: transparent;
	}
</style>