// Contains various api methods that cannot be accessed in a page context, usually because they are requested from a component.

import { error, redirect } from "@sveltejs/kit"
import { authorise, cookieName, invalidateSession } from "$lib/server/auth"

export function load() {
	error(403, "Nice try")
}

export const actions: import("./$types").Actions = {}
actions.logout = async ({ cookies, locals }) => {
	const { session } = await authorise(locals)

	await invalidateSession(session)
	cookies.delete(cookieName, { path: "/" })

	redirect(302, "/")
}
actions.statusping = () => {
	// does nothing
	// hooks.server.ts will update the user's status when pinged
}
