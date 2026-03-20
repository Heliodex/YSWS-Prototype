// See https://svelte.dev/docs/kit/types#app.d.ts

/// <reference types="@types/bun" />

import type { RecordId } from "$lib/server/db"

// for information about these interfaces
declare global {
	declare type User = {
		id: RecordId<"user">
		name: string
	}

	namespace App {
		interface Locals {
			session: string | null
			user: User | null
		}
	}
}
