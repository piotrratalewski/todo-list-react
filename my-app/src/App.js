import React from "react";

function App() {
	return (
		<body className='body'>
			<main className='container'>
				<header>
					<h1>Lista zadań</h1>
				</header>
				<section className='section'>
					<h2 className='section__title'>Dodaj nowe zadanie</h2>
					<form className='form js-form'>
						<input
							required
							className='form__input js-newTask'
							placeholder='Co jest do zrobienia?'
							autofocus
						/>
						<button className='form__button'>Dodaj zadanie</button>
					</form>
				</section>
				<section className='section'>
					<header className='section__header'>
						<h2 className='section__title'>Lista zadań</h2>
						<div className='buttons js-buttons'>
							<button className='buttons_button js-toggleHideDoneTasks'>
								Ukryj ukończone
							</button>
							<button className='buttons_button js-markAllDone'>
								Ukończ wszystkie
							</button>
						</div>
					</header>
					<ul className='tasks js-tasks'></ul>
				</section>
			</main>
		</body>
	);
}

export default App;
