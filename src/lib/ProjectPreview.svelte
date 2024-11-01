<script>
	import { projectlist } from "./projects";
	export let projectOn = 0;
</script>

<div class="row">
	<div class="col">
		<h2 class="des">
			<span class="material-symbols-outlined"> info </span> Description:
		</h2>
		<span class="desc">{projectlist[projectOn].description}</span>
	</div>
	<div class="col">
		<a class="desc" href={projectlist[projectOn].link}
			><h2 class="des">
				<span class="material-symbols-outlined"> link</span>
				link:
			</h2></a
		>
	</div>
	<div class="col">
		<a class="desc" href={projectlist[projectOn].source_code}
			><h2 class="des">
				<span class="material-symbols-outlined"> code</span>
				code
			</h2></a
		>
	</div>
</div>

<style>
	.des,
	.desc {
        margin-top: 5px;
        margin-bottom: 5px;
		font-family: "IBM Plex Sans", sans-serif;
	}
	.row {
		display: grid;
		grid-template-columns: auto ;
        grid-template-rows: min-content min-content min-content;
		gap: 10px;
	}
</style>
