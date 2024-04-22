<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';
	import { Button } from '$lib/components/ui/button';
	import FileUploader from '@/components/custom/fileUploader.svelte';

	//import { Uploader } from '@uploadthing/svelte';
	export let data: PageData;
</script>

<main class="container mx-auto grid gap-2 p-8">
	<h1>Hi, {data.user.username}!</h1>
	<p>Your user ID is {data.user.id}.</p>
	<form method="post" action="/logout" use:enhance>
		<Button type="submit" variant="default">Sign out</Button>
	</form>
	<div class="w-1/3 content-center">
		<FileUploader />
	</div>
</main>
