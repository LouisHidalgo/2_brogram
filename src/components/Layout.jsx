//wrap the entire app, header, footer, demo react js skills



export default function Layout(props) {

const { children } = props;

const header = (
    <header>
        <h1 className="text-gradient">The BroGram</h1>
        <p><strong>The 30 simple Workouts Program</strong></p>
    </header>
) 

const footer = (
    <footer>
        <p>Built by <a href="https://LouisHidalgo.netlify.app" target="_blank">Louis Hidalgo</a><br/>Styled with <a href="https://www.fantacss.smoljames.com" 
        target="_blank">FantaCSS</a></p>
    </footer>
)

    return (
        <>
        {header}
        {children}
        {footer}
        </>
    )
}