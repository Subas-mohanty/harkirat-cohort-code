
export default {
	// Promise<Response> , it is the return type of the function. as the function is an async function so the return type is promise
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		return new Response('Hello World!');
	},
};
