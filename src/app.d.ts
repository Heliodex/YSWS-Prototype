// See https://svelte.dev/docs/kit/types#app.d.ts

import type { RecordId } from "$lib/server/db"

// for information about these interfaces
declare global {
	declare type User = {
		id: RecordId<"user">
	}

	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}
