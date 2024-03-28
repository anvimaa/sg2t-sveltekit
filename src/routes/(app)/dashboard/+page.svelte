<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div>
	<main>
		<div>
			{#each data.tasks as task (task.id)}
				<h1>{task.description}</h1>
			{/each}
		</div>
	</main>
</div>
