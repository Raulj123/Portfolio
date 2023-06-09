export const projects = [
	{
		href: 'https://feelingshub.vercel.app/',
		image: './project_imgs/feelingsHub.png',
		title: 'FeelingsHub',
		badges: ['Svelte', 'TypeScript', 'ElephantSQL', 'Prisma'],
		badgesPic: [
			'./icons/svelte.png',
			'./icons/typeScript.png',
			'./icons/post.png',
			'./icons/prisma.png'
		],
		content:
			'Built and designed FeelingsHub, a web application using Svelte, Prisma, and ElephantSQL, where users can share their emotions. Created a user-friendly interface with full CRUD functionality for easy input, viewing, editing, and deletion of feelings.'
	},
	{
		href: 'https://github.com/Raulj123/Notess',
		image: './project_imgs/Notess.png',
		title: 'Notess',
		badges: ['PHP', 'MySQL'],
		badgesPic: ['./icons/php.png', './icons/database.png'],
		content:
			'Notess is a web-based note-taking application that allows users to create accounts, log in securely, and save notes. The app is designed to provide a user-friendly platform for taking and storing notes. Users can retrieve and edit their notes at any time'
	},
	{
		href: 'https://code-snippet-three.vercel.app/',
		image: './project_imgs/CodeShare.png',
		title: 'CodeShare',
		badges: ['Svelte', 'TypeScript'],
		badgesPic: ['./icons/svelte.png', './icons/typeScript.png'],
		content: [
			'Code share is a web-based code snippet manager that simplifies the process of storing and organizing code snippets. Users can add a title, programming language, and code snippet, which are displayed in a easy-to-read format using the Skeleton UI framework. The application allows users to delete unwanted code snippets or mark important ones as favorites.'
		]
	},
	{
		href: 'https://github.com/Raulj123/c-vis',
		image: './project_imgs/vis.png',
		title: 'Sorting Visualizer',
		badges: ['C++'],
		badgesPic: ['./icons/c++.png'],
		content:
			'Program that implements a visualization of various sorting algorithms. The user is prompted to select a sorting algorithm and the program generates a vector of 100 random integers. The chosen sorting algorithm is then applied to the vector, and at each step of the algorithm, the program visually displays the current state of the vector as a series of vertical lines on a window.'
	}
];
