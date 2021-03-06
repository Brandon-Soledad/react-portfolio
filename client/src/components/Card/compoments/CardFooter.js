
const CardFooter = ({gitrepo, link}) =>{
    return(
        <footer className="card-footer has-text-centered pt-2">
            <small className="has-text-centered has-text-black" style={{width: '100%'}}>
                <a className="button is-black is-small has-text-white is-size-7" rel="noreferrer" id="repo" href={gitrepo} target="_blank">Git Repo</a>
                <span className= "has-text-white" > | | </span>
                <a className="button is-black is-small has-text-white is-size-7" rel="noreferrer" id="demo" href={link} target="_blank">Live Demo</a>
            </small>
        </footer>
    )
}
export default CardFooter