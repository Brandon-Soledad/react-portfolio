
import Card from "../../components/Card"
import CenterContainer from "../../components/CenterContainer"
import Columns from "../../components/Columns"
import Column from "../../components/Colunm"
import Section from "../../components/Section"
import listOfWork from "./listOfWork"
import "./style.sass"

const Portfolio = () =>{
    return(
        <Section cName={`hide pt-6 pb-6 ${window.location.pathname === "/Portfolio"? "fadeIn":"fadeOut"}`} id="work">
            <CenterContainer cName="">
                <Columns columnsName="is-mobile is-multiline firstblock">     
                    {
                        listOfWork.map((list, index) =>{
                            return<Column key={index} columnStyles={`is-full-mobile is-half-tablet is-one-third-desktop mb-3 work-example-card card-has-ratio` }>
                                <Card {...list}/>
                            </Column>
                        })
                        
                    }
                    
                </Columns>
            </CenterContainer>
        </Section>
    )
}

export default Portfolio