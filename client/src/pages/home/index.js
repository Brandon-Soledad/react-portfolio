import Columns from "../../components/Columns";
import Column from "../../components/Colunm";
import Section from "../../components/Section";
import './style.sass'

function Home() {
  const columnsName = "home-div";
  const columnStyles = "has-text-white has-text-centered";
  
  return (
    <div>
      <Section className={`hero is-fullheight ${window.location.pathname === "/"? "fadeIn":"fadeOut"}`} id="home">
        <Columns columnsName={columnsName} >
            <Column  columnStyles={columnStyles}>
                <h1 className="is-size-3-mobile is-size-1-tablet has-text-black">
                    <p >Hello</p>
                    <p>I'm</p>
                    <p>
                    Brandon Soledad
                    </p>
                    <p>
                    Welcome to my Portfolio
                    </p>
                </h1>
            </Column>
        </Columns>
      </Section>
    </div>
  );
}

export default Home;
