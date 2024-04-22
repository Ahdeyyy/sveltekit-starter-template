<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Progress } from '$lib/components/ui/progress';

	import { createUploader, createUploadThing } from '$lib/utils';
	import { writable } from 'svelte/store';

	let uploadProgress = writable(0);

	const { startUpload, isUploading, permittedFileInfo } = createUploadThing('imageUploader', {
		onClientUploadComplete: () => {
			alert('Upload Completed');
		},
		onUploadProgress: (progress) => {
			uploadProgress.set(progress);
		}
	});
</script>

<article class="grid gap-2 text-center">
	<Input
		type="file"
		class="w-full"
		on:change={async (e) => {
			const file = e.currentTarget.files?.[0];
			if (!file) return;

			// Do something with files

			// Then start the upload
			await startUpload([file]);
		}}
	/>
	{#if $isUploading}
		<Progress value={$uploadProgress} />
	{/if}

	<p>
		max file size {$permittedFileInfo?.config.image?.maxFileSize}
	</p>
	<p>
		{$permittedFileInfo?.config.image?.maxFileCount} file(s) are allowed
	</p>
</article>
