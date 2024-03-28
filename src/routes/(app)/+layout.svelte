<script lang="ts">
	import '../../app.pcss';
	import { ModeWatcher } from 'mode-watcher';
	import Header from '$/components/sections/Header.svelte';
</script>

<ModeWatcher />

<Header></Header>
<slot />
