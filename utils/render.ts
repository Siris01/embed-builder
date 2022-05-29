import hljs from 'highlight.js';

function render(
	input: string,
	options: {
		md: boolean;
		mentions: boolean;
		emojis: boolean;
		links: boolean;
	} = {
		md: true,
		mentions: true,
		emojis: true,
		links: true
	}
) {
	const base = input
		.replace(/```(?:(?<lang>\S+)\n)?\s?(?<code>[^]+?)\s?```/g, (_m, lang, code) => {
			if (lang) return hljs.highlight(code, { language: lang ?? 'js' }).value;
			return hljs.highlightAuto(code).value;
		})
		.replace(/(?<!\\)\`([^\\]+)(?<!\\)\`/g, (_m, text) => `<span class='bg-zinc-800 font-thin'>${text}</span>`)
		.replace(/(?<!\\)\*(?<!\\)\*([^\\]+)(?<!\\)\*(?<!\\)\*/g, (_m, text) => `<b class='font-semibold'>${text}</b>`)
		.replace(/(?<!\\)\*([^\\]+)(?<!\\)\*/g, (_m, text) => `<i>${text}</i>`)
		.replace(/(?<!\\)_(?<!\\)_([^\\]+)(?<!\\)_(?<!\\)_/g, (_m, text) => `<u>${text}</u>`)
		.replace(/(?<!\\)_([^\\]+)(?<!\\)_/g, (_m, text) => `<i>${text}</i>`)
		.replace(/(?<!\\)~(?<!\\)~([^\\]+)(?<!\\)~(?<!\\)~/g, (_m, text) => `<s>${text}</s>`)
		.replace(
			/^(?<!\\)>(?<!\\)>(?<!\\)> ([\s\S]+)/gm,
			(_m, text) =>
				`<div class='flex flex-row'>
					<div class='bg- bg-[#4f545c] min-w-1 w-1.5 mr-2 rounded-md'></div>
					<blockquote>${text.trim().replaceAll('>', `\>`)}</blockquote>
				</div>`
		)
		.replace(
			/^(?<!\\)> ([^\n\\]+)/gm,
			(_m, text) =>
				`<div class='flex flex-row'>
					<div class='bg- bg-[#4f545c] min-w-1 w-1.5 mr-2 rounded-md'></div>
					<blockquote>${text}</blockquote>
				</div>`
		)
		.replace(/\\([\s\S])/g, (_m, sym) => sym)
		.trim();

	if (options.mentions) {
	}
	if (options.emojis) {
	}
	if (options.links) {
	}

	return base;
}

export default render;

//TODO emojis (custom|default), mentions (user|channel|role), links, spoilers,
