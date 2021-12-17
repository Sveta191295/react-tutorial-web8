import "./styles.css";
import Card from '../Reusable/Card';
import Heading from "../Reusable/Heading";

const Section = () => {

    return (
        <div>
            <div className="container first">
                <div>
                    <Heading 
                        textUppercase="Ինչպես օգտվել"
                        text="Ինչպե՞ս կատարել օնլայն գնումներ և ստանալ Հայաստանում արագ և ապահով"
                    />
                </div>
                <div className="card_box">
                    <Card
                        text="Գրանցվե՛ք մեր կայքում և անվճար ստացե՛ք առաքման հասցեներ"
                        imageUrl="https://onex.am/img/svg/step1.svg"
                    />

                    <Card
                        text="Օգտագործե՛ք Ձեզ տրամադրված առաքման հասցեները կայքերից գնումներ կատարելիս"
                        imageUrl="https://onex.am/img/svg/step2.svg"
                    />
                    <Card 
                        text="Ստացե՛ք Ձեր գնումները ՀՀ բոլոր քաղաքներում և Արցախում"
                        imageUrl="https://onex.am/img/svg/step3.svg"
                    />
                </div>
            </div>
            <div className="container second">
                <div>
                    <Heading 
                        textUppercase="Արտահանում"
                        text="Ուղարկե՛ք Ձեր փաստաթղթերը, ծանրոցները և բեռները 
                        ՀՀ-ից դեպի ԱՄՆ-ի և Ռուսաստանի ցանկացած հասցե"
                    />
                </div>
                <div className="card_box">
                    <Card
                        text="Արտահանում ՀՀ-ից դեպի ԱՄՆ"
                        imageUrl="https://onex.am/img/pages/export/export_usa.jpg"
                    />

                    <Card
                        text="Արտահանում ՀՀ-ից դեպի Ռուսաստան"
                        imageUrl="https://onex.am/img/pages/export/export_rus.jpg"
                    />
                    <Card 
                        text="Փաստաթղթերի առաքում ՀՀ-ից դեպի աշխարհի ցանկացած կետ"
                        imageUrl="https://onex.am/images/documents-export-small.jpg"
                    />
                </div>
            </div>
        </div>
        
        
    );
}



export default Section;