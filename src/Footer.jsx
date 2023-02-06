import githubLogo from './assets/github-icon-9.png'

function Footer(){
    return(
        <div className='footer'>
            <p>© El-Amine Bendaas</p>
            <a href='https://github.com/Elaminebendaas' target='_blank'><img width={55} src={githubLogo}></img></a>

        </div>
        
    )
}
export default Footer;